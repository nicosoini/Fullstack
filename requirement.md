
# Workshop 01 – Requirements

## Overview
This document lists the tasks and concrete requirements extracted from README.md for Workshop 01 — Web Development Basics.

Work only inside the `starter/` folder. Complete all mandatory tasks (Task 1–5). Optional tasks are for extra practice.

---

## General Rules
- Work only inside the `starter/` folder
- Do not change the repository structure unless instructed
- Commit your work regularly with meaningful commit messages
- Do **not** commit `node_modules`

---

## Mandatory Tasks

### Task 1 – Create Your First HTML Page
**Files:** `index.html`

**Description**  
Create a basic HTML5 page with title and simple personal content.

**Requirements**
- Add HTML5 document structure: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- Add a ` <title>` in the head
- In the body include:
  - ` <h1>` with your name or site title
  - ` <h2>` with a short tagline
  - A paragraph using ` <p>` introducing yourself
  - An image using ` <img>` (use provided assets or a placeholder)
- Keep content accessible (use `alt` attributes for images)

---

### Task 2 – Style with CSS
**Files:** `css/styles.css`

**Description**  
Apply basic styling to the page.

**Requirements**
- Set body styles (background color, `font-family`, `margin`, `padding`)
- Style headings (color, `font-size`, alignment)
- Style paragraphs (`line-height`, color, `max-width` for readable lines)
- Style images (`max-width`, `border`, `border-radius`)
- Use comments to organize CSS and choose a consistent color scheme

---

### Task 3 – Build a Simple Navigation Menu
**Files:** `index.html`, `css/styles.css`

**Description**  
Add a navigation bar linking to page sections.

**Requirements**
- Add a ` <nav>` with an unordered list (` <ul>`) and list items (` <li>`)
- Links must point to internal sections: Home (`#home`), About (`#about`), Contact (`#contact`)
- Add corresponding section elements with matching IDs, e.g. ` <section id="about">`
- In CSS:
  - Remove list bullet points
  - Display items horizontally (flexbox or `inline-block`)
  - Add padding and background color to the nav
  - Style links (color, no underline) and add `:hover` effect

---

### Task 4 – Create a Simple Form
**Files:** `index.html`, `css/styles.css`

**Description**  
Build a contact form with labels and inputs.

**Requirements**
- Add a ` <section id="contact">` containing a ` <form>`
- Include:
  - Text input for name with a ` <label>` (e.g. ` <input type="text" id="name">`)
  - Email input for email with a ` <label>` (e.g. ` <input type="email" id="email">`)
  - Textarea for message with a ` <label>` (e.g. ` <textarea id="message"></textarea>`)
  - Submit button (` <button type="submit">` or ` <input type="submit">`)
- Use proper input types and add `required` attributes where appropriate
- Style form elements:
  - Make inputs full-width or constrain with `max-width`
  - Add padding, borders, and spacing between fields
  - Style submit button and add hover state
- Ensure labels use `for` attributes for accessibility (e.g. ` <label for="email">`)

---

### Task 5 – Make it Responsive
**Files:** `css/styles.css`, `index.html`

**Description**  
Ensure the page looks good on mobile devices.

**Requirements**
- Add viewport meta tag to head if missing: ` <meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Add CSS media queries for screens under 768px
- Adjust mobile styles:
  - Stack navigation vertically
  - Reduce font sizes, padding, and margins
  - Ensure images are responsive (`max-width: 100%`)
- Test in browser DevTools at multiple sizes

---

## Validation / Acceptance Criteria
Your solution will be considered complete if:
- The application runs (`index.html` opens) without errors
- All mandatory tasks (1–5) are implemented as specified
- Code is readable and organized (HTML semantic, CSS commented)
- No unnecessary files are committed (e.g., `node_modules`)

---

## Optional Tasks (Bonus)
- Add a footer with social links
- Create an "About" grid with cards
- Add smooth scrolling for nav links
- Experiment with CSS transitions or animations
- Add additional pages and link them

---

## Submission Checklist
Before submitting:
- [ ] All mandatory tasks are completed
- [ ] `index.html` opens and displays without errors
- [ ] Changes are committed and pushed to GitHub
- [ ] `node_modules` is not committed
- [ ] README instructions followed

---

## Notes
- Ask the instructor if requirements are unclear
- Partial solutions may receive partial credit
- Late submissions follow course policy

--- 

Good luck! 💪

