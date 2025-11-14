# CloudDesk EDU Create Instance Page Specification

## Overview

The Create Instance page (`/create`) is a single-page configuration form that guides users through selecting a preset and customizing their cloud desktop. The design prioritizes clarity and confidence—users should understand exactly what they're creating and what it will cost before committing.

**Primary Goals**:
1. Help users choose an appropriate preset for their use case
2. Allow customization of resources (CPU, RAM, storage, GPU)
3. Provide transparent cost estimation in real-time
4. Minimize errors through clear validation and helpful guidance
5. Make the creation process feel professional and trustworthy

**User Context**: First-time users and experienced users creating additional instances. Typical flow: Select preset → Adjust resources → Review cost → Create.

---

## Page Structure

The Create Instance page consists of:
1. Page Header (title, subtitle, breadcrumb)
2. Two-column layout (desktop) or stacked (mobile):
   - Left: Preset Selection Panel
   - Right: Configuration Form + Cost Estimator
3. Action buttons (bottom of form)

**Layout Container**:
- Max width: 1280px (matches content area spec)
- Horizontal padding: 32px (desktop), 24px (tablet), 16px (mobile)
- Vertical padding: 32px top, 48px bottom
- Background: `gray-50` (page background)

---

## 1. Page Header

### Purpose
Orient the user, provide context, and offer an escape route back to the dashboard.

### Layout & Dimensions

**Container**:
- Full width of content area
- Margin bottom: 32px (space before main content)

**Breadcrumb** (Optional but recommended):
- Position: Above title
- Text: "Dashboard / Create Desktop"
- Font: 14px, weight 400
- Color: `gray-500`
- Separator: "/" or chevron icon
- Links: "Dashboard" is clickable (gray-500, hover gray-900)
- Current page: "Create Desktop" is not clickable (gray-900)
- Margin bottom: 12px

**Page Title**:
- Text: "Create Desktop"
- Font: 24px (1.5rem), weight 600 (semibold)
- Color: `gray-900`
- Line height: 1.2
- Margin bottom: 8px

**Subtitle**:
- Text: "Choose a preset optimized for your workflow, then customize resources to match your needs."
- Font: 14px (0.875rem), weight 400
- Color: `gray-500`
- Line height: 1.5
- Max width: 720px

---

## 2. Layout Structure

### Desktop Layout (≥ 1024px)

**Grid Structure**:
- Two columns: 40% / 60% split (or 480px / flexible)
- Gap: 32px between columns
- Left column: Preset selection (fixed width, scrolls independently if needed)
- Right column: Form + cost estimator (flexible width)

```
┌─────────────────────────────────────────────────────────┐
│ [Breadcrumb]                                            │
│ [Title]                                                 │
│ [Subtitle]                                              │
├──────────────────────┬──────────────────────────────────┤
│                      │                                  │
│ Preset Selection     │ Configuration Form               │
│                      │                                  │
│ [Preset Card]        │ [Instance Name]                  │
│ [Preset Card]        │ [Region]                         │
│ [Preset Card]        │ [CPU Slider]                     │
│ [Preset Card]        │ [RAM Slider]                     │
│                      │ [Storage Slider]                 │
│                      │ [GPU Select]                     │
│                      │                                  │
│                      │ ┌────────────────────┐           │
│                      │ │ Cost Estimator     │           │
│                      │ └────────────────────┘           │
│                      │                                  │
│                      │ [Cancel] [Create Instance]       │
└──────────────────────┴──────────────────────────────────┘
```

### Tablet Layout (768px - 1023px)

**Structure**:
- Single column, stacked
- Preset selection: Horizontal scroll or 2-column grid
- Form: Full width
- Cost estimator: Full width, above action buttons

### Mobile Layout (< 768px)

**Structure**:
- Single column, fully stacked
- Preset selection: Single column, cards stack vertically
- Form: Full width
- Cost estimator: Full width, sticky at bottom (optional)
- Action buttons: Full width, stacked

---

## 3. Preset Selection Panel

### Purpose
Help users quickly choose a configuration optimized for their use case. Reduces decision paralysis by providing curated starting points.

### Container

