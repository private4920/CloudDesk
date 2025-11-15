# CloudDesk EDU Create Instance Page Responsive Behavior Spec

## Overview

This document defines the responsive behavior of the Create Instance page (`/create`) across mobile, tablet, and desktop devices, ensuring CloudDesk EDU maintains form usability, clarity, and enterprise credibility at all screen sizes.

---

## Page Structure

The Create Instance page consists of:
1. **Page Header** (breadcrumb, title)
2. **Preset Selection Cards** (5 preset options)
3. **Configuration Form** (name, region, resources, GPU)
4. **Configuration Summary Card** (sticky on desktop)
5. **Cost Estimator Card** (sticky on desktop)
6. **Action Buttons** (Create, Cancel)

---

## 1. Page Header

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Full-width, stacked vertically
- Bottom margin: 24px (`mb-6`)

**Content:**
- Breadcrumb: 14px (`text-sm`), gray-500
  - "Dashboard / Create Desktop"
  - Separator: " / " with margin
- Title: 24px (`text-2xl`), semibold, gray-900
  - "Create New Desktop"

**Spacing:**
- Breadcrumb to title: 8px (`mb-2`)

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- Same as desktop
- Bottom margin: 24px (`mb-6`)

**Content:**
- Breadcrumb: Same (14px)
- Title: Same (24px)

**No changes from desktop** — header is simple and scales well.

### Mobile (< 640px / `< sm`)

**Layout:**
- Same structure
- Bottom margin: 16px (`mb-4`)

**Content:**
- Breadcrumb: 13px (`text-xs`) — slightly smaller
- Title: 20px (`text-xl`) — reduced
- Consider hiding breadcrumb on very small screens (optional)

**Rationale:**
- Slightly reduced sizing fits mobile better
- Breadcrumb optional on mobile (saves vertical space)
- Title still prominent and clear

---

## 2. Main Layout Structure

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Two-column grid: `grid lg:grid-cols-3`
- Left column: 2/3 width (`lg:col-span-2`)
- Right column: 1/3 width (`lg:col-span-1`)
- Gap: 24px (`gap-6`)

**Left Column (Form):**
- Vertical stack of cards: `space-y-6`
- Cards:
  1. Preset Selection
  2. Basic Configuration (name, region)
  3. Resources (CPU, RAM, storage sliders)
  4. GPU Selection

**Right Column (Summary):**
- Sticky positioning: `sticky top-6`
- Vertical stack: `space-y-4`
- Cards:
  1. Configuration Summary
  2. Cost Estimator
  3. Action Buttons

**Rationale:**
- Classic form layout: inputs on left, summary on right
- Sticky summary keeps cost visible while scrolling
- 2:1 ratio gives form comfortable width

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout Decision: Vertical Stack (Recommended)**

**Why vertical stack instead of side-by-side?**
1. **Form clarity**: Form inputs need comfortable width (minimum ~400px)
2. **Summary visibility**: Cost estimator should be visible while filling form
3. **Scanning pattern**: Vertical flow more natural on tablets
4. **Simplicity**: Consistent with mobile, easier to implement

**Layout:**
- Single column: `grid-cols-1`
- Vertical stack with gap: 24px (`gap-6`)
- Order:
  1. Preset Selection
  2. Basic Configuration
  3. Resources
  4. GPU Selection
  5. **Configuration Summary** (not sticky)
  6. **Cost Estimator** (not sticky)
  7. **Action Buttons**

**Alternative (Not Recommended): Side-by-Side on Larger Tablets**
- Could use `md:grid-cols-2` for 768px+
- Form on left, summary on right
- Issues:
  - Form inputs cramped (< 400px width)
  - Sliders difficult to use in narrow space
  - Summary may not fit well
  - Inconsistent with mobile

**Rationale for Vertical Stack:**
- Form inputs get full width (comfortable interaction)
- Cost estimator visible before submission
- Consistent behavior from mobile to tablet
- No awkward breakpoint at 768px

