# CloudDesk EDU App Shell Responsive Behavior Spec

## Overview

This document defines the responsive behavior of the App Shell (TopNav + Sidebar + Main Content) across mobile, tablet, and desktop devices, ensuring CloudDesk EDU maintains its enterprise SaaS credibility at all screen sizes.

---

## Current State Analysis

**Existing Implementation:**
- Sidebar: Fixed at 240px (`w-60`), always visible, positioned at left edge
- TopNav: Fixed at top with `ml-60` (assumes sidebar always present)
- Main Content: Offset by sidebar width (`lg:ml-60`), centered with max-width

**Issues to Address:**
- TopNav has hardcoded `ml-60` margin (breaks on mobile/tablet)
- No mobile menu/hamburger implementation
- Sidebar has no collapse/expand mechanism
- No responsive breakpoint handling

---

## Layout Behavior by Device Tier

### 1. Desktop (≥ 1024px / `lg` breakpoint)

#### TopNav
- **Position**: Fixed at top, full viewport width
- **Height**: 64px (`h-16`)
- **Layout**: 
  - Left: Page title/breadcrumbs
  - Right: Help icon, notifications bell, user avatar menu
- **Margin**: `lg:ml-60` to account for sidebar width
- **Background**: White with bottom border
- **Z-index**: `z-40` (above content, below modals)

#### Sidebar
- **Position**: Fixed at left edge, full viewport height
- **Width**: 240px (`w-60`)
- **Visibility**: Always visible by default
- **Collapse behavior**: 
  - Optional: Add collapse toggle button (chevron icon)
  - When collapsed: Reduce to 64px (`w-16`), show icons only
  - When expanded: Full 240px with labels
  - State persists in localStorage
- **Content**:
  - Logo + "CloudDesk" text (top section, 64px height)
  - Navigation items with icons + labels
  - Icons: 20px (`w-5 h-5`)
  - Text: 14px (`text-sm`), medium weight
  - Active state: Indigo background + indigo text
  - Hover state: Light gray background
- **Background**: White with right border
- **Z-index**: `z-50` (above TopNav)

#### Main Content
- **Position**: Relative, to the right of sidebar
- **Margin**: `lg:ml-60` (or `lg:ml-16` when sidebar collapsed)
- **Padding**: `px-8 lg:px-12` (32-48px horizontal)
- **Max-width**: `max-w-7xl` (1280px), centered with `mx-auto`
- **Vertical padding**: `py-8` (32px)

**Enterprise UX Considerations:**
- Sidebar always visible = quick navigation, professional layout
- Optional collapse = more workspace for data-heavy views
- Persistent state = respects user preference
- Clear visual hierarchy with borders and spacing

---

### 2. Tablet (640px – 1023px / `sm` to `lg`)

#### Recommended Approach: **Overlay Sidebar with Toggle**

**Why overlay instead of reduced-width?**
- **More content space**: When sidebar is hidden, content gets full width (critical for tables/charts)
- **Cleaner UX**: Avoids cramped icon-only sidebar that's hard to use on touch devices
- **Consistent pattern**: Same behavior as mobile, easier to implement and maintain
- **Enterprise precedent**: Most enterprise tools (Salesforce, AWS Console, Azure Portal) use overlay on tablet

#### TopNav
- **Position**: Fixed at top, full viewport width
- **Height**: 64px (`h-16`)
- **Layout**:
  - Left: **Hamburger menu icon** (visible on `< lg`) + Page title
  - Right: Notifications bell, user avatar (help icon optional—can hide on smaller tablets)
- **Margin**: No left margin (`ml-0` on `< lg`)
- **Hamburger icon**: 
  - 24px (`w-6 h-6`), menu icon (three horizontal lines)
  - Positioned at far left with `px-4` padding
  - Toggles sidebar overlay on click

#### Sidebar
- **Position**: Fixed at left edge, full viewport height
- **Width**: 240px (`w-60`) when open
- **Visibility**: Hidden by default (`-translate-x-full`)
- **Behavior**:
  - Opens as overlay when hamburger clicked
  - Slides in from left with transition (`transition-transform duration-300`)
  - Overlays content (does not push it)
  - Backdrop/scrim behind sidebar (semi-transparent black, `bg-black/50`)
  - Closes when:
    - User clicks backdrop
    - User selects a navigation item
    - User clicks close icon (X) in sidebar header
