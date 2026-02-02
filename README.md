# Workshop 01: Web Development Basics

Welcome to your first web development workshop! In this workshop, you'll learn the fundamentals of HTML, CSS, and responsive design by completing 5 hands-on tasks. 



## Workshop Overview

By the end of this workshop, you will have built a simple, responsive personal webpage with:
- A structured HTML page
- Custom CSS styling
- A navigation menu
- A contact form
- Responsive design for mobile devices

## Getting Started

1. Clone this repository to your local machine
2. Open the project folder in your code editor (VS Code recommended)
3. Complete each task in order (Task 1 through Task 5)
4. Test your work by opening `index.html` in a web browser

## Tasks

### Task 1: Create Your First HTML Page ✏️
**File:** `index.html`

**Goal:** Create the basic structure of an HTML page

**Instructions:**
1. Open `index.html`
2. Add the HTML5 document structure (already started for you)
3. Complete the `<head>` section with a title
4. In the `<body>`, add:
   - A main heading (`<h1>`) with your name or website title
   - A subheading (`<h2>`) with a tagline
   - A paragraph (`<p>`) introducing yourself
   - An image (`<img>`) - you can use our own picture here

**Resources:**
- [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

---

### Task 2: Style with CSS 🎨
**File:** `css/styles.css`

**Goal:** Apply basic styling to your HTML page

**Instructions:**
1. The CSS file is already linked in `index.html`
2. Open `css/styles.css`
3. Add styles for:
   - Body (background color, font family, margin, padding)
   - Headings (color, font size, text alignment)
   - Paragraphs (line height, color, max-width)
   - Images (border, border-radius, max-width)

**Tips:**
- Use web-safe fonts or Google Fonts
- Choose a color scheme (try using 2-3 colors)
- Use comments to organize your CSS

**Resources:**
- [MDN CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [Google Fonts](https://fonts.google.com/)

---

### Task 3: Build a Simple Navigation Menu 🧭
**File:** `index.html` and `css/styles.css`

**Goal:** Create a navigation bar with links

**Instructions:**
1. In `index.html`, add a `<nav>` element at the top of the `<body>`
2. Inside the nav, create an unordered list (`<ul>`) with list items (`<li>`)
3. Add links (`<a>`) to different sections:
   - Home (#home)
   - About (#about)
   - Contact (#contact)
4. Add corresponding section IDs in your HTML
5. Style the navigation in `css/styles.css`:
   - Remove bullet points from the list
   - Display list items horizontally (use `display: inline-block` or `flexbox`)
   - Add padding and background color
   - Style links (color, text-decoration)
   - Add hover effects (`:hover`)

**Resources:**
- [MDN HTML Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

### Task 4: Create a Simple Form 📝
**File:** `index.html` and `css/styles.css`

**Goal:** Build a contact form with different input types

**Instructions:**
1. In `index.html`, create a `<section>` with `id="contact"`
2. Add a `<form>` element inside
3. Include the following form elements:
   - Text input for name (with `<label>`)
   - Email input for email address
   - Textarea for message
   - Submit button
4. Style the form in `css/styles.css`:
   - Make inputs full width or set a max-width
   - Add padding and borders to inputs
   - Style the submit button with colors and hover effect
   - Add spacing between form elements

**Tips:**
- Use proper input types (`type="text"`, `type="email"`)
- Use `<label>` elements with `for` attributes for accessibility
- Add `required` attribute to make fields mandatory

**Resources:**
- [MDN HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)

---

### Task 5: Make it Responsive 📱
**File:** `css/styles.css`

**Goal:** Make your webpage look good on mobile devices

**Instructions:**
1. Add a viewport meta tag in the `<head>` of `index.html` (if not already there):
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
2. In `css/styles.css`, add media queries for smaller screens
3. Adjust the following for mobile (screens under 768px):
   - Stack navigation items vertically
   - Adjust font sizes
   - Reduce padding/margins
   - Make images responsive (max-width: 100%)
4. Test your page at different screen sizes (use browser DevTools)

**Example media query:**
```css
@media (max-width: 768px) {
  /* Your mobile styles here */
}
```

**Resources:**
- [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

---

## Bonus Challenges 🌟

If you complete all tasks early, try these: 

1. Add a footer with your social media links
2. Create a simple grid layout for an "About" section with multiple cards
3. Add smooth scrolling when clicking navigation links
4. Experiment with CSS animations or transitions
5. Add more pages and link them together

## Testing Your Work

- Open `index.html` in multiple browsers (Chrome, Firefox, Safari)
- Use browser DevTools to test responsive design
- Validate your HTML:  https://validator.w3.org/
- Validate your CSS: https://jigsaw.w3.org/css-validator/

## Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)
- [W3Schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Check browser support

## Need Help?

- Check the resources linked in each task
- Ask your instructor or classmates
- Search for solutions online (Stack Overflow, MDN)
- Use browser DevTools to debug


## Summary

This starter package includes: 

1. **README.md** - Complete workshop guide with all 5 tasks, instructions, resources, and tips
2. **index.html** - Starter HTML file with TODO comments and structure
3. **css/styles. css** - Starter CSS file with organized sections and TODO comments
4. **.gitignore** - Basic gitignore for web projects
5. **SOLUTIONS.md** - Example solutions for instructors/students who get stuck

Good luck and have fun!  🚀
