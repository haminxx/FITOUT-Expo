# FITOUT — Expo (React Native)

Same UI as the Swift app, for **testing on iPhone with Expo Go**.

## Quick start

```bash
cd FITOUT-expo
npm install
npx expo start
```

Then open **Expo Go** on your iPhone and scan the QR code (same Wi‑Fi as your machine).

## Structure

- **App.tsx** — Tab navigation (Home, Add, Closet, Profile)
- **screens/** — HomeScreen, AddScreen, ClosetScreen, ProfileScreen
- **components/** — DesignTokens

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
