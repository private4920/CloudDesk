# CloudDesk EDU Component Library Specification

## Overview

This document defines the visual and behavioral specifications for core UI components in CloudDesk EDU. Each component follows the foundation design system and maintains enterprise-grade consistency.

---

## 1. Buttons

Buttons are the primary mechanism for user actions. They must be immediately recognizable and clearly communicate their importance through visual hierarchy.

### 1.1 Primary Button

**Purpose**: Main call-to-action, highest priority actions

**Visual Recipe**:
- Background: `indigo-600` solid fill
- Text: `white`, 14px, weight 500 (medium)
- Padding: 8px horizontal, 16px vertical (compact), or 12px vertical (default)
- Border radius: 8px (medium)
- Shadow: Subtle raised shadow
- No border

**States**:

- **Default**: Solid indigo background, white text, subtle shadow
- **Hover**: Background darkens to `indigo-700`, shadow increases slightly, cursor pointer
- **Focus**: 2px `indigo-600` ring with 2px offset, maintains hover appearance
- **Active/Pressed**: Background darkens further, optional subtle scale (98%)
- **Disabled**: Background `gray-300`, text `gray-500`, no shadow, cursor not-allowed, opacity 60%

**Use Cases**:
- "Create Desktop", "Connect", "Save Changes", "Confirm"
- Primary action in forms and dialogs
- Limit to 1-2 per screen to maintain hierarchy

**Tailwind-like Description**:
`bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed`

---

### 1.2 Secondary Button

**Purpose**: Important but not primary actions, alternative choices

**Visual Recipe**:
- Background: `white` or transparent
- Border: 1px solid `gray-200`
- Text: `gray-900`, 14px, weight 500 (medium)
- Padding: Same as primary (8px/16px horizontal, 8px/12px vertical)
- Border radius: 8px (medium)
- Shadow: None or very subtle


**States**:
- **Default**: White background, gray border, dark text
- **Hover**: Background `gray-50`, border `gray-300`, cursor pointer
- **Focus**: 2px `indigo-600` ring with 2px offset
- **Active/Pressed**: Background `gray-100`
- **Disabled**: Border `gray-200`, text `gray-400`, cursor not-allowed, opacity 60%

**Use Cases**:
- "Cancel", "Back", "View Details", "Export"
- Secondary actions in forms
- Alternative options alongside primary button

**Tailwind-like Description**:
`bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-900 font-medium px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors disabled:opacity-60`

---

### 1.3 Tertiary / Ghost Button

**Purpose**: Low-priority actions, inline actions, navigation

**Visual Recipe**:
- Background: Transparent
- Border: None
- Text: `gray-900`, 14px, weight 500 (medium)
- Padding: Same as other buttons
- Border radius: 8px (medium)
- Shadow: None


**States**:
- **Default**: Transparent, dark text
- **Hover**: Background `gray-50`, cursor pointer
- **Focus**: 2px `indigo-600` ring with 2px offset
- **Active/Pressed**: Background `gray-100`
- **Disabled**: Text `gray-400`, cursor not-allowed, opacity 60%

**Use Cases**:
- "View All", "Learn More", "Dismiss"
- Actions within cards or tables
- Navigation items that look like buttons

**Tailwind-like Description**:
`bg-transparent hover:bg-gray-50 text-gray-900 font-medium px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors disabled:opacity-60`

---

### 1.4 Destructive Button

**Purpose**: Dangerous or irreversible actions

**Visual Recipe**:
- Background: `red-600` solid fill (or `white` with red border for secondary destructive)
- Text: `white` (or `red-600` for secondary), 14px, weight 500
- Padding: Same as primary
- Border radius: 8px (medium)
- Shadow: Subtle raised shadow


**States**:
- **Default**: Red background, white text
- **Hover**: Background darkens to `red-700`
- **Focus**: 2px `red-600` ring with 2px offset
- **Active/Pressed**: Background darkens further
- **Disabled**: Same as primary disabled

**Use Cases**:
- "Delete Desktop", "Remove User", "Terminate Instance"
- Always require confirmation dialog

**Tailwind-like Description**:
`bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-colors`

---

### 1.5 Icon Buttons

**Purpose**: Actions represented by icons only, compact controls

**Visual Recipe**:
- Size: 32px × 32px (small), 40px × 40px (default)
- Background: Transparent or `gray-50`
- Icon: 20px, `gray-500` color
- Border radius: 8px (medium) or full for circular
- Padding: Equal on all sides to center icon


