# SPA Split Checklist

- [x] Audit the original [index.html](/Users/hdnguyen/Documents/dev/html/porfolio-good/index.html) structure and identify shell, styles, behavior, and page sections.
- [x] Keep the site as a single-page app with two in-page views: `landing` and `timeline`.
- [x] Move all inline CSS into [assets/styles.css](/Users/hdnguyen/Documents/dev/html/porfolio-good/assets/styles.css).
- [x] Move all inline JavaScript into [assets/app.js](/Users/hdnguyen/Documents/dev/html/porfolio-good/assets/app.js).
- [x] Convert [index.html](/Users/hdnguyen/Documents/dev/html/porfolio-good/index.html) into a lightweight app shell with shared navigation and page mounts.
- [x] Split page markup into reusable partials: [partials/landing.html](/Users/hdnguyen/Documents/dev/html/porfolio-good/partials/landing.html) and [partials/timeline.html](/Users/hdnguyen/Documents/dev/html/porfolio-good/partials/timeline.html).
- [x] Preserve SPA navigation, hash-based deep linking, animations, and scroll behavior after the split.
- [x] Replace inline `onclick` handlers with delegated JavaScript actions for cleaner separation of concerns.
- [ ] Verify in a browser served over HTTP because `fetch()`-loaded partials may be blocked under direct `file://` viewing.
