# CloudDesk EDU Design Tokens

This document provides a quick reference for the design tokens implemented in Tailwind CSS.

## Color Palette

### Primary Accent (Indigo)
- `indigo-50` - #EEF2FF - Subtle accent backgrounds
- `indigo-600` - #4F46E5 - Primary CTAs, active states, links
- `indigo-700` - #4338CA - Primary hover states

### Neutral Grays
- `gray-50` - #F9FAFB - Page background
- `gray-200` - #E5E7EB - Default borders
- `gray-300` - #D1D5DB - Hover borders
- `gray-400` - #9CA3AF - Muted text, placeholders
- `gray-500` - #6B7280 - Secondary text
- `gray-900` - #111827 - Primary text

### Semantic Colors

**Success (Emerald)**
- `emerald-50` - Background
- `emerald-500` - Icon/accent
- `emerald-700` - Text

**Warning (Amber)**
- `amber-50` - Background
- `amber-500` - Icon/accent
- `amber-700` - Text

**Error (Red)**
- `red-50` - Background
- `red-500` - Icon/accent
- `red-600` - Destructive actions
- `red-700` - Text

**Info (Blue)**
- `blue-50` - Background
- `blue-500` - Icon/accent
- `blue-700` - Text

## Typography

### Font Family
```css
font-sans /* Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif */
```

### Font Sizes
- `text-xs` - 12px - Badges, tiny labels
- `text-sm` - 13px - Small text, metadata
- `text-base` - 14px - Body text, inputs
- `text-lg` - 16px - H3
- `text-xl` - 18px - H2
- `text-2xl` - 24px - H1
- `text-3xl` - 32px - Large headings
- `text-4xl` - 36px - Hero text
- `text-5xl` - 48px - Landing hero

### Font Weights
- `font-normal` - 400 - Body text
- `font-medium` - 500 - Labels, medium emphasis
- `font-semibold` - 600 - Headings

## Spacing Scale (4px base unit)

- `1` - 4px
- `2` - 8px
- `3` - 12px
- `4` - 16px
- `6` - 24px
- `8` - 32px
- `12` - 48px
- `16` - 64px

## Border Radius

- `rounded-sm` - 6px - Badges, tags
- `rounded-md` - 8px - Buttons, inputs, cards
- `rounded-lg` - 12px - Modals, large cards
- `rounded-xl` - 16px - Hero cards
- `rounded-full` - 9999px - Pills, avatars

## Shadows

- `shadow-sm` - Raised (subtle)
- `shadow-md` - Elevated (medium)
- `shadow-lg` - Floating (strong)

## Max Widths

- `max-w-content` - 1280px - Content container
- `max-w-text` - 720px - Text content
- `max-w-form` - 560px - Form container

## Common Patterns

### Page Container
```jsx
<div className="mx-auto max-w-content px-8 md:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Card
```jsx
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
  {/* Card content */}
</div>
```

### Primary Button
```jsx
<button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors">
  Button Text
</button>
```

### Secondary Button
```jsx
<button className="bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-900 font-medium px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors">
  Button Text
</button>
```

### Text Input
```jsx
<input
  type="text"
  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-0 outline-none transition-colors placeholder:text-gray-400"
  placeholder="Enter text..."
/>
```

### Status Badge (Running)
```jsx
<span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
  RUNNING
</span>
```

## Utility Classes

### Custom Utilities (from global.css)

- `.content-container` - Max-width container with responsive padding
- `.section-spacing` - Consistent section vertical spacing
- `.card` - Base card styles
- `.focus-ring` - Standard focus ring
- `.truncate-2` / `.truncate-3` - Multi-line text truncation
- `.transition-base` - Standard transition properties

### Typography Classes

- `.heading-1` through `.heading-4` - Heading styles
- `.body-text`, `.body-small`, `.body-tiny` - Body text variants
- `.label`, `.label-small` - Label styles

### Layout Classes

- `.page-container` - Page-level container
- `.content-area` - Content area with padding
- `.card-base`, `.card-large`, `.card-compact` - Card variants
- `.card-interactive` - Interactive card with hover

### Form Classes

- `.input-base` - Base input styling
- `.input-error` - Error state for inputs

### Accessibility

- `.sr-only` - Screen reader only content
- `.skip-link` - Skip to main content link

## Design Principles

1. **Clarity First** - Every element has a clear purpose
2. **Consistent Spacing** - Use the 4px scale religiously
3. **Accessible Contrast** - All text meets WCAG AA minimum
4. **Purposeful Color** - Use color to communicate meaning
5. **Readable Typography** - Prioritize legibility
6. **Subtle Elevation** - Use shadows sparingly
7. **Predictable Interactions** - Consistent hover/focus/active states
8. **Enterprise Confidence** - Professional, stable, trustworthy

## Usage Guidelines

- **DO** use built-in Tailwind classes in JSX
- **DO** use semantic color names (emerald for success, red for errors)
- **DO** maintain consistent spacing using the scale
- **DON'T** create arbitrary spacing values
- **DON'T** use colors outside the defined palette
- **DON'T** rely on color alone to convey information