**Visual Style**:
- No container background (cards sit on page background)
- Heading above cards

**Heading**:
- Text: "Choose a Preset"
- Font: 18px, weight 600
- Color: `gray-900`
- Margin bottom: 16px

**Subheading** (Optional):
- Text: "Select a configuration optimized for your workflow. You can adjust resources after selecting."
- Font: 14px, weight 400
- Color: `gray-500`
- Margin bottom: 24px

**Layout**:
- Desktop: Single column, cards stack vertically, 16px gap
- Tablet: 2-column grid, 16px gap
- Mobile: Single column, 12px gap

---

### Preset Card Structure

**Visual Style**:
- Background: `white`
- Border: 2px solid `gray-200` (unselected) or `indigo-600` (selected)
- Rounded: 12px (large)
- Padding: 20px
- Shadow: Subtle raised (unselected) or elevated (selected)
- Cursor: Pointer
- Transition: 150ms ease-in-out

**Card States**:

**Unselected (Default)**:
- Border: 2px solid `gray-200`
- Background: `white`
- Shadow: `0 1px 3px rgba(0,0,0,0.1)`

**Hover** (unselected):
- Border: 2px solid `gray-300`
- Shadow: `0 4px 6px rgba(0,0,0,0.07)`
- Scale: 101% (subtle lift)

**Selected**:
- Border: 2px solid `indigo-600`
- Background: `white` (or very subtle `indigo-50`)
- Shadow: `0 4px 6px rgba(0,0,0,0.07)`
- Checkmark: Visible in top-right corner

**Focus**:
- Ring: 2px `indigo-600` with 2px offset
- Maintains selected or unselected appearance

---

### Card Content Layout

**Structure** (top to bottom):
1. Icon + Checkmark (if selected)
2. Title
3. Description
4. Specs (CPU, RAM, Storage)
5. Optional: Badge (e.g., "Popular", "Recommended")

**Spacing**:
- Icon to title: 16px
- Title to description: 8px
- Description to specs: 16px

---

### Preset 1: General Purpose

**Icon**:
- Type: Monitor or Laptop (Lucide)
- Size: 32px × 32px
- Color: `indigo-600`
- Position: Top left

**Checkmark** (if selected):
- Type: CheckCircle (Lucide), filled
- Size: 24px × 24px
- Color: `indigo-600`
- Position: Top right corner
- Background: `white` circle (for contrast)

**Title**:
- Text: "General Purpose"
- Font: 16px, weight 600
- Color: `gray-900`

**Description**:
- Text: "Balanced configuration for everyday tasks, web browsing, and light development."
- Font: 14px, weight 400
- Color: `gray-600`
- Line height: 1.5

**Specs**:
- Layout: Vertical list or horizontal with bullets
- Font: 13px, weight 400
- Color: `gray-500`
- Items:
  - "2 vCPU"
  - "4 GB RAM"
  - "30 GB Storage"
  - "No GPU"
- Format: Each on new line or bullet-separated

**Badge** (Optional):
- Text: "Most Popular"
- Background: `indigo-50`
- Text color: `indigo-700`
- Font: 12px, weight 500
- Padding: 4px horizontal, 2px vertical
- Rounded: 4px
- Position: Below specs or top-right (if no checkmark)

---

### Preset 2: Development & Engineering

**Icon**: Code or Terminal (Lucide)

**Title**: "Development & Engineering"

**Description**: "Optimized for software development, compiling, and running development tools."

**Specs**:
- "4 vCPU"
- "8 GB RAM"
- "50 GB Storage"
- "No GPU"

---

### Preset 3: Data Science & ML

**Icon**: BarChart or Brain (Lucide)

**Title**: "Data Science & ML"

**Description**: "High-performance configuration for data analysis, machine learning, and Jupyter notebooks."

**Specs**:
- "8 vCPU"
- "16 GB RAM"
- "100 GB Storage"
- "Basic GPU"

**Badge**: "Recommended for ML"

---

### Preset 4: 3D Rendering & CAD

**Icon**: Box or Layers (Lucide)

**Title**: "3D Rendering & CAD"

