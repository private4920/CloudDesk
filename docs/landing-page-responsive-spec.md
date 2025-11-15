# CloudDesk EDU Landing Page Responsive Behavior Spec

## Overview

This document defines the responsive behavior of the Landing page (`/`) across mobile, tablet, and desktop devices, ensuring CloudDesk EDU maintains its clean, enterprise aesthetic while optimizing readability and conversion at all screen sizes.

---

## Page Structure

The Landing page consists of:
1. **Top Navigation** (sticky header)
2. **Hero Section** (headline + visual preview)
3. **"Who It's For" Section** (3 persona cards)
4. **Key Benefits Section** (4 benefit items)
5. **Final CTA Section** (call-to-action)
6. **Footer** (links + branding)

---

## 1. Top Navigation (Sticky Header)

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Full-width container with `max-w-7xl` centered
- Height: 64px (`h-16`)
- Horizontal padding: `px-16` (64px)

**Content:**
- **Left**: Logo (48px) + Navigation links (Product, Use Cases, Pricing, Documentation)
- **Right**: "Sign In" (ghost button) + "Get Started" (primary button)

**Spacing:**
- Logo to nav links: 32px gap (`gap-8`)
- Nav links: 24px gap (`gap-6`)
- Right buttons: 12px gap (`gap-3`)

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- Same height: 64px (`h-16`)
- Horizontal padding: `px-8` (32px)

**Content:**
- **Left**: Logo (48px) + Navigation links (visible on `md`+, hidden on `sm`)
- **Right**: "Sign In" + "Get Started" buttons (both visible)

**Changes from Desktop:**
- Hide navigation links on `< md` (below 768px)
- Reduce horizontal padding
- Keep buttons visible (primary conversion path)

### Mobile (< 640px / `< sm`)

**Layout:**
- Height: 56px (`h-14`) — slightly shorter
- Horizontal padding: `px-4` (16px)

**Content:**
- **Left**: Logo only (40px, slightly smaller)
- **Right**: "Get Started" button only (hide "Sign In" to save space)

**Changes from Tablet:**
- Hide "Sign In" button
- Reduce logo size slightly
- Tighter padding

**Rationale:**
- Focus on primary CTA ("Get Started")
- Maximize space for logo and primary action
- Users can still access sign-in from dashboard

---

## 2. Hero Section

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Two-column grid: `grid lg:grid-cols-2`
- Gap between columns: 64px (`gap-16`)
- Vertical padding: 128px top/bottom (`py-32`)
- Horizontal padding: `px-16` (64px)
- Max-width: `max-w-7xl` centered

**Left Column (Text):**
- Eyebrow text: 14px (`text-sm`), indigo-600, medium weight
- Headline: 60px (`text-6xl`), semibold, gray-900
- Subheadline: 18px (`text-lg`), gray-600, max-width 576px
- Buttons: Side-by-side, 16px gap (`gap-4`)
- Fine print: 14px (`text-sm`), gray-500, 24px top margin

**Right Column (Visual):**
- Product preview card with shadow
- Shows 3 desktop instances with badges and buttons
- Full card width, natural height

**Vertical Alignment:**
- Content vertically centered (`items-center`)

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- **768px – 1023px (`md` to `lg`)**: Two-column layout maintained
  - Slightly compressed: 55% text, 45% visual
  - Gap: 48px (`gap-12`)
- **640px – 767px (`sm` to `md`)**: Stack vertically
  - Text first, visual below
  - Gap: 48px (`gap-12`)
- Vertical padding: 80px (`py-20`)
- Horizontal padding: `px-8` (32px)

**Text Column:**
- Eyebrow: Same (14px)
- Headline: 48px (`text-5xl`) — reduced from 60px
- Subheadline: 18px (`text-lg`) — same
- Buttons: Side-by-side on `sm`+, stacked on mobile
- Fine print: Same

**Visual Column:**
- Same card, but scales down naturally
- May show fewer desktop items on smaller tablets (optional)

**Rationale:**
- Maintain two-column on larger tablets (iPad landscape)
- Stack on smaller tablets (iPad portrait) for readability
- Reduce headline size to prevent awkward line breaks

### Mobile (< 640px / `< sm`)

