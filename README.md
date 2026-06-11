# FormWire Docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

The official documentation for [FormWire](https://formwire.app), published at [docs.formwire.app](https://docs.formwire.app).

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## 📖 Contributing to the docs

Spotted a typo, outdated instructions, or something missing? Contributions are welcome — open an issue or send a pull request.

All documentation lives in [`src/content/docs/`](src/content/docs/) as `.mdx` files. Each file maps to a route based on its path, organized into these sections:

| Directory          | Section                                       |
| :----------------- | :-------------------------------------------- |
| `getting-started/` | Quickstart and how FormWire works              |
| `guides/`          | Forms, submissions, spam protection, and more |
| `frameworks/`      | HTML, React, Next.js, Vue, and Framer setup   |
| `integrations/`    | Slack, Zapier, webhooks, GitHub, and Framer   |
| `billing/`         | Plans, limits, and subscription management    |

Images go in `src/assets/` and are embedded with relative links. Static assets such as favicons live in `public/`.

## 🚀 Running locally

```sh
git clone https://github.com/britzdylan/formwire-docs.git
cd formwire-docs
npm install
npm run dev
```

The dev server starts at `localhost:4321`.

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the local dev server                   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## 📝 Commit conventions

This repo uses [Conventional Commits](https://www.conventionalcommits.org/), enforced by a git hook on every commit:

```
docs: clarify webhook retry behavior
fix: correct broken link on quickstart page
feat: add Vue integration guide
```

The changelog in [CHANGELOG.md](CHANGELOG.md) is generated from these commit messages, so a well-formed message is all you need — no manual changelog edits.

## 📄 License

The FormWire name and logo are trademarks of FormWire.