### Mobile (< 640px / `< sm`)

**Layout:**
- Single column: `grid-cols-1`
- Vertical stack with gap: 16px (`gap-4`)
- Order: Same as tablet
  1. Preset Selection
  2. Basic Configuration
  3. Resources
  4. GPU Selection
  5. Configuration Summary
  6. Cost Estimator
  7. Action Buttons

**Rationale:**
- Strict vertical flow clearest on mobile
- Full-width elements maximize usability
- Cost visible before final action

---

## 3. Preset Selection Cards

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Card container: `p-6`
- Section title: "1. Choose Preset"
  - 16px (`text-base`), semibold, gray-900
  - Bottom margin: 16px (`mb-4`)
- Grid: 2 columns (`grid-cols-2`)
- Gap: 12px (`gap-3`)

**Preset Card:**
- Padding: 16px (`p-4`)
- Border: 2px, rounded-lg
- States:
  - **Unselected**: border-gray-200, bg-white, hover:border-gray-300
  - **Selected**: border-indigo-600, bg-indigo-50
- Content:
  - Icon + Name (row): Icon 20px, text 14px semibold
  - Description: 12px (`text-xs`), gray-600, line-clamp-2

**Interaction:**
- Entire card clickable
- Clear selected state (border + background)
- Hover state on unselected

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- Same as desktop
- 2-column grid maintained
- Gap: 12px (`gap-3`)

**Preset Card:**
- Same as desktop
- Full tap target (entire card)

**Rationale:**
- 2-column grid works well on tablets
- Cards large enough for comfortable tapping
- Selected state very clear

### Mobile (< 640px / `< sm`)

**Layout:**
- Card container: `p-4` — slightly reduced padding
- Section title: Same (16px)
- Grid: **1 column** (`grid-cols-1`)
- Gap: 12px (`gap-3`)

**Preset Card:**
- Padding: 16px (`p-4`) — same
- Full-width
- Same border and state styling
- Content: Same (icon + name + description)

**Rationale:**
- Single column ensures large tap targets (full width)
- Selected state very clear with full-width highlight
- Easier to scan vertically
- No cramped horizontal layout

**Alternative (Not Recommended): 2 Columns on Mobile**
- Could maintain `grid-cols-2` on mobile
- Issues:
  - Cards too narrow (< 160px)
  - Text may wrap awkwardly
  - Smaller tap targets
  - Description hard to read

---

## 4. Form Controls

### Desktop (≥ 1024px / `lg`)

**Card Structure:**
- Each section in separate card: `p-6`
- Section titles: 16px (`text-base`), semibold
- Bottom margin on title: 16px (`mb-4`)

**Text Inputs (Name):**
- Full-width: `w-full`
- Label: 14px (`text-sm`), medium weight, gray-900
- Input: Standard height (40px)
- Error message: 12px (`text-xs`), red-600

**Select Dropdowns (Region, GPU):**
- Full-width: `w-full`
- Label: Same as text inputs
- Standard height (40px)

**Range Sliders (CPU, RAM, Storage):**
- Full-width: `w-full`
- Label row: Flex with space-between
  - Left: Label (14px, medium)
  - Right: Current value (14px, semibold, indigo-600)
- Slider: Height 8px (`h-2`), rounded-full, accent-indigo-600
- Scale markers: 12px (`text-xs`), gray-400, flex justify-between

**Spacing:**
- Between form fields: 16px (`space-y-4`)
- Between slider elements: 6px (`mb-1.5`, `mt-1.5`)

### Tablet (640px – 1023px / `sm` to `lg`)

**Card Structure:**
- Same as desktop
- Padding: `p-6` (maintained)

**Form Controls:**
- All full-width (same as desktop)
- Same sizing and spacing

**Sliders:**
- Full-width (comfortable interaction)
- Same height and styling

