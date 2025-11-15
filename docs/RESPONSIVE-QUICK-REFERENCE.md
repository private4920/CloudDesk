# CloudDesk EDU Responsive Design Quick Reference

## Breakpoints

| Name | Width | Device Target |
|------|-------|---------------|
| Mobile | < 640px | Phones |
| Tablet | 640-1023px | iPads, small laptops |
| Desktop | ≥ 1024px | Laptops, monitors |

---

## Common Responsive Patterns

### Grid Layouts

```tsx
// 1 column mobile, 2 tablet, 3 desktop
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"

// 1 column mobile, 2 tablet, 4 desktop
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
```

### Flexbox Direction

```tsx
// Stack on mobile, row on tablet+
className="flex flex-col sm:flex-row gap-4"

// Stack on mobile/tablet, row on desktop
className="flex flex-col lg:flex-row gap-4"
```

### Responsive Padding

```tsx
// Container padding
className="px-4 sm:px-6 lg:px-8"

// Vertical padding
className="py-4 sm:py-6 lg:py-8"

// Card padding
className="p-4 sm:p-6"
```

### Responsive Typography

```tsx
// Headings
className="text-xl sm:text-2xl lg:text-3xl"
className="text-2xl sm:text-3xl lg:text-4xl"

// Body text
className="text-sm sm:text-base"
className="text-base sm:text-lg"
```

### Responsive Spacing

```tsx
// Gaps
className="gap-4 sm:gap-6 lg:gap-8"

// Margins
className="mb-4 sm:mb-6 lg:mb-8"
className="mt-4 sm:mt-6 lg:mt-8"

// Space between
className="space-y-4 sm:space-y-6"
```

### Conditional Visibility

```tsx
// Hide on mobile, show on tablet+
className="hidden sm:block"

// Show on mobile, hide on desktop
className="block lg:hidden"

// Hide on mobile/tablet, show on desktop
className="hidden lg:block"
```

### Responsive Width

```tsx
// Full-width on mobile, auto on desktop
className="w-full lg:w-auto"

// Full-width on mobile, max-width on desktop
className="w-full sm:max-w-md"
```

### Sticky Positioning

```tsx
// Sticky on desktop only
className="lg:sticky lg:top-6"

// Always sticky
className="sticky top-0"
```

---

## Component-Specific Patterns

### AppShell

```tsx
// Sidebar offset for main content
className="lg:ml-60"

// Backdrop (mobile/tablet only)
className="fixed inset-0 bg-black/50 z-40 lg:hidden"
```

### Sidebar

```tsx
// Slide-in animation
className="fixed left-0 top-0 h-screen w-60 
  transition-transform duration-300 ease-in-out
  lg:translate-x-0
  -translate-x-full"

// When open
className={isOpen ? 'translate-x-0' : ''}
```

### TopNav

```tsx
// Responsive positioning
className="fixed top-0 right-0 left-0 lg:left-60"

// Hamburger menu (mobile/tablet only)
className="lg:hidden"
```

### Cards

```tsx
// Responsive card padding
className="p-4 sm:p-6"

// Hover effects (desktop only)
className="hover:shadow-lg hover:border-gray-300 transition-all"
```

### Buttons

```tsx
// Full-width on mobile
className="w-full lg:w-auto"

// Full-width on mobile/tablet
className="w-full md:w-auto"
```

---

## Page-Specific Layouts

### Landing Page

```tsx
// Hero section
<section className="py-16 sm:py-20 lg:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
      {/* Content */}
    </div>
  </div>
</section>

// Feature cards
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
  {/* Cards */}
</div>
```

### Dashboard

```tsx
// Page header
<div className="mb-6 sm:mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
  <div>
    <h1 className="text-xl sm:text-2xl">Title</h1>
  </div>
  <div className="mt-4 lg:mt-0">
    <Button className="w-full lg:w-auto">Action</Button>
  </div>
</div>

// Summary cards
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
  {/* Metric cards */}
</div>

// Search & filters
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
  <div className="w-full sm:max-w-md sm:flex-1">
    {/* Search */}
  </div>
  <div className="overflow-x-auto">
    {/* Filter tabs */}
  </div>
</div>
```

### Create Instance

```tsx
// Main layout
<div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
  {/* Left: Form (2/3 width on desktop) */}
  <div className="lg:col-span-2 space-y-4 sm:space-y-6">
    {/* Form sections */}
  </div>
  
  {/* Right: Summary (1/3 width on desktop, sticky) */}
  <div className="lg:col-span-1">
    <div className="lg:sticky lg:top-6 space-y-4">
      {/* Summary cards */}
    </div>
  </div>
</div>

// Preset cards
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
  {/* Preset options */}
</div>
```

