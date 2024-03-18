import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="main-page">
      <header className="header">
        <h1>Robert Di Ninno</h1>
        <div className="description">
          <p>Full stack developer with a passion for the front end.</p>
        </div>
      </header>

      <div className="menu">
        <Link to ="/employment">Employment</Link>
        <Link to ="/art">Art</Link>
        <Link to ="/portfolio">Portfolio</Link>
        <Link to ="/about">About</Link>
      </div>
    </div>
  );
}