**Rationale:**
- Full-width inputs work well on tablets
- Sliders have adequate space for interaction
- No cramping or usability issues

### Mobile (< 640px / `< sm`)

**Card Structure:**
- Padding: `p-4` — slightly reduced
- Section titles: Same (16px)

**Text Inputs:**
- Full-width (same)
- Label: Same (14px)
- Input: Same height (40px)
- Touch-friendly

**Select Dropdowns:**
- Full-width (same)
- Native mobile picker on iOS/Android
- Easy to interact with

**Range Sliders:**
- Full-width (same)
- Slider height: 8px (`h-2`) — same
- Touch-friendly (adequate tap target)
- Scale markers: Same (12px)

**Spacing:**
- Between form fields: 16px (`space-y-4`) — same
- Between slider elements: Same

**Rationale:**
- Full-width inputs maximize usability
- Sliders work well on mobile (touch-friendly)
- Native select pickers on mobile devices
- No horizontal cramping

---

## 5. Configuration Summary Card

### Desktop (≥ 1024px / `lg`)

**Position:**
- Right column, sticky: `sticky top-6`
- Always visible while scrolling form

**Card Structure:**
- Padding: 24px (`p-6`)
- Title: 16px (`text-base`), semibold, gray-900
- Bottom margin on title: 16px (`mb-4`)

**Content Sections:**
1. **Preset** (with border-bottom)
   - Label: 12px (`text-xs`), gray-500
   - Value: 14px (`text-sm`), medium, gray-900
   - OS name: 12px (`text-xs`), gray-600
   - Bottom padding/margin: 16px (`pb-4 mb-4`)

2. **Name & Region** (with border-bottom)
   - Same label/value styling
   - Vertical stack: `space-y-3`
   - Bottom padding/margin: 16px (`pb-4 mb-4`)

3. **Resources** (no border)
   - Row layout: `flex justify-between items-center`
   - Label: 12px (`text-xs`), gray-500
   - Value: 14px (`text-sm`), semibold, gray-900
   - Vertical stack: `space-y-2.5`

**Rationale:**
- Sticky positioning keeps summary visible
- Clear sections with borders
- Compact but readable

### Tablet (640px – 1023px / `sm` to `lg`)

**Position:**
- Below form, **not sticky**
- In vertical flow after GPU selection

**Card Structure:**
- Same as desktop
- Padding: `p-6` (maintained)

**Content:**
- Same sections and styling as desktop

**Rationale:**
- Not sticky (would be awkward in vertical flow)
- User sees summary before cost and actions
- Same visual design maintains consistency

### Mobile (< 640px / `< sm`)

**Position:**
- Below form, in vertical flow
- Before cost estimator

**Card Structure:**
- Padding: `p-4` — slightly reduced
- Title: Same (16px)

**Content:**
- Same sections as desktop
- Same label/value styling
- May reduce spacing slightly:
  - Section spacing: 12px (`pb-3 mb-3`)
  - Item spacing: 8px (`space-y-2`)

**Rationale:**
- User reviews configuration before seeing cost
- Slightly reduced padding fits mobile
- Maintains clarity and hierarchy

---

## 6. Cost Estimator Card

### Desktop (≥ 1024px / `lg`)

**Position:**
- Right column, sticky: `sticky top-6`
- Below configuration summary
- Gap: 16px (`space-y-4`)

**Card Structure:**
- Padding: 24px (`p-6`)
- Background: `bg-indigo-50`
- Border: `border-indigo-200`
- Title: 16px (`text-base`), semibold, gray-900

**Content:**
1. **Hourly Cost**
   - Label: 12px (`text-xs`), gray-600
   - Value: 32px (`text-2xl`), semibold, gray-900
   - Unit: 14px (`text-sm`), normal, gray-600 ("/hr")

