export default function Manifesto() {
  return (
    <section className="manifesto" id="studio">
      <div className="af-container">
        <div className="manifesto__grid">
          <p className="af-kicker">01 / What we do</p>
          <p className="manifesto__statement">
            Technology moves quickly. People still need products they can{" "}
            <span className="af-serif-italic u">understand</span>,{" "}
            <span className="af-serif-italic">trust</span>, and{" "}
            <span className="af-serif-italic">feel</span>.
          </p>
        </div>

        <div className="manifesto__foot">
          <div />
          <p className="manifesto__note">
            Analog Future brings art direction, brand thinking, and digital
            product development together to create expressive systems that work.
          </p>
          <hr className="af-rule manifesto__rule" />
        </div>
      </div>
    </section>
  );
}
