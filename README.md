# Analog Future

Marketing site for **Analog Future** — an independent design & product studio
(brand systems, digital products, visual communication).

Built with **Next.js** (App Router) + TypeScript, from the
[Figma desktop homepage](https://www.figma.com/design/QXHQAw0WusgMHZ90TDX4H6/Analog-Future-website?node-id=28-4867).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/layout.tsx` — fonts (Karla, Instrument Sans, Instrument Serif) + metadata
- `app/globals.css` — design tokens + all section styling
- `app/page.tsx` — page composition
- `app/components/` — `Hero`, `Manifesto`, `SelectedWork`, `HowWeWork`, `Footer`
- `public/projects/` — artwork exported from the Figma desktop frame

## Notes

Project imagery is committed from the Figma file so the homepage matches the
desktop design without relying on short-lived MCP asset URLs.
