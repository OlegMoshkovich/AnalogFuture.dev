import Image from "next/image";

type Project = {
  n: string;
  label: string;
  title: string;
  tags: string;
  src: string;
  alt: string;
};

const PROJECTS: Project[] = [
  {
    n: "02",
    label: "Brand strategy, brand identity",
    title: "Cubed",
    tags: "#hospitality  #finance",
    src: "/projects/cubed.png",
    alt: "Cubed business cards in purple and olive",
  },
  {
    n: "04",
    label: "Data visualization",
    title: "#WeCount",
    tags: "#society-of-family-planning",
    src: "/projects/wecount.png",
    alt: "WeCount dotted map with clustered data highlights",
  },
  {
    n: "03",
    label: "Brand strategy, brand identity",
    title: "Earthen",
    tags: "#brand-strategy   #web-design",
    src: "/projects/earthen.png",
    alt: "Earthen wordmark over a dark landscape",
  },
  {
    n: "05",
    label: "An Analog Future digital product",
    title: "Valmia App",
    tags: "#app   #community",
    src: "/projects/valmia.png",
    alt: "Valmia mark over misted forest ridges",
  },
  {
    n: "07",
    label: "An Analog Future digital product",
    title: "Coolbuilding",
    tags: "#architecture #map   #digital-product",
    src: "/projects/coolbuilding.png",
    alt: "Coolbuilding CB floor-plan mark",
  },
  {
    n: "06",
    label: "An Analog Future digital product",
    title: "Clone It",
    tags: "#construction   #digital-product",
    src: "/projects/clone-it.png",
    alt: "Sunlit slatted facade for Clone It",
  },
];

export default function SelectedWork() {
  return (
    <section className="work" id="work">
      <div className="af-container">
        <div className="work__head">
          <p className="af-kicker">02 / Selected work</p>
        </div>

        <article className="feature">
          <div className="feature__art">
            <Image
              src="/projects/cadence.png"
              alt="Cadence — folded blue-and-white striped artwork"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 65vw"
            />
          </div>
          <div className="feature__details">
            <p className="feature__index">01</p>
            <p className="feature__label">
              An Analog Future product · In development
            </p>
            <h3 className="feature__title">Cadence</h3>
            <p className="feature__desc">
              A time-awareness platform that turns everyday activity into a
              visual record of how life is actually lived.
            </p>
            <p className="feature__tags">
              Product strategy&nbsp;&nbsp; Identity
              <br />
              UX / UI&nbsp;&nbsp; Design system
            </p>
          </div>
        </article>

        <div className="cards">
          {PROJECTS.map((project) => (
            <article className="pcard" key={project.title}>
              <div className="pcard__art">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              <div className="pcard__meta">
                <p className="pcard__index">{project.n}</p>
                <p className="pcard__label">{project.label}</p>
                <h3 className="pcard__title">{project.title}</h3>
                <p className="pcard__tags">{project.tags}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