2. **Monthly Estimate** (with border-top)
   - Label: 12px (`text-xs`), gray-600
   - Subtext: 12px (`text-xs`), gray-500 "(8 hrs/day, 22 days)"
   - Value: 24px (`text-xl`), semibold, gray-900
   - Unit: 14px (`text-sm`), normal, gray-600 ("/mo")
   - Top padding/border: 12px (`pt-3 border-t border-indigo-200`)

3. **Fine Print**
   - Text: 12px (`text-xs`), gray-600
   - "Only charged when running"
   - Top margin: 16px (`mt-4`)

**Rationale:**
- Sticky positioning keeps cost visible
- Indigo background highlights importance
- Large numbers easy to read
- Clear hourly vs monthly distinction

### Tablet (640px – 1023px / `sm` to `lg`)

**Position:**
- Below configuration summary, **not sticky**
- In vertical flow

**Card Structure:**
- Same as desktop
- Padding: `p-6` (maintained)
- Same indigo background

**Content:**
- Same as desktop
- Same sizing and styling

**Rationale:**
- User sees cost before action buttons
- Same visual prominence as desktop
- Not sticky (vertical flow)

### Mobile (< 640px / `< sm`)

**Position:**
- Below configuration summary
- Before action buttons

**Card Structure:**
- Padding: `p-4` — slightly reduced
- Same indigo background and border

**Content:**
- Same sections as desktop
- Slightly reduced sizing:
  - Hourly value: 28px (`text-3xl` or custom) — slightly smaller
  - Monthly value: 20px (`text-lg`) — slightly smaller
  - Labels and units: Same (12px, 14px)

**Rationale:**
- User sees cost before committing
- Slightly reduced sizing fits mobile
- Still prominent and clear

---

## 7. Action Buttons

### Desktop (≥ 1024px / `lg`)

**Position:**
- Right column, sticky: `sticky top-6`
- Below cost estimator
- Gap: 16px (`space-y-4`)

**Layout:**
- Vertical stack: `space-y-2`
- Both buttons full-width within column

**Buttons:**
1. **Create Desktop** (Primary)
   - Full-width: `w-full`
   - Variant: Primary (indigo background)
   - Text: "Create Desktop" or "Creating..." (loading state)
   - Disabled when submitting

2. **Cancel** (Secondary)
   - Full-width: `w-full`
   - Variant: Secondary (gray border)
   - Text: "Cancel"
   - Navigates to dashboard

**Error Message:**
- Below buttons
- Text: 12px (`text-xs`), red-600, center-aligned
- Only shown on submission error

**Rationale:**
- Full-width buttons in narrow column
- Vertical stack clearest hierarchy
- Primary action prominent

### Tablet (640px – 1023px / `sm` to `lg`)

**Position:**
- Below cost estimator
- In vertical flow

**Layout:**
- **Option A: Vertical Stack** (Recommended)
  - `space-y-2`
  - Both buttons full-width
  - Same as desktop

- **Option B: Horizontal Row**
  - `flex gap-3`
  - Buttons side-by-side
  - Each button: `flex-1` (equal width)

**Recommended: Option A (Vertical Stack)**
- Consistent with desktop and mobile
- Full-width buttons easier to tap
- Clear visual hierarchy

**Buttons:**
- Same as desktop
- Full-width in vertical stack

**Rationale:**
- Vertical stack maintains consistency
- Full-width buttons prominent
- Easy to tap on touch devices

### Mobile (< 640px / `< sm`)

**Position:**
- Below cost estimator
- At bottom of form

**Layout:**
- Vertical stack: `space-y-2`
- Both buttons full-width

**Buttons:**
- Same as desktop/tablet
- Full-width: `w-full`
- Standard height (40px)
- Easy to tap

**Error Message:**
- Same as desktop (below buttons)

**Rationale:**
- Full-width buttons maximize tap target
- Vertical stack clearest on mobile
- Primary action prominent

---

## Responsive Breakpoint Summary

### Layout Shifts by Section

