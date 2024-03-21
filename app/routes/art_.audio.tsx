import { Link } from "@remix-run/react";

export default function Audio() {
  return (
    <div className="music-page">
      <header className="header">
        <h1>Audio</h1>
      </header>

      <Link to="">Albums I&apos;ve Made</Link>
      <Link to="/art/audio/albums-recorded">Albums I&apos;ve Recorded</Link>
      <Link to="/art/audio/albums-played-on">Albums I&apos;ve Played On</Link>
    </div>
  );
}
