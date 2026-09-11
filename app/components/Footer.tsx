export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="af-container">
        <p className="af-kicker footer__kicker">04 / Start something</p>

        <h2 className="footer__cta">
          Have an idea that needs form?
          <a href="mailto:email@analogfuture.com">
            <span className="footer__talk">Let&rsquo;s talk </span>
            <span className="af-arrow">↗</span>
          </a>
        </h2>

        <hr className="af-rule footer__rule" />

        <div className="footer__bar">
          <span className="brand">Analog Future</span>
          <a href="mailto:email@analogfuture.com">email@analogfuture.com</a>
          <span>Berlin · New York</span>
          <a href="#top" className="footer__back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
