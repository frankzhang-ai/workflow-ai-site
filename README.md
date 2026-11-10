# Workflow AI website

A lightweight, single-page marketing site and privacy page for Workflow AI. It uses static HTML, CSS, and JavaScript, with no build step, analytics, form backend, or third-party runtime service.

## Preview locally

From this directory, run:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser. You can also open `index.html` directly, although a local server is closer to how GitHub Pages serves the files.

## Site settings

Change the brand name, contact email, and deployment URL in one configuration file: `js/site.config.js`. The page applies the brand name and email to matching text, email links, and title fragments when JavaScript is enabled. For a fully consistent no-JavaScript rename, also update the visible fallback brand name and email in `index.html` and `privacy.html`.

The brand name is provisional. Check trademark, domain, and business-name availability before formal use.

## Deployment

The intended repository is `frankzhang-ai/workflow-ai-site`, served by GitHub Pages from the root of the `main` branch. Both pages currently include `noindex, nofollow` for preview; remove those robots directives before a public launch. Keep canonical and social metadata aligned with `siteUrl` when changing the deployment URL.
