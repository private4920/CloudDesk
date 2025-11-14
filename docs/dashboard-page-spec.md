# CloudDesk EDU Dashboard Page Specification

## Overview

The Dashboard page (`/dashboard`) is the primary landing page for authenticated users. It provides an at-a-glance view of all cloud desktop instances, their status, resource usage, and estimated costs. The page must balance information density with scannability, allowing users to quickly understand system state and take action.

**Primary Goals**:
1. Show overall system health and resource usage
2. Provide quick access to all instances
3. Enable filtering and searching for specific instances
4. Facilitate common actions (create, start, stop, view details)

**User Context**: Students, lecturers, and professionals managing 1-20 cloud desktop instances (typical use case: 2-5 instances).

---

## Page Structure

The Dashboard consists of:
1. Page Header (title, description, primary CTA)
2. Summary Metrics Row (3-4 stat cards)
3. Filters & Search Bar
4. Instance List/Table
5. Empty State (when no instances exist)

**Layout Container**:
- Max width: 1280px (matches content area spec)
- Horizontal padding: 32px (desktop), 24px (tablet), 16px (mobile)
- Vertical padding: 32px top, 32px bottom
- Background: `gray-50` (page background)

---

## 1. Page Header

### Purpose
Orient the user, provide context, and offer the primary action (creating a new instance).


### Layout & Dimensions

**Container**:
- Full width of content area
- Margin bottom: 32px (space before summary cards)
- Flex layout: Title/subtitle left, CTA right
- Vertical alignment: Center (on desktop)
- Mobile: Stack vertically, CTA full width below title

**Desktop Layout**:
```
┌────────────────────────────────────────────────────────────┐
│ [Title]                                    [Create Button] │
│ [Subtitle]                                                 │
└────────────────────────────────────────────────────────────┘
```

**Mobile Layout**:
```
┌──────────────────────┐
│ [Title]              │
│ [Subtitle]           │
│ [Create Button]      │
└──────────────────────┘
```

---

### Content

**Page Title**:
- Text: "Dashboard" or "My Desktops"
- Font: 24px (1.5rem), weight 600 (semibold)
- Color: `gray-900`
- Line height: 1.2
- Margin bottom: 4px

**Subtitle**:
- Text: "Manage your cloud desktop instances and monitor resource usage"
- Font: 14px (0.875rem), weight 400
- Color: `gray-500`
- Line height: 1.5
- Max width: 600px (prevents overly long lines)

**Primary CTA Button**:
- Text: "Create Desktop" or "New Instance"
- Icon: Plus icon (Lucide), 16px, left of text
- Style: Primary button (indigo-600 background, white text)
- Size: Default (px-4 py-2)
- Font: 14px, weight 500
- Rounded: 8px
- Shadow: Subtle raised
- Hover: Background indigo-700, shadow elevated
- Mobile: Full width, margin top 16px

---

## 2. Summary Metrics Row

### Purpose
Provide high-level system overview at a glance. Users should immediately understand how many instances they have, what's running, and approximate costs.


### Layout & Dimensions

**Container**:
- Grid layout: 4 columns on desktop, 2 on tablet, 1 on mobile
- Gap: 24px between cards
- Margin bottom: 32px (space before filters)

**Responsive Breakpoints**:
- Desktop (≥ 1024px): 4 columns
- Tablet (768px - 1023px): 2 columns (2×2 grid)
- Mobile (< 768px): 1 column (stacked)

---

### Summary Card Structure

**Visual Style**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 8px (medium)
- Padding: 24px (1.5rem)
- Shadow: Subtle raised (`0 1px 3px rgba(0,0,0,0.1)`)
- Min height: 120px (ensures consistent height across row)

**Content Layout** (Vertical stack):
1. Icon (top)
2. Label (below icon)
3. Primary metric (large number)
4. Optional: Secondary info or trend

**Spacing**:
- Icon to label: 12px
- Label to metric: 8px
- Metric to secondary info: 4px

---

