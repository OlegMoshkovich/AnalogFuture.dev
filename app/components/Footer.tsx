export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="af-container">
        <p className="af-kicker footer__kicker">04 / Get in touch</p>

        <h2 className="footer__cta">
          Have an idea for the product?{" "}
          <a href="mailto:hello@analogfuture.dev">
            Let&rsquo;s talk <span className="af-arrow">↗︎</span>
          </a>
        </h2>

        <hr className="af-rule footer__rule" />

        <div className="footer__bar">
          <div className="footer__meta">
            <span className="brand">Analog Future</span>
            <a href="mailto:hello@analogfuture.dev">hello@analogfuture.dev</a>
            <span>Berlin · New York</span>
          </div>
          <a href="#top" className="footer__back-to-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