**Description**: "Powerful GPU-accelerated desktop for 3D modeling, rendering, and CAD applications."

**Specs**:
- "8 vCPU"
- "32 GB RAM"
- "200 GB Storage"
- "Advanced GPU"

---

### Preset 5: Custom (Optional)

**Icon**: Settings or Sliders (Lucide)

**Title**: "Custom Configuration"

**Description**: "Start with default settings and customize all resources to your exact needs."

**Specs**:
- "Configure manually"
- No preset values

**Visual Difference**:
- Dashed border instead of solid (when unselected)
- Icon in `gray-400` instead of `indigo-600`

---

### Preset Selection Behavior

**Click Behavior**:
- Select preset: Update form fields with preset values
- Visual feedback: Immediate border and checkmark change
- Form update: Smooth transition of slider values (animated)
- Cost update: Recalculate and update cost estimator

**Keyboard Navigation**:
- Tab: Move between preset cards
- Enter/Space: Select preset
- Arrow keys: Navigate between presets

---

## 4. Configuration Form

### Purpose
Allow users to customize their instance after selecting a preset. Provide clear feedback and validation.

### Container

**Visual Style**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 12px (large)
- Padding: 32px (desktop), 24px (mobile)
- Shadow: Subtle raised
- Margin bottom: 24px (space before cost estimator)

**Heading**:
- Text: "Configuration"
- Font: 18px, weight 600
- Color: `gray-900`
- Margin bottom: 24px

---

### Form Field Structure

**General Rules**:
- Label above input: 8px gap
- Input to helper text: 4px gap
- Between fields: 24px gap
- All inputs: Full width of container

**Label Style**:
- Font: 14px, weight 500
- Color: `gray-900`
- Required indicator: Red asterisk (*) after label

**Helper Text Style**:
- Font: 13px, weight 400
- Color: `gray-500` (normal) or `red-600` (error)
- Line height: 1.4

**Error State**:
- Input border: `red-500`
- Focus ring: `red-500`
- Helper text: `red-600` with error icon

---

### Field 1: Instance Name

**Label**: "Instance Name *"

**Input Type**: Text input

**Visual Style**:
- Height: 40px
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 8px
- Padding: 10px horizontal
- Font: 14px, weight 400
- Placeholder: "e.g., My Ubuntu Desktop"

**States**:
- Default: Gray border
- Hover: Border `gray-300`
- Focus: Border `indigo-600`, ring 2px `indigo-600`
- Error: Border `red-500`, ring 2px `red-500`
- Filled: Text `gray-900`

**Helper Text**: "Choose a descriptive name to identify this desktop."

**Validation**:
- Required: Cannot be empty
- Min length: 3 characters
- Max length: 50 characters
- Pattern: Alphanumeric, spaces, hyphens, underscores
- Error message: "Name must be 3-50 characters and contain only letters, numbers, spaces, and hyphens."

---

### Field 2: Region

**Label**: "Region *"

**Input Type**: Select dropdown

**Visual Style**:
- Same as text input
- Right icon: ChevronDown (Lucide), 16px, `gray-400`
- Right padding: 40px (to accommodate icon)

**Options**:
- "US East (Virginia)"
- "US West (Oregon)"
- "EU West (Ireland)"
- "EU Central (Frankfurt)"
- "Asia Pacific (Singapore)"

**Default**: "US East (Virginia)"

**Helper Text**: "Choose the region closest to you for best performance."

**Dropdown Menu**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 8px
- Shadow: Elevated
- Max height: 300px with scroll
- Item padding: 10px horizontal, 8px vertical
- Item hover: Background `gray-50`
- Item selected: Background `indigo-50`, text `indigo-900`, checkmark icon

---

### Field 3: CPU Cores

**Label**: "CPU Cores *"

**Input Type**: Slider with numeric display

**Layout**:
- Label + value display (right-aligned on same line)
- Slider below
- Helper text below slider

**Value Display**:
- Text: "4 vCPU" (updates in real-time)
- Font: 14px, weight 600
- Color: `indigo-600`
- Position: Right of label