### Card 1: Total Instances

**Icon**:
- Type: Monitor (Lucide)
- Size: 24px × 24px
- Color: `indigo-600`
- Position: Top left

**Label**:
- Text: "Total Desktops"
- Font: 14px, weight 500
- Color: `gray-500`

**Primary Metric**:
- Text: "5" (example number)
- Font: 36px (2.25rem), weight 600 (semibold)
- Color: `gray-900`
- Line height: 1

**Secondary Info** (Optional):
- Text: "3 active" or "+2 this month"
- Font: 13px, weight 400
- Color: `gray-500`
- Icon: Optional small trend arrow (up/down)

---

### Card 2: Running Instances

**Icon**:
- Type: Activity or Zap (Lucide)
- Size: 24px × 24px
- Color: `emerald-600` (green, indicates active)
- Position: Top left

**Label**:
- Text: "Running Now"
- Font: 14px, weight 500
- Color: `gray-500`

**Primary Metric**:
- Text: "3" (example number)
- Font: 36px, weight 600
- Color: `gray-900`

**Secondary Info**:
- Text: "2 stopped"
- Font: 13px, weight 400
- Color: `gray-500`

---

### Card 3: Estimated Monthly Cost

**Icon**:
- Type: DollarSign or CreditCard (Lucide)
- Size: 24px × 24px
- Color: `indigo-600`
- Position: Top left

**Label**:
- Text: "Est. Monthly Cost"
- Font: 14px, weight 500
- Color: `gray-500`

**Primary Metric**:
- Text: "$42.50" (example amount)
- Font: 36px, weight 600
- Color: `gray-900`

**Secondary Info**:
- Text: "Based on current usage"
- Font: 13px, weight 400
- Color: `gray-500`

**Alternative Secondary Info**:
- Text: "+$12 from last month" (with trend indicator)
- Color: `amber-600` if increasing, `emerald-600` if decreasing

---

### Card 4: Storage Used (Optional)

**Icon**:
- Type: HardDrive or Database (Lucide)
- Size: 24px × 24px
- Color: `indigo-600`
- Position: Top left

**Label**:
- Text: "Storage Used"
- Font: 14px, weight 500
- Color: `gray-500`

**Primary Metric**:
- Text: "128 GB" (example amount)
- Font: 36px, weight 600
- Color: `gray-900`

**Secondary Info**:
- Text: "of 500 GB available"
- Font: 13px, weight 400
- Color: `gray-500`

**Alternative Card 4: Active Projects**:
- Icon: Folder or Layers
- Label: "Active Projects"
- Metric: "4"
- Secondary: "12 total"

---

### Card Interaction (Optional)

**Hover State**:
- Border: `gray-300`
- Shadow: Elevated (`0 4px 6px rgba(0,0,0,0.07)`)
- Cursor: Pointer (if card is clickable)
- Transition: 150ms ease-in-out

**Clickable Behavior** (Optional):
- Card 1: Navigate to all instances (same as current page)
- Card 2: Filter to show only running instances
- Card 3: Navigate to billing/usage page
- Card 4: Navigate to storage management

**Recommendation**: Keep cards non-clickable initially (informational only). Add click behavior in later iteration if user testing shows demand.

---

## 3. Filters & Search Bar

### Purpose
Allow users to quickly find specific instances or filter by status. Must be immediately visible and easy to use without cluttering the interface.


### Layout & Dimensions

**Container**:
- Full width of content area
- Margin bottom: 24px (space before instance list)
- Flex layout: Search left, filters right (desktop)
- Mobile: Stack vertically, search first, filters below

**Desktop Layout**:
```
┌────────────────────────────────────────────────────────────┐
│ [Search Input]              [All][Running][Stopped][More▼] │
└────────────────────────────────────────────────────────────┘
```

**Mobile Layout**:
```
┌──────────────────────┐
│ [Search Input]       │
│ [All][Running][...]  │
└──────────────────────┘
```

---

### Search Input

