import Image from "next/image";

function asset(path: string) {
  return encodeURI(path);
}

function Phone({
  variant,
  src,
  alt,
}: {
  variant: "back" | "front";
  src: string;
  alt: string;
}) {
  return (
    <div className={`phone phone--${variant}`}>
      <div className="phone__screen">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 900px) 42vw, 210px"
        />
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    n: "02",
    label: "Selected work by Andrea",
    title: "Cubed",
    tags: "#brand-strategy  #website  #web-design",
    src: asset("/projects/cubed/Group 353.png"),
    alt: "Cubed — Transforming Hospitality Finance",
  },
  {
    n: "03",
    label: "Selected work by Andrea",
    title: "Earthen",
    tags: "#brand-strategy  #web-design",
    src: asset("/projects/earthen/Artwork.png"),
    alt: "Earthen geometric mark on a projecting sign",
  },
  {
    n: "04",
    label: "Client: Society of Family Planning",
    title: "#WeCount",
    tags: "#data-visualization",
    src: asset("/projects/wecount/SFP_infographic August.png"),
    alt: "WeCount infographic mapping month-to-month change",
  },
  {
    n: "05",
    label: "An Analog Future digital product",
    title: "Valmia App",
    tags: "#branding  #digital-product",
    src: asset("/projects/valmia/Artwork (1).png"),
    alt: "Valmia mark over misted forest ridges",
  },
  {
    n: "06",
    label: "An Analog Future digital product",
    title: "Clone It",
    tags: "#branding  #digital-product",
    src: asset("/projects/clone-it/Artwork (2).png"),
    alt: "clone:it stacked-window wordmark",
  },
  {
    n: "07",
    label: "An Analog Future digital product",
    title: "Coolbuilding",
    tags: "#branding  #digital-product",
    src: asset("/projects/coolbuilding/Artwork (2).png"),
    alt: "Coolbuilding project artwork",
  },
];

export default function SelectedWork() {
  return (
    <section className="work" id="work">
      <div className="af-container">
        <div className="work__head">
          <p className="af-kicker">02 / Selected work</p>
          <span className="count">Seven projects</span>
        </div>

        <article className="feature">
          <div className="feature__art">
            <Phone
              variant="back"
              src={asset("/projects/cadence/Year_ Month View V1.png")}
              alt="Cadence month view"
            />
            <Phone
              variant="front"
              src={asset("/projects/cadence/Weekly.png")}
              alt="Cadence weekly view"
            />
          </div>
          <div className="feature__details">
            <div className="feature__topline">
              <p className="feature__label">
                An Analog Future product · In development
              </p>
              <span className="feature__index">01</span>
            </div>
            <h3 className="feature__title">Cadence</h3>
            <p className="feature__desc">
              A time-awareness platform that turns everyday activity into a
              visual record of how life is actually lived.
            </p>
            <p className="feature__tags">
              Product strategy · Identity
              <br />
              UX / UI · Design system
            </p>
          </div>
        </article>

        {[PROJECTS.slice(0, 3), PROJECTS.slice(3)].map((row) => (
          <div className="cards" key={row[0].n}>
            {row.map((c) => (
              <article className="pcard" key={c.title}>
                <div className="pcard__art">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </div>
                <div className="pcard__meta">
                  <p className="pcard__index">{c.n}</p>
                  <p className="pcard__label">{c.label}</p>
                  <h3 className="pcard__title">{c.title}</h3>
                  <p className="pcard__tags">{c.tags}</p>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
