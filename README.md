# Think & Solve Different Solutions

The bilingual company website for Think & Solve Different Solutions (FZE), a Dubai-based technology consultancy focused on software architecture, legacy modernization, cloud readiness and engineering team enablement.

## Local development

```bash
npm install
npm run dev
```

Eleventy serves the site at `http://localhost:8080`. English is available at `/` and Turkish at `/tr/`.

## Production build

```bash
npm run build
```

The static output is written to `_site/`. A GitHub Actions workflow builds and deploys the site to GitHub Pages on pushes to `main`.