**Visual Style**:
- Width: 320px (desktop), full width (mobile)
- Height: 40px
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 8px (medium)
- Padding: 10px left (for icon), 12px right
- Font: 14px, weight 400
- Placeholder: "Search desktops..." in `gray-400`

**Icon**:
- Type: Search (Lucide)
- Size: 16px × 16px
- Color: `gray-400`
- Position: Left side, 12px from left edge
- Text starts 36px from left edge (after icon + gap)

**States**:
- Default: Gray border, white background
- Hover: Border `gray-300`
- Focus: Border `indigo-600`, 2px ring `indigo-600` with 2px offset
- Filled: Text `gray-900`

**Behavior**:
- Live search: Filter results as user types (debounced 300ms)
- Clear button: X icon appears on right when text is entered
- Keyboard: Escape clears input, Enter focuses first result

---

### Filter Pills (Status Tabs)

**Container**:
- Inline-flex layout
- Background: `gray-100`
- Padding: 4px
- Rounded: 8px (medium)
- Gap: 4px between pills (handled by container padding)

**Pill Style**:
- Padding: 8px horizontal, 6px vertical
- Rounded: 6px (small)
- Font: 14px, weight 500
- Transition: 150ms ease-in-out

**Pill States**:

**Inactive**:
- Background: Transparent
- Text: `gray-600`
- Hover: Background `gray-50`, text `gray-900`

**Active**:
- Background: `white`
- Text: `gray-900`
- Shadow: Subtle (`0 1px 2px rgba(0,0,0,0.05)`)

**Focus**:
- Ring: 2px `indigo-600` with 2px offset

---

### Filter Options

**Pill 1: All**
- Text: "All"
- Shows: All instances regardless of status
- Default: Active on page load

**Pill 2: Running**
- Text: "Running"
- Shows: Only instances with RUNNING status
- Optional: Badge with count (e.g., "Running (3)")

**Pill 3: Stopped**
- Text: "Stopped"
- Shows: Only instances with STOPPED status

**Pill 4: Provisioning**
- Text: "Provisioning"
- Shows: Only instances with PROVISIONING status
- Optional: Hide if no instances are provisioning

**Additional Filter: Dropdown** (Optional)

**Position**: Right of filter pills, 16px gap

**Trigger Button**:
- Text: "Region: All" or just "More"
- Icon: ChevronDown (Lucide), 16px, right side
- Style: Secondary button (white background, gray border)
- Size: Same height as pills (40px total with container)

**Dropdown Menu**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 8px
- Shadow: Elevated
- Width: 200px
- Max height: 300px with scroll
- Position: Below trigger, right-aligned

**Dropdown Items**:
- Padding: 10px horizontal, 8px vertical
- Font: 14px, weight 400
- Color: `gray-900`
- Hover: Background `gray-50`
- Selected: Background `indigo-50`, text `indigo-900`, checkmark icon

**Filter Categories**:
- Region: US East, US West, EU, Asia
- Preset: Ubuntu, Windows, Custom
- Sort: Name, Created date, Status

---

### Mobile Behavior

**Search**:
- Full width
- Margin bottom: 12px

**Filter Pills**:
- Horizontal scroll if needed (overflow-x: auto)
- Snap to pill boundaries (scroll-snap-type: x mandatory)
- Hide scrollbar visually but keep functionality

**Dropdown**:
- Full width button
- Margin top: 12px
- Dropdown menu: Full width of container

---

## 4. Instance List / Table

### Purpose
Display all instances with key information and actions. Must be scannable, sortable, and provide quick access to common operations.

### Layout Decision: Table vs Cards

**Recommendation: Dense Table Layout**

**Rationale**:
- Users may have 5-20 instances; table is more scannable at scale
- Consistent column alignment aids comparison (specs, costs, status)
- Enterprise users expect table format for data-heavy interfaces
- Easier to implement sorting and bulk actions
- Cards work better for 1-5 items with rich content; tables for 5+ items with structured data

