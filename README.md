# 🍄 Aloha Fungi

Grzyby funkcjonalne z polskiej uprawy — soplówka jeżowata (lion's mane), cordyceps, reishi.
Functional mushrooms grown in Poland: extracts, functional cacao and an e-commerce built with Medusa v2 + Next.js.

**🌐 [alohafungi.com](https://alohafungi.com/)** · [Sklep / Shop](https://alohafungi.com/produkty) · [Kawa grzybowa](https://alohafungi.com/kawa-grzybowa)

Czytaj więcej / read more:
[Grzyby na skupienie i pamięć](https://alohafungi.com/blog/grzyb-na-skupienie-i-pamiec) · [Cordyceps: energia i wydolność](https://alohafungi.com/blog/cordyceps-energia-wydolnosc)

---

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
