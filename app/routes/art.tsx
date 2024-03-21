import { Link } from "@remix-run/react";

export default function Art(){
  return (
    <div>
      <h1>Art</h1>

      <Link to="/art/music">Music</Link>
      <Link to="/art/visual">Visual</Link>
    </div>
  );
}
