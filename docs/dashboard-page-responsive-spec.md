# CloudDesk EDU Dashboard Page Responsive Behavior Spec

## Overview

This document defines the responsive behavior of the Dashboard page (`/dashboard`) across mobile, tablet, and desktop devices, ensuring CloudDesk EDU maintains enterprise-grade usability and data density appropriate for each device tier.

---

## Page Structure

The Dashboard consists of:
1. **Page Header** (title, subtitle, "Create Instance" button)
2. **Summary Metrics Cards** (4 metric cards)
3. **Search & Filter Bar** (search input + status tabs)
4. **Instance List** (table on desktop, cards on mobile)
5. **Empty State** (when no instances exist or match filters)

---

## 1. Page Header

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Flexbox row: `flex lg:flex-row lg:items-center lg:justify-between`
- Single row with content on left, button on right
- Bottom margin: 32px (`mb-8`)

**Left Side:**
- Title: 24px (`text-2xl`), semibold, gray-900
- Subtitle: 14px (`text-sm`), gray-500, max-width 672px
- Vertical spacing: 4px between title and subtitle (`mb-1`)

**Right Side:**
- "Create Instance" button: Primary variant, standard size
- Icon + text: Plus icon (16px) + "Create Instance"
- Width: Auto (`w-auto`)

**Alignment:**
- Vertically centered (`items-center`)
- Space between left and right (`justify-between`)

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- **768px – 1023px (`md` to `lg`)**: Same as desktop
  - Single row layout maintained
  - Button stays on right
- **640px – 767px (`sm` to `md`)**: Stack vertically
  - `flex-col` on `< lg`
  - Title + subtitle first
  - Button below with top margin: 16px (`mt-4`)

**Left Side:**
- Same as desktop

**Right Side:**
- Button: Full-width on `< lg` (`w-full lg:w-auto`)
- Maintains primary styling

**Rationale:**
- Larger tablets can maintain horizontal layout
- Smaller tablets stack to prevent cramping
- Full-width button on tablet easier to tap

### Mobile (< 640px / `< sm`)

**Layout:**
- Vertical stack: `flex-col`
- Bottom margin: 24px (`mb-6`)

**Content:**
- Title: 20px (`text-xl`) — slightly reduced
- Subtitle: 14px (`text-sm`) — same
- Button: Full-width (`w-full`)
- Top margin on button: 16px (`mt-4`)

**Rationale:**
- Reduced title size fits mobile screens better
- Full-width button prominent and easy to tap
- Clear vertical hierarchy

---

## 2. Summary Metrics Cards

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Four-column grid: `grid lg:grid-cols-4`
- Gap: 24px (`gap-6`)
- Bottom margin: 32px (`mb-8`)

**Card Structure:**
- Padding: 24px (`p-6`)
- Icon: 24px (`h-6 w-6`), colored (indigo-600, emerald-600)
- Label: 14px (`text-sm`), medium weight, gray-500
- Value: 30px (`text-3xl`), semibold, gray-900
- Subtext: 12px (`text-xs`), gray-500

**Metrics Shown:**
1. Total Desktops (Monitor icon, indigo)
2. Running Now (Activity icon, emerald)
3. Est. Monthly Cost (DollarSign icon, indigo)
4. Storage Used (Monitor icon, indigo)

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- Two-column grid: `grid md:grid-cols-2`
- 2 rows × 2 columns
- Gap: 24px (`gap-6`)
- Bottom margin: 32px (`mb-8`)

**Card Structure:**
- Same as desktop
- Cards maintain full visual weight

**Order:**
- Row 1: Total Desktops, Running Now
- Row 2: Est. Monthly Cost, Storage Used

**Rationale:**
- 2×2 grid balances space usage
- Maintains data density
- Cards don't feel cramped

### Mobile (< 640px / `< sm`)

**Layout:**
- Single column: `grid-cols-1`
- Gap: 16px (`gap-4`)
- Bottom margin: 24px (`mb-6`)

**Card Structure:**
- Padding: 20px (`p-5`) — slightly reduced
- Icon: 20px (`h-5 w-5`) — slightly smaller
- Label: 14px (`text-sm`) — same
- Value: 28px (`text-3xl` or custom) — slightly reduced
- Subtext: 12px (`text-xs`) — same

**Metrics Shown:**
- All 4 metrics, stacked vertically
- Consider showing only 3 most important on very small screens (optional)

**Rationale:**
- Vertical stack easiest to scan
- Slightly reduced sizing fits mobile better
- Maintains all critical metrics

---