**Layout:**
- Single column, stacked vertically
- Text first, visual below
- Gap: 32px (`gap-8`)
- Vertical padding: 64px (`py-16`)
- Horizontal padding: `px-4` (16px)

**Text Content:**
- Eyebrow: Same (14px)
- Headline: 36px (`text-4xl`) — significantly reduced
- Subheadline: 16px (`text-base`) — slightly reduced
- Buttons: **Full-width stacked** (`flex-col`, `w-full`)
  - Gap: 16px (`gap-4`)
  - Each button full-width for easy tapping
- Fine print: Same (14px)

**Visual Content:**
- Product preview card: Full width
- May show 2 desktop items instead of 3 (optional simplification)
- Reduce card padding: `p-4` instead of `p-6`

**Rationale:**
- Larger headline still impactful but fits mobile screens
- Full-width buttons easier to tap, clear hierarchy
- Visual preview still shows product value without overwhelming

---

## 3. "Who It's For" Section

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Three-column grid: `grid lg:grid-cols-3`
- Gap: 32px (`gap-8`)
- Vertical padding: 80px (`py-20`)
- Horizontal padding: `px-16` (64px)
- Background: `bg-gray-50`

**Section Header:**
- Eyebrow: 14px, indigo-600, centered
- Headline: 36px (`text-4xl`), semibold, centered
- Subheadline: 18px (`text-lg`), gray-600, max-width 672px, centered
- Bottom margin: 48px (`mb-12`)

**Cards:**
- Equal width (1/3 each)
- Padding: 32px (`p-8`)
- Icon container: 56px (`w-14 h-14`), indigo-50 background, rounded
- Icon: 28px (`w-7 h-7`), indigo-600
- Card title: 20px (`text-xl`), semibold
- Card text: 16px (`text-base`), gray-600
- Hover effect: Lift shadow, border color change

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- **768px – 1023px (`md` to `lg`)**: Two-column grid
  - `grid md:grid-cols-2`
  - First two cards in row 1, third card in row 2 (spans 1 column)
  - Gap: 32px (`gap-8`)
- **640px – 767px (`sm` to `md`)**: Single column
  - `grid-cols-1`
  - All cards stacked
  - Gap: 24px (`gap-6`)
- Vertical padding: 80px (`py-20`)
- Horizontal padding: `px-8` (32px)

**Section Header:**
- Same as desktop

**Cards:**
- Same styling as desktop
- On two-column layout, third card can either:
  - **Option A**: Span 1 column (left-aligned)
  - **Option B**: Center in row with `md:col-span-2 md:max-w-md md:mx-auto`

**Rationale:**
- Two-column on larger tablets maximizes space
- Single column on smaller tablets ensures readability
- Cards maintain same visual weight

### Mobile (< 640px / `< sm`)

**Layout:**
- Single column: `grid-cols-1`
- Gap: 24px (`gap-6`)
- Vertical padding: 64px (`py-16`)
- Horizontal padding: `px-4` (16px)

**Section Header:**
- Eyebrow: Same (14px)
- Headline: 32px (`text-3xl`) — reduced
- Subheadline: 16px (`text-base`) — reduced
- Bottom margin: 32px (`mb-8`)

**Cards:**
- Full width
- Padding: 24px (`p-6`) — slightly reduced
- Icon container: Same (56px)
- Card title: 18px (`text-lg`) — slightly reduced
- Card text: 15px (`text-sm`) — slightly reduced
- No hover effect (touch device)

**Rationale:**
- Single column ensures comfortable reading
- Slightly reduced padding and text sizes fit mobile screens
- Maintain visual hierarchy with icon → title → text

---

## 4. Key Benefits Section

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Four-column grid: `grid lg:grid-cols-4`
- Gap: 48px (`gap-12`)
- Vertical padding: 80px (`py-20`)
- Horizontal padding: `px-16` (64px)
- Background: White

**Section Header:**
- Headline: 36px (`text-4xl`), semibold, centered
- Bottom margin: 48px (`mb-12`)

**Benefit Items:**
- Equal width (1/4 each)
- Center-aligned text
- Icon container: 40px (`w-10 h-10`), indigo-600 background, rounded, centered
- Icon: 20px (`w-5 h-5`), white
- Title: 18px (`text-lg`), semibold, gray-900
- Description: 14px (`text-sm`), gray-600, max-width 240px, centered

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- **768px – 1023px (`md` to `lg`)**: Two-column grid
  - `grid sm:grid-cols-2`
  - 2 rows × 2 columns
  - Gap: 48px (`gap-12`)