| Section | Mobile (< 640px) | Tablet (640-1023px) | Desktop (≥ 1024px) |
|---------|------------------|---------------------|-------------------|
| **Page Header** | Stacked (reduced title) | Stacked (same as desktop) | Stacked (breadcrumb + title) |
| **Main Layout** | Single column (vertical) | Single column (vertical) | 2-column (form ↔ summary) |
| **Preset Cards** | 1 column (full-width) | 2 columns | 2 columns |
| **Form Controls** | Full-width, stacked | Full-width, stacked | Full-width, stacked |
| **Summary Card** | Below form (not sticky) | Below form (not sticky) | Right column (sticky) |
| **Cost Estimator** | Below summary (not sticky) | Below summary (not sticky) | Right column (sticky) |
| **Action Buttons** | Full-width, stacked | Full-width, stacked | Full-width in column, stacked |

### Tailwind Breakpoint Usage

**Primary breakpoints:**
- `sm` (640px): Minimal changes (mostly same as mobile)
- `md` (768px): Not heavily used (tablet same as mobile)
- `lg` (1024px): Major shift to 2-column layout

**Responsive patterns:**
- **Mobile & Tablet**: Single-column vertical flow
- **Desktop**: 2-column with sticky summary

**Key decision: Tablet = Mobile layout**
- Simplifies implementation
- Better form usability
- Consistent user experience

---

## Typography & Sizing Adjustments

### Text Sizes by Device

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Page Title** | 20px (`text-xl`) | 24px (`text-2xl`) | 24px (`text-2xl`) |
| **Breadcrumb** | 13px (`text-xs`) | 14px (`text-sm`) | 14px (`text-sm`) |
| **Section Titles** | 16px (`text-base`) | 16px (`text-base`) | 16px (`text-base`) |
| **Form Labels** | 14px (`text-sm`) | 14px (`text-sm`) | 14px (`text-sm`) |
| **Preset Card Name** | 14px (`text-sm`) | 14px (`text-sm`) | 14px (`text-sm`) |
| **Preset Description** | 12px (`text-xs`) | 12px (`text-xs`) | 12px (`text-xs`) |
| **Summary Labels** | 12px (`text-xs`) | 12px (`text-xs`) | 12px (`text-xs`) |
| **Summary Values** | 14px (`text-sm`) | 14px (`text-sm`) | 14px (`text-sm`) |
| **Hourly Cost** | 28px (custom) | 32px (`text-2xl`) | 32px (`text-2xl`) |
| **Monthly Cost** | 20px (`text-lg`) | 24px (`text-xl`) | 24px (`text-xl`) |

### Spacing by Device

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Page Bottom Margin** | 16px (`mb-4`) | 24px (`mb-6`) | 24px (`mb-6`) |
| **Main Grid Gap** | 16px (`gap-4`) | 24px (`gap-6`) | 24px (`gap-6`) |
| **Card Padding** | 16px (`p-4`) | 24px (`p-6`) | 24px (`p-6`) |
| **Form Field Spacing** | 16px (`space-y-4`) | 16px (`space-y-4`) | 16px (`space-y-4`) |
| **Section Card Spacing** | 16px (`space-y-4`) | 24px (`space-y-6`) | 24px (`space-y-6`) |
| **Button Spacing** | 8px (`space-y-2`) | 8px (`space-y-2`) | 8px (`space-y-2`) |

---

## Preset Card Responsive Behavior

### Desktop Layout (2 Columns)

```
┌─────────────────────────────────────────────────────┐
│  [Icon] General Purpose    │  [Icon] Dev & Eng      │
│  Ubuntu 22.04 LTS...       │  Pre-configured...     │
├────────────────────────────┼────────────────────────┤
│  [Icon] Data Science       │  [Icon] 3D Rendering   │
│  Python, Jupyter...        │  CAD, Blender...       │
├────────────────────────────┼────────────────────────┤
│  [Icon] Windows General    │                        │
│  Windows 11 Pro...         │                        │
└─────────────────────────────────────────────────────┘
```

