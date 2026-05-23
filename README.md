# grzybstagram

Niezależny blog o grzybach. Astro 6 + Tailwind + MDX.

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Strona dostępna na http://localhost:4321

## Build produkcyjny

```bash
npm run build
```

Output: `dist/`. Deploy automatyczny z GitHuba na Hostingera (push do `main` → auto-deploy).

## Zasady redakcyjne i workflow

Zobacz [CLAUDE.md](./CLAUDE.md) — kierunek redakcyjny, ton, ograniczenia prawne, format frontmatter postów.

## Stack

- Astro 6 (static)
- Tailwind CSS 4
- MDX
- date-fns (locale: pl)

## Licencja motywu

Bazowy szablon: [Brook 2.0](https://github.com/holger1411/astro-brook) by Holger Bartel — MIT. Customizacja własna.
