---
# 📰 News Homepage

A responsive, modern news homepage built with **vanilla HTML**, **CSS**, and **JavaScript**.
The layout adapts seamlessly between desktop and mobile, featuring a hero article, trending topics sidebar, and a numbered “top stories” section.
---

## 🚀 Live Demo

[View Live Site](https://zero-click-0x.github.io/Projects_Web-Development/03_News__Homepage/)

---

## 🛠️ Built With

- **HTML5** – semantic, accessible markup
- **CSS3** – CSS Grid, Flexbox, custom properties, `@font-face`
- **JavaScript** – mobile navigation toggle (hamburger ↔ close)
- **Inter** – self-hosted Google Font (Regular, Bold, ExtraBold)

---

## ⭐ Features

- Fully-responsive layout (mobile-first)
- CSS Grid areas for clean, readable code
- Hamburger navigation that slides in from the right
- Hover states for all interactive elements
- Custom color palette & typography scale
- No external frameworks – 100 % vanilla code

---

## 📂 Project Structure

```
.
├── index.html          # Main markup
├── style.css           # All styling + responsive rules
├── main.js             # Mobile menu toggle
├── assets/
│   ├── fonts/          # Inter .ttf files
│   └── images/         # JPG & SVG illustrations
└── README.md           # This file
```

---

## 🎨 Design Tokens

| Token                    | Value                  |
| ------------------------ | ---------------------- |
| `--Primary-Soft-Orange`  | `hsl(35, 77 %, 62 %)`  |
| `--Primary-Soft-Red`     | `hsl(5, 85 %, 63 %)`   |
| `--Neutral-Off-White`    | `hsl(36, 100 %, 99 %)` |
| `--Neutral-Greyish-Blue` | `hsl(233, 8 %, 79 %)`  |
| `--Neutral-Dark-Blue`    | `hsl(240, 100 %, 5 %)` |

---

## 🧩 Grid Areas (Desktop)

```
"hdr hdr hdr"
"hr  hr  sd"
"ft  ft  sd"
"mr  mr  mr"
"ftr ftr ftr"
```

---

## 📱 Breakpoints

| Breakpoint | Layout Change                                |
| ---------- | -------------------------------------------- |
| ≤ 576 px   | Single-column, slide-in nav, stacked cards   |
| ≥ 577 px   | 3-column grid, persistent top-bar navigation |

---

## 🚀 Getting Started

1. Clone the repo
   ```bash
   git clone <repository-url>
   ```
2. Open `index.html` in any browser
   ```bash
   open index.html
   ```
3. Resize the viewport or open DevTools to watch the responsive behavior.

---

## 🎯 Use-Cases

- Demonstrates modern CSS Grid & Flexbox patterns
- Shows how to self-host Google Fonts for zero third-party requests
- Offers a clean, production-ready file structure for beginners
- Perfect for Frontend Mentor “News Homepage” challenge submission

---

## 👤 Credits

- **Developer**: Abhishek Kumar
- **Challenge by**: [Frontend Mentor](https://www.frontendmentor.io?ref=challenge)

---
