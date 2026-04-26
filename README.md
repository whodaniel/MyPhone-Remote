# MyPhone Remote 📱🖥

**Your iPhone. Your Mac. One touch.**

MyPhone Remote turns your iPhone into a wireless remote control for your Mac — zero App Store, zero installs on your phone, zero lag. Just open Safari and go.

## 🔥 What It Does

- **Mirror**: See your Mac screen on your iPhone in real time
- **Touch**: Tap to click, drag to move, pinch to zoom — native iPhone gestures
- **Control**: Full keyboard hotkey panel — Cmd+Tab, Mission Control, Spotlight, and more
- **Annotate**: Draw directly on screen with pencil and highlighter tools
- **AI Vision**: Let AI agents see your screen and respond to what you're doing
- **Voice**: Speak to your Mac through your iPhone, hear it talk back

## 💰 Pricing

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | Screen mirror + tap-to-click + basic hotkeys |
| **Pro** | $4.99/mo or $39/yr | Full gestures, hotkey panel, right-click, D-pad, annotations |
| **AI Agent** | $14.99/mo or $119/yr | Everything + AI vision API, voice bridge, multi-agent shared vision |

## 🚀 Quick Start

```bash
# One-line install (macOS)
curl -sSL https://myphoneremote.com/install.sh | bash

# Or manual:
cd server
pip3 install -r requirements.txt --user --break-system-packages
python3 myphone_remote.py --port 8080
```

Then on your iPhone, open Safari and go to:
```
http://<your-mac-ip>:8080
```

That's it. No App Store. No pairing. No cable.

## 🏗 Architecture

```
MyPhone-Remote/
├── landing/          # Vite + React landing page (→ Cloudflare Pages)
├── server/           # Standalone Python server
│   ├── myphone_remote.py    # Core relay server
│   ├── installer.sh         # One-line macOS installer
│   └── requirements.txt     # Python deps
├── store/            # Listing assets (icons, screenshots, descriptions)
├── stripe/           # Stripe checkout integration
└── README.md
```

## 🎯 Why This Exists

Every remote desktop app wants you to install a companion iOS app, create an account, and pay $15/month. MyPhone Remote runs a tiny local server on your Mac — you just open a URL on your iPhone. Your data never leaves your WiFi.

Built for the AI era: the **AI Agent** tier gives any vision-capable AI direct access to read your screen and respond to what you're doing. Multi-agent shared vision means Hermes, Gemini, and Claude can all see the same desktop simultaneously.

## 🛡 Privacy

- All traffic stays on your local network
- Zero cloud dependency for core features
- No account required
- Open source server — inspect it yourself

---

© 2026 whodaniel. Built for the Agentic Era.
