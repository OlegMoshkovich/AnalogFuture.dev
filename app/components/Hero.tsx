export default function Hero() {
  return (
    <header className="hero">
      <div className="af-container">
        <div className="hero__topbar">
          <a href="#top" className="hero__brand" aria-label="Analog Future home">
            <span>Analog</span>
            <span>Future</span>
          </a>
          <nav className="hero__nav" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#approach">Approach</a>
            <a href="#studio">Studio</a>
          </nav>
          <a href="#contact" className="hero__cta">
            Start a project <span className="af-arrow">↗</span>
          </a>
        </div>
        <hr className="af-rule hero__rule" />
      </div>

      <div className="af-container hero__body">
        <p className="hero__eyebrow">
          <span>Independent product and development studio</span>
          <span className="hero__eyebrow-loc">
            <span className="dot" aria-hidden="true">
              ·
            </span>
            <span className="cities">Berlin New York</span>
          </span>
        </p>

        <h1 className="hero__title">
          <span className="line-1">Analog</span>
          <span className="line-2">Future</span>
        </h1>

        <ul className="hero__signals">
          <li>
            <span className="num">01</span> Implemented brand systems
          </li>
          <li>
            <span className="num">02</span> Digital products
          </li>
          <li>
            <span className="num">03</span> Visual Communication
          </li>
        </ul>
      </div>

      <a href="#work" className="hero__cue">
        Selected Work ↓
      </a>
    </header>
  );
}
