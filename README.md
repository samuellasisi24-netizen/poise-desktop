# Poise — desktop client

Poise is a real-time interview coach. This repository is the **open-source desktop app**: it captures call audio, shows coaching cues in a small overlay, and handles hotkeys.

> **Status:** early development (Phase 0). Not ready for general use.

## What's in this repo (and what isn't)
- **Here (public, GPL-3.0):** the desktop app — audio capture, overlay, settings, hotkeys.
- **Not here:** the Poise service that generates cues, the Story Bank, billing and accounts. These run on Poise's servers.

## Privacy
- No audio is stored.
- Transcripts stay on your device by default.
- The overlay asks the operating system to exclude it from screen capture. On Windows this works in screen shares. On macOS 15 and later, some meeting apps can still capture it during a full-screen share — share a single window instead, or use the phone companion.

Poise is a coaching tool. It is not built to evade proctoring or assessment software.

## Build from source (macOS)
Requirements: macOS 14.4+, Xcode (full app), Rust (rustup), Node.js 18+.

```bash
npm install
npm run tauri dev
```

## License and credits
Poise's desktop client is a modified version of **[Pluely](https://github.com/iamsrikanthnani/pluely) v0.1.9** by Srikanth Nani, used under the **GNU General Public License v3.0**. See [LICENSE](LICENSE).

Changes from the original are recorded in this repository's commit history, starting after upstream tag `app-v0.1.9`. This project is not affiliated with or endorsed by Pluely.

## Reporting bugs
Open an issue: https://github.com/samuellasisi24-netizen/poise-desktop/issues