- **Content**: Same as desktop (logo + nav items with icons + labels)
- **Z-index**: `z-50` (above everything except modals)

#### Main Content
- **Position**: Relative, full width
- **Margin**: No left margin (`ml-0` on `< lg`)
- **Padding**: `px-6 sm:px-8` (24-32px horizontal)
- **Max-width**: `max-w-7xl`, centered
- **Vertical padding**: `py-6` (24px)

**Enterprise UX Considerations:**
- Hamburger menu is universally understood, even in enterprise contexts
- Overlay preserves full content width for productivity
- Backdrop clearly indicates modal state
- Smooth transitions feel polished, not janky

---

### 3. Mobile (< 640px / `< sm`)

#### TopNav
- **Position**: Fixed at top, full viewport width
- **Height**: 56px (`h-14`) — slightly shorter for mobile
- **Layout**:
  - Left: **Hamburger menu icon** + Logo (icon only, no text)
  - Right: Notifications bell (badge only if unread), user avatar
  - **Hide**: Help icon, page title (save space)
- **Padding**: `px-4` (16px)
- **Hamburger icon**: Same as tablet (24px, menu icon)

#### Sidebar
- **Position**: Fixed at left edge, full viewport height
- **Width**: 280px (`w-70`) — slightly wider for easier touch targets
- **Visibility**: Hidden by default (`-translate-x-full`)
- **Behavior**: Same as tablet (overlay with backdrop)
- **Content**:
  - Logo + "CloudDesk" text (full branding)
  - Navigation items with icons + labels
  - Larger touch targets: `py-3` instead of `py-2` (48px minimum height)
  - Close button (X icon) in top-right corner of sidebar
- **Z-index**: `z-50`

#### Main Content
- **Position**: Relative, full width
- **Margin**: No left margin
- **Padding**: `px-4` (16px horizontal)
- **Max-width**: None (full width within padding)
- **Vertical padding**: `py-4` (16px)

**Enterprise UX Considerations:**
- Compact TopNav maximizes content space
- Larger touch targets (48px minimum) for usability
- Full branding in sidebar maintains professional feel
- Clear close affordance (X button) for less tech-savvy users

---

## Component State Management

### Sidebar State

```typescript
// In AppShell component
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// Desktop: Sidebar always visible (controlled by CSS, not state)
// Tablet/Mobile: Sidebar controlled by isSidebarOpen state

// Toggle function
const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

// Close function (for backdrop click, nav item click)
const closeSidebar = () => setIsSidebarOpen(false);
```

### Desktop Collapse State (Optional Enhancement)

```typescript
// Optional: For desktop sidebar collapse feature
const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
  return localStorage.getItem('sidebarCollapsed') === 'true';
});

const toggleSidebarCollapse = () => {
  const newState = !isSidebarCollapsed;
  setIsSidebarCollapsed(newState);
  localStorage.setItem('sidebarCollapsed', String(newState));
};
```

---

## Tailwind Implementation Guidance

### AppShell Structure

```
<div className="min-h-screen bg-slate-50">
  {/* TopNav - responsive margin */}
  <TopNav 
    onMenuClick={toggleSidebar} 
    className="lg:ml-60" // or lg:ml-16 if collapsed
  />
  
  {/* Sidebar - responsive visibility */}
  <Sidebar 
    isOpen={isSidebarOpen}
    onClose={closeSidebar}
    className="
      fixed left-0 top-0 h-screen w-60 z-50
      lg:translate-x-0 // Always visible on desktop
      -translate-x-full // Hidden on mobile/tablet
      transition-transform duration-300
      ${isSidebarOpen ? 'translate-x-0' : ''} // Show when open
    "
  />
  
  {/* Backdrop - only on mobile/tablet when sidebar open */}
  {isSidebarOpen && (
    <div 
      className="fixed inset-0 bg-black/50 z-40 lg:hidden"
      onClick={closeSidebar}
    />
  )}
  
  {/* Main Content - responsive margin */}
  <main className="
    lg:ml-60 // Offset by sidebar on desktop
    pt-16 // Offset by TopNav height
  ">
    <div className="
      max-w-7xl mx-auto
      px-4 sm:px-6 lg:px-8
      py-4 sm:py-6 lg:py-8
    ">
      <Outlet />
    </div>
  </main>
</div>
```

