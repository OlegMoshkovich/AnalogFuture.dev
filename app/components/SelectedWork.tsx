/* Cadence calendar palette — evokes the activity heatmap in the design. */
const PALETTE = [
  "#ff5a52",
  "#9fa8ff",
  "#bfc5fd",
  "#f2b134",
  "#5db07d",
  "#e07a5f",
  "#c94f8a",
  "#4c9bd1",
];
const DIM = "#241f27";

/* Deterministic pseudo-random so server and client render identically. */
function cells(seed: number, count: number) {
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    const n = Math.sin((i + 1) * (seed + 1) * 12.9898) * 43758.5453;
    const f = n - Math.floor(n);
    out.push(f < 0.18 ? DIM : PALETTE[Math.floor(f * PALETTE.length)]);
  }
  return out;
}

function Phone({
  variant,
  month,
  seed,
}: {
  variant: "back" | "front";
  month: string;
  seed: number;
}) {
  return (
    <div className={`phone phone--${variant}`}>
      <div className="phone__screen">
        <div className="phone__status">
          <span>9:41</span>
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="phone__month">{month}</div>
        <div className="phone__grid">
          {cells(seed, 91).map((c, i) => (
            <span key={i} className="phone__cell" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ROW_ONE = [
  {
    label: "Brand · Digital",
    title: "Cubed",
    tags: "Branding · Strategy · Web design",
    art: (
      <div className="pcard__art art-cubed">
        <span className="avatar" />
        <div className="chip">
          Pioneering a new era in hospitality finance — tailored strategies that
          help businesses thrive.
        </div>
      </div>
    ),
  },
  {
    label: "Identity · Art direction",
    title: "Earthen",
    tags: "Branding · Packaging · Print",
    art: (
      <div className="pcard__art art-earthen">
        <div className="frame">
          <span />
        </div>
      </div>
    ),
  },
  {
    label: "Data · Storytelling",
    title: "#WeCount",
    tags: "Identity · Data visualisation",
    art: (
      <div className="pcard__art art-wecount">
        <div className="map" />
        <div className="stat">
          <b>14,530</b>
          <small>Voices counted</small>
        </div>
      </div>
    ),
  },
];

const ROW_TWO = [
  {
    mono: "V",
    label: "Product · Mobile",
    title: "Valmia App",
    tags: "Branding · App / frontend",
  },
  {
    mono: "CI",
    label: "Brand · Web",
    title: "Clone It",
    tags: "Branding · Web presence",
  },
  {
    mono: "CB",
    label: "Brand · Web",
    title: "Coolbuilding",
    tags: "Branding · Web presence",
  },
];

export default function SelectedWork() {
  return (
    <section className="work" id="work">
      <div className="af-container">
        <div className="work__head">
          <p className="af-kicker">02 / Selected work</p>
          <span className="count">Six projects</span>
        </div>

        {/* Featured — Cadence */}
        <article className="feature">
          <div className="feature__art">
            <Phone variant="back" month="January" seed={3} />
            <Phone variant="front" month="February" seed={7} />
          </div>
          <div className="feature__details">
            <p className="feature__label">
              AF Labs · Digital product · In development
            </p>
            <h3 className="feature__title">Cadence</h3>
            <p className="feature__desc">
              A time-awareness platform that turns everyday activity into a
              visual record of how life is actually lived.
            </p>
            <p className="feature__tags">Identity · UI / UX · Design system</p>
          </div>
        </article>

        {/* Row one — image cards */}
        <div className="cards">
          {ROW_ONE.map((c) => (
            <article className="pcard" key={c.title}>
              {c.art}
              <div className="pcard__meta">
                <p className="pcard__label">{c.label}</p>
                <h3 className="pcard__title">{c.title}</h3>
                <p className="pcard__tags">{c.tags}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Row two — monogram cards */}
        <div className="cards">
          {ROW_TWO.map((c) => (
            <article className="pcard pcard--mono" key={c.title}>
              <div className="pcard__art">
                <span className="mono">{c.mono}</span>
              </div>
              <div className="pcard__meta">
                <p className="pcard__label">{c.label}</p>
                <h3 className="pcard__title">{c.title}</h3>
                <p className="pcard__tags">{c.tags}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
