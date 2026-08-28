# Features section — backup taken 2026-08-28

Snapshot of the `/features` page exactly as it was live at
https://digital-face.vercel.app/features before the redesign.

Git commit at time of backup: `dca8ace` ("GHL Calendar 04"), working tree clean.

## What is in here

| File | What it is |
| --- | --- |
| `client/pages/Features.tsx` | The whole page: the 7 module blocks, the `ModuleImage` lightbox component, the principles section and the launch-plan section. |
| `client/sections/Features.tsx` | The 3-card overview grid at the top of the page. Only this page used it. |
| `client/i18n/content/features.ts` | All the English and Spanish text for the page. |
| `public/images/ML 01-07.png` | The 7 module images (3.5 MB total). |

Nothing else on the site referenced these files, so this folder is the
complete section.

## How to put it back

Copy the four paths back over the originals, keeping the same folder
structure:

    backup/features-section-2026-08-28/client/...   ->  client/...
    backup/features-section-2026-08-28/public/...   ->  public/...

Or restore from git instead:

    git checkout v-features-before-redesign -- client/pages/Features.tsx client/sections/Features.tsx client/i18n/content/features.ts public/images

## Note

This folder sits outside `tsconfig.json`'s `include` list, so it is not
type-checked and is never bundled into the build. It is inert.
