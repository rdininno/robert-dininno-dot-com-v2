import { useState } from "react";
import { useLoaderData, json } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";


interface IframeDetails {
  title: string;
  className: string;
  allow: string;
  src: string;
  seamless?: boolean;
}

interface Album {
  albumName: string;
  iframeDetails: IframeDetails;
}

export const loader: LoaderFunction = async () => {
const albumData = [
  {
    albumName: "Cindy Lee - Act of Tenderness (partial)",
    iframeDetails: {
      title: "cindy lee",
      className: "iframe",
      allow: "autoplay",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1313015878&color=%23ff2222&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
  },
  {
    albumName: "P.P.P.D. vs. Magic vs. Jazz",
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=158413846/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "pppd",
      className: "iframe",
    },
  },
  {
    albumName: "Pooched//C.R.O.W.N. - Pooched",
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=581589641/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "pooched",
      className: "iframe",
    },
  },
  {
    albumName: "CROWN//POOCHED - CROWN",
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=1819923021/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "crown",
      className: "iframe",
    },
  },
  {
    albumName: "EP - Glum",
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=267289251/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "glum",
      className: "iframe",
    },
  },
  {
    albumName: "Some Little Songs EP - Chance Lovett & The Broken-Hearted",
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=438695709/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "chance",
      className: "iframe",
    },
  },
  {
    albumName: "Wanty - Sharky",
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=2368402538/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "sharky",
      className: "iframe",
    },
  },
  {
    albumName: "Dark Glasses S/T",
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=3081556230/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "dark glasses",
      className: "iframe",
    },
  },
  {
    albumName: "Mission Bay Single - Freak Heat Waves",
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=242397713/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "freak heat waves",
      className: "iframe",
    },
  },
  {
    albumName: "Psychosomatic Itch EP - Psychosomatic Itch",
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=3297745891/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "psychosomatic itch",
      className: "iframe",
    },
  },
  {
    albumName: "Lake Country/Sans Aids Split - Lake Country",
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=1799917235/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "lake country 1",
      className: "iframe",
    },
  },
  {
    albumName: 'Virtual 7" - Lake Country',
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=1802214255/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "lake country 2",
      className: "iframe",
    },
  },
  {
    albumName: "Total Recall - Human Cat",
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=1707507135/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "human cat",
      className: "iframe",
    },
  },
  {
    albumName: 'Split 7" w/Archagathus - Six Brew Bantha',
    iframeDetails: {
      src: "https://bandcamp.com/EmbeddedPlayer/album=2080281962/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
      seamless: "seamless",
      title: "human cat",
      className: "iframe",
    },
  },
];

return json(albumData);
}

export default function AlbumsRecorded() {
  const albumData = useLoaderData<Album[]>();
  const [albumSelected, setAlbumSelected] = useState<Album | null>(null);

  const handleAlbumSelection = (album: Album) => setAlbumSelected(album);

  return (
    <div className="albums-recorded">
      <div className="album-list-dark">
        <div className="album-list-background-dark">
          {albumSelected && (
            <iframe
              title={
                albumSelected.iframeDetails.title || albumSelected.albumName
              }
              className={albumSelected.iframeDetails.className}
              allow={albumSelected.iframeDetails.allow}
              src={albumSelected.iframeDetails.src}
              seamless={albumSelected.iframeDetails.seamless}
            ></iframe>
          )}
        </div>
      </div>

      <div className="album-names-container-dark">
        {albumData.map((album, index) => (
          <button
            className="album-name-dark"
            key={index}
            onClick={() => handleAlbumSelection(album)}
          >
            {album.albumName}
          </button>
        ))}
      </div>
    </div>
  );
}