- **640px – 767px (`sm` to `md`)**: Two-column grid (same)
  - Maintain 2×2 layout
  - Gap: 32px (`gap-8`) — slightly reduced
- Vertical padding: 80px (`py-20`)
- Horizontal padding: `px-8` (32px)

**Section Header:**
- Same as desktop

**Benefit Items:**
- Same styling as desktop
- Center-aligned
- Max-width constraint ensures text doesn't stretch too wide

**Rationale:**
- 2×2 grid balances space usage and readability
- Center alignment maintains visual harmony
- Adequate gap prevents crowding

### Mobile (< 640px / `< sm`)

**Layout:**
- Single column: `grid-cols-1`
- Gap: 32px (`gap-8`)
- Vertical padding: 64px (`py-16`)
- Horizontal padding: `px-4` (16px)

**Section Header:**
- Headline: 32px (`text-3xl`) — reduced
- Bottom margin: 32px (`mb-8`)

**Benefit Items:**
- Full width, stacked vertically
- Center-aligned
- Icon container: Same (40px)
- Title: 18px (`text-lg`) — same
- Description: 14px (`text-sm`) — same
- Max-width: None (full width within padding)

**Rationale:**
- Vertical stack ensures easy scanning
- Center alignment maintains professional look
- Adequate spacing between items prevents visual clutter

---

## 5. Final CTA Section

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Single column, center-aligned
- Max-width: 768px (`max-w-3xl`), centered
- Vertical padding: 80px (`py-20`)
- Horizontal padding: `px-16` (64px)
- Background: `bg-indigo-50`

**Content:**
- Headline: 36px (`text-4xl`), semibold
- Subheadline: 18px (`text-lg`), gray-600
- Button: Large primary button
- Fine print: 14px (`text-sm`), gray-500

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- Same as desktop
- Horizontal padding: `px-8` (32px)

**Content:**
- Same as desktop

### Mobile (< 640px / `< sm`)

**Layout:**
- Same structure
- Vertical padding: 64px (`py-16`)
- Horizontal padding: `px-4` (16px)

**Content:**
- Headline: 32px (`text-3xl`) — reduced
- Subheadline: 16px (`text-base`) — reduced
- Button: Full-width or large (user preference)
- Fine print: Same

---

## 6. Footer

### Desktop (≥ 1024px / `lg`)

**Layout:**
- Four-column grid: `grid md:grid-cols-4`
- Gap: 32px (`gap-8`)
- Vertical padding: 48px (`py-12`)
- Horizontal padding: `px-16` (64px)
- Background: `bg-gray-900`

**Content:**
- **Column 1**: Logo + tagline
- **Columns 2-4**: Link groups (Product, Company, Legal)
- **Bottom**: Copyright text, left-aligned, top border

### Tablet (640px – 1023px / `sm` to `lg`)

**Layout:**
- **768px – 1023px (`md` to `lg`)**: Four-column grid (same as desktop)
- **640px – 767px (`sm` to `md`)**: Two-column grid
  - `grid sm:grid-cols-2`
  - Logo + Product in row 1
  - Company + Legal in row 2
  - Gap: 32px (`gap-8`)
- Horizontal padding: `px-8` (32px)

**Bottom:**
- Copyright: Center-aligned on `< md`

### Mobile (< 640px / `< sm`)

**Layout:**
- Single column: `grid-cols-1`
- Gap: 32px (`gap-8`)
- Vertical padding: 48px (`py-12`)
- Horizontal padding: `px-4` (16px)

**Content:**
- All sections stacked vertically
- Logo + tagline at top
- Link groups below (Product, Company, Legal)
- Copyright at bottom, center-aligned

**Spacing:**
- Increase vertical spacing between sections: 32px
- Center-align all content for mobile

**Rationale:**
- Vertical stack easiest to scan on mobile
- Center alignment feels more balanced
- Adequate spacing prevents crowding

---

## Tailwind Breakpoint Usage Summary

### Key Layout Shifts