**States**:
- **Default**: Transparent or light gray, muted icon
- **Hover**: Background `gray-100`, icon `gray-900`, cursor pointer
- **Focus**: 2px `indigo-600` ring
- **Active/Pressed**: Background `gray-200`
- **Disabled**: Icon `gray-300`, cursor not-allowed

**Use Cases**:
- Close buttons, menu toggles, refresh, settings
- Toolbar actions
- Always include accessible label (aria-label)

**Tailwind-like Description**:
`w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-900 focus:ring-2 focus:ring-indigo-600 transition-colors`

---

## 2. Cards

Cards are the primary content containers. They group related information and create clear visual boundaries.

### 2.1 Default Card

**Purpose**: Standard container for dashboard widgets, lists, forms

**Visual Recipe**:
- Background: `white`
- Border: 1px solid `gray-200`
- Border radius: 8px (medium)
- Shadow: Subtle raised shadow (`0 1px 3px rgba(0,0,0,0.1)`)
- Padding: 24px on all sides (default), 16px for compact


**Layout Guidelines**:
- **Card Header**: Optional, contains title and actions
  - Title: H2 or H3 (18px or 16px, weight 600)
  - Actions: Right-aligned, ghost buttons or icon buttons
  - Bottom margin: 16px from content
- **Card Body**: Main content area
  - Use consistent internal spacing (16px between elements)
- **Card Footer**: Optional, for actions or metadata
  - Top border: 1px solid `gray-200`
  - Top padding: 16px
  - Align actions right, metadata left

**States**:
- **Default**: White background, subtle shadow
- **Hover** (if interactive): Shadow increases to elevated level, border `gray-300`, cursor pointer
- **Focus** (if interactive): 2px `indigo-600` ring

**Use Cases**:
- Dashboard stat cards
- Desktop instance cards
- Form sections
- List containers

**Tailwind-like Description**:
`bg-white border border-gray-200 rounded-lg shadow-sm p-6`

---

### 2.2 Emphasis Card

**Purpose**: Hero sections, featured content, key information


**Visual Recipe**:
- Background: `indigo-50` (light accent) or `white`
- Border: 1px solid `indigo-200` (if using accent background) or `gray-200`
- Border radius: 12px (large)
- Shadow: Elevated shadow (`0 4px 6px rgba(0,0,0,0.07)`)
- Padding: 32px on all sides

**Layout Guidelines**:
- Larger typography for titles (24px)
- More generous spacing (24px between elements)
- Can include illustrations or icons
- Limit to 1-2 per page

**Use Cases**:
- Onboarding prompts
- Feature announcements
- Empty states with CTAs
- Upgrade prompts

**Tailwind-like Description**:
`bg-indigo-50 border border-indigo-200 rounded-xl shadow-md p-8`

---

### 2.3 Interactive Card

**Purpose**: Clickable cards that navigate or trigger actions

**Visual Recipe**:
- Same as default card
- Add hover and focus states
- Include subtle visual cue (arrow icon, chevron)


**States**:
- **Default**: Standard card appearance
- **Hover**: Border `gray-300`, shadow elevated, cursor pointer, optional subtle scale (101%)
- **Focus**: 2px `indigo-600` ring with 2px offset
- **Active**: Border `indigo-600`, shadow elevated

**Use Cases**:
- Desktop selection cards
- App launcher tiles
- Navigation cards
- Quick action cards

**Tailwind-like Description**:
`bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:border-gray-300 hover:shadow-md focus:ring-2 focus:ring-indigo-600 transition-all cursor-pointer`

---

## 3. Inputs & Form Controls

Form controls must be clear, accessible, and provide immediate feedback. All inputs follow consistent sizing and spacing.

### 3.1 Text Input

**Purpose**: Single-line text entry

**Visual Recipe**:
- Background: `white`
- Border: 1px solid `gray-200`
- Border radius: 8px (medium)
- Padding: 8px horizontal, 10px vertical
- Text: 14px, `gray-900`, weight 400
- Placeholder: 14px, `gray-400`, weight 400
- Height: 40px total


**States**:
- **Default**: White background, gray border
- **Hover**: Border `gray-300`
- **Focus**: Border `indigo-600`, 2px `indigo-600` ring with 2px offset, outline none
- **Disabled**: Background `gray-50`, border `gray-200`, text `gray-400`, cursor not-allowed
- **Error**: Border `red-500`, 2px `red-500` ring on focus
- **Success**: Border `emerald-500`, optional checkmark icon

**Label**:
- Position: Above input, 8px margin bottom
- Text: 14px, `gray-900`, weight 500
- Required indicator: Red asterisk after label