### Tablet Layout (2 Columns, Same as Desktop)

```
┌─────────────────────────────────────────────────────┐
│  [Icon] General Purpose    │  [Icon] Dev & Eng      │
│  Ubuntu 22.04 LTS...       │  Pre-configured...     │
├────────────────────────────┼────────────────────────┤
│  [Icon] Data Science       │  [Icon] 3D Rendering   │
│  Python, Jupyter...        │  CAD, Blender...       │
├────────────────────────────┼────────────────────────┤
│  [Icon] Windows General    │                        │
│  Windows 11 Pro...         │                        │
└─────────────────────────────────────────────────────┘
```

### Mobile Layout (1 Column)

```
┌─────────────────────────────────────┐
│  [Icon] General Purpose             │
│  Ubuntu 22.04 LTS for everyday...   │
├─────────────────────────────────────┤
│  [Icon] Dev & Engineering           │
│  Pre-configured development...      │
├─────────────────────────────────────┤
│  [Icon] Data Science & ML           │
│  Python, Jupyter, TensorFlow...     │
├─────────────────────────────────────┤
│  [Icon] 3D Rendering & CAD          │
│  CAD, Blender, rendering tools...   │
├─────────────────────────────────────┤
│  [Icon] Windows General             │
│  Windows 11 Pro for general use...  │
└─────────────────────────────────────┘
```

---

## Form Layout Responsive Behavior

### Desktop (2-Column with Sticky Summary)

```
┌─────────────────────────────────┬─────────────────┐
│  [Preset Selection]             │  [Summary]      │
│                                 │  (sticky)       │
│  [Basic Configuration]          │                 │
│  - Name                         │  [Cost]         │
│  - Region                       │  (sticky)       │
│                                 │                 │
│  [Resources]                    │  [Actions]      │
│  - CPU slider                   │  (sticky)       │
│  - RAM slider                   │                 │
│  - Storage slider               │                 │
│                                 │                 │
│  [GPU Selection]                │                 │
│                                 │                 │
└─────────────────────────────────┴─────────────────┘
```

### Tablet & Mobile (Single Column)

```
┌─────────────────────────────────┐
│  [Preset Selection]             │
│                                 │
│  [Basic Configuration]          │
│  - Name                         │
│  - Region                       │
│                                 │
│  [Resources]                    │
│  - CPU slider                   │
│  - RAM slider                   │
│  - Storage slider               │
│                                 │
│  [GPU Selection]                │
│                                 │
│  [Summary]                      │
│  (not sticky)                   │
│                                 │
│  [Cost]                         │
│  (not sticky)                   │
│                                 │
│  [Actions]                      │
│  (not sticky)                   │
└─────────────────────────────────┘
```

---

## Professional Look Maintenance

### Design Principles

1. **Form Clarity**
   - Full-width inputs on all devices
   - Clear labels and validation
   - Adequate spacing between fields
   - No cramped horizontal layouts

2. **Visual Hierarchy**
   - Numbered sections (1, 2, 3, 4)
   - Clear section titles
   - Grouped related fields
   - Summary and cost prominent

3. **Consistent Spacing**
   - 8px grid system (Tailwind default)
   - Proportional spacing across devices
   - Adequate padding in cards

4. **Touch-Friendly Interaction**
   - Full-width preset cards on mobile
   - Large sliders (easy to drag)
   - Full-width buttons
   - Adequate spacing between interactive elements

5. **Professional Color Palette**
   - Neutral grays for form elements
   - Indigo accent for selected states and values
   - Indigo-50 background for cost estimator
   - Red for validation errors

6. **Clear Selected States**
   - Preset cards: Border + background change
   - Very obvious which preset is selected
   - Consistent across devices

7. **Cost Visibility**
   - Sticky on desktop (always visible)
   - Before actions on mobile/tablet
   - Prominent indigo background
   - Large, readable numbers

---

## Accessibility Considerations

