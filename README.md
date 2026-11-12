# SpotifyNutzer Luna Plugins

Custom plugins for **[Tidal Luna](https://github.com/Inrixia/TidaLuna)**.

## Plugins

### 1. Link Copy
Easily copy Spotify, Deezer, YouTube Music and Apple Music links for any track directly from the context menu or share menu. The links come from [linkhop](https://github.com/paul-wtf/linkhop).

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/SpotifyNutzeer/luna-plugins.git
cd luna-plugins
```

### 2. Install Dependencies

```sh
pnpm install
```

### 3. Start Developing / Serving

- Use `pnpm run watch` to build and serve with hot reload.
- The plugins will be served at `http://localhost:3000`.

## Installation in Tidal Luna

1. Open Tidal Luna Settings.
2. Go to **Plugins**.
3. Click **Add Plugin** and enter the URL:
   `http://localhost:3000/luna.link-copy.json` (for local development)
   
---
Created by [SpotifyNutzer](https://github.com/SpotifyNutzeer).