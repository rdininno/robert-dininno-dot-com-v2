import { Link } from "@remix-run/react";

export default function Audio() {
  return (
    <div className="music-page">
      <header className="music-header">
        <h1>Audio</h1>
      </header>

      <div className="music-page-menu">
        <Link className="music-page-menu-button" to="/art/audio/albums-made">Albums I&apos;ve Made</Link>
        <Link className="music-page-menu-button" to="/art/audio/albums-recorded">Albums I&apos;ve Recorded</Link>
        <Link className="music-page-menu-button" to="/art/audio/albums-played-on">Albums I&apos;ve Played On</Link>
      </div>
    </div>
  );
}