### Keyboard Navigation
- All form fields focusable and keyboard-accessible
- Tab order: Presets → Name → Region → CPU → RAM → Storage → GPU → Create → Cancel
- Sliders keyboard-accessible (arrow keys)
- Enter submits form

### Screen Readers
- Form labels properly associated with inputs
- Section headings use proper heading tags
- Validation errors announced
- Button states announced (loading, disabled)

### Touch Targets
- Minimum 44×44px on mobile
- Full-width preset cards easy to tap
- Sliders have adequate touch area
- Buttons full-width on mobile

### Validation
- Clear error messages
- Errors shown inline below fields
- Red border on invalid fields
- Submit button disabled during submission

---

## Implementation Checklist

### Phase 1: Core Responsive Behavior
- [ ] Update main layout: 2-column on desktop, 1-column on tablet/mobile
- [ ] Update preset cards: 1 column on mobile, 2 columns on tablet/desktop
- [ ] Remove sticky positioning on tablet/mobile
- [ ] Adjust card padding per device
- [ ] Update page header title size on mobile

### Phase 2: Form Controls
- [ ] Ensure all inputs full-width
- [ ] Test sliders on touch devices
- [ ] Verify select dropdowns work on mobile
- [ ] Test validation error display
- [ ] Ensure buttons full-width on mobile

### Phase 3: Summary & Cost
- [ ] Test sticky positioning on desktop
- [ ] Verify summary appears before actions on mobile/tablet
- [ ] Adjust cost text sizes on mobile
- [ ] Test cost updates in real-time

### Phase 4: Polish & Testing
- [ ] Test at exact breakpoints (639px, 640px, 1023px, 1024px)
- [ ] Test on real devices (iPhone, iPad, laptop)
- [ ] Verify no horizontal scrolling
- [ ] Test form submission on all devices
- [ ] Test validation on all devices
- [ ] Verify touch targets ≥ 44px on mobile
- [ ] Test with keyboard navigation

---

## Edge Cases & Considerations

### Long Preset Names/Descriptions
- Use `line-clamp-2` to limit description to 2 lines
- Prevents cards from varying heights
- Maintains consistent grid

### Very Long Instance Names
- Input allows up to 50 characters
- Validation prevents excessive length
- Summary truncates if needed

### Extreme Resource Values
- Sliders have min/max constraints
- Validation prevents out-of-range values
- Cost updates reflect changes

### Slow Network
- Show loading state on submit button
- Disable form during submission
- Show error if submission fails

### Form Validation Errors
- Show errors inline below fields
- Red border on invalid fields
- Scroll to first error on submit
- Clear errors on field change

### Very Small Screens (< 375px)
- Test on iPhone SE (375px)
- May need additional adjustments
- Consider minimum supported width

### Very Large Screens (> 1920px)
- Max-width constraint on container (`max-w-7xl`)
- Form doesn't stretch too wide
- Summary column maintains comfortable width

---

## Success Criteria

✅ **Layout**
- No horizontal scrolling at any breakpoint
- Form inputs comfortable width on all devices
- Summary visible before submission on mobile/tablet
- Sticky summary works on desktop

✅ **Form Usability**
- All inputs easy to interact with
- Sliders work well on touch devices
- Validation clear and helpful
- Submit button prominent

✅ **Preset Selection**
- Cards large enough to tap on mobile
- Selected state very clear
- 2-column grid works on tablet/desktop
- 1-column grid works on mobile

✅ **Cost Visibility**
- Cost always visible on desktop (sticky)
- Cost shown before actions on mobile/tablet
- Numbers large and readable
- Updates in real-time

✅ **Professional Aesthetic**
- Enterprise SaaS feel maintained
- Clean, organized layout
- Consistent spacing and typography
- Clear visual hierarchy

✅ **Accessibility**
- Keyboard navigable
- Screen reader friendly
- Touch-friendly targets
- Clear validation feedback