## 3. Search & Filter Bar

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Flexbox row: `flex lg:flex-row lg:items-center lg:justify-between`
- Single row with search on left, filters on right
- Bottom margin: 24px (`mb-6`)

**Left Side (Search):**
- Search input with icon
- Max-width: 448px (`max-w-md`)
- Flex: 1 (`flex-1`)
- Icon: Search icon (16px), absolute positioned left
- Input padding-left: 40px (`pl-10`)

**Right Side (Status Tabs):**
- Inline button group: `inline-flex`
- Background: gray-100, rounded-lg, padding: 4px (`p-1`)
- Buttons: "All", "Running", "Stopped", "Provisioning"
- Active state: White background, shadow
- Inactive state: Transparent, hover gray-50
- Button padding: 12px horizontal, 6px vertical (`px-3 py-1.5`)
- Font: 14px (`text-sm`), medium weight

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- **768px – 1023px (`md` to `lg`)**: Same as desktop
  - Single row maintained
  - Search + tabs side-by-side
- **640px – 767px (`sm` to `md`)**: Stack vertically
  - `flex-col` with gap: 16px (`gap-4`)
  - Search full-width first
  - Tabs below, full-width

**Search:**
- Full-width on `< lg`
- Max-width removed

**Status Tabs:**
- Full-width on `< lg`
- Buttons maintain same styling
- May need to reduce button padding slightly: `px-2.5 py-1.5`

**Rationale:**
- Larger tablets maintain horizontal layout
- Smaller tablets stack to prevent cramping
- Full-width elements easier to interact with

### Mobile (< 640px / `< sm`)

**Layout:**
- Vertical stack: `flex-col`
- Gap: 16px (`gap-4`)
- Bottom margin: 24px (`mb-6`)

**Search:**
- Full-width
- Same icon + input structure
- Height: 40px (`h-10`)

**Status Tabs:**
- Full-width container
- Buttons may wrap or scroll horizontally
- **Option A**: Allow wrapping (2 buttons per row)
- **Option B**: Horizontal scroll with `overflow-x-auto`
- Recommended: **Horizontal scroll** for consistency
  - Container: `overflow-x-auto`
  - Inner flex: `inline-flex` with `whitespace-nowrap`
  - Buttons: Slightly smaller padding (`px-3 py-1.5`)

**Rationale:**
- Vertical stack clearest on mobile
- Horizontal scroll preserves button sizing
- Prevents awkward wrapping

---

## 4. Instance List / Table

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Card-based list (not traditional table)
- Vertical stack: `space-y-3`
- Each instance as a horizontal card

**Card Structure:**
- Padding: 20px (`p-5`)
- Flexbox row: `flex items-start justify-between`
- Gap: 16px (`gap-4`)
- Hover: Border color change + shadow lift
- Cursor: Pointer (entire card clickable)

**Left Side (Instance Info):**
- **Row 1**: Name + Status Badge
  - Name: 16px (`text-base`), semibold, truncate
  - Badge: Status-colored (success/neutral/info/error)
  - Gap: 12px (`gap-3`)
- **Row 2**: Preset + Resources
  - Icon + preset name, CPU, RAM, storage
  - Font: 14px (`text-sm`), gray-600
  - Separator: Bullet points (`•`)
  - Flex wrap: `flex-wrap` for responsive wrapping
- **Row 3**: Region + Created Time
  - Font: 12px (`text-xs`), gray-500
  - Separator: Bullet point

**Right Side (Actions):**
- Flexbox row: `flex items-center gap-3`
- Flex-shrink: 0 (`flex-shrink-0`)
- Buttons:
  - **Connect** (primary, only if running): Icon + "Connect"
  - **Start/Stop** (secondary): Icon + "Start"/"Stop"
  - **Delete** (ghost, red): Trash icon only
- Button size: Small (`size="sm"`)

