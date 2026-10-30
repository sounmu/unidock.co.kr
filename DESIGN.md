# unidock.co.kr Design System

## 0. Research Log

- Reference (layout contract): sider.ai, captured 2026-10-24 at 1440px across the full scroll. Section order adopted: floating pill nav, centered 64px/500 headline with one dark pill CTA and a fact row, gradient-framed browser mockup with a side panel, tab pills under the mockup, three line-illustration cards, alternating text/visual feature rows, trust facts, dark spotlight CTA, dark footer with an outlined wordmark.
- Brand source: `~/Code/uniDock/DESIGN.md` (panel tokens) and the glass app icon `store/assets/logo-concepts/unidock-glass.png`.
- Not adopted from Sider: its violet palette, D-DIN/DM Sans type, Google mock content, review globe, user counts (uniDock has no public usage numbers).

## 1. Atmosphere

Calm study-desk product page. White paper, crimson glass as the only saturated material. Glass appears on three surfaces only: the floating nav, the mockup frame, and the browser chrome inside it. Everything readable sits on opaque paper.

## 2. Color

Tokens live in `src/app/globals.css`; components never use raw hex.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--page` | `#ffffff` | `#111013` | Document |
| `--card` | `#f5f3f2` | `#1c1a1f` | Pillar cards, FAQ rows |
| `--ink` | `#1b181d` | `#efeaee` | Text |
| `--muted` | `#68606a` | `#a79ea6` | Secondary text (>= 4.5:1 on page and card) |
| `--line` | `#e8e3e1` | `#2c2930` | Separators |
| `--brand` | `#872038` | `#f0a6b6` | Eyebrows, links, focus |
| `--brand-wash` | `#f4eaec` | `#3b2329` | Selected tab, chips |
| `--cta` / `--on-cta` | `#1b181d` / `#fff` | `#efeaee` / `#111013` | Primary pill |
| `--nav-glass` | `rgb(250 248 247 / .5)` | `rgb(28 26 31 / .5)` | Floating nav fill |
| `--chrome-glass` | `rgb(255 255 255 / .42)` | `rgb(24 22 27 / .38)` | Mockup browser toolbar fill |
| `--glass-edge` | `rgb(255 255 255 / .7)` | `rgb(255 255 255 / .14)` | 1px top highlight on glass |
| `--night` | `#1a0b12` | `#0d070a` | Final CTA + footer |

The side panel inside each mockup is not redrawn here: `public/panels/*.html` are static renders of the extension's real rail, screens and `style.css` with made-up data, shown in an `iframe`, so they match the shipped panel in both themes. Regenerate them from `~/Code/uniDock` with `npm run site:panels -- ../unidock.co.kr/public/panels` after a panel UI change. Only `--p-page` and `--p-line` remain here, for the panel column behind the frame.

Aurora gradients (mockup frames) mix crimson `#872038`, rose `#e7a0b0`, peach `#f6c9a8` and plum `#4a1f3d` with a grain overlay. Each feature row uses one variant.

## 3. Typography

Pretendard Variable (self-hosted via `next/font/local`). Display 64/1.2/600 tracking -0.035em (40px on phones); H2 48/1.2/600 (32px phones); H3 24/1.35/600; body-lg 18/1.65; body 16/1.6; small 14; eyebrow 16/600 brand.

## 4. Spacing & Layout

Page gutter 24px (phones 16px). Content max width 1312px. Section rhythm 160px desktop, 96px phones. Radius: frame 32px, card 28px, browser window 26px (macOS 26 Tahoe toolbar-window radius), pill 999px, panel 16px.

## 5. Components

- **Nav**: fixed, 16px from top, full content width, 64px tall, `.glass`: `--nav-glass` + `backdrop-filter: blur(36px) saturate(1.9)` + top highlight and soft shadow, 1px line border, pill radius. Logo + 3 anchors + primary pill CTA. Anchors hide below 768px.
- **Pill button**: primary 48px (`--cta`), secondary 48px outline line; small 36px in nav.
- **Mockup frame**: aurora fill, 32px radius, browser window inset 6%, 26px radius, translucent `.glass-chrome` toolbar (blur 36px, saturate 1.4) that shows the aurora through it; the toolbar inherits the window's top radii because Chrome does not clip backdrop-filter children to an ancestor's rounded overflow; left LMS skeleton, right real uniDock panel iframe (360px, inert).
- **Tab pills**: `role="tablist"`, selected uses `--card` fill (light) and ink text; switching swaps the panel view with a 200ms opacity/translate fade.
- **Pillar card**: `--card`, 28px radius, 1.5px ink line illustration, H3, muted body.
- **Feature row**: eyebrow + H2 + body + bullet facts on one side, aurora mockup on the other, alternating.
- **Fact list** (trust): large value 32px/700 + muted label, stacked.
- **FAQ**: native `details`, card fill, chevron rotates.

## 6. Motion

Only the tab swap and FAQ chevron animate (transform/opacity). Both are removed under `prefers-reduced-motion`.

## 7. Accessibility constraints

Text pairs >= 4.5:1 in both themes. Focus ring 2px `--brand`, 2px offset. Glass surfaces fall back to opaque fills under `prefers-reduced-transparency`. Mockup content is illustrative sample data and is marked `aria-hidden` except the tab controls; each view has a visible caption.

## 8. Accepted debt

- Privacy policy body is copied from `uniDock/docs/privacy.html` and must be re-synced when that file changes.
- Panel samples in `public/panels/` are generated from the extension and go stale until `npm run site:panels` is re-run there.
