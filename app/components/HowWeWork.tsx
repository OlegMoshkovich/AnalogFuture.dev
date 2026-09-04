const STEPS = [
  {
    num: "01",
    title: "Shape",
    desc: "Find the central idea, clarify the audience, and set a direction that can guide every decision.",
    svc: "Strategy · Positioning · Product direction",
  },
  {
    num: "02",
    title: "Express",
    desc: "Give the idea a distinctive voice through identity, typography, image, and a flexible visual system.",
    svc: "Art direction · Identity · Campaigns",
  },
  {
    num: "03",
    title: "Build",
    desc: "Turn the system into an experience people can understand, use, and remember.",
    svc: "UX / UI · Design systems · Digital products",
  },
];

export default function HowWeWork() {
  return (
    <section className="approach" id="approach">
      <div className="af-container">
        <div className="approach__head">
          <p className="af-kicker">03 / How we work</p>
          <p className="approach__sub">From first sketch to finished system</p>
          <p className="approach__statement">
            Analog Future is an independent, collaborative practice working
            across art direction, identity, information, and digital product
            design.
          </p>
        </div>

        <div className="approach__cards">
          {STEPS.map((s) => (
            <article className="acard" key={s.title}>
              <p className="acard__num">{s.num}</p>
              <h3 className="acard__title">{s.title}</h3>
              <p className="acard__desc">{s.desc}</p>
              <p className="acard__svc">{s.svc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