| Section | Mobile (< 640px) | Tablet (640-1023px) | Desktop (≥ 1024px) |
|---------|------------------|---------------------|-------------------|
| **Top Nav** | Logo + 1 button | Logo + nav (md+) + 2 buttons | Logo + nav + 2 buttons |
| **Hero** | Stacked (text → visual) | Stacked (sm-md), 2-col (md-lg) | 2-column (text ↔ visual) |
| **Who It's For** | 1 column | 1 col (sm-md), 2 col (md-lg) | 3 columns |
| **Key Benefits** | 1 column | 2 columns (2×2) | 4 columns |
| **Footer** | 1 column | 2 columns (sm-md), 4 col (md-lg) | 4 columns |

### Breakpoint Strategy

**Primary breakpoints used:**
- `sm` (640px): Transition from mobile to tablet
- `md` (768px): Enhanced tablet experience (show nav, adjust grids)
- `lg` (1024px): Full desktop experience

**Responsive patterns:**
- **Mobile-first**: Start with single-column, stack vertically
- **Tablet**: Introduce 2-column grids, show more content
- **Desktop**: Full multi-column layouts, maximum density

---

## Typography Adjustments by Device

### Headline Sizes

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Hero H1** | 36px (`text-4xl`) | 48px (`text-5xl`) | 60px (`text-6xl`) |
| **Section H2** | 32px (`text-3xl`) | 36px (`text-4xl`) | 36px (`text-4xl`) |
| **Card H3** | 18px (`text-lg`) | 20px (`text-xl`) | 20px (`text-xl`) |
| **Benefit Title** | 18px (`text-lg`) | 18px (`text-lg`) | 18px (`text-lg`) |

### Body Text Sizes

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Hero Subheadline** | 16px (`text-base`) | 18px (`text-lg`) | 18px (`text-lg`) |
| **Section Subheadline** | 16px (`text-base`) | 18px (`text-lg`) | 18px (`text-lg`) |
| **Card Text** | 15px (`text-sm`) | 16px (`text-base`) | 16px (`text-base`) |
| **Benefit Description** | 14px (`text-sm`) | 14px (`text-sm`) | 14px (`text-sm`) |

**Rationale:**
- Hero headline scales significantly (36px → 60px) for impact
- Section headlines scale moderately (32px → 36px)
- Body text scales minimally (14-18px range) for readability
- Maintain minimum 14px for accessibility

---

## Spacing Adjustments by Device

### Container Padding

| Device | Horizontal Padding | Vertical Padding (Sections) |
|--------|-------------------|----------------------------|
| **Mobile** | 16px (`px-4`) | 64px (`py-16`) |
| **Tablet** | 32px (`px-8`) | 80px (`py-20`) |
| **Desktop** | 64px (`px-16`) | 80-128px (`py-20` to `py-32`) |

### Grid Gaps

| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| **Hero** | 32px (`gap-8`) | 48px (`gap-12`) | 64px (`gap-16`) |
| **Who It's For** | 24px (`gap-6`) | 32px (`gap-8`) | 32px (`gap-8`) |
| **Key Benefits** | 32px (`gap-8`) | 32-48px (`gap-8` to `gap-12`) | 48px (`gap-12`) |
| **Footer** | 32px (`gap-8`) | 32px (`gap-8`) | 32px (`gap-8`) |

**Rationale:**
- Tighter spacing on mobile conserves vertical space
- Generous spacing on desktop creates breathing room
- Consistent 8px grid system (Tailwind default)

---

## Button Behavior by Device

### Hero Buttons

| Device | Layout | Width | Gap |
|--------|--------|-------|-----|
| **Mobile** | Stacked (`flex-col`) | Full-width (`w-full`) | 16px (`gap-4`) |
| **Tablet** | Side-by-side (`flex-row`) | Auto (`w-auto`) | 16px (`gap-4`) |
| **Desktop** | Side-by-side (`flex-row`) | Auto (`w-auto`) | 16px (`gap-4`) |

**Implementation:**
```
className="flex flex-col sm:flex-row gap-4"
```

### Top Nav Buttons

| Device | Visible Buttons |
|--------|----------------|
| **Mobile** | "Get Started" only |
| **Tablet** | "Sign In" + "Get Started" |
| **Desktop** | "Sign In" + "Get Started" |

**Rationale:**
- Full-width buttons on mobile easier to tap
- Side-by-side on tablet/desktop saves vertical space
- Hide secondary button on mobile to focus on primary CTA