---

## Touch Target Guidelines

### Minimum Sizes

- **Buttons**: 44×44px minimum (Tailwind default)
- **Links**: 44×44px minimum with padding
- **Form inputs**: 40px height minimum
- **Icons**: 24×24px minimum for tap targets

### Implementation

```tsx
// Button with adequate padding
<Button className="px-4 py-2">Action</Button>

// Icon button with padding
<button className="p-2">
  <Icon className="w-6 h-6" />
</button>

// Full-width button on mobile
<Button className="w-full sm:w-auto">Action</Button>
```

---

## Accessibility Patterns

### ARIA Labels

```tsx
// Hamburger menu
<button
  onClick={onMenuClick}
  aria-label="Open navigation menu"
  aria-expanded={isOpen}
>
  <Menu className="w-6 h-6" />
</button>

// Close button
<button
  onClick={onClose}
  aria-label="Close navigation menu"
>
  <X className="w-5 h-5" />
</button>
```

### Focus Management

```tsx
// Trap focus in sidebar when open
// Return focus to hamburger when closed
// Use native browser focus behavior
```

### Keyboard Navigation

```tsx
// All interactive elements focusable
// Tab order follows visual order
// Enter/Space activates buttons
// Escape closes modals/overlays
```

---

## Performance Tips

### CSS Transitions

```tsx
// Use Tailwind's transition utilities
className="transition-transform duration-300 ease-in-out"
className="transition-colors duration-150"
className="transition-all duration-200"
```

### Conditional Rendering

```tsx
// Only render backdrop when needed
{isSidebarOpen && (
  <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" />
)}

// Use CSS classes instead of conditional rendering when possible
className={`transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
```

### Image Optimization

```tsx
// Use appropriate image sizes
<img 
  src="/logo.png" 
  alt="Logo"
  className="w-10 h-10 sm:w-12 sm:h-12"
/>
```

---

## Testing Checklist

### Breakpoint Testing

- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 14)
- [ ] 640px (sm breakpoint)
- [ ] 768px (md breakpoint / iPad portrait)
- [ ] 1024px (lg breakpoint / iPad landscape)
- [ ] 1280px (desktop)
- [ ] 1920px (large desktop)

### Device Testing

- [ ] iPhone (Safari)
- [ ] Android phone (Chrome)
- [ ] iPad portrait (Safari)
- [ ] iPad landscape (Safari)
- [ ] Laptop (Chrome/Firefox/Safari)
- [ ] Desktop monitor (Chrome/Firefox/Safari)

### Interaction Testing

- [ ] Hamburger menu opens/closes
- [ ] Backdrop closes sidebar
- [ ] Nav items close sidebar on mobile
- [ ] All buttons tap-able
- [ ] Forms submit correctly
- [ ] No horizontal scrolling
- [ ] Smooth animations
- [ ] Keyboard navigation works

---

## Common Issues & Solutions

### Issue: Horizontal Scrolling

**Solution:**
```tsx
// Ensure container has max-width
className="max-w-7xl mx-auto"

// Use overflow-hidden on body
className="overflow-x-hidden"

// Check for fixed widths that exceed viewport
```

### Issue: Text Truncation

**Solution:**
```tsx
// Use truncate for single line
className="truncate"

// Use line-clamp for multiple lines
className="line-clamp-2"

// Ensure parent has min-w-0
className="min-w-0"
```

### Issue: Sidebar Not Closing

**Solution:**
```tsx
// Ensure onClick handlers stop propagation
onClick={(e) => {
  e.preventDefault();
  e.stopPropagation();
  onClose();
}}

// Check z-index values
// Sidebar: z-50
// Backdrop: z-40
// TopNav: z-40
```

### Issue: Layout Shift

**Solution:**
```tsx
// Use fixed heights for nav elements
className="h-16"

// Use sticky positioning carefully
className="lg:sticky lg:top-6"

// Avoid conditional rendering of large elements
```

---

## Resources

### Tailwind Documentation
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Flexbox](https://tailwindcss.com/docs/flex)
- [Grid](https://tailwindcss.com/docs/grid-template-columns)
- [Spacing](https://tailwindcss.com/docs/padding)
- [Typography](https://tailwindcss.com/docs/font-size)

### Design Specs
- `docs/responsive-layout-strategy.md`
- `docs/app-shell-responsive-spec.md`
- `docs/landing-page-responsive-spec.md`
- `docs/dashboard-page-responsive-spec.md`
- `docs/create-instance-page-responsive-spec.md`

### Implementation
- `docs/RESPONSIVE-IMPLEMENTATION-SUMMARY.md`
