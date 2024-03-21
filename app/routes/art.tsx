import { Link } from "@remix-run/react";

export default function Art(){
  return (
    <div className="art-content">
      <div className="art-button-wrapper">
        <Link className="art-page-button" to="/art/audio">Audio</Link>
      </div>

      <div className="art-button-wrapper">
        <Link className="art-page-button" to="/art/visual">Visual</Link>
      </div>
    </div>
  );
}