### TopNav Responsive Classes

```typescript
// Container
className="
  fixed top-0 right-0 left-0 // Full width on mobile
  lg:left-60 // Offset by sidebar on desktop
  h-14 sm:h-16 // Shorter on mobile
  bg-white border-b border-gray-200
  z-40
"

// Hamburger button (only visible on mobile/tablet)
className="
  lg:hidden // Hide on desktop
  p-2 text-gray-600 hover:text-gray-900
  hover:bg-gray-100 rounded-lg
"

// Page title (hide on mobile)
className="hidden sm:block text-base font-semibold"
```

### Sidebar Responsive Classes

```typescript
// Container
className="
  fixed left-0 top-0 h-screen w-60
  bg-white border-r border-gray-200
  z-50
  
  // Mobile/Tablet: Hidden by default, slide in when open
  -translate-x-full lg:translate-x-0
  transition-transform duration-300 ease-in-out
  
  // When open (controlled by state)
  ${isOpen ? 'translate-x-0' : ''}
"

// Close button (only on mobile/tablet)
className="
  lg:hidden // Hide on desktop
  absolute top-4 right-4
  p-2 text-gray-600 hover:text-gray-900
  hover:bg-gray-100 rounded-lg
"

// Nav items - larger touch targets on mobile
className="
  flex items-center gap-3 px-3
  py-2 sm:py-2.5 lg:py-2 // Slightly larger on tablet
  rounded-lg text-sm font-medium
  transition-colors
"
```

---

## Visual Hierarchy & Enterprise Feel

### How to Maintain Enterprise Credibility

#### 1. **Professional Color Palette**
- Stick to neutral grays (slate-50, slate-200, slate-900)
- Use indigo accent sparingly (active states, primary actions)
- Avoid bright, playful colors

#### 2. **Consistent Typography**
- Use system font stack (already in design system)
- Maintain font-weight hierarchy: semibold for headings, medium for nav, regular for body
- Keep font sizes consistent: 14px for nav, 16px for headings

