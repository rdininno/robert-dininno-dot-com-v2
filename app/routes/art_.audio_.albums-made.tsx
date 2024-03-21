import { useState, useEffect, useRef } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface Track {
  src: string;
  title: string;
}

interface Album {
  albumName: string;
  tracks: Track[];
}
export const loader: LoaderFunction = async () => {
  const albumData = [
    {
      albumName: "Beat n' Soul",
      tracks: [
        { src: "intro.mp3", title: "Intro" },
        { src: "festivals.mp3", title: "Festivals" },
        { src: "aintrun.mp3", title: "Run" },
        { src: "mod.mp3", title: "Modded" },
        { src: "sonnyblue.mp3", title: "Sonny" },
        { src: "street.mp3", title: "On the Block" },
        { src: "want.mp3", title: "Wanting" },
        { src: "how.mp3", title: "How" },
      ],
    },
    {
      albumName: "Soul Vibrations",
      tracks: [
        { src: "Ecstasy.mp3", title: "In Ecstasy" },
        { src: "Dingki_Dough.mp3", title: "Dingki Dough" },
        { src: "Waxed.mp3", title: "Waxed" },
        { src: "Jade-Rock.mp3", title: "Jade Rock" },
      ],
    },
    {
      albumName: "The Challenge",
      tracks: [
        { src: "Bun.mp3", title: "Bun" },
        { src: "BeatChal8_oneMin_1.mp3", title: "Ites" },
        { src: "Soin_OneMIn.mp3", title: "So In Love" },
        { src: "Smoke.mp3", title: "Smoking" },
        { src: "BeatChal7.mp3", title: "Luka" },
      ],
    },
    {
      albumName: "Explorations",
      tracks: [
        { src: "SP_FirstGo_2.mp3", title: "CeeDee" },
        { src: "SP2.mp3", title: "Saquan" },
        { src: "Time_1.mp3", title: "Amon Ra" },
        { src: "BeatChal6.mp3", title: "J. Jets" },
      ],
    },
  ];

  return json(albumData);
}

export default function Album() {
  const albumData = useLoaderData<Album[]>();
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAlbumListVisible, setIsAlbumListVisible] = useState(false);
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.src = "";
    };
  }, []);

  async function playTrack(index: number) {
    if (selectedAlbumIndex === null) return;

    const track = albumData[selectedAlbumIndex].tracks[index];
    try {
      const response = await fetch(`/api/generate-presigned-url?fileName=${encodeURIComponent(track.src)}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const { url } = await response.json();

      const isNewTrack = index !== currentTrackIndex;
      if (isNewTrack) {
        audioRef.current.src = url;
        await audioRef.current.play();
        setCurrentTrackIndex(index);
        setIsPlaying(true);
      } else {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    } catch (error) {
      console.error("Error fetching signed URL", error);
    }
  }

  useEffect(() => {
    const handleTrackEnd = () => {
      if (selectedAlbumIndex === null || currentTrackIndex === null) return;

      const nextIndex = currentTrackIndex + 1;
      if (nextIndex < albumData[selectedAlbumIndex].tracks.length) {
        playTrack(nextIndex);
      } else {
        setCurrentTrackIndex(null);
        setIsPlaying(false);
      }
    };

    audioRef.current.addEventListener("ended", handleTrackEnd);
    return () => {
      audioRef.current.removeEventListener("ended", handleTrackEnd);
    };
  }, [currentTrackIndex, selectedAlbumIndex, albumData]);

  const handleAlbumSelection = (index: number): void => {
    if (isPlaying || currentTrackIndex !== null) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTrackIndex(null);
    }

    setSelectedAlbumIndex(index);
    setIsAlbumListVisible(true);
  };

  return (
    <div className="music-content">
      <div className="album-names-container">
        {albumData.map((album, index) => (
          <button
            className="album-name"
            key={album.albumName}
            onClick={() => handleAlbumSelection(index)}
          >
            {album.albumName}
          </button>
        ))}
      </div>

      <div className="album-list">
        <div className="album-list-background">
          {selectedAlbumIndex !== null && isAlbumListVisible && (
            <div className="album-list-container">
              {albumData[selectedAlbumIndex].tracks.map((track, index) => (
                <div
                  key={track.title}
                  className={`track ${
                    index === currentTrackIndex ? "is-playing" : ""
                  }`}
                >
                  <button
                    className="audio-button"
                    onClick={() => playTrack(index)}
                  >
                    {currentTrackIndex === index && isPlaying ? (
                      <PauseIcon className="play-pause-icon" />
                    ) : (
                      <PlayIcon className="play-pause-icon" />
                    )}
                  </button>
                  <span className="track-title">{track.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