**Slider Visual Style**:
- Track height: 6px
- Track background: `gray-200`
- Track fill: `indigo-600` (from start to thumb)
- Thumb size: 20px circle
- Thumb background: `white`
- Thumb border: 3px solid `indigo-600`
- Thumb shadow: `0 2px 4px rgba(0,0,0,0.1)`

**Slider States**:
- Default: As described
- Hover: Thumb shadow increases
- Focus: Thumb ring 2px `indigo-600` with 2px offset
- Dragging: Thumb scale 110%, shadow elevated

**Range**:
- Min: 1 vCPU
- Max: 16 vCPU
- Step: 1
- Default: Based on selected preset

**Tick Marks** (Optional):
- Position: Below track
- Values: 1, 2, 4, 8, 16
- Font: 12px, weight 400, `gray-400`

**Helper Text**: "More CPU cores improve performance for multi-threaded applications."

---

### Field 4: RAM (Memory)

**Label**: "RAM (Memory) *"

**Input Type**: Slider with numeric display (same structure as CPU)

**Value Display**: "8 GB"

**Slider Style**: Same as CPU slider

**Range**:
- Min: 2 GB
- Max: 64 GB
- Step: 2 GB (or powers of 2: 2, 4, 8, 16, 32, 64)
- Default: Based on selected preset

**Tick Marks**: 2, 4, 8, 16, 32, 64

**Helper Text**: "More RAM allows running more applications simultaneously."

---

### Field 5: Storage

**Label**: "Storage *"

**Input Type**: Slider with numeric display (same structure as CPU)

**Value Display**: "50 GB"

**Slider Style**: Same as CPU slider

**Range**:
- Min: 20 GB
- Max: 500 GB
- Step: 10 GB
- Default: Based on selected preset

**Tick Marks**: 20, 50, 100, 200, 500

**Helper Text**: "Storage can be expanded later if needed."

---

### Field 6: GPU

**Label**: "GPU (Graphics Processing Unit)"

**Input Type**: Radio button group or segmented control

**Layout**: Horizontal (desktop) or vertical (mobile)

**Options**:

**Option 1: None**
- Label: "None"
- Description: "No GPU (most workloads)"
- Price impact: "$0.00/hr"
- Default: Selected for General Purpose and Development presets

**Option 2: Basic GPU**
- Label: "Basic GPU"
- Description: "NVIDIA T4 (ML, light rendering)"
- Price impact: "+$0.50/hr"
- Default: Selected for Data Science preset

**Option 3: Advanced GPU**
- Label: "Advanced GPU"
- Description: "NVIDIA A100 (heavy ML, 3D rendering)"
- Price impact: "+$2.00/hr"
- Default: Selected for 3D Rendering preset

**Visual Style** (Radio button):
- Size: 20px × 20px circle
- Border: 2px solid `gray-300` (unselected) or `indigo-600` (selected)
- Inner dot: 10px circle, `indigo-600` (when selected)
- Label: 14px, weight 500, `gray-900`
- Description: 13px, weight 400, `gray-600`
- Price impact: 13px, weight 500, `gray-900`

**Alternative: Segmented Control**
- Container: Background `gray-100`, padding 4px, rounded 8px
- Option: Padding 12px, rounded 6px
- Unselected: Transparent background, `gray-600` text
- Selected: `white` background, `gray-900` text, subtle shadow
- Layout: 3 equal-width segments

**Helper Text**: "GPU is required for machine learning, 3D rendering, and graphics-intensive applications."

---

### Form Validation

**Real-time Validation**:
- Instance name: Validate on blur
- Sliders: No validation needed (constrained by range)
- Region: Always valid (required, has default)

**Submit Validation**:
- Check all required fields
- Show error messages inline
- Scroll to first error
- Disable submit button until valid

**Error Display**:
- Red border on invalid input
- Error icon (AlertCircle, Lucide) before error text
- Error text in `red-600`
- Focus automatically on first error

---

## 5. Cost Estimator Panel

### Purpose
Provide transparent, real-time cost estimation so users understand the financial impact of their configuration choices.

### Container

