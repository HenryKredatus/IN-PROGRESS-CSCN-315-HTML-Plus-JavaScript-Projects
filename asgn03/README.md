# JavaScript Webpage Project Style Guide

This is a **lightweight, practical style guide** for small-to-medium JavaScript webpage projects. The goal is clarity, consistency, and maintainability — not perfection.

---

## 1. Naming Conventions

### Files & Folders

- Use **kebab-case** for file and folder names
- Be descriptive, not clever

**Examples**
```
index.html
main.js
utils.js
form-validation.js
css/
  styles.css
js/
  dom-handlers.js
```

**Rationale**  
Kebab-case is readable, consistent with URLs, and avoids OS case-sensitivity issues.

---

### Variables & Functions

- Use **camelCase**
- Names should describe intent
- Avoid single-letter names except in loops

**Good**
```js
let totalPrice = 0;
function calculateTip(amount) {}
```

**Avoid**
```js
let x = 0;
function calc(a) {}
```

**Rationale**  
Clear naming reduces the need for comments and makes code easier to debug.

---

### Constants

- Use **UPPER_SNAKE_CASE** for values that should not change

```js
const MAX_ATTEMPTS = 3;
const TAX_RATE = 0.07;
```

---

## 2. File & Folder Structure

### Recommended Structure

```
project-root/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── dom.js
│   └── utils.js
└── README.md
```

### File Responsibilities

- `main.js` – entry point, event listeners, high-level logic
- `dom.js` – DOM queries and updates
- `utils.js` – reusable helper functions

**Rationale**  
Separating concerns keeps files smaller and makes bugs easier to isolate.

---

## 3. Comments & Documentation

### When to Comment

- Comment **why**, not what
- Explain non-obvious logic
- Avoid obvious comments

**Good**
```js
// Prevent negative totals when user clears input
if (amount < 0) amount = 0;
```

**Avoid**
```js
// Add 1 to total
total = total + 1;
```

---

### Function Comments

- Use brief function header comments for complex functions

```js
/**
 * Calculates total cost including tax and tip
 * @param {number} subtotal
 * @returns {number}
 */
function calculateTotal(subtotal) {
  return subtotal * 1.15;
}
```

**Rationale**  
Well-placed comments help future readers (including you) understand intent quickly.

---

## 4. Formatting Rules

- 2 spaces for indentation
- Always use braces for `if`, `else`, `for`, `while`
- One statement per line

**Example**
```js
if (isValid) {
  submitForm();
}
```

---

## 5. Basic Lint Rules (Conceptual)

These rules can be enforced manually or via ESLint.

### Core Rules

- No unused variables
- Use `===` instead of `==`
- Always declare variables (`let` / `const`)
- Prefer `const` unless reassignment is needed

**Example**
```js
const name = input.value; // good
```

```js
userName = input.value; // bad (implicit global)
```

---

## 6. Example Snippets

### Event Listener

```js
document.querySelector('#submitBtn').addEventListener('click', () => {
  handleSubmit();
});
```

### DOM Update

```js
function updateTotalDisplay(total) {
  totalElement.textContent = `$${total.toFixed(2)}`;
}
```

---

## 7. AI Usage Note

This style guide was created with the assistance of an AI tool to:

- Propose common JavaScript style guide sections
- Suggest a practical file/folder structure
- Generate example snippets following the rules

All suggestions were **reviewed, adapted, and justified** to match course expectations and beginner-to-intermediate JavaScript practices. Final decisions reflect human judgment, not automated enforcement.

---

## 8. Summary

This guide prioritizes:

- Readability over cleverness
- Consistency over personal preference
- Simple rules that scale with project size

Following these conventions helps keep projects understandable, debuggable, and easy to extend.