**Alternative**: Use cards on mobile (< 768px) for better touch targets and readability

---

### Table Structure

**Container**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 8px (medium)
- Shadow: Subtle raised
- Overflow: Hidden (rounded corners clip table edges)

**Table Layout**:
- Full width of container
- Border collapse: Separate (allows row borders)
- Font: 14px, weight 400

---

### Table Header

**Visual Style**:
- Background: `gray-50`
- Border bottom: 1px solid `gray-200`
- Height: 44px
- Padding: 12px horizontal (first/last cells), 8px (middle cells)
- Sticky: Top of table (position: sticky, top: 0) when scrolling

**Header Cell**:
- Font: 13px, weight 600 (semibold)
- Color: `gray-900`
- Text transform: None (sentence case)
- Vertical align: Middle
- Cursor: Pointer (if sortable)

**Sortable Headers**:
- Icon: ChevronUp or ChevronDown (Lucide), 14px
- Position: Right of text, 4px gap
- Color: `gray-400` (inactive), `gray-900` (active sort)
- Hover: Background `gray-100`

---

### Table Columns

**Column 1: Name**
- Width: 25% (flexible)
- Content: Instance name (e.g., "Ubuntu 22.04 LTS")
- Font: 14px, weight 500 (medium)
- Color: `gray-900`
- Truncate: Ellipsis if too long
- Sortable: Yes (alphabetical)

**Column 2: Status**
- Width: 12% (fixed)
- Content: Status badge (RUNNING, STOPPED, PROVISIONING, etc.)
- Badge style: As per component library spec
- Alignment: Left
- Sortable: Yes (by status priority)

**Column 3: Preset/OS**
- Width: 15% (flexible)
- Content: OS or preset name (e.g., "Ubuntu 22.04", "Windows 11")
- Font: 14px, weight 400
- Color: `gray-600`
- Sortable: Yes (alphabetical)

**Column 4: Resources**
- Width: 18% (flexible)
- Content: "4 vCPU • 8 GB RAM • 50 GB"
- Font: 13px, weight 400
- Color: `gray-600`
- Format: Compact, bullet-separated
- Sortable: Yes (by total resources)

**Column 5: Region**
- Width: 12% (fixed)
- Content: "US East", "EU West", etc.
- Font: 14px, weight 400
- Color: `gray-600`
- Sortable: Yes (alphabetical)

**Column 6: Created**
- Width: 13% (flexible)
- Content: Relative time ("2 hours ago", "3 days ago")
- Font: 13px, weight 400
- Color: `gray-500`
- Tooltip: Show exact timestamp on hover
- Sortable: Yes (by date, default sort)

**Column 7: Actions**
- Width: 5% (fixed, minimal)
- Content: Overflow menu icon (MoreVertical, Lucide)
- Alignment: Center
- Not sortable

**Total Columns**: 7 (can reduce to 5-6 on tablet by hiding Region or Created)

---

### Table Row

**Visual Style**:
- Height: 64px (generous for readability and touch targets)
- Padding: 12px horizontal (first/last cells), 8px (middle cells)
- Border bottom: 1px solid `gray-200`
- Background: `white`

**Row States**:

**Default**:
- Background: `white`
- Text: As specified per column

**Hover**:
- Background: `gray-50`
- Cursor: Pointer (entire row clickable)
- Transition: 100ms ease-in-out

**Focus** (keyboard navigation):
- Ring: 2px `indigo-600` inset
- Background: `gray-50`

**Selected** (if multi-select enabled):
- Background: `indigo-50`
- Border left: 3px solid `indigo-600`
- Checkbox: Visible and checked

---

### Row Actions

**Primary Action: View Details**
- Trigger: Click anywhere on row
- Behavior: Navigate to instance detail page (`/instances/:id`)
- Visual feedback: Hover state on entire row

**Secondary Actions: Overflow Menu**

**Trigger**:
- Icon: MoreVertical (Lucide), 20px
- Button: 32px × 32px, rounded 6px
- Background: Transparent
- Hover: Background `gray-100`
- Click: Opens dropdown menu

