### 📝 **Summary**

This project is a **responsive "News Homepage" web design** built using **HTML, CSS, and JavaScript**. It provides a visually engaging layout featuring dynamic navigation, hero sections, topic categories, and a mobile-friendly interface.  
Below is the complete **Markdown version of the README**, formatted cleanly for GitHub or any documentation platform.

---

```markdown
# 📰 News Homepage

A responsive web layout project inspired by modern news websites.  
It showcases a clean design with an interactive navigation menu, hero section, categorized topics, and rich typography—fully optimized for mobile and desktop experiences.

---

## 🌐 Live Demo

[View Live Site](https://zero-click-0x.github.io/Projects__Web-Development/03_News__Homepage/)

---

## 🧠 Features

- Responsive design for all screen sizes
- Interactive hamburger/cross navigation toggle
- Semantic HTML5 structure for accessibility
- CSS Grid and Flexbox-based layout
- Clean typography using “Inter” font
- Optimized for readability and performance
- Modular CSS architecture

---

## 🛠️ Built With

- **HTML5** – Semantic structure
- **CSS3** – Grid, Flexbox, custom properties, responsive breakpoints
- **JavaScript (Vanilla)** – Menu interactivity and DOM manipulation

---

## 🧩 Project Structure
```

.
├── index.html # Main HTML file
├── style.css # Core stylesheet with grid/flex layout and variables
├── main.js # Handles menu toggle logic
└── assets/ # Fonts, images, and icons (if applicable)

```

---

## ⚙️ Installation and Usage
### Clone the repository:
```

git clone https://github.com/yourusername/news-homepage.git

```

### Open in Browser:
```

cd news-homepage
open index.html

```

### Explore the features:
- Resize browser to test responsiveness
- Toggle menu (Mobile View)
- Read topic previews and hero content

---

## 💡 JavaScript Summary
The `main.js` script enables mobile responsiveness:
```

let hamburger = document.querySelector(".hamberger");
let menu = document.querySelector(".navBarlist");
let cross = document.querySelector(".cross");

hamburger.addEventListener("click", () => {
menu.classList.add("active");
cross.classList.add("active");
hamburger.classList.remove("active");
});

cross.addEventListener("click", () => {
menu.classList.remove("active");
cross.classList.remove("active");
hamburger.classList.add("active");
});

```

---

## 🎨 CSS Highlights
- Uses **custom properties** for color palette:
```

--Primary-Soft-Red: hsl(5, 85%, 63%);
--Neutral-Off-White: hsl(36, 100%, 99%);
--Neutral-Vary-Dark-Blue: hsl(240, 100%, 5%);

```
- Grid templates define responsive layout areas
- Flexbox used for header and content alignment
- Utility classes for accessibility: `.offscreen`, `.center`, `.nowrap`

---

## 🧮 HTML Overview
- **Header:** Navigation with logo and hamburger toggle
- **Hero Section:** Highlights latest news
- **Aside Section:** Lists trending or new topics
- **More Topics:** Subsections for PC, laptop, and gaming stories
- **Footer:** Attribution credits

---

## 📱 Responsive Design
- Desktop and mobile hero sections (`.herodesktop`, `.heromobile`)
- Mobile navigation overlay activated via JS
- Simplified column stacking under `@media (max-width: 576px)`

---

## 🔖 License
This project is open-source. Use and modify freely for learning or portfolio purposes.

---

## 👤 Credits

- **Developer**: Abhishek Kumar
- **Challenge by**: Frontend Mentor

---
```

---