#### 3. **Precise Spacing**
- Use 8px grid system (Tailwind's default)
- Consistent padding: 16px mobile, 24px tablet, 32px desktop
- Maintain vertical rhythm with space-y utilities

#### 4. **Subtle Animations**
- Sidebar slide: 300ms ease-in-out (smooth but not slow)
- Hover states: 150ms transition-colors (responsive but not jarring)
- Avoid bouncy or elastic animations

#### 5. **Clear Affordances**
- Hamburger icon universally recognized
- Backdrop clearly indicates modal state
- Active states visually distinct (background + text color)
- Hover states subtle but noticeable

#### 6. **Touch-Friendly Targets**
- Minimum 44×44px on mobile (48px preferred)
- Adequate spacing between interactive elements
- Larger padding on mobile nav items

#### 7. **Consistent Iconography**
- Use Lucide React icons (already in project)
- 20px icons in sidebar, 24px in TopNav
- Stroke-width: 2 for consistency

---

## Responsive Breakpoint Summary

| Element | Mobile (< 640px) | Tablet (640-1023px) | Desktop (≥ 1024px) |
|---------|------------------|---------------------|-------------------|
| **TopNav Height** | 56px (`h-14`) | 64px (`h-16`) | 64px (`h-16`) |
| **TopNav Margin** | None | None | `ml-60` (sidebar width) |
| **Hamburger** | Visible | Visible | Hidden |
| **Page Title** | Hidden | Visible | Visible |
| **Sidebar Width** | 280px (when open) | 240px (when open) | 240px (always visible) |
| **Sidebar Behavior** | Overlay (hidden default) | Overlay (hidden default) | Fixed (always visible) |
| **Backdrop** | Yes (when open) | Yes (when open) | No |
| **Content Margin** | None | None | `ml-60` (sidebar width) |
| **Content Padding** | 16px | 24-32px | 32-48px |

---

## Implementation Checklist

### Phase 1: Core Responsive Behavior
- [ ] Add `isSidebarOpen` state to AppShell
- [ ] Add hamburger button to TopNav (visible on `< lg`)
- [ ] Make TopNav margin responsive (`lg:ml-60`)
- [ ] Make Sidebar responsive (overlay on `< lg`, fixed on `≥ lg`)
- [ ] Add backdrop component (visible on `< lg` when sidebar open)
- [ ] Add close button to Sidebar (visible on `< lg`)
- [ ] Implement sidebar toggle/close functions
- [ ] Add transition animations (slide-in, backdrop fade)

### Phase 2: Polish & Refinement
- [ ] Adjust TopNav height for mobile (`h-14` on `< sm`)
- [ ] Hide page title on mobile
- [ ] Increase touch targets on mobile nav items
- [ ] Test on real devices (iPhone, iPad, desktop)
- [ ] Add keyboard navigation (Escape to close sidebar)
- [ ] Add focus management (trap focus in sidebar when open)
- [ ] Test with screen readers

### Phase 3: Optional Enhancements
- [ ] Desktop sidebar collapse feature (icon-only mode)
- [ ] Persist sidebar state in localStorage
- [ ] Add keyboard shortcuts (Cmd+K for search, Cmd+B for sidebar)
- [ ] Add breadcrumbs to TopNav on desktop
- [ ] Add search bar to TopNav on desktop

---

## Accessibility Considerations

### Keyboard Navigation
- **Hamburger button**: Focusable, activates with Enter/Space
- **Sidebar**: Focus trap when open on mobile/tablet
- **Escape key**: Closes sidebar on mobile/tablet
- **Tab order**: TopNav → Sidebar (if open) → Main content

### Screen Readers
- **Hamburger button**: `aria-label="Open navigation menu"` / `aria-expanded={isSidebarOpen}`
- **Sidebar**: `role="navigation"` with `aria-label="Main navigation"`
- **Backdrop**: `aria-hidden="true"` (decorative only)
- **Close button**: `aria-label="Close navigation menu"`

### Focus Management
- When sidebar opens: Move focus to first nav item or close button
- When sidebar closes: Return focus to hamburger button
- Prevent focus from leaving sidebar when open on mobile/tablet

---

## Testing Strategy

### Breakpoint Testing
- Test at exact breakpoints: 639px, 640px, 1023px, 1024px
- Test in between: 375px (iPhone), 768px (iPad portrait), 1440px (laptop)

### Device Testing
- **Mobile**: iPhone SE (375px), iPhone 14 (390px), Pixel 5 (393px)
- **Tablet**: iPad (768px portrait, 1024px landscape), iPad Pro (834px portrait)
- **Desktop**: 1280px, 1440px, 1920px

### Interaction Testing
- Hamburger opens/closes sidebar
- Backdrop closes sidebar
- Nav item click closes sidebar (mobile/tablet)
- Sidebar state persists on desktop (if collapse feature added)
- Smooth transitions, no layout shift
- No horizontal scrolling at any breakpoint

### Accessibility Testing
- Keyboard navigation works
- Screen reader announces correctly
- Focus management works
- Color contrast meets WCAG AA

---

## Success Criteria

✅ **Functional**
- Sidebar visible on desktop, overlay on mobile/tablet
- Hamburger menu works on mobile/tablet
- No layout breaks at any breakpoint
- Smooth transitions, no jank

✅ **Visual**
- Maintains enterprise SaaS aesthetic
- Consistent spacing and typography
- Professional color palette
- Clear visual hierarchy

✅ **Accessible**
- Keyboard navigable
- Screen reader friendly
- Focus management works
- Meets WCAG AA standards

✅ **Performance**
- No layout shift on load
- Smooth 60fps animations
- Fast interaction response (<100ms)
