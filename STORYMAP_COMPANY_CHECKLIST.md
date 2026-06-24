# Storymap Company Checklist

Goal: add a company entry to the storymap timeline in a way that fits the current React data structure and UI.

## Current Structure

- [x] Confirm timeline entries are stored in `timelineItems` in [src/data.js](/Users/hdnguyen/Documents/dev/html/porfolio-good/src/data.js).
- [x] Confirm the storymap UI renders each item from [src/App.jsx](/Users/hdnguyen/Documents/dev/html/porfolio-good/src/App.jsx).
- [x] Confirm role text, title, badges, and tags are already styled by [src/styles.css](/Users/hdnguyen/Documents/dev/html/porfolio-good/src/styles.css).

## Content To Prepare

- [ ] Decide the company name exactly as it should appear.
- [ ] Decide whether the company name belongs in `role`, `title`, or `description`.
- [ ] Prepare the timeline date range for the company entry.
- [ ] Prepare the main role/job title for that company.
- [ ] Prepare a short headline for the work chapter.
- [ ] Write a concise description of impact, scope, and outcomes.
- [ ] List the skills/technologies to show as tags.
- [ ] Choose the category badges to show:
  `SWE`, `PM`, `DevOps`, or another supported variant.

## Data Update

- [ ] Add a new object to `timelineItems` in [src/data.js](/Users/hdnguyen/Documents/dev/html/porfolio-good/src/data.js).
- [ ] Include the required fields:
  `year`, `role`, `badges`, `title`, `description`, `tags`.
- [ ] If the company name should be prominent, update `role` to something like `Senior Engineer @ CompanyName` or update `title` to include the company.
- [ ] Insert the new item in the correct chronological position.
- [ ] Check for overlapping or inconsistent year ranges with neighboring entries.

## UI Review

- [ ] Verify the company name wraps cleanly in the timeline card.
- [ ] Verify badge layout still looks good if the role line gets longer.
- [ ] Verify tags do not overflow awkwardly on mobile.
- [ ] Verify hover and reveal animations still feel consistent with the new entry.

## Optional Enhancements

- [ ] If company names will be added often, consider splitting timeline fields into:
  `company`, `role`, `headline`, `description`, `tags`, `badges`, `year`.
- [ ] If company names should stand out visually, add a dedicated `.timeline-company` element in [src/App.jsx](/Users/hdnguyen/Documents/dev/html/porfolio-good/src/App.jsx) and style it in [src/styles.css](/Users/hdnguyen/Documents/dev/html/porfolio-good/src/styles.css).
- [ ] If content is moving to external text data later, mirror the new company entry in the future `site-content.json`.

## Validation

- [ ] Run the app and confirm the new company appears in the storymap.
- [ ] Confirm the chronology reads naturally from top to bottom.
- [ ] Run `npm run build` after the update.
