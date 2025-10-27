## Summary

**Newsletter Sign-up Form** - A responsive web application with email validation and success message functionality built using vanilla HTML, CSS, and JavaScript.

---

## 🚀 Live Demo

[View Live Site](https://zero-click-0x.github.io/Projects_Web-Development/04_Newsletter-SignIn/)

# Newsletter Sign-up Form 📧

A modern, responsive newsletter subscription form with email validation and success confirmation built with vanilla web technologies.

## 🛠️ Built With

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS custom properties and Flexbox
- **JavaScript** - Form validation and interactive features
- **Google Fonts** - Roboto font family

## ⭐ Features

- Responsive design optimized for mobile and desktop devices
- Email validation with .com domain check
- Success confirmation message with email display
- Smooth transitions between subscription and thank you states
- Custom styled form elements with hover effects
- Accessibility-focused semantic HTML structure

## 🚀 Getting Started

1. Clone the repository

```bash
git clone <repository-url>
```

2. Open `index.html` in your web browser

```bash
open index.html
```

3. Enter an email address ending with `.com` to see the success message

## 📂 Project Structure

```
.
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── main.js             # Form validation logic
└── assets/
    └── images/         # SVG illustrations and icons
```

## 🎨 Design Specifications

### Color Palette

- **Red**: `hsl(4, 100%, 67%)`
- **Blue-800**: `hsl(234, 29%, 20%)`
- **Blue-700**: `hsl(235, 18%, 26%)`
- **Grey**: `hsl(0, 0%, 58%)`
- **White**: `hsl(0, 0%, 100%)`

### Responsive Breakpoints

- **Mobile**: < 475px
- **Desktop**: ≥ 475px

## 💡 Key Functionality

### Email Validation

The form validates email addresses by checking if they end with `.com`

```javascript
let check = input.split("").slice(-4).join("");
if (check === ".com") {
  // Show success message
}
```

### Success Flow

1. User enters email address
2. Form validates the email format
3. Newsletter section is hidden
4. Success message displays with the entered email
5. Dismiss button clears the success message

## 🖼️ UI Components

- Newsletter subscription card with product benefits list
- Email input field with validation
- Subscribe button with gradient hover effect
- Success confirmation card
- Custom list icon using CSS pseudo-elements

## 🎯 Use Cases

This project demonstrates proficiency in frontend web development fundamentals, including responsive design patterns, form handling, DOM manipulation, and CSS styling techniques.

## 👤 Credits

- **Developer**: Abhishek Kumar
- **Challenge by**: Frontend Mentor