**Dropdown Menu**:
- Position: Below trigger, right-aligned
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 8px
- Shadow: Elevated
- Width: 180px
- Z-index: 10 (above table)

**Menu Items**:

1. **Connect** (if running)
   - Icon: ExternalLink (Lucide), 16px
   - Text: "Connect"
   - Color: `gray-900`
   - Hover: Background `gray-50`

2. **Start** (if stopped)
   - Icon: Play (Lucide), 16px
   - Text: "Start"
   - Color: `gray-900`
   - Hover: Background `gray-50`

3. **Stop** (if running)
   - Icon: Pause (Lucide), 16px
   - Text: "Stop"
   - Color: `gray-900`
   - Hover: Background `gray-50`

4. **Restart** (if running)
   - Icon: RotateCw (Lucide), 16px
   - Text: "Restart"
   - Color: `gray-900`
   - Hover: Background `gray-50`

5. **Divider**
   - Border top: 1px solid `gray-200`
   - Margin: 4px vertical

6. **Settings**
   - Icon: Settings (Lucide), 16px
   - Text: "Settings"
   - Color: `gray-900`
   - Hover: Background `gray-50`

7. **Delete**
   - Icon: Trash2 (Lucide), 16px
   - Text: "Delete"
   - Color: `red-600`
   - Hover: Background `red-50`
   - Requires: Confirmation modal

**Menu Behavior**:
- Click outside: Close menu
- Escape key: Close menu
- Click item: Execute action and close menu
- Prevent row click: Stop propagation when menu is open

---

### Table Footer (Pagination)

**Container**:
- Background: `gray-50`
- Border top: 1px solid `gray-200`
- Height: 56px
- Padding: 12px horizontal
- Flex layout: Info left, controls right

**Left Side: Results Info**
- Text: "Showing 1-10 of 24 desktops"
- Font: 14px, weight 400
- Color: `gray-600`

**Right Side: Pagination Controls**
- Layout: Inline-flex, 8px gap
- Buttons: "Previous", page numbers, "Next"
- Button style: Secondary (white background, gray border)
- Size: 32px × 32px (square for numbers), auto width for prev/next
- Active page: Primary style (indigo background, white text)
- Disabled: Opacity 50%, cursor not-allowed

**Items Per Page** (Optional):
- Dropdown: "10 per page", "25 per page", "50 per page"
- Position: Left of pagination controls
- Style: Secondary button with chevron

---

### Mobile Table Behavior (< 768px)

**Option A: Horizontal Scroll**
- Table maintains desktop structure
- Container: overflow-x: auto
- Sticky first column (Name)
- Reduce column widths slightly
- Show scroll indicator (shadow on right edge)

**Option B: Card Layout** (Recommended)
- Convert each row to a card
- Card structure:
  - Name (top, large)
  - Status badge (top right)
  - Resources (below name)
  - Region + Created (bottom, small text)
  - Actions button (bottom right)
- Card padding: 16px
- Gap between cards: 12px
- Full width cards

**Recommendation**: Use Option B (cards) for better mobile UX

---

## 5. Empty State

### Purpose
Guide users when they have no instances yet. Provide clear next steps and reduce anxiety about getting started.

### When to Show
- User has zero instances (first-time user)
- All instances are filtered out (show "No results" variant)

---

### Empty State: No Instances

**Container**:
- Replace entire table with empty state
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 8px
- Padding: 64px vertical, 32px horizontal
- Min height: 400px
- Text align: Center

**Content** (Vertically centered):

**Icon**:
- Type: Monitor or Cloud (Lucide)
- Size: 64px × 64px
- Color: `gray-300`
- Margin bottom: 24px

**Heading**:
- Text: "No desktops yet"
- Font: 20px, weight 600
- Color: `gray-900`
- Margin bottom: 12px