**Helper Text**:
- Position: Below input, 4px margin top
- Text: 13px, `gray-500`, weight 400
- Error text: 13px, `red-600`, weight 400

**Use Cases**:
- Name, email, username fields
- Search inputs
- Any single-line text entry

**Tailwind-like Description**:
`w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-0 outline-none transition-colors placeholder:text-gray-400`

---

### 3.2 Textarea

**Purpose**: Multi-line text entry


**Visual Recipe**:
- Same as text input
- Min height: 80px (5 lines)
- Resize: Vertical only
- Line height: 1.5

**States**: Same as text input

**Use Cases**:
- Descriptions, notes, comments
- Configuration text
- Multi-line content entry

**Tailwind-like Description**:
`w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 outline-none resize-y min-h-[80px]`

---

### 3.3 Select / Dropdown

**Purpose**: Choose one option from a list

**Visual Recipe**:
- Same base styling as text input
- Right icon: Chevron down, 16px, `gray-400`
- Icon padding: 32px right padding to accommodate icon
- Dropdown menu: White background, elevated shadow, 8px border radius


**Dropdown Menu**:
- Background: `white`
- Border: 1px solid `gray-200`
- Shadow: Elevated (`0 4px 6px rgba(0,0,0,0.07)`)
- Max height: 300px with scroll
- Item padding: 8px horizontal, 10px vertical
- Item hover: Background `gray-50`
- Item selected: Background `indigo-50`, text `indigo-900`, checkmark icon

**States**: Same as text input

**Use Cases**:
- Desktop OS selection
- Region/datacenter selection
- Any single-choice selection

**Tailwind-like Description**:
`w-full px-3 py-2 pr-10 border border-gray-200 rounded-lg focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 appearance-none bg-white`

---

### 3.4 Checkbox

**Purpose**: Multiple selections, boolean toggles

**Visual Recipe**:
- Size: 16px × 16px
- Background: `white`
- Border: 1px solid `gray-300`
- Border radius: 4px (small)
- Checkmark: `white` on `indigo-600` background when checked


**States**:
- **Unchecked**: White background, gray border
- **Checked**: `indigo-600` background, white checkmark, no border
- **Hover**: Border `gray-400` (unchecked), background `indigo-700` (checked)
- **Focus**: 2px `indigo-600` ring with 2px offset
- **Disabled**: Background `gray-100`, border `gray-200`, cursor not-allowed

**Label**:
- Position: Right of checkbox, 8px margin left
- Text: 14px, `gray-900`, weight 400
- Clickable: Label click should toggle checkbox

**Use Cases**:
- Multi-select lists
- Feature toggles
- Agreement checkboxes

**Tailwind-like Description**:
`w-4 h-4 border border-gray-300 rounded checked:bg-indigo-600 checked:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`

---

### 3.5 Radio Button

**Purpose**: Single selection from multiple options

**Visual Recipe**:
- Size: 16px × 16px
- Background: `white`
- Border: 1px solid `gray-300`
- Border radius: Full (circular)
- Selected indicator: 8px circle, `indigo-600`


**States**:
- **Unselected**: White background, gray border
- **Selected**: White background, gray border, `indigo-600` inner circle
- **Hover**: Border `gray-400`
- **Focus**: 2px `indigo-600` ring with 2px offset
- **Disabled**: Background `gray-100`, cursor not-allowed

**Label**: Same as checkbox

**Use Cases**:
- Mutually exclusive options
- Plan selection
- Single-choice questions

**Tailwind-like Description**:
`w-4 h-4 border border-gray-300 rounded-full checked:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`

---

### 3.6 Toggle Switch

**Purpose**: Binary on/off states, feature flags

**Visual Recipe**:
- Track width: 44px
- Track height: 24px
- Track border radius: Full (pill shape)
- Thumb size: 20px circle
- Thumb position: 2px from edges


**States**:
- **Off**: Track `gray-200`, thumb `white` on left
- **On**: Track `indigo-600`, thumb `white` on right
- **Hover**: Track darkens slightly
- **Focus**: 2px `indigo-600` ring around track
- **Disabled**: Track `gray-100`, thumb `gray-300`, cursor not-allowed

**Animation**: Smooth slide transition (200ms ease-in-out)

**Label**: Same as checkbox, typically on left of switch

**Use Cases**:
- Enable/disable features
- Auto-start desktop
- Notification preferences

**Tailwind-like Description**:
`relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 checked:bg-indigo-600 transition-colors focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`

---

### 3.7 Slider

**Purpose**: Numeric input within a range

