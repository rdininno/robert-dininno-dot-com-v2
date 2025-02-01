export default function About(){
  return (
    <div className="about-page">
      <header className="about-header">
        <h1 className="about-title">About</h1>
      </header>

      <p className="email">Email: robertdininno@gmail.com</p>
      <p className="blurb">
        I&apos;m an artist, developer, and musician. I acknowledge that I live and
        work on the unceded territories of the Lekwungen (Songhees) and WSÁNEĆ
        (Saanich) peoples. Known as Victoria, BC.
      </p>

      <div className="skills-container">
        <p>JavaScript</p>
        <p>React</p>
        <p>Remix</p>
        <p>NextJS</p>
        <p>HTML/CSS/Tailwind</p>
        <p>Liquid</p>
        <p>Pheonix LiveView</p>
        <p>Elixir</p>
        <p>Ruby</p>
      </div>
    </div>
  );
}