**Description**:
- Text: "Create your first cloud desktop to get started. Choose from pre-configured templates or customize your own."
- Font: 16px, weight 400
- Color: `gray-600`
- Line height: 1.6
- Max width: 480px, centered
- Margin bottom: 32px

**Primary CTA**:
- Text: "Create Your First Desktop"
- Icon: Plus (Lucide), 16px, left of text
- Style: Primary button (large)
- Size: 20px horizontal padding, 12px vertical
- Font: 16px, weight 500

**Secondary Action** (Optional):
- Text: "View Documentation"
- Style: Ghost button or text link
- Position: Below primary CTA, 12px gap
- Icon: ExternalLink (Lucide), 14px

---

### Empty State: No Results (Filtered)

**Container**: Same as above

**Icon**:
- Type: Search or Filter (Lucide)
- Size: 48px × 48px
- Color: `gray-300`

**Heading**:
- Text: "No desktops found"

**Description**:
- Text: "No desktops match your current filters. Try adjusting your search or filter criteria."

**Action**:
- Text: "Clear Filters"
- Style: Secondary button
- Behavior: Reset all filters and search

---

## 6. Loading States

### Initial Page Load

**Skeleton Screens**:
- Summary cards: Show 4 card skeletons with pulsing gray rectangles
- Table: Show 5 row skeletons with pulsing columns
- Animation: Subtle pulse (opacity 0.5 to 1, 1.5s duration)

### Filtering/Searching

**Overlay Spinner**:
- Position: Center of table area
- Background: `white` with 80% opacity
- Spinner: Indigo-600, 32px
- Text: "Loading..." below spinner (optional)

### Row Actions

**Inline Spinner**:
- Replace action button with small spinner (16px)
- Disable row interaction during action
- Show success/error toast after completion

---

## 7. Interaction Patterns

### Sorting

**Trigger**: Click column header
- First click: Sort ascending
- Second click: Sort descending
- Third click: Remove sort (return to default)
- Visual: Arrow icon direction indicates sort order
- Only one column sorted at a time

### Filtering

**Behavior**: Immediate (no "Apply" button needed)
- Click filter pill: Update table instantly
- Type in search: Debounced 300ms, then filter
- Multiple filters: AND logic (status AND search term)

### Row Selection (Future Enhancement)

**Checkbox Column** (Optional):
- Position: First column (before Name)
- Width: 48px
- Header checkbox: Select/deselect all
- Row checkbox: Select individual row
- Selected rows: Show bulk action bar at top of table
- Bulk actions: Start, Stop, Delete

---

## 8. Responsive Behavior Summary

### Desktop (≥ 1024px)
- Page header: Title left, CTA right
- Summary cards: 4 columns
- Search + filters: Horizontal layout
- Table: All 7 columns visible
- Pagination: Full controls

### Tablet (768px - 1023px)
- Page header: Same as desktop
- Summary cards: 2×2 grid
- Search + filters: Horizontal, filters may wrap
- Table: Hide Region column (6 columns)
- Pagination: Simplified (prev/next only)

### Mobile (< 768px)
- Page header: Stacked, CTA full width
- Summary cards: Single column
- Search: Full width
- Filters: Horizontal scroll
- Table: Convert to cards
- Pagination: Minimal (prev/next only)

---

## 9. Accessibility Requirements

### Keyboard Navigation
- Tab order: Header CTA → Search → Filters → Table rows → Pagination
- Arrow keys: Navigate between table rows
- Enter: Activate row (view details)
- Space: Open action menu
- Escape: Close action menu

### Screen Reader
- Table: Proper `<table>` semantics with `<thead>`, `<tbody>`
- Headers: `scope="col"` attributes
- Status badges: aria-label with full status text
- Action buttons: aria-label describing action
- Empty state: Announced as "No desktops" with instructions

### Focus Management
- All interactive elements: Visible focus ring
- Action menu: Focus trap when open
- Modal dialogs: Focus trap and return focus on close

---

This specification provides complete guidance for implementing a professional, enterprise-grade dashboard that balances information density with usability.