**Visual Recipe**:
- Track height: 4px
- Track background: `gray-200`
- Track fill: `indigo-600` (from start to thumb)
- Thumb size: 16px circle
- Thumb background: `white`
- Thumb border: 2px solid `indigo-600`


**States**:
- **Default**: Gray track, indigo fill, white thumb
- **Hover**: Thumb shadow increases
- **Focus**: 2px `indigo-600` ring around thumb
- **Dragging**: Thumb scale increases slightly (110%)
- **Disabled**: Track `gray-100`, fill `gray-300`, cursor not-allowed

**Labels**:
- Min/max values: 13px, `gray-500`, positioned at track ends
- Current value: 14px, `gray-900`, weight 500, above or beside slider

**Use Cases**:
- CPU/RAM allocation
- Storage size selection
- Volume controls

**Tailwind-like Description**:
`w-full h-1 bg-gray-200 rounded-full appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-indigo-600 [&::-webkit-slider-thumb]:rounded-full`

---

## 4. Status Badges / Chips

Badges communicate state, status, or categories. They must be scannable at a glance and use color purposefully.

### 4.1 General Badge Style

**Visual Recipe**:
- Padding: 4px horizontal, 2px vertical (very compact)
- Border radius: 6px (small) or full (pill)
- Text: 12px, weight 500, uppercase or sentence case
- Border: Optional 1px border matching background color (darker shade)


**Layout**:
- Inline with text or standalone
- Align vertically centered with adjacent text
- 8px margin from surrounding elements

---

### 4.2 Instance Status Badges