**Visual Style**:
- Background: `indigo-50` (light accent) or `white`
- Border: 1px solid `indigo-200` (if using indigo background) or `gray-200`
- Rounded: 12px (large)
- Padding: 24px
- Shadow: Subtle raised
- Position: Below form, above action buttons
- Sticky: Optional (sticks to top of viewport when scrolling on desktop)

**Heading**:
- Text: "Cost Estimate"
- Font: 16px, weight 600
- Color: `gray-900`
- Margin bottom: 16px

---

### Cost Display Structure

**Layout**: Vertical stack

**Hourly Cost**:
- Label: "Estimated hourly cost"
  - Font: 14px, weight 400
  - Color: `gray-600`
- Value: "$0.42/hour"
  - Font: 32px, weight 600 (semibold)
  - Color: `gray-900`
  - Margin top: 4px
  - Margin bottom: 16px

**Divider**:
- Border top: 1px solid `gray-200` (or `indigo-200` if indigo background)
- Margin: 16px vertical

**Monthly Cost**:
- Label: "Estimated monthly cost"
  - Font: 14px, weight 400
  - Color: `gray-600`
- Sublabel: "(based on 8 hours/day, 22 days/month)"
  - Font: 12px, weight 400
  - Color: `gray-500`
  - Margin top: 2px
- Value: "$73.92/month"
  - Font: 24px, weight 600
  - Color: `gray-900`
  - Margin top: 8px

---

### Cost Breakdown (Optional Expandable Section)

**Trigger**:
- Text: "View breakdown"
- Icon: ChevronDown (Lucide), 14px
- Font: 14px, weight 500
- Color: `indigo-600`
- Hover: `indigo-700`, underline
- Position: Below monthly cost, 12px gap

**Expanded Content**:
- Background: `white` (if parent is indigo-50)
- Border: 1px solid `gray-200`
- Rounded: 8px
- Padding: 16px
- Margin top: 12px

**Breakdown Items**:
- Layout: Two-column (label left, price right)
- Font: 14px, weight 400
- Color: `gray-600`
- Gap: 8px between rows

**Items**:
- "Base instance" → "$0.10/hr"
- "CPU (4 vCPU)" → "$0.16/hr"
- "RAM (8 GB)" → "$0.08/hr"
- "Storage (50 GB)" → "$0.05/hr"
- "GPU (Basic)" → "$0.50/hr" (if selected)
- Divider
- "Total" → "$0.42/hr" (bold, `gray-900`)

---

### Cost Update Behavior

**Real-time Updates**:
- Any slider change: Recalculate immediately
- GPU selection: Update instantly
- Animation: Smooth number transition (count-up effect)
- Debounce: 100ms to avoid excessive calculations during dragging

**Visual Feedback**:
- Brief highlight: Flash `indigo-100` background when cost changes
- Duration: 300ms fade out

---

### Disclaimer

**Text**: "Actual costs may vary based on usage. You'll only be charged for running instances."

**Style**:
- Font: 12px, weight 400
- Color: `gray-500`
- Margin top: 16px
- Icon: Info (Lucide), 14px, left of text (optional)

---

## 6. Action Buttons

### Purpose
Provide clear next steps: create the instance or cancel and return to dashboard.

### Container

**Layout**:
- Position: Below cost estimator
- Margin top: 32px
- Flex layout: Buttons right-aligned (desktop) or full-width stacked (mobile)
- Gap: 12px between buttons

**Desktop Layout**:
```
                                    [Cancel] [Create Instance]
```

**Mobile Layout**:
```
[Create Instance]
[Cancel]
```

---

### Primary Button: Create Instance

**Text**: "Create Desktop" or "Create Instance"

**Icon**: Optional Plus or Rocket (Lucide), 16px, left of text

**Style**: Primary button (indigo-600 background, white text)

**Size**: 
- Desktop: Default (px-6 py-2.5)
- Mobile: Full width, large (px-6 py-3)

**Font**: 14px, weight 500

**States**:
- Default: Indigo-600 background
- Hover: Indigo-700 background, shadow elevated
- Focus: Ring 2px indigo-600 with 2px offset
- Disabled: Gray-300 background, gray-500 text, cursor not-allowed
- Loading: Show spinner, text "Creating...", disabled

