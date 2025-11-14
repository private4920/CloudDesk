# CloudDesk EDU UI Consistency Checklist

## Overview

This checklist ensures all pages and components maintain CloudDesk EDU's enterprise-grade design standards. Use this when creating new features, reviewing pull requests, or auditing existing UI.

**Design Philosophy**: Clarity over cleverness. Professional over playful. Accessible by default.

---

## 1. Color & Typography Checks

### Color Usage

**✅ DO:**
- [ ] Use `indigo-600` (#4F46E5) for primary actions and active states
- [ ] Use `indigo-700` (#4338CA) for hover states on primary elements
- [ ] Use `indigo-50` (#EEF2FF) for subtle accent backgrounds
- [ ] Use `gray-900` (#111827) for primary text
- [ ] Use `gray-500` (#6B7280) for secondary text and labels
- [ ] Use `gray-400` (#9CA3AF) for placeholders and muted text
- [ ] Use `white` (#FFFFFF) for card and surface backgrounds
- [ ] Use `gray-50` (#F9FAFB) for page backgrounds
- [ ] Use semantic colors only for their intended purpose:
  - `emerald-500` for success states
  - `amber-500` for warnings
  - `red-500` for errors and destructive actions
  - `blue-500` for informational messages

**❌ DON'T:**
- [ ] Use colors outside the defined palette
- [ ] Use gradients, neon colors, or saturated backgrounds
- [ ] Rely on color alone to convey information (always pair with icons or text)
- [ ] Use indigo for non-interactive elements
- [ ] Use semantic colors decoratively (red for branding, green for buttons)

---

### Typography

**✅ DO:**
- [ ] Use Inter font family (or system fallback)
- [ ] Use consistent heading scale:
  - H1: 24px, weight 600 (page titles)
  - H2: 18px, weight 600 (section titles)
  - H3: 16px, weight 600 (subsection titles)
  - H4: 14px, weight 600 (component titles)
- [ ] Use 14px for body text and form inputs
- [ ] Use 13px for small text (metadata, helper text)
- [ ] Use 12px for badges and tiny labels
- [ ] Use weight 500 for labels and medium emphasis
- [ ] Use weight 400 for body text
- [ ] Use line-height 1.5 for body text, 1.2 for headings
- [ ] Ensure all text meets WCAG AA contrast ratios (4.5:1 for body, 3:1 for large text)

**❌ DON'T:**
- [ ] Use font sizes outside the defined scale
- [ ] Use weight 700 or higher (too heavy for enterprise UI)
- [ ] Use weight 300 or lower (too light, readability issues)
- [ ] Use all-caps for body text (only for small labels if needed)
- [ ] Use italic for emphasis (use weight or color instead)
- [ ] Use text smaller than 12px (accessibility concern)

---

## 2. Component Usage Checks

### Buttons

**✅ DO:**
- [ ] Use **Primary button** (indigo-600) for main CTAs (limit 1-2 per screen)
- [ ] Use **Secondary button** (white with border) for alternative actions
- [ ] Use **Ghost button** (transparent) for low-priority actions
- [ ] Use **Destructive button** (red-600) for delete/remove actions
- [ ] Include icon with button text when it adds clarity (16px, left of text)
- [ ] Use consistent padding: `px-4 py-2` (default), `px-6 py-3` (large)
- [ ] Use 8px border radius for all buttons
- [ ] Show loading state with spinner and "Loading..." text
- [ ] Disable buttons when action is unavailable (opacity 60%, cursor not-allowed)
- [ ] Provide visible focus ring (2px indigo-600 with 2px offset)

**❌ DON'T:**
- [ ] Use more than one primary button per section
- [ ] Use primary button for destructive actions (use red destructive variant)
- [ ] Use buttons without clear, action-oriented labels
- [ ] Use icon-only buttons without accessible labels (aria-label required)
- [ ] Use buttons smaller than 40px height (touch target minimum)

---

### Cards

**✅ DO:**
- [ ] Use white background with 1px gray-200 border
- [ ] Use 8px border radius (standard) or 12px (large/prominent)
- [ ] Use subtle raised shadow: `0 1px 3px rgba(0,0,0,0.1)`
- [ ] Use 24px padding (default) or 32px (spacious)
- [ ] Structure cards with clear sections:
  - Optional header with title and actions
  - Body with main content
  - Optional footer with actions or metadata
- [ ] Use 16px spacing between elements within cards
- [ ] Increase shadow on hover if card is interactive
- [ ] Use consistent card heights in grid layouts

**❌ DON'T:**
- [ ] Nest cards more than one level deep
- [ ] Use cards without padding (content touching edges)
- [ ] Use heavy shadows or multiple shadow layers
- [ ] Use colored card backgrounds (except subtle accent like indigo-50 for emphasis)
- [ ] Make cards clickable without clear visual affordance

---

### Form Inputs

**✅ DO:**
- [ ] Use 40px height for all text inputs and selects
- [ ] Use white background with 1px gray-200 border
- [ ] Use 8px border radius
- [ ] Use 10-12px horizontal padding
- [ ] Place labels above inputs (8px gap)
- [ ] Use 14px font size for input text
- [ ] Use gray-400 for placeholder text
- [ ] Show focus state: indigo-600 border with 2px ring
- [ ] Show error state: red-500 border with red-600 helper text
- [ ] Include helper text below inputs (4px gap, 13px font)
- [ ] Mark required fields with red asterisk after label
- [ ] Provide clear error messages (specific, actionable)

**❌ DON'T:**
- [ ] Use inputs shorter than 40px (accessibility)
- [ ] Use placeholder text as labels (labels must be visible)
- [ ] Use red borders without error text explanation
- [ ] Use vague error messages ("Invalid input")
- [ ] Rely on color alone for validation states

---

### Tables

**✅ DO:**
- [ ] Use proper HTML table semantics (`<table>`, `<thead>`, `<tbody>`)
- [ ] Use gray-50 background for header row
- [ ] Use 44px height for header, 64px for body rows
- [ ] Use 1px gray-200 borders between rows
- [ ] Use gray-50 background on row hover
- [ ] Right-align numerical data (costs, hours, counts)
- [ ] Left-align text data (names, descriptions)
- [ ] Use 14px font for body cells, 13px for headers
- [ ] Make column headers sortable with chevron icons
- [ ] Provide empty state with icon, message, and action
- [ ] Use sticky header for long tables

**❌ DON'T:**
- [ ] Use tables for layout (use CSS grid/flexbox)
- [ ] Use zebra striping (unnecessary visual noise)
- [ ] Use heavy borders or cell backgrounds
- [ ] Make entire rows clickable without indication
- [ ] Use tables on mobile (convert to cards)

---

### Status Badges

**✅ DO:**
- [ ] Use semantic colors for status:
  - RUNNING: emerald-50 background, emerald-700 text
  - STOPPED: gray-100 background, gray-700 text
  - PROVISIONING: blue-50 background, blue-700 text
  - ERROR: red-50 background, red-700 text
- [ ] Use 12px font size, weight 500
- [ ] Use 4px horizontal, 2px vertical padding
- [ ] Use 6px border radius (small) or full (pill)
- [ ] Include icon when it adds clarity (16px)
- [ ] Use uppercase or sentence case consistently

**❌ DON'T:**
- [ ] Use badges for non-status information (use labels instead)
- [ ] Use more than 2-3 badges per item
- [ ] Use badges without sufficient color contrast
- [ ] Rely on color alone (include text and optional icon)

---

## 3. Layout & Spacing Checks

### Page Layout

**✅ DO:**
- [ ] Use max-width 1280px for content area, centered
- [ ] Use 32px horizontal padding (desktop), 24px (tablet), 16px (mobile)
- [ ] Use 32px vertical padding for page top and bottom
- [ ] Use 32px spacing between major page sections
- [ ] Use 24px spacing between related sections
- [ ] Use 16px spacing between form fields
- [ ] Use gray-50 background for page canvas
- [ ] Use white background for content cards

**❌ DON'T:**
- [ ] Let content touch viewport edges (always use padding)
- [ ] Use arbitrary spacing values (stick to 4px scale: 4, 8, 12, 16, 24, 32, 48, 64)
- [ ] Use different max-widths across pages (consistency matters)
- [ ] Use full-width content on ultra-wide screens (use max-width)

---

### Grid Layouts

**✅ DO:**
- [ ] Use 24px gap between grid items (desktop)
- [ ] Use 16px gap on mobile
- [ ] Use responsive breakpoints:
  - Desktop (≥1024px): 3-4 columns
  - Tablet (768-1023px): 2 columns
  - Mobile (<768px): 1 column
- [ ] Use equal-height cards in grid rows
- [ ] Use consistent card sizing within grids

**❌ DON'T:**
- [ ] Use more than 4 columns on desktop (too dense)
- [ ] Use unequal gaps between items
- [ ] Force desktop layouts on mobile (always stack)

---

### Card Spacing

**✅ DO:**
- [ ] Use 24px padding inside cards (default)
- [ ] Use 32px padding for prominent/hero cards
- [ ] Use 16px padding for compact cards
- [ ] Use 16px spacing between card sections
- [ ] Use 24px gap between cards in lists
- [ ] Use 12px gap for card headers (title to content)

**❌ DON'T:**
- [ ] Use less than 16px padding (content feels cramped)
- [ ] Use more than 48px padding (wasteful of space)
- [ ] Use inconsistent padding within same card type

---

## 4. Interaction & State Checks

### Hover States

**✅ DO:**
- [ ] Darken button backgrounds on hover (indigo-600 → indigo-700)
- [ ] Lighten surface backgrounds on hover (white → gray-50)
- [ ] Increase shadow on card hover (if interactive)
- [ ] Change cursor to pointer for clickable elements
- [ ] Use 150ms transition duration for smooth feel
- [ ] Show hover state on entire clickable area (not just text)

**❌ DON'T:**
- [ ] Use hover effects on non-interactive elements
- [ ] Use slow transitions (>300ms feels sluggish)
- [ ] Use instant transitions (0ms feels jarring)
- [ ] Use scale transforms on large elements (distracting)

---

### Focus States

**✅ DO:**
- [ ] Show 2px indigo-600 ring with 2px offset on all interactive elements
- [ ] Maintain hover appearance when focused
- [ ] Ensure focus ring has 3:1 contrast with background
- [ ] Make focus ring visible on all elements (no outline: none)
- [ ] Use logical tab order (top to bottom, left to right)
- [ ] Provide skip links for keyboard users

**❌ DON'T:**
- [ ] Remove focus indicators (accessibility violation)
- [ ] Use focus styles that are hard to see
- [ ] Use different focus styles across components (consistency)

---

### Disabled States

**✅ DO:**
- [ ] Use gray-300 background for disabled buttons
- [ ] Use gray-400 text for disabled elements
- [ ] Use 60% opacity for disabled state
- [ ] Use cursor: not-allowed for disabled elements
- [ ] Keep disabled elements in tab order for screen readers (with aria-disabled)
- [ ] Provide tooltip or helper text explaining why disabled

**❌ DON'T:**
- [ ] Make disabled elements invisible (use opacity, not display: none)
- [ ] Use disabled state without explanation
- [ ] Use opacity so low that text is unreadable (<40%)

---

### Loading States

**✅ DO:**
- [ ] Show spinner (indigo-600, 16-24px) for loading actions
- [ ] Change button text to "Loading..." or "Saving..."
- [ ] Disable interactive elements during loading
- [ ] Use skeleton screens for page/section loading
- [ ] Use subtle pulse animation for skeletons (1.5s duration)
- [ ] Show loading overlay for full-page operations

**❌ DON'T:**
- [ ] Use loading states for operations under 300ms (too fast to perceive)
- [ ] Use multiple different loading indicators (consistency)
- [ ] Block entire UI for partial updates (scope loading to affected area)

---

### Empty States

**✅ DO:**
- [ ] Show icon (48-64px, gray-300) centered
- [ ] Show heading (16-20px, gray-900) explaining state
- [ ] Show description (14-16px, gray-600) with guidance
- [ ] Provide primary action button to resolve state
- [ ] Use min-height to prevent layout shift
- [ ] Center content vertically and horizontally

**❌ DON'T:**
- [ ] Show empty tables/lists without explanation
- [ ] Use technical error messages in empty states
- [ ] Leave users without next steps (always provide action)

---

### Error States

**✅ DO:**
- [ ] Show error toast notifications for failed actions
- [ ] Use red-50 background with red-600 text for error messages
- [ ] Include AlertCircle icon (20px, red-600)
- [ ] Provide specific, actionable error messages
- [ ] Show inline validation errors below form fields
- [ ] Keep user on page after error (don't navigate away)
- [ ] Announce errors to screen readers

**❌ DON'T:**
- [ ] Use generic error messages ("Something went wrong")
- [ ] Use technical jargon in user-facing errors
- [ ] Show errors without recovery path
- [ ] Use error states without explanation

---

## 5. Do / Don't Examples

### Visual Hierarchy

**✅ DO:**
- Use size, weight, and color to create clear hierarchy
- Make primary actions visually prominent (indigo button)
- Use whitespace to separate sections
- Limit visual weight to 2-3 levels per screen

**❌ DON'T:**
- Make everything bold or large (no hierarchy)
- Use multiple competing primary actions
- Cram content without breathing room
- Use decorative elements that don't serve purpose

---

### Enterprise Polish

**✅ DO:**
- Use subtle shadows and borders for depth
- Maintain consistent spacing throughout
- Use professional, neutral language
- Show real data or realistic placeholders
- Provide clear feedback for all actions

**❌ DON'T:**
- Use playful illustrations or mascots
- Use casual language ("Oops!", "Yay!")
- Use Lorem ipsum in production
- Use flashy animations or transitions
- Leave users guessing about action results

---

### Information Density

**✅ DO:**
- Show essential information prominently
- Use progressive disclosure for details
- Group related information in cards
- Use tables for structured data (5+ items)
- Provide filtering and search for long lists

**❌ DON'T:**
- Show all information at once (overwhelming)
- Hide critical information behind clicks
- Use cards for tabular data (inefficient)
- Force users to scroll through long unfiltered lists

---

### Accessibility

**✅ DO:**
- Ensure all text meets contrast requirements
- Provide keyboard navigation for all features
- Include alt text for images and icons
- Use semantic HTML (`<button>`, `<nav>`, `<main>`)
- Test with screen reader
- Support browser zoom up to 200%

**❌ DON'T:**
- Rely on color alone to convey information
- Use icon-only buttons without labels
- Use `<div>` for buttons or links
- Disable zoom or pinch gestures
- Use auto-playing animations (seizure risk)

---

### Responsive Design

**✅ DO:**
- Design mobile-first, enhance for desktop
- Stack columns on mobile (single column)
- Use full-width buttons on mobile
- Increase touch targets to 44px minimum
- Test on actual devices, not just browser resize
- Use responsive images (srcset)

**❌ DON'T:**
- Force desktop layouts on mobile
- Use horizontal scrolling (except intentional carousels)
- Use hover-only interactions (mobile has no hover)
- Use tiny text or buttons on mobile
- Assume all users have large screens

---

### Performance

**✅ DO:**
- Optimize images (WebP, proper sizing)
- Lazy load images below fold
- Use skeleton screens for perceived performance
- Debounce search inputs (300ms)
- Show loading states for operations >300ms
- Minimize bundle size (code splitting)

**❌ DON'T:**
- Load all data upfront (paginate or virtualize)
- Use unoptimized images (large PNGs)
- Block rendering with synchronous scripts
- Use heavy animations on low-end devices
- Ignore loading states (users need feedback)

---

## Quick Audit Questions

Use these questions to quickly assess if a new page/component fits CloudDesk EDU:

1. **Does it look professional?** (No playful elements, clean and confident)
2. **Is the hierarchy clear?** (Can you identify the most important element in 2 seconds?)
3. **Are colors used purposefully?** (Indigo for primary actions, semantic colors for status)
4. **Is spacing consistent?** (Using 4px scale: 4, 8, 12, 16, 24, 32, 48, 64)
5. **Are all states handled?** (Default, hover, focus, disabled, loading, error, empty)
6. **Is it accessible?** (Keyboard navigable, sufficient contrast, screen reader friendly)
7. **Is it responsive?** (Works on mobile, tablet, desktop)
8. **Does it match existing pages?** (Same button styles, card styles, typography)
9. **Is feedback clear?** (User knows what happened after every action)
10. **Would an IT admin approve it?** (Trustworthy, stable, professional)

---

## Review Checklist Summary

Before merging any UI changes, verify:

- [ ] Colors match design system (indigo-600 primary, gray scale, semantic colors)
- [ ] Typography uses defined scale (24/18/16/14/13/12px, weights 400/500/600)
- [ ] Buttons use correct variants (primary/secondary/ghost/destructive)
- [ ] Cards have consistent structure (white bg, gray-200 border, 8-12px radius, 24px padding)
- [ ] Forms follow input guidelines (40px height, labels above, validation states)
- [ ] Spacing uses 4px scale (no arbitrary values)
- [ ] All interactive elements have hover, focus, and disabled states
- [ ] Loading and empty states are handled
- [ ] Layout is responsive (mobile, tablet, desktop)
- [ ] Accessibility requirements met (contrast, keyboard nav, semantic HTML)
- [ ] Page matches existing CloudDesk EDU aesthetic (professional, clean, trustworthy)

---

**Remember**: When in doubt, choose clarity over cleverness, and consistency over creativity. CloudDesk EDU is an enterprise product—users should trust it, not be impressed by it.