**Interaction:**
- Entire card links to instance detail page
- Action buttons stop propagation (don't navigate)
- Hover state on card

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- Same card-based structure as desktop
- Slight adjustments for space

**Card Structure:**
- Same as desktop
- May reduce gap slightly: 12px (`gap-3`)

**Left Side:**
- Same structure
- Resources may wrap earlier due to less space

**Right Side:**
- Same buttons
- Consider stacking buttons vertically on smaller tablets (`< md`)
  - `flex-col` on `< md`
  - Full-width buttons
  - Gap: 8px (`gap-2`)

**Rationale:**
- Card layout works well on tablets
- Maintains data density
- Vertical button stack on smaller tablets prevents cramping

### Mobile (< 640px / `< sm`)

**Layout:**
- Card-based list (same as desktop/tablet)
- Vertical stack: `space-y-3`

**Card Structure:**
- Padding: 16px (`p-4`) — reduced
- Vertical stack: `flex-col`
- Gap: 12px (`gap-3`)

**Top Section (Instance Info):**
- **Row 1**: Name + Status Badge
  - Name: 15px (`text-sm`), semibold, truncate
  - Badge: Same
  - Stack vertically if name is long (optional)
- **Row 2**: Preset
  - Icon + preset name only
  - Font: 13px (`text-xs`), gray-600
- **Row 3**: Resources
  - CPU, RAM, storage on separate line or wrapped
  - Font: 13px (`text-xs`), gray-600
  - May abbreviate: "4 vCPU • 8GB • 50GB"
- **Row 4**: Region + Time
  - Font: 12px (`text-xs`), gray-500

**Bottom Section (Actions):**
- Horizontal button row: `flex gap-2`
- Buttons:
  - **Connect/Start/Stop**: Primary or secondary, icon only or icon + short text
  - **Delete**: Ghost, icon only
  - Size: Small (`size="sm"`)
- Alternative: Full-width stacked buttons
  - `flex-col gap-2`
  - Each button full-width
  - Easier to tap

**Recommended Approach:**
- **Horizontal row with icon-only buttons** for compact layout
- **Full-width stacked buttons** for maximum usability

**Rationale:**
- Vertical card layout fits mobile screens
- Reduced padding conserves space
- Icon-only buttons save horizontal space
- Full-width buttons easier to tap (user preference)

---

## 5. Empty State

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Centered card: `text-center`
- Padding: 64px vertical, 32px horizontal (`p-16`)
- Max-width: None (full width within container)

**Content:**
- Icon: Monitor icon, 64px (`h-16 w-16`), gray-300, centered
- Headline: 18px (`text-lg`), semibold, gray-900
- Description: 16px (`text-base`), gray-600, max-width 448px, centered
- Button: Primary or secondary, large size
- Spacing:
  - Icon to headline: 24px (`mb-6`)
  - Headline to description: 12px (`mb-3`)
  - Description to button: 32px (`mb-8`)

**Two States:**
1. **No instances exist**: "No desktops yet" + "Create Your First Desktop" button
2. **No matches**: "No desktops found" + "Clear Filters" button

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- Same as desktop
- Padding: 48px vertical, 24px horizontal (`p-12`)

**Content:**
- Same as desktop
- Button: Full-width on smaller tablets (optional)

### Mobile (< 640px / `< sm`)

**Layout:**
- Same centered structure
- Padding: 32px vertical, 16px horizontal (`p-8`)

**Content:**
- Icon: 48px (`h-12 w-12`) — slightly smaller
- Headline: 16px (`text-base`) — slightly smaller
- Description: 14px (`text-sm`) — slightly smaller
- Button: Full-width
- Spacing:
  - Icon to headline: 16px (`mb-4`)
  - Headline to description: 8px (`mb-2`)
  - Description to button: 24px (`mb-6`)

**Rationale:**
- Reduced sizing fits mobile screens
- Full-width button prominent
- Maintains clear hierarchy

---

## Responsive Breakpoint Summary

### Layout Shifts by Section

| Section | Mobile (< 640px) | Tablet (640-1023px) | Desktop (≥ 1024px) |
|---------|------------------|---------------------|-------------------|
| **Page Header** | Stacked (title → button) | Stacked (sm-md), Row (md-lg) | Row (title ↔ button) |
| **Summary Cards** | 1 column | 2 columns (2×2) | 4 columns |
| **Search/Filters** | Stacked (search → tabs) | Stacked (sm-md), Row (md-lg) | Row (search ↔ tabs) |
| **Instance List** | Cards (vertical info + actions) | Cards (same as desktop) | Cards (horizontal info ↔ actions) |
| **Empty State** | Centered, reduced padding | Centered, medium padding | Centered, generous padding |

### Tailwind Breakpoint Usage

**Primary breakpoints:**
- `sm` (640px): Transition from mobile to tablet
- `md` (768px): Enhanced tablet experience
- `lg` (1024px): Full desktop experience

**Responsive patterns:**
- **Mobile-first**: Start with vertical stacks, single columns
- **Tablet**: Introduce 2-column grids, maintain some stacking
- **Desktop**: Full multi-column layouts, horizontal rows

---

## Typography & Sizing Adjustments

### Text Sizes by Device

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Page Title** | 20px (`text-xl`) | 24px (`text-2xl`) | 24px (`text-2xl`) |
| **Page Subtitle** | 14px (`text-sm`) | 14px (`text-sm`) | 14px (`text-sm`) |
| **Card Value** | 28px (custom) | 30px (`text-3xl`) | 30px (`text-3xl`) |
| **Card Label** | 14px (`text-sm`) | 14px (`text-sm`) | 14px (`text-sm`) |
| **Instance Name** | 15px (`text-sm`) | 16px (`text-base`) | 16px (`text-base`) |
| **Instance Details** | 13px (`text-xs`) | 14px (`text-sm`) | 14px (`text-sm`) |

### Spacing by Device

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Section Bottom Margin** | 24px (`mb-6`) | 32px (`mb-8`) | 32px (`mb-8`) |
| **Card Grid Gap** | 16px (`gap-4`) | 24px (`gap-6`) | 24px (`gap-6`) |
| **Card Padding** | 16-20px (`p-4` to `p-5`) | 20-24px (`p-5` to `p-6`) | 20-24px (`p-5` to `p-6`) |
| **Instance List Gap** | 12px (`space-y-3`) | 12px (`space-y-3`) | 12px (`space-y-3`) |

---

## Button Behavior by Device

### Page Header Button

| Device | Layout | Width |
|--------|--------|-------|
| **Mobile** | Stacked below title | Full-width (`w-full`) |
| **Tablet (sm-md)** | Stacked below title | Full-width (`w-full`) |
| **Tablet (md-lg)** | Same row as title | Auto (`w-auto`) |
| **Desktop** | Same row as title | Auto (`w-auto`) |

**Implementation:**
```
className="w-full lg:w-auto"
```

### Instance Action Buttons

| Device | Layout | Size |
|--------|--------|------|
| **Mobile** | Horizontal row (icon-only) OR vertical stack (full-width) | Small (`sm`) |
| **Tablet** | Horizontal row | Small (`sm`) |
| **Desktop** | Horizontal row | Small (`sm`) |

**Mobile Options:**
- **Option A**: Horizontal row with icon-only buttons (compact)
- **Option B**: Vertical stack with full-width buttons (easier to tap)

**Recommended**: Option A for data density, Option B for usability

---

## Instance Card Responsive Behavior

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│  [Name]                    [Badge]     [Connect] [Stop] [×]  │
│  [Icon] Preset • 4 vCPU • 8GB • 50GB                         │
│  Region • 2 hours ago                                        │
└─────────────────────────────────────────────────────────────┘
```

### Tablet Layout (Same as Desktop)

```
┌─────────────────────────────────────────────────────────────┐
│  [Name]                    [Badge]     [Connect] [Stop] [×]  │
│  [Icon] Preset • 4 vCPU • 8GB • 50GB                         │
│  Region • 2 hours ago                                        │
└─────────────────────────────────────────────────────────────┘
```

### Mobile Layout (Option A: Horizontal Actions)

```
┌─────────────────────────────────────┐
│  [Name]                    [Badge]  │
│  [Icon] Preset                      │
│  4 vCPU • 8GB • 50GB                │
│  Region • 2 hours ago               │
│  [Connect] [Stop] [×]               │
└─────────────────────────────────────┘
```

### Mobile Layout (Option B: Vertical Actions)

```
┌─────────────────────────────────────┐
│  [Name]                    [Badge]  │
│  [Icon] Preset                      │
│  4 vCPU • 8GB • 50GB                │
│  Region • 2 hours ago               │
│  ┌─────────────────────────────┐   │
│  │      [Connect]              │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │      [Stop]                 │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │      [Delete]               │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

---

## Status Filter Tabs Responsive Behavior

### Desktop

```
┌──────────────────────────────────────────────────┐
│ [All] [Running] [Stopped] [Provisioning]         │
└──────────────────────────────────────────────────┘
```

### Tablet (md-lg)

```
┌──────────────────────────────────────────────────┐
│ [All] [Running] [Stopped] [Provisioning]         │
└──────────────────────────────────────────────────┘
```

### Tablet (sm-md) & Mobile

```
┌──────────────────────────────────────────────────┐
│ ← [All] [Running] [Stopped] [Provisioning] →     │
└──────────────────────────────────────────────────┘
```
(Horizontal scroll if needed)

---

## Professional Look Maintenance

### Design Principles

1. **Data Density Appropriate to Device**
   - Desktop: Maximum density, all info visible
   - Tablet: Balanced density, some wrapping
   - Mobile: Reduced density, prioritize key info

2. **Clear Visual Hierarchy**
   - Metrics cards → Search/filters → Instance list
   - Within cards: Icon → Label → Value → Subtext
   - Within instances: Name/status → Resources → Actions

3. **Consistent Spacing**
   - Use 8px grid system (Tailwind default)
   - Maintain proportional spacing across devices
   - Reduce spacing on mobile, but don't cram

4. **Touch-Friendly Targets**
   - Minimum 44×44px on mobile
   - Full-width buttons easier to tap
   - Adequate spacing between interactive elements

5. **Professional Color Palette**
   - Neutral grays: slate-50, gray-100, gray-500, gray-900
   - Status colors: emerald-600 (success), indigo-600 (info), red-600 (error)
   - Consistent with design system

6. **Readable Typography**
   - Minimum 13px on mobile (12px for metadata)
   - Adequate line-height: 1.5 for body text
   - Semibold for emphasis, medium for labels

7. **Subtle Interactions**
   - Card hover: Border color + shadow lift (desktop only)
   - Button hover: Background color change
   - Smooth transitions: 150-200ms

---

## Accessibility Considerations

### Keyboard Navigation
- All interactive elements focusable
- Tab order: Header button → Search → Filters → Instance cards → Actions
- Enter/Space activates buttons
- Escape clears search (optional)

### Screen Readers
- Page title: `<h1>` with descriptive text
- Metric cards: Proper label/value association
- Instance cards: Descriptive link text
- Action buttons: Clear labels (not just icons)

### Touch Targets
- Minimum 44×44px on mobile
- Adequate spacing between buttons (8-12px)
- Full-width buttons easier to tap

### Color Contrast
- Text meets WCAG AA standards
- Status badges have sufficient contrast
- Hover states clearly visible

---

## Implementation Checklist

### Phase 1: Core Responsive Behavior
- [ ] Update page header: Stack on mobile, row on desktop
- [ ] Update header button: Full-width on mobile, auto on desktop
- [ ] Update summary cards: 1 col mobile, 2 col tablet, 4 col desktop
- [ ] Update search/filters: Stack on mobile, row on desktop
- [ ] Update status tabs: Horizontal scroll on mobile
- [ ] Update instance cards: Vertical layout on mobile, horizontal on desktop

### Phase 2: Instance Card Details
- [ ] Adjust card padding per device
- [ ] Adjust text sizes per device
- [ ] Implement action button layout (horizontal or vertical on mobile)
- [ ] Add proper truncation for long names
- [ ] Test resource info wrapping

### Phase 3: Polish & Testing
- [ ] Test at exact breakpoints (639px, 640px, 767px, 768px, 1023px, 1024px)
- [ ] Test on real devices (iPhone, iPad, laptop)
- [ ] Verify no horizontal scrolling
- [ ] Verify touch targets ≥ 44px on mobile
- [ ] Test empty state at all sizes
- [ ] Test with varying data (long names, many instances)
- [ ] Verify hover effects on desktop only

---

## Edge Cases & Considerations

### Long Instance Names
- Use `truncate` class on desktop/tablet
- Allow wrapping on mobile if needed
- Show full name in tooltip on hover (desktop)

### Many Instances
- Consider pagination or infinite scroll
- Show "Showing X of Y" count
- Maintain performance with large lists

### No Instances
- Empty state prominent and centered
- Clear CTA to create first instance
- Helpful messaging

### Filtered Results (No Matches)
- Different empty state message
- "Clear Filters" button
- Show current filter state

### Very Small Screens (< 375px)
- Test on iPhone SE (375px)
- May need additional adjustments
- Consider minimum supported width

### Very Large Screens (> 1920px)
- Max-width constraint on container (`max-w-7xl`)
- Prevents cards from stretching too wide
- Maintains comfortable reading width

---

## Success Criteria

✅ **Layout**
- No horizontal scrolling at any breakpoint
- Content fits comfortably within viewport
- Clear visual hierarchy maintained
- Smooth transitions between breakpoints

✅ **Data Density**
- Desktop: All info visible, no truncation needed
- Tablet: Balanced density, some wrapping acceptable
- Mobile: Key info prioritized, secondary info accessible

✅ **Usability**
- All actions accessible on all devices
- Touch targets ≥ 44px on mobile
- Buttons easy to tap, adequate spacing
- Search and filters easy to use

✅ **Professional Aesthetic**
- Enterprise SaaS feel maintained
- Consistent color palette and typography
- Subtle, polished interactions
- No layout breaks or visual glitches

✅ **Performance**
- Fast rendering on all devices
- Smooth scrolling and interactions
- No jank or layout shift
- Efficient with large datasets
