# CloudDesk EDU Design System Foundation

## Overview

This document defines the foundational design tokens and principles for CloudDesk EDU—a professional, enterprise-grade cloud desktop platform interface. The system prioritizes clarity, accessibility, and confidence over decorative elements.

---

## 1. Color System

### Background Colors

**Page Background**
- Token: `gray-50` (#F9FAFB)
- Usage: Main application canvas, behind all content
- Purpose: Provides subtle contrast against white surfaces without feeling heavy

**Surface / Card Background**
- Token: `white` (#FFFFFF)
- Usage: Cards, modals, panels, form containers
- Purpose: Primary content containers that sit on the page background

**Elevated Surface**
- Token: `white` (#FFFFFF) with increased shadow
- Usage: Dropdowns, popovers, tooltips, floating menus
- Purpose: Elements that need to appear above other surfaces

### Border Colors

**Default Border**
- Token: `gray-200` (#E5E7EB)
- Usage: Card edges, input borders, dividers, table borders
- Purpose: Subtle separation without visual noise

**Hover Border**
- Token: `gray-300` (#D1D5DB)
- Usage: Interactive elements on hover
- Purpose: Gentle feedback for hoverable boundaries

**Focus Border**
- Token: `indigo-600` (#4F46E5)
- Usage: Active input fields, focused interactive elements
- Purpose: Clear indication of keyboard focus and active state

### Text Colors

**Primary Text**
- Token: `gray-900` (#111827)
- Usage: Headings, body text, primary labels
- Purpose: Maximum legibility for main content
- Contrast: Meets WCAG AAA on white backgrounds

**Secondary Text**
- Token: `gray-500` (#6B7280)
- Usage: Supporting labels, metadata, timestamps, helper text
- Purpose: De-emphasize less critical information
- Contrast: Meets WCAG AA on white backgrounds

**Muted Text**
- Token: `gray-400` (#9CA3AF)
- Usage: Placeholders, disabled text, very subtle hints
- Purpose: Minimal visual weight for non-essential text

**Inverted Text**
- Token: `white` (#FFFFFF)
- Usage: Text on dark backgrounds (primary buttons, dark badges)
- Purpose: Maintain readability on colored surfaces

### Accent Colors

**Primary Accent**
- Token: `indigo-600` (#4F46E5)
- Usage: Primary CTAs, active states, links, focus rings
- Purpose: Draw attention to key actions and interactive elements
- Personality: Professional, trustworthy, tech-forward

**Primary Accent Hover**
- Token: `indigo-700` (#4338CA)
- Usage: Hover state for primary buttons and interactive accent elements
- Purpose: Provide clear hover feedback

**Primary Accent Light**
- Token: `indigo-50` (#EEF2FF)
- Usage: Subtle backgrounds for selected items, hover states on light surfaces
- Purpose: Gentle accent without overwhelming the interface

### Semantic Colors

**Success**
- Token: `emerald-500` (#10B981)
- Usage: Success messages, positive status indicators, confirmation states
- Context: "Desktop is running", "File uploaded successfully"

**Warning**
- Token: `amber-500` (#F59E0B)
- Usage: Warning messages, caution states, pending actions
- Context: "Desktop will shut down in 5 minutes", "Storage nearly full"

**Error**
- Token: `red-500` (#EF4444)
- Usage: Error messages, destructive actions, failed states
- Context: "Connection failed", "Invalid credentials", delete buttons

**Info**
- Token: `blue-500` (#3B82F6)
- Usage: Informational messages, neutral notifications
- Context: "New feature available", "Maintenance scheduled"

---

## 2. Typography

### Font Family

**Primary Font Stack**
```
'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

- Inter provides excellent legibility at small sizes
- System fallbacks ensure consistent rendering across platforms
- Variable font weights (400, 500, 600) for hierarchy

### Heading Scale

**H1 - Page Title**
- Size: 24px (1.5rem)
- Weight: 600 (semibold)
- Line Height: 1.2
- Color: `gray-900`
- Usage: Main page heading, appears once per view
- Example: "Dashboard", "My Desktops", "Account Settings"

**H2 - Section Title**
- Size: 18px (1.125rem)
- Weight: 600 (semibold)
- Line Height: 1.3
- Color: `gray-900`
- Usage: Major sections within a page, card titles
- Example: "Recent Activity", "Active Desktops", "Storage Overview"

**H3 - Subsection Title**
- Size: 16px (1rem)
- Weight: 600 (semibold)
- Line Height: 1.4
- Color: `gray-900`
- Usage: Subsections, form group labels, modal titles
- Example: "Desktop Configuration", "Network Settings"

**H4 - Component Title**
- Size: 14px (0.875rem)
- Weight: 600 (semibold)
- Line Height: 1.4
- Color: `gray-900`
- Usage: Small component headings, table headers
- Example: Column headers, card subtitles

### Body Text

**Body Default**
- Size: 14px (0.875rem)
- Weight: 400 (regular)
- Line Height: 1.5
- Color: `gray-900`
- Usage: Primary content, form inputs, table cells, descriptions

**Body Small**
- Size: 13px (0.8125rem)
- Weight: 400 (regular)
- Line Height: 1.5
- Color: `gray-500`
- Usage: Metadata, timestamps, helper text, captions

**Body Tiny**
- Size: 12px (0.75rem)
- Weight: 400 (regular)
- Line Height: 1.4
- Color: `gray-500`
- Usage: Badges, tags, very compact information

### Labels & UI Text

**Label**
- Size: 14px (0.875rem)
- Weight: 500 (medium)
- Line Height: 1.4
- Color: `gray-900`
- Usage: Form labels, button text, navigation items

**Label Small**
- Size: 13px (0.8125rem)
- Weight: 500 (medium)
- Line Height: 1.4
- Color: `gray-500`
- Usage: Secondary labels, inline labels

---

## 3. Spacing & Layout

### Spacing Scale

CloudDesk EDU uses a consistent 4px base unit spacing scale:

- `xs`: 4px (0.25rem) - Tight spacing within components
- `sm`: 8px (0.5rem) - Component internal padding, icon gaps
- `md`: 12px (0.75rem) - Small gaps between related elements
- `base`: 16px (1rem) - Default gap between elements
- `lg`: 24px (1.5rem) - Section spacing, card padding
- `xl`: 32px (2rem) - Major section padding, page padding
- `2xl`: 48px (3rem) - Large section breaks
- `3xl`: 64px (4rem) - Hero sections, major page divisions

### Layout Rules

**Page Padding**
- Desktop: 32px (2rem) on all sides
- Tablet: 24px (1.5rem) on all sides
- Mobile: 16px (1rem) on all sides
- Purpose: Prevents content from touching viewport edges

**Section Spacing**
- Between major sections: 32px (2rem) vertical
- Between related groups: 24px (1.5rem) vertical
- Purpose: Clear visual hierarchy and breathing room

**Card Padding**
- Default: 24px (1.5rem) on all sides
- Compact: 16px (1rem) on all sides
- Spacious: 32px (2rem) on all sides
- Purpose: Consistent internal spacing for content containers

**Grid Gaps**
- Default grid gap: 24px (1.5rem)
- Compact grid gap: 16px (1rem)
- Loose grid gap: 32px (2rem)
- Purpose: Consistent spacing between grid items

**Component Internal Spacing**
- Between label and input: 8px (0.5rem)
- Between input and helper text: 4px (0.25rem)
- Between icon and text: 8px (0.5rem)
- Between stacked form fields: 16px (1rem)

### Max Width Constraints

**Content Container**
- Max width: 1280px (80rem)
- Purpose: Optimal reading width on ultra-wide screens
- Centering: Auto margins for horizontal centering

**Text Content**
- Max width: 720px (45rem)
- Purpose: Comfortable reading line length for prose
- Usage: Documentation, long-form content

**Form Container**
- Max width: 560px (35rem)
- Purpose: Focused form completion without excessive eye travel
- Usage: Login, settings forms, creation wizards

---

## 4. Elevation & Corners

### Border Radius

**Small Radius**
- Value: 6px (0.375rem)
- Usage: Badges, tags, small buttons, chips
- Purpose: Subtle softening without being overly rounded

**Medium Radius**
- Value: 8px (0.5rem)
- Usage: Buttons, inputs, cards, most interactive elements
- Purpose: Standard corner treatment for the system

**Large Radius**
- Value: 12px (0.75rem)
- Usage: Modals, large cards, hero sections
- Purpose: Softer appearance for prominent containers

**Full Radius**
- Value: 9999px (fully rounded)
- Usage: Avatar images, pill-shaped filters, circular icons
- Purpose: Perfect circles or pills

### Shadow Levels

**Flat (No Shadow)**
- Value: none
- Usage: Elements that sit flush with the background
- Context: Sidebar, top bar, inline elements
- Purpose: Minimal visual weight

**Raised (Subtle Shadow)**
- Value: `0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)`
- Usage: Cards, buttons (subtle), form inputs on focus
- Context: Default state for most containers
- Purpose: Gentle separation from background

**Elevated (Medium Shadow)**
- Value: `0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)`
- Usage: Dropdowns, popovers, hover states on cards
- Context: Elements that float above the page
- Purpose: Clear visual hierarchy

**Floating (Strong Shadow)**
- Value: `0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)`
- Usage: Modals, dialogs, tooltips
- Context: Highest z-index elements
- Purpose: Maximum separation and focus

### Shadow Usage Guidelines

- Use shadows sparingly—not every element needs elevation
- Increase shadow on hover for interactive cards
- Modals should have the strongest shadow to indicate focus
- Avoid shadows on elements within already-elevated containers

---

## 5. Feedback & States

### Semantic Feedback Colors

**Success State**
- Background: `emerald-50` (#ECFDF5)
- Border: `emerald-200` (#A7F3D0)
- Text: `emerald-700` (#047857)
- Icon: `emerald-500` (#10B981)
- Usage: Success messages, completed actions, positive confirmations

**Warning State**
- Background: `amber-50` (#FFFBEB)
- Border: `amber-200` (#FDE68A)
- Text: `amber-700` (#B45309)
- Icon: `amber-500` (#F59E0B)
- Usage: Caution messages, pending states, important notices

**Error State**
- Background: `red-50` (#FEF2F2)
- Border: `red-200` (#FECACA)
- Text: `red-700` (#B91C1C)
- Icon: `red-500` (#EF4444)
- Usage: Error messages, validation failures, destructive warnings

**Info State**
- Background: `blue-50` (#EFF6FF)
- Border: `blue-200` (#BFDBFE)
- Text: `blue-700` (#1D4ED8)
- Icon: `blue-500` (#3B82F6)
- Usage: Informational messages, tips, neutral notifications

### Interactive States

**Default State**
- Appearance: Base colors as defined in component specs
- Purpose: Resting state, no interaction

**Hover State**
- Visual change: Slight darkening of background or border
- Timing: Instant (0ms) or very fast (100ms)
- Cursor: Pointer for clickable elements
- Purpose: Indicate interactivity before click

**Focus State**
- Ring: 2px solid `indigo-600`, 2px offset
- Background: Maintain or slightly lighten
- Purpose: Keyboard navigation accessibility
- Requirement: All interactive elements must have visible focus

**Active/Pressed State**
- Visual change: Slightly darker than hover
- Scale: Optional subtle scale down (98%)
- Purpose: Immediate feedback on click/tap

**Disabled State**
- Opacity: 50% or use `gray-300` for backgrounds
- Cursor: not-allowed
- Text: `gray-400`
- Purpose: Indicate unavailable actions
- Rule: Never use color alone—also reduce opacity or change pattern

### Loading States

**Spinner**
- Color: `indigo-600` for primary actions, `gray-400` for secondary
- Size: 16px for inline, 24px for page-level
- Animation: Smooth rotation, 1s duration

**Skeleton Screens**
- Background: `gray-200`
- Animation: Subtle pulse or shimmer
- Purpose: Indicate loading content while maintaining layout

**Progress Indicators**
- Bar color: `indigo-600`
- Background: `gray-200`
- Height: 4px for subtle, 8px for prominent
- Purpose: Show determinate progress for long operations

### Transition Guidelines

**Standard Transitions**
- Duration: 150ms for most interactions
- Easing: ease-in-out for smooth feel
- Properties: background-color, border-color, opacity, transform

**Avoid Animating**
- Layout properties (width, height, margin, padding)
- Complex transforms on large elements
- Purpose: Maintain 60fps performance

---

## Design Principles Summary

1. **Clarity First**: Every element should have a clear purpose. Remove anything that doesn't serve the user.

2. **Consistent Spacing**: Use the spacing scale religiously. Avoid arbitrary values.

3. **Accessible Contrast**: All text must meet WCAG AA minimum (AAA preferred for body text).

4. **Purposeful Color**: Use color to communicate meaning, not decoration. The accent color should guide attention.

5. **Readable Typography**: Prioritize legibility over style. Line height and spacing matter more than font choice.

6. **Subtle Elevation**: Use shadows to create hierarchy, not to make things "pop". Less is more.

7. **Predictable Interactions**: Hover, focus, and active states should be consistent across all components.

8. **Enterprise Confidence**: The interface should feel stable, professional, and trustworthy—something an IT admin would approve.
