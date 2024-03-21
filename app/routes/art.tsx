import { Link } from "@remix-run/react";

export default function Art(){
  return (
    <div className="art-content">
      <header className="header">
        <h1>Art</h1>
      </header>

      <div className="art-button-wrapper">
        <Link to="/art/audio"><Audio></Audio></Link>
      </div>

      <div className="art-button-wrapper">
        <Link to="/art/visual">Visual</Link>
      </div>
    </div>
  );
}
