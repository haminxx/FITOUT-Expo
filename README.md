# FITOUT — Expo (React Native)

FITOUT lets users upload a photo (mirror shot, selfie, or friend's photo), switch clothes style and fit using AI (Banana.dev) to generate a virtual try-on image, then find where to buy those clothes online. The app uses a Google Lens-style API (SerpApi or Apify) to search for exact or similar items by color, style, and fit.

Same UI as the Swift app, for **testing on iPhone with Expo Go**.

## Pipeline flow

1. **Upload** — User selects or captures an image (Add screen).
2. **Generate** — Banana.dev placeholder produces a generated image with clothes (future API).
3. **Tag** — Tag icons (cart/pin) on the generated image; tap a tag.
4. **Results** — Product results screen with similar-clothes list (mock data; future: SerpApi/Apify Google Lens).

Future API integration: **Banana.dev** for virtual try-on; **SerpApi** (`engine=google_lens`) or **Apify** (`borderline/google-lens`) for product search by image.

## Quick start

```bash
cd FITOUT-expo
npm install
npx expo start
```

Then open **Expo Go** on your iPhone and scan the QR code (same Wi‑Fi as your machine).

**Connection issues (e.g. exp://192.168.x.x:8082 not loading)?** Run with tunnel so the QR code uses a public URL: `npx expo start --tunnel`, or use `run-expo.bat` which starts with `--tunnel`. Ensure your phone and laptop are on the same Wi‑Fi or use tunnel mode.

## Structure

- **App.tsx** — Tab navigation (Home, Add, Closet, Profile)
- **navigation/AddStack.tsx** — Stack: Add → GeneratedImage → ProductResults
- **screens/** — HomeScreen, AddScreen, GeneratedImageView, ProductResultsScreen, ClosetScreen, ProfileScreen
- **components/** — DesignTokens, ProductCard
- **services/** — mockData; bananaService (stub), googleLensService (stub) for future API integration

## Design tokens

Same as Swift app: `#000000`, `#FFFFFF`, `#212121`, `#d7ff81`, `#636363`.

## Assets

If you see missing asset errors, add to `assets/`:

- `icon.png` (1024×1024) — app icon
- `splash-icon.png` — splash screen
- `adaptive-icon.png` (Android)

Or run `npx create-expo-app@latest temp --template blank` and copy `assets/` from `temp` into this project.

## Git (separate repo)

```bash
git init
git remote add origin https://github.com/haminxx/FITOUT-expo.git
git branch -M main
git add .
git commit -m "Initial Expo FITOUT"
git push -u origin main
```

Or keep both FITOUT and FITOUT-expo in one repo (e.g. `FITOUT/` and `expo/` at root).