**Behavior**:
- Click: Validate form
- If valid: Show loading state, simulate creation (2-3 seconds), redirect to dashboard with success toast
- If invalid: Show errors, scroll to first error, shake button (subtle animation)

---

### Secondary Button: Cancel

**Text**: "Cancel"

**Style**: Secondary button (white background, gray-200 border)

**Size**: Same as primary button

**Font**: 14px, weight 500

**States**:
- Default: White background, gray-200 border, gray-900 text
- Hover: Gray-50 background, gray-300 border
- Focus: Ring 2px indigo-600 with 2px offset

**Behavior**:
- Click: Show confirmation modal if form has changes
- Modal: "Discard changes?" with "Discard" (destructive) and "Keep Editing" buttons
- If no changes: Navigate directly to dashboard

---

## 7. Responsive Behavior Summary

### Desktop (≥ 1024px)
- Two-column layout: Presets left (40%), Form right (60%)
- Presets: Single column, stacked vertically
- Form: Full width of right column
- Cost estimator: Full width, optional sticky
- Action buttons: Right-aligned

### Tablet (768px - 1023px)
- Single column, stacked
- Presets: 2-column grid or horizontal scroll
- Form: Full width
- Cost estimator: Full width
- Action buttons: Right-aligned or full width

### Mobile (< 768px)
- Single column, fully stacked
- Presets: Single column, vertical stack
- Form: Full width, reduced padding (24px)
- Sliders: Full width, larger touch targets
- GPU: Vertical radio buttons (easier to tap)
- Cost estimator: Full width, optional sticky at bottom
- Action buttons: Full width, stacked (primary first)

---

## 8. Loading & Success States

### Form Submission Loading

**Visual Changes**:
- Primary button: Show spinner, text "Creating Desktop..."
- Disable all form inputs (opacity 60%)
- Disable cancel button
- Optional: Show progress overlay on entire form

**Duration**: 2-3 seconds (simulated)

---

### Success State

**Behavior**:
- Redirect to dashboard
- Show success toast notification
- Toast content:
  - Icon: CheckCircle (Lucide), green
  - Title: "Desktop created successfully"
  - Message: "[Instance Name] is now provisioning"
  - Action: "View Details" link
  - Duration: 5 seconds, dismissible

---

### Error State

**Behavior**:
- Show error toast notification
- Keep user on form (don't navigate away)
- Toast content:
  - Icon: AlertCircle (Lucide), red
  - Title: "Failed to create desktop"
  - Message: "Please check your configuration and try again."
  - Duration: 7 seconds, dismissible

---

## 9. Accessibility Requirements

### Keyboard Navigation
- Tab order: Breadcrumb → Presets → Form fields → Cost estimator → Action buttons
- Arrow keys: Navigate between preset cards
- Enter/Space: Select preset, toggle expandable sections
- Escape: Close dropdowns, cancel modals

### Screen Reader
- Presets: Announced as radio group with current selection
- Sliders: Announce current value and range
- Cost estimator: Announce updates when values change
- Form errors: Announced immediately when validation fails
- Loading state: Announce "Creating desktop, please wait"

### Focus Management
- All interactive elements: Visible focus ring
- Form submission: Focus on first error if validation fails
- Modal: Focus trap, return focus on close
- Success: Focus on toast notification

### Color Contrast
- All text: Meets WCAG AA minimum
- Selected preset: Border alone doesn't indicate selection (checkmark icon required)
- Error states: Icon + color + text (not color alone)

---

## 10. Content Guidelines

### Tone
- **Clear**: Explain technical terms (vCPU, GPU) in helper text
- **Confident**: "Create Desktop" not "Try to Create"
- **Helpful**: Provide guidance without being condescending
- **Honest**: Show real costs, explain assumptions

### Writing Rules
- Labels: Short, descriptive, sentence case
- Helper text: One sentence, explain benefit or constraint
- Error messages: Specific, actionable, polite
- Avoid: Jargon without explanation, vague errors ("Something went wrong")

---

This specification provides complete guidance for implementing a professional, user-friendly instance creation form that balances flexibility with clarity.
