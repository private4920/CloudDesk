# CloudDesk EDU App Shell Specification

## Overview

The App Shell is the persistent frame that wraps all authenticated application pages. It provides consistent navigation, branding, and layout structure across the entire product. This specification defines the desktop-first layout with responsive considerations for tablet and mobile.

---

## 1. Top Navigation Bar

### Purpose
The top bar provides global context, quick actions, and user account access. It remains visible at all times to maintain orientation and provide escape routes.

### Layout & Dimensions

**Height**: 64px (4rem) - Fixed height on all screen sizes

**Background**: `white` (#FFFFFF)

**Border**: Bottom border, 1px solid `gray-200` (#E5E7EB)

**Shadow**: None by default (border provides sufficient separation)

**Z-index**: 40 (sits above content but below modals)

**Scroll Behavior**: Sticky (position: sticky, top: 0) - Remains visible when scrolling page content

---

### Left Cluster: Branding

**Logo + Product Name**
- Position: Left-aligned, 24px padding from left edge
- Logo: 32px × 32px square or rectangular mark
- Product name: "CloudDesk EDU"
  - Font: Inter, 18px (1.125rem)
  - Weight: 600 (semibold)
  - Color: `gray-900` (#111827)
  - Spacing: 12px gap between logo and text
- Clickable: Entire logo + name area links to dashboard (authenticated) or home (public)
- Hover: No background change, cursor pointer

**Mobile Behavior** (< 768px):
- Logo size: 28px × 28px
- Product name: Remains visible or abbreviates to "CloudDesk"
- Left padding: 16px

---

### Center Cluster: Global Navigation (Optional)

**Purpose**: Quick access to key sections (primarily for marketing/public pages)

**Layout**:
- Horizontal list of links
- Centered in available space between left and right clusters
- 32px gap between links

**Link Style**:
- Text: 14px, weight 500, `gray-600`
- Hover: Text `gray-900`, background `gray-50`, padding 8px horizontal, 6px vertical, rounded 6px
- Active: Text `indigo-600`, background `indigo-50`
- Focus: 2px `indigo-600` ring

**Typical Links** (for public/marketing pages):
- Product
- Pricing
- Documentation
- About

**Authenticated App Behavior**:
- Center cluster is typically empty or minimal
- Navigation happens via sidebar instead
- Optional: Breadcrumb trail can appear here (e.g., "Dashboard > My Desktops > Ubuntu 22.04")

**Mobile Behavior**:
- Hide center links on mobile
- Move to hamburger menu if needed

---

### Right Cluster: Actions & User

**Layout**:
- Right-aligned, 24px padding from right edge
- Horizontal flex with 12px gap between items
- Items aligned vertically centered

**Components** (left to right):

1. **Search Button** (Optional)
   - Icon button: 40px × 40px
   - Icon: Search (Lucide), 20px, `gray-500`
   - Background: Transparent
   - Hover: Background `gray-100`, icon `gray-900`
   - Click: Opens search modal or input
   - Mobile: Can be hidden or moved to menu

2. **Notifications Button** (Optional)
   - Icon button: 40px × 40px
   - Icon: Bell (Lucide), 20px, `gray-500`
   - Background: Transparent
   - Hover: Background `gray-100`, icon `gray-900`
   - Badge: Red dot (8px circle) on top-right if unread notifications
   - Click: Opens notifications dropdown
   - Mobile: Visible

3. **Help Button** (Optional)
   - Icon button: 40px × 40px
   - Icon: HelpCircle (Lucide), 20px, `gray-500`
   - Background: Transparent
   - Hover: Background `gray-100`, icon `gray-900`
   - Click: Opens help menu or documentation
   - Mobile: Can be hidden

4. **Primary CTA** (Public pages only)
   - Button: "Get Started" or "Open Dashboard"
   - Style: Primary button variant (indigo background, white text)
   - Size: Default (px-4 py-2)
   - Mobile: Text may shorten to "Start" or icon only

5. **User Profile Menu**
   - Avatar: 32px × 32px circle
   - Background: `indigo-600` with white initials (if no photo)
   - Border: 2px solid `white` (optional)
   - Hover: Ring 2px `gray-300`
   - Click: Opens dropdown menu
   - Dropdown position: Right-aligned, 8px below avatar
   - Dropdown width: 240px
   - Dropdown items:
     - User name + email (non-clickable header)
     - Divider
     - "Profile"
     - "Settings"
     - "Billing"
     - Divider
     - "Sign Out" (text `red-600`)

**Mobile Behavior** (< 768px):
- Right padding: 16px
- Hide optional buttons (search, help)
- Keep notifications and profile
- Primary CTA may become icon only or move to menu

---

### Responsive Breakpoints

**Desktop** (≥ 1024px):
- Full layout as described
- All elements visible

**Tablet** (768px - 1023px):
- Reduce horizontal padding to 16px
- Hide center navigation or move to menu
- Keep essential right cluster items

**Mobile** (< 768px):
- Add hamburger menu button (left of logo or right side)
- Hide center navigation
- Minimal right cluster (notifications + profile only)
- Hamburger opens sidebar as overlay

---

## 2. Sidebar

### Purpose
The sidebar provides primary navigation for authenticated users. It's the main way to move between major sections of the application.

### Layout & Dimensions

**Width**: 240px (15rem) - Fixed width on desktop

**Background**: `gray-50` (#F9FAFB)

**Border**: Right border, 1px solid `gray-200` (#E5E7EB)

**Height**: 100vh minus top bar height (calc(100vh - 64px))

**Position**: Fixed on left side, below top bar

**Z-index**: 30 (below top bar, above content)

**Padding**: 12px horizontal, 16px vertical

---

### Structure

The sidebar is divided into three sections:

1. **Top Section**: Primary navigation items
2. **Middle Section**: Secondary or contextual items (optional)
3. **Bottom Section**: User profile and settings (pinned to bottom)

---

### Navigation Items

**Item Structure**:
- Icon + Label layout
- Full width of sidebar (minus padding)
- Height: 40px per item
- Padding: 12px horizontal, 8px vertical
- Border radius: 8px (medium)
- Gap between icon and label: 12px

**Icon**:
- Size: 20px × 20px
- Stroke width: 2px
- Color: Inherits from text color

**Label**:
- Font: Inter, 14px
- Weight: 500 (medium)
- Color: Varies by state

**Spacing**:
- 4px gap between navigation items
- 24px gap between sections (use divider or spacing)

---

### Navigation Item States

**Inactive (Default)**:
- Background: Transparent
- Text: `gray-900` (#111827)
- Icon: `gray-900`
- Cursor: Pointer

**Hover**:
- Background: `white` (#FFFFFF)
- Text: `gray-900` (no change)
- Icon: `gray-900` (no change)
- Transition: 150ms ease-in-out
- Cursor: Pointer

**Active (Current Page)**:
- Background: `indigo-50` (#EEF2FF)
- Text: `indigo-600` (#4F46E5)
- Icon: `indigo-600`
- Font weight: 600 (semibold)
- Optional: 3px left border in `indigo-600`

**Focus**:
- Ring: 2px `indigo-600` with 2px offset
- Maintains hover or active appearance

**Disabled**:
- Background: Transparent
- Text: `gray-400` (#9CA3AF)
- Icon: `gray-400`
- Cursor: not-allowed
- Opacity: 60%

---

### Primary Navigation Items

**Recommended Structure**:

1. **Dashboard** (Home icon)
   - Overview of all desktops and activity
   - Default landing page

2. **Desktops** (Monitor icon)
   - List and manage cloud desktops
   - Primary feature

3. **Apps** (Grid icon)
   - Application library and launcher
   - Secondary feature

4. **Files** (FolderOpen icon)
   - Cloud storage and file management
   - Secondary feature

5. **Usage & Cost** (BarChart icon)
   - Resource usage and billing
   - Important for transparency

6. **Classroom Mode** (Users icon)
   - Multi-user management (teaser/beta)
   - Optional badge: "Beta" or "New"

7. **Settings** (Settings icon)
   - Account and application settings
   - Can be in bottom section instead

---

### Bottom Section: User Profile

**Layout**:
- Pinned to bottom of sidebar
- Top border: 1px solid `gray-200`
- Padding top: 12px
- Same horizontal padding as navigation items

**Profile Button**:
- Full width
- Height: 48px
- Padding: 12px
- Border radius: 8px
- Background: Transparent
- Hover: Background `white`
- Click: Opens profile menu or navigates to profile page

**Content**:
- Avatar: 32px × 32px circle, left-aligned
- User info: Right of avatar, 12px gap
  - Name: 14px, weight 500, `gray-900`
  - Email or role: 13px, weight 400, `gray-500`
- Optional: Chevron or menu icon on far right

**Alternative**: Simple "Profile" navigation item instead of expanded user card

---

### Responsive Behavior

**Desktop** (≥ 1024px):
- Sidebar always visible
- Fixed 240px width
- Content area starts at 240px from left

**Tablet** (768px - 1023px):
- Option A: Sidebar remains visible, slightly narrower (200px)
- Option B: Sidebar collapses to icon-only (64px width)
  - Show icons only, hide labels
  - Tooltip on hover shows label
- Option C: Sidebar hidden by default, toggle button in top bar

**Mobile** (< 768px):
- Sidebar hidden by default
- Hamburger button in top bar toggles sidebar
- Sidebar appears as overlay (position: fixed, z-index: 50)
- Backdrop: Semi-transparent black (rgba(0,0,0,0.5))
- Sidebar slides in from left
- Click outside or close button dismisses sidebar
- Sidebar width: 280px (slightly wider for touch targets)

---

### Collapsed Sidebar (Icon-Only Mode)

**Width**: 64px

**Item Layout**:
- Icon centered horizontally
- No label visible
- Tooltip appears on hover (right side of icon)
- Active state: Background `indigo-50`, icon `indigo-600`

**Toggle Button**:
- Position: Bottom of sidebar or top
- Icon: ChevronLeft (expanded) / ChevronRight (collapsed)
- Size: 32px × 32px
- Hover: Background `white`

---

## 3. Content Area

### Purpose
The content area displays page-specific content. It must accommodate various layouts: dashboards, forms, tables, detail views, and empty states.

### Layout & Dimensions

**Position**: 
- Desktop: Starts 240px from left (sidebar width), 64px from top (top bar height)
- Mobile: Full width, 64px from top

**Background**: `gray-50` (#F9FAFB) - Matches page background

**Min Height**: calc(100vh - 64px) - Ensures full viewport height

**Overflow**: Auto (vertical scroll when content exceeds viewport)

---

### Padding & Spacing

**Horizontal Padding**:
- Desktop (≥ 1024px): 32px (2rem) on left and right
- Tablet (768px - 1023px): 24px (1.5rem)
- Mobile (< 768px): 16px (1rem)

**Vertical Padding**:
- Top: 32px (2rem) on desktop, 24px on tablet, 16px on mobile
- Bottom: 32px (2rem) on all screen sizes (ensures content doesn't touch bottom)

**Max Width**:
- Content container: 1280px (80rem) max-width
- Centered with auto margins when viewport exceeds max-width
- Prevents excessive line length on ultra-wide screens

**Exception**: Full-width tables or data grids can extend to edges (no max-width)

---

### Recommended Layout Patterns

### Pattern 1: Dashboard / Overview Page

**Structure**:
```
[Page Header]
  - Title (H1, 24px)
  - Subtitle or description (14px, gray-500)
  - Optional: Primary action button (right-aligned)
  - Spacing below: 32px

[Summary Cards Row]
  - Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
  - Gap: 24px
  - Card height: Auto (equal height preferred)
  - Spacing below: 32px

[Main Content Section]
  - Card or table with detailed information
  - Full width of content area
```

**Grid Specification**:
- Desktop: `grid-cols-3 gap-6`
- Tablet: `md:grid-cols-2 gap-4`
- Mobile: `grid-cols-1 gap-4`

---

### Pattern 2: List / Table Page

**Structure**:
```
[Page Header]
  - Title + description
  - Actions: Search input, filter buttons, "Create" button
  - Spacing below: 24px

[Filters / Tabs]
  - Pill tabs or filter chips
  - Spacing below: 16px

[Table Card]
  - White card containing table
  - Padding: 0 (table extends to card edges)
  - Pagination at bottom
```

**Table Behavior**:
- Horizontal scroll on mobile if needed
- Sticky header on scroll
- Row hover: Background `gray-50`

---

### Pattern 3: Detail / Form Page

**Structure**:
```
[Page Header]
  - Back button or breadcrumb
  - Title + status badge
  - Actions: Edit, Delete, etc.
  - Spacing below: 32px

[Content Card]
  - Max width: 720px (centered for forms)
  - White card with 24px padding
  - Sections divided by headings or dividers
  - Form fields: Full width of card
  - Actions at bottom: Right-aligned
```

**Form Layout**:
- Labels above inputs (8px gap)
- Input fields: Full width
- Spacing between fields: 16px
- Helper text below inputs (4px gap)
- Submit button: Primary, right-aligned
- Cancel button: Secondary, left of submit

---

### Pattern 4: Empty State

**Structure**:
```
[Centered Container]
  - Max width: 480px
  - Centered horizontally and vertically
  - Icon: 64px, gray-400
  - Title: 18px, gray-900, weight 600
  - Description: 14px, gray-500
  - Primary action button
  - Optional: Secondary action link
```

**Vertical Centering**:
- Use flexbox or grid to center in available height
- Ensure minimum top padding (80px) for visual balance

---

### Spacing Between Sections

**Major Sections**: 48px (3rem) vertical gap
- Between page header and first content section
- Between distinct content areas

**Related Sections**: 32px (2rem) vertical gap
- Between summary cards and main content
- Between form sections

**Within Sections**: 16px (1rem) vertical gap
- Between form fields
- Between list items
- Between related elements

---

### Responsive Grid System

**Desktop** (≥ 1024px):
- 12-column grid
- Gap: 24px
- Common layouts: 3-3-3-3, 4-4-4, 6-6, 8-4

**Tablet** (768px - 1023px):
- 8-column grid
- Gap: 16px
- Common layouts: 4-4, 8 (full width)

**Mobile** (< 768px):
- 4-column grid (or single column)
- Gap: 16px
- Most content: Full width

---

## 4. Complete Layout Composition

### Desktop Layout (≥ 1024px)

```
┌─────────────────────────────────────────────────────────────┐
│ Top Bar (64px height, white, sticky)                       │
│ [Logo] [Product Name]        [Search] [Notifications] [👤] │
├──────────┬──────────────────────────────────────────────────┤
│          │                                                  │
│ Sidebar  │ Content Area                                     │
│ (240px)  │ (Remaining width, max 1280px centered)          │
│          │                                                  │
│ [Nav]    │ [Page Header]                                    │
│ [Nav]    │                                                  │
│ [Nav]    │ [Summary Cards Grid]                             │
│ [Nav]    │                                                  │
│          │ [Main Content Card]                              │
│          │                                                  │
│ ─────    │                                                  │
│ [👤]     │                                                  │
└──────────┴──────────────────────────────────────────────────┘
```

### Mobile Layout (< 768px)

```
┌─────────────────────────────┐
│ Top Bar (64px)              │
│ [☰] [Logo] [🔔] [👤]       │
├─────────────────────────────┤
│                             │
│ Content Area (Full width)   │
│                             │
│ [Page Header]               │
│                             │
│ [Card]                      │
│ [Card]                      │
│ [Card]                      │
│                             │
│ [Main Content]              │
│                             │
└─────────────────────────────┘

Sidebar (Overlay when open):
┌──────────────┐
│ Sidebar      │
│ (280px)      │
│              │
│ [Nav]        │
│ [Nav]        │
│ [Nav]        │
│              │
│ ─────        │
│ [👤]         │
└──────────────┘
```

---

## 5. Interaction Behaviors

### Sidebar Navigation

**Click Behavior**:
- Navigate to new page
- Update active state immediately
- Scroll content area to top
- Close mobile sidebar overlay if open

**Keyboard Navigation**:
- Tab: Move between navigation items
- Enter/Space: Activate navigation item
- Escape: Close mobile sidebar overlay

---

### Top Bar Interactions

**Scroll Behavior**:
- Top bar remains sticky (always visible)
- Optional: Reduce height slightly on scroll (64px → 56px) for more content space
- Optional: Add subtle shadow on scroll for depth

**Dropdown Menus**:
- Click to open (not hover)
- Click outside to close
- Escape key to close
- Focus trap within dropdown

---

### Responsive Transitions

**Sidebar Toggle**:
- Animation: 300ms ease-in-out
- Slide from left (mobile overlay)
- Fade backdrop in/out

**Content Reflow**:
- Smooth transition when sidebar collapses/expands
- Content area width adjusts with transition

---

## 6. Accessibility Requirements

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Logical tab order: Top bar → Sidebar → Content
- Skip link: "Skip to main content" (hidden, appears on focus)
- Focus indicators: 2px indigo ring on all interactive elements

### Screen Reader Support

- Semantic HTML: `<nav>`, `<main>`, `<header>`
- ARIA labels: "Main navigation", "User menu", "Page content"
- ARIA current: "page" on active navigation item
- Announce page changes on navigation

### Color Contrast

- All text meets WCAG AA minimum (4.5:1 for body text)
- Active states don't rely on color alone (use weight, icons, borders)
- Focus indicators have 3:1 contrast with background

---

## 7. Implementation Notes

### React Component Structure

```
<AppShell>
  <TopBar>
    <TopBarLeft>Logo + Brand</TopBarLeft>
    <TopBarCenter>Optional Nav</TopBarCenter>
    <TopBarRight>Actions + Profile</TopBarRight>
  </TopBar>
  
  <div className="flex">
    <Sidebar>
      <SidebarNav>Navigation Items</SidebarNav>
      <SidebarFooter>User Profile</SidebarFooter>
    </Sidebar>
    
    <main className="content-area">
      {children} {/* Page-specific content */}
    </main>
  </div>
</AppShell>
```

### State Management

- Sidebar open/closed state (mobile)
- Active navigation item
- User profile data
- Notification count

### Performance Considerations

- Sidebar navigation: Client-side routing (no full page reload)
- Lazy load dropdown menus
- Optimize avatar images
- Debounce search input

---

This specification provides complete guidance for implementing the CloudDesk EDU App Shell with enterprise-grade quality and responsive behavior.
