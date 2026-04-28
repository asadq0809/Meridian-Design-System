# Meridian Design System

A token-based design system built in React — mapping 1:1 from Figma Variables to CSS custom properties.

Built by **Asad Qureshi** as a portfolio case study demonstrating design-to-development ownership.

🎨 [Figma File](https://www.figma.com/design/0bQi0Tq5rd1yyJvumvjtzk/Meridian-Design-System?node-id=0-1&t=TNxMxl2DJCT9WFRJ-1) · 🚀 [Live Demo](https://meridian-design-system-pearl.vercel.app/)

---

## Components

| Component | Variants                                  | States                                      |
| --------- | ----------------------------------------- | ------------------------------------------- |
| Button    | primary, secondary, ghost, destructive    | default, hover, active, disabled, loading   |
| Badge     | default, primary, success, warning, error | default, with dot indicator                 |
| Alert     | info, success, warning, error             | default, dismissible, title-only, body-only |

---

## Token Architecture

All design decisions live in `tokens.css` as CSS custom properties, mirroring Figma Variables exactly:

```css
--color-primary-500: #2563eb; /* Figma: color/primary/500 */
--spacing-4: 16px; /* Figma: spacing/4         */
--radius-md: 8px; /* Figma: radius/md         */
```

This means any token change in Figma propagates to code by updating one value in one file.

---

## Usage

```jsx
import Button from './Button';
import Badge from './Badge';
import Alert from './Alert';
import './tokens.css';

// Button
<Button variant="primary" size="md">Save changes</Button>
<Button variant="destructive" loading>Deleting...</Button>

// Badge
<Badge variant="success" dot>Active</Badge>

// Alert
<Alert variant="error" title="Login failed" dismissible>
  Invalid credentials. Please try again.
</Alert>
```

---

## Setup

```bash
npm install
npm run dev
```

---

## Design Decisions

**Why a 4px spacing unit?**
A 4px base creates consistent rhythm at all scales — every spacing value (4, 8, 12, 16, 24, 32...) is a multiple of 4, which maps cleanly to both CSS and Figma's 8pt grid.

**Why Inter?**
Inter is optimised for screen readability at small sizes, widely available, and appropriate for B2B SaaS contexts. It's a deliberate choice, not a default.

**Why CSS custom properties over a CSS-in-JS solution?**
Custom properties are natively supported, performant, and — most importantly — directly readable by Figma's Dev Mode. Any developer inspecting a component in Figma sees the same token names they'll find in the codebase.

**Component API philosophy**
Every component accepts a `variant` prop rather than individual boolean flags (`isPrimary`, `isDestructive`). A single prop is cleaner, enforces mutual exclusivity, and makes the component's intent explicit.