---

## Card Behavior by Device

### "Who It's For" Cards

| Device | Padding | Hover Effect |
|--------|---------|--------------|
| **Mobile** | 24px (`p-6`) | None (touch device) |
| **Tablet** | 32px (`p-8`) | Lift shadow + border |
| **Desktop** | 32px (`p-8`) | Lift shadow + border |

### Product Preview Card (Hero)

| Device | Padding | Items Shown |
|--------|---------|-------------|
| **Mobile** | 16px (`p-4`) | 2-3 desktop items |
| **Tablet** | 24px (`p-6`) | 3 desktop items |
| **Desktop** | 24px (`p-6`) | 3 desktop items |

**Rationale:**
- Reduce padding on mobile to fit content
- Maintain hover effects on pointer devices only
- Simplify product preview on mobile if needed

---

## Professional Look Maintenance

### Design Principles for All Devices

1. **Consistent Color Palette**
   - Neutral grays: slate-50, slate-200, gray-600, gray-900
   - Indigo accent: indigo-50, indigo-600
   - No bright or playful colors

2. **Typography Hierarchy**
   - Clear size progression: H1 > H2 > H3 > Body
   - Consistent font weights: semibold for headings, medium for subheadings, regular for body
   - Adequate line-height: 1.5 for body, 1.2 for headings

3. **Generous Whitespace**
   - Don't cram content on mobile
   - Maintain breathing room between sections
   - Use consistent spacing scale (8px grid)

4. **Professional Imagery**
   - Product preview shows real UI (not abstract graphics)
   - Icons are simple, functional (Lucide React)
   - No stock photos or decorative elements

5. **Clear Hierarchy**
   - Eyebrow text → Headline → Subheadline → CTA
   - Visual flow guides user to action
   - Primary CTA always prominent

6. **Subtle Interactions**
   - Smooth transitions (150-300ms)
   - Hover effects on desktop only
   - No bouncy or playful animations

7. **Accessibility**
   - Minimum 14px font size
   - Adequate color contrast (WCAG AA)
   - Touch targets ≥ 44px on mobile
   - Keyboard navigable

---

## Implementation Checklist

### Phase 1: Core Responsive Behavior
- [ ] Update Top Nav: Hide nav links on `< md`, hide "Sign In" on `< sm`
- [ ] Update Hero: Stack on mobile, 2-col on desktop, adjust headline sizes
- [ ] Update Hero buttons: Full-width on mobile, side-by-side on tablet+
- [ ] Update "Who It's For": 1 col mobile, 2 col tablet, 3 col desktop
- [ ] Update Key Benefits: 1 col mobile, 2×2 tablet, 4 col desktop
- [ ] Update Footer: 1 col mobile, 2-4 col tablet/desktop

### Phase 2: Typography & Spacing
- [ ] Adjust headline sizes per device tier
- [ ] Adjust container padding per device tier
- [ ] Adjust grid gaps per device tier
- [ ] Adjust card padding per device tier

### Phase 3: Polish & Testing
- [ ] Test at exact breakpoints (639px, 640px, 767px, 768px, 1023px, 1024px)
- [ ] Test on real devices (iPhone, iPad, laptop)
- [ ] Verify no horizontal scrolling at any width
- [ ] Verify touch targets ≥ 44px on mobile
- [ ] Verify text readability at all sizes
- [ ] Test hover effects on desktop only

---

## Success Criteria

✅ **Layout**
- No horizontal scrolling at any breakpoint
- Content fits comfortably within viewport
- Clear visual hierarchy maintained
- Smooth transitions between breakpoints

✅ **Typography**
- All text readable (minimum 14px)
- Headlines impactful but not overwhelming
- Line-height comfortable for reading
- No awkward line breaks

✅ **Spacing**
- Consistent 8px grid system
- Adequate breathing room between sections
- Cards don't feel cramped
- Buttons easy to tap on mobile

✅ **Professional Aesthetic**
- Enterprise SaaS feel maintained
- Clean, minimal design
- Consistent color palette
- Subtle, polished interactions

✅ **Conversion Optimization**
- Primary CTA always visible and prominent
- Clear value proposition at all sizes
- Product preview shows real value
- Easy path to sign-up
