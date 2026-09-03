# Analog Future

Marketing site for **Analog Future** — an independent design & product studio
(brand systems, digital products, visual communication).

Built with **Next.js** (App Router) + TypeScript, from the
[Figma design](https://www.figma.com/design/QXHQAw0WusgMHZ90TDX4H6/Analog-Future-website?node-id=16-2).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/layout.tsx` — fonts (Karla, Instrument Sans) + metadata
- `app/globals.css` — design tokens + all section styling
- `app/page.tsx` — page composition
- `app/components/` — `Hero`, `Manifesto`, `SelectedWork`, `HowWeWork`, `Footer`

## Notes

Project imagery (the Cadence app calendars, project artwork) is recreated with
CSS to match the design's colour story — the original Figma export assets are
short-lived and were not committed. Swap in final artwork under `public/` when
available.
