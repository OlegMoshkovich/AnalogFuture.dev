export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="af-container">
        <p className="af-kicker footer__kicker">04 / Get in touch</p>

        <h2 className="footer__cta">
          Have an idea that
          <br />
          needs form?{" "}
          <a href="mailto:hello@analogfuture.studio">
            Let&rsquo;s talk <span className="af-arrow">↗</span>
          </a>
        </h2>

        <hr className="af-rule footer__rule" />

        <div className="footer__bar">
          <span className="brand">Analog Future</span>
          <a href="mailto:hello@analogfuture.studio">hello@analogfuture.studio</a>
          <span className="spacer" />
          <span>Berlin · New York</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
