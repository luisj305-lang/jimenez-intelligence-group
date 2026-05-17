# Deploy Deferred — GitHub Pages

This file documents exactly what to configure once the GitHub repository is created.
Blocked on: GitHub token rotation + repo name not yet decided.

---

## Step 1: Update `astro.config.mjs`

Replace the two commented placeholders with your actual values:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://<your-github-username>.github.io',
  base: '/<your-repo-name>',
  integrations: [tailwind()],
});
```

Example (if username is `brank122` and repo is `JIG`):
```js
  site: 'https://brank122.github.io',
  base: '/JIG',
```

---

## Step 2: `public/.nojekyll`

Already created at `public/.nojekyll` (empty file).
This prevents GitHub Pages from treating Astro's underscore-prefixed asset paths
(e.g. `/_astro/...`) as Jekyll private files and suppressing them.

---

## Step 3: Create `.github/workflows/deploy.yml`

Create the file at that path with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Step 4: Enable GitHub Pages in Repo Settings

1. Go to your repo → Settings → Pages
2. Source: **GitHub Actions** (not "Deploy from a branch")
3. Push a commit to `main` — the workflow will trigger automatically

---

## Step 5: Verify after first deploy

- Visit `https://<username>.github.io/<repo-name>/`
- Confirm fonts load (check Network tab — no requests to `fonts.googleapis.com`)
- Confirm hero image loads from `/<repo-name>/assets/images/luis-jimenez.png`
- Confirm navigation anchors still work (`#servicios`, `#director`, `#intake`)

---

## Notes

- The `base` config in `astro.config.mjs` makes Astro rewrite all asset paths to
  include the repo name prefix. Without it, `/_astro/...` paths will 404 on GitHub Pages.
- If you use a custom domain (e.g. `jimenezintelligencegroup.com`), set `site` to the
  custom domain and leave `base` as `/` (or remove it).
- The `.nojekyll` file in `public/` is already committed — no action needed there.