**PROVISIONING**
- Background: `blue-50` (#EFF6FF)
- Text: `blue-700` (#1D4ED8)
- Border: Optional `blue-200`
- Icon: Optional spinner or clock icon
- Meaning: Desktop is being created

**RUNNING**
- Background: `emerald-50` (#ECFDF5)
- Text: `emerald-700` (#047857)
- Border: Optional `emerald-200`
- Icon: Optional green dot or play icon
- Meaning: Desktop is active and accessible

**STOPPED**
- Background: `gray-100` (#F3F4F6)
- Text: `gray-700` (#374151)
- Border: Optional `gray-300`
- Icon: Optional pause icon
- Meaning: Desktop is stopped but can be restarted

**DELETED**
- Background: `red-50` (#FEF2F2)
- Text: `red-700` (#B91C1C)
- Border: Optional `red-200`
- Icon: Optional X icon
- Meaning: Desktop is being deleted or has been removed


**MAINTENANCE**
- Background: `amber-50` (#FFFBEB)
- Text: `amber-700` (#B45309)
- Border: Optional `amber-200`
- Icon: Optional wrench icon
- Meaning: Desktop is undergoing maintenance

**ERROR / FAILED**
- Background: `red-50` (#FEF2F2)
- Text: `red-700` (#B91C1C)
- Border: Optional `red-200`
- Icon: Optional alert icon
- Meaning: Desktop encountered an error

---

### 4.3 General Purpose Badges

**Neutral**
- Background: `gray-100`
- Text: `gray-700`
- Use: Default, informational tags

**Info**
- Background: `blue-50`
- Text: `blue-700`
- Use: Informational labels, tips

**Success**
- Background: `emerald-50`
- Text: `emerald-700`
- Use: Completed actions, positive states

**Warning**
- Background: `amber-50`
- Text: `amber-700`
- Use: Caution, attention needed


**Error**
- Background: `red-50`
- Text: `red-700`
- Use: Errors, critical issues

**Tailwind-like Description** (Running example):
`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200`

---

### 4.4 Count Badges

**Purpose**: Notification counts, unread indicators

**Visual Recipe**:
- Size: 20px × 20px (small), 24px × 24px (default)
- Background: `red-600` for notifications, `gray-400` for neutral counts
- Text: `white`, 12px, weight 600, centered
- Border radius: Full (circular)
- Position: Typically top-right of parent element

**Use Cases**:
- Unread notification count
- Pending action count
- Item count in lists

**Tailwind-like Description**:
`inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-600 rounded-full`

---

## 5. Tabs / Filter Pills

Tabs and filter pills allow users to switch between views or filter content. They must clearly indicate the active state.


### 5.1 Standard Tabs

**Purpose**: Navigate between related views or sections

**Visual Recipe**:
- Container: Horizontal list, border-bottom 1px solid `gray-200`
- Tab item padding: 12px horizontal, 12px vertical
- Text: 14px, weight 500
- Active indicator: 2px bottom border, `indigo-600`

**States**:
- **Inactive**: Text `gray-500`, no bottom border, background transparent
- **Hover**: Text `gray-900`, background `gray-50`
- **Active**: Text `indigo-600`, 2px bottom border `indigo-600`, background transparent
- **Focus**: 2px `indigo-600` ring
- **Disabled**: Text `gray-300`, cursor not-allowed

**Layout**:
- Tabs aligned left by default
- Equal spacing between tabs (16px gap)
- Full-width container with bottom border

**Use Cases**:
- Settings sections (General, Security, Billing)
- Desktop details (Overview, Performance, Logs)
- Multi-step forms

**Tailwind-like Description** (Active tab):
`px-3 py-3 text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 focus:ring-2 focus:ring-indigo-600`

---

### 5.2 Pill Tabs / Segmented Control


**Purpose**: Compact view switching, filter toggles

**Visual Recipe**:
- Container: Inline-flex, background `gray-100`, padding 4px, border-radius 8px
- Pill item padding: 8px horizontal, 6px vertical
- Text: 14px, weight 500
- Border radius: 6px (small)

**States**:
- **Inactive**: Text `gray-600`, background transparent
- **Hover**: Text `gray-900`, background `gray-50`
- **Active**: Text `gray-900`, background `white`, subtle shadow
- **Focus**: 2px `indigo-600` ring
- **Disabled**: Text `gray-400`, cursor not-allowed

**Layout**:
- Pills sit side-by-side with no gap (container padding creates spacing)
- Equal width pills (optional) for symmetry
- Typically 2-5 options

**Use Cases**:
- View toggles (Grid / List)
- Time range filters (Day / Week / Month)
- Status filters (All / Active / Stopped)

**Tailwind-like Description** (Active pill):
`px-3 py-1.5 text-sm font-medium text-gray-900 bg-white rounded-md shadow-sm`

**Container**:
`inline-flex p-1 bg-gray-100 rounded-lg gap-1`

---

### 5.3 Filter Pills (Removable)


**Purpose**: Show active filters with ability to remove

**Visual Recipe**:
- Background: `indigo-50`
- Border: 1px solid `indigo-200`
- Text: 13px, `indigo-700`, weight 500
- Padding: 6px left, 4px right, 4px vertical
- Border radius: Full (pill shape)
- Close button: 16px × 16px, `indigo-600` icon

**States**:
- **Default**: Light indigo background, darker text
- **Hover**: Background `indigo-100`, close button `indigo-700`
- **Focus**: 2px `indigo-600` ring on close button

**Layout**:
- Display inline-flex with 8px gap between pills
- Wrap to multiple lines if needed
- Close button on right side of pill

**Use Cases**:
- Active search filters
- Selected tags
- Applied criteria

**Tailwind-like Description**:
`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full`

---

## Component Usage Guidelines

### Hierarchy Rules

1. **One primary button per screen**: Avoid multiple competing CTAs
2. **Cards within cards**: Avoid nesting cards more than one level deep
3. **Badge density**: Limit to 1-2 badges per item in lists
4. **Tab count**: Keep tabs to 3-7 items; use dropdown for more options

### Accessibility Requirements


1. **Focus indicators**: All interactive elements must have visible focus states
2. **Color independence**: Never rely on color alone; use icons, text, or patterns
3. **Contrast ratios**: Text must meet WCAG AA minimum (4.5:1 for body, 3:1 for large text)
4. **Keyboard navigation**: All actions must be keyboard accessible
5. **Screen reader labels**: Icon buttons and status badges need aria-labels
6. **Form validation**: Errors must be announced and associated with inputs

### Responsive Behavior

**Buttons**:
- Mobile: Full width for primary actions in forms
- Desktop: Auto width with min-width 80px

**Cards**:
- Mobile: Full width with 16px padding
- Desktop: Grid layout with 24px padding

**Inputs**:
- Always full width of container
- Stack labels above inputs on all screen sizes

**Tabs**:
- Mobile: Horizontal scroll if needed, or convert to dropdown
- Desktop: Horizontal layout

**Badges**:
- Scale consistently across all screen sizes
- Wrap text if necessary, but prefer short labels

---

## Implementation Notes

When implementing these components in React + Tailwind:

1. **Create base components first**: Button, Card, Input, Badge
2. **Use composition**: Build complex components from base components
3. **Consistent props**: Use `variant`, `size`, `disabled` props consistently
4. **TypeScript types**: Define strict prop types for all components
5. **Storybook/documentation**: Document all variants and states
6. **Test accessibility**: Use axe-core or similar tools to validate
7. **Dark mode consideration**: While not in scope now, structure CSS to support future dark mode

This specification provides the foundation for a cohesive, professional component library that maintains CloudDesk EDU's enterprise-grade aesthetic.
