# CloudDesk EDU Classroom Mode Page Specification

## Overview

The Classroom Mode page (`/classroom`) is a polished teaser for a future feature that would allow educators to provision and manage cloud desktops for entire classes. While the feature is not yet implemented, the UI must look credible, professional, and inspiring—demonstrating clear value without overpromising functionality.

**Primary Goals**:
1. Communicate the value proposition of Classroom Mode clearly
2. Show what the feature would look like when implemented
3. Gather implicit feedback through engagement (future: waitlist signup)
4. Maintain enterprise credibility and design consistency
5. Set appropriate expectations (this is a preview, not functional)

**User Context**: Educators exploring CloudDesk EDU's capabilities, considering it for classroom use, or checking on the status of this feature.

**Tone**: Professional, aspirational, honest about current status

---

## Page Structure

The Classroom Mode page consists of:
1. Page Header (title, status badge)
2. Hero Card (centered, prominent)
3. Configuration Mock Controls (non-functional preview)
4. Benefits Section (bullet points explaining value)
5. Call-to-Action Area (disabled button with "Coming Soon" state)
6. Optional: Notification signup or feedback form

**Layout Container**:
- Max width: 960px (narrower than standard pages for focus)
- Horizontal padding: 32px (desktop), 24px (tablet), 16px (mobile)
- Vertical padding: 48px top, 48px bottom
- Background: `gray-50` (page background)
- Content: Centered on page

---

## 1. Page Header

### Purpose
Orient the user and immediately communicate that this is a preview feature, not a fully functional page.

### Layout & Dimensions

**Container**:
- Full width of content area (max 960px)
- Margin bottom: 32px (space before hero card)
- Text align: Center

---

### Page Title

**Text**: "Classroom Mode"

**Font**: 32px (2rem), weight 600 (semibold)

**Color**: `gray-900`

**Line height**: 1.2

**Margin bottom**: 12px

---

### Status Badge

**Position**: Below title, centered

**Text**: "Coming Soon"

**Visual Style**:
- Background: `blue-50`
- Text: `blue-700`, 14px, weight 500
- Padding: 6px horizontal, 4px vertical
- Rounded: Full (pill shape)
- Border: 1px solid `blue-200`
- Display: Inline-flex

**Alternative Badge Text**: "Preview" or "In Development"

**Margin bottom**: 16px

---

### Description

**Text**: "Provision and manage cloud desktops for entire classes with a single click. Perfect for educators who need consistent environments for all students."

**Font**: 16px, weight 400

**Color**: `gray-600`

**Line height**: 1.6

**Max width**: 640px, centered

**Margin bottom**: 48px

---

## 2. Hero Card

### Purpose
Create a focal point that showcases the feature concept. This card should feel more prominent than standard cards to emphasize the feature's importance.

### Container

**Visual Style**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 16px (extra large, more prominent than standard 12px)
- Padding: 48px (desktop), 32px (tablet), 24px (mobile)
- Shadow: Elevated (`0 10px 15px rgba(0,0,0,0.1)`)
- Max width: 800px, centered
- Margin bottom: 32px

**Layout**: Single column, centered content

---

### Hero Icon (Optional)

**Position**: Top center, above title

**Icon**: Users or GraduationCap (Lucide)

**Size**: 64px × 64px

**Color**: `indigo-600`

**Background**: `indigo-50` circle (80px diameter)

**Margin bottom**: 24px

---

### Hero Title

**Text**: "Launch Desktops for Your Entire Class"

**Font**: 24px (1.5rem), weight 600

**Color**: `gray-900`

**Text align**: Center

**Margin bottom**: 16px

---

### Hero Description

**Text**: "Classroom Mode allows educators to create identical cloud desktop environments for all students in a course. Set up once, deploy to everyone, and manage centrally."

**Font**: 16px, weight 400

**Color**: `gray-600`

**Line height**: 1.6

**Text align**: Center

**Max width**: 600px, centered

**Margin bottom**: 40px

---

## 3. Configuration Mock Controls

### Purpose
Show what the configuration interface would look like when implemented. Controls should appear interactive but clearly indicate they're non-functional.

### Container

**Layout**: Vertical stack within hero card

**Spacing**: 24px between form fields

**Max width**: 560px, centered

---

### Field 1: Class Selection

**Label**: "Select Class"

**Font**: 14px, weight 500, `gray-900`

**Margin bottom**: 8px

**Input Type**: Select dropdown (non-functional)

**Visual Style**:
- Height: 44px
- Background: `gray-50` (slightly different from white to indicate disabled)
- Border: 1px solid `gray-200`
- Rounded: 8px
- Padding: 12px horizontal
- Font: 14px, weight 400, `gray-500`
- Cursor: not-allowed

**Placeholder/Value**: "Intro to Engineering Simulation"

**Icon**: ChevronDown (Lucide), 16px, `gray-400`, right side

**Disabled State**: Opacity 70%, cursor not-allowed

**Options** (shown but not functional):
- "Intro to Engineering Simulation"
- "Advanced CAD & 3D Modeling"
- "Data Science Fundamentals"
- "Machine Learning Workshop"

---

### Field 2: Preset Template

**Label**: "Desktop Preset"

**Font**: 14px, weight 500, `gray-900`

**Margin bottom**: 12px

**Layout**: Horizontal grid of preset cards (compact version)

**Grid**: 3 columns on desktop, 2 on tablet, 1 on mobile

**Gap**: 12px between cards

---

### Preset Card (Compact)

**Visual Style**:
- Background: `gray-50` (disabled appearance)
- Border: 2px solid `gray-200`
- Rounded: 8px
- Padding: 16px
- Cursor: not-allowed
- Opacity: 70%

**Selected State** (mock):
- Border: 2px solid `indigo-300` (lighter than active indigo-600)
- Background: `indigo-25` (very subtle)
- Checkmark: Visible but grayed out

**Content**:
- Icon: 24px, `gray-400`
- Title: 14px, weight 600, `gray-700`
- Specs: 12px, weight 400, `gray-500`

**Preset Options**:

1. **Development**
   - Icon: Code (Lucide)
   - Title: "Development"
   - Specs: "4 vCPU • 8 GB RAM"
   - Selected: Yes (mock)

2. **Data Science**
   - Icon: BarChart (Lucide)
   - Title: "Data Science"
   - Specs: "8 vCPU • 16 GB RAM"

3. **Engineering**
   - Icon: Box (Lucide)
   - Title: "Engineering"
   - Specs: "8 vCPU • 32 GB RAM"

---

### Field 3: Number of Students

**Label**: "Number of Students"

**Font**: 14px, weight 500, `gray-900`

**Margin bottom**: 8px

**Input Type**: Numeric input with increment/decrement buttons

**Layout**: Horizontal flex

**Visual Style**:
- Container: Border 1px solid `gray-200`, rounded 8px, background `gray-50`
- Height: 44px
- Display: Flex, items centered

**Decrement Button**:
- Icon: Minus (Lucide), 16px, `gray-400`
- Size: 44px × 44px
- Background: Transparent
- Hover: Background `gray-100` (but disabled)
- Border right: 1px solid `gray-200`
- Cursor: not-allowed

**Value Display**:
- Text: "25" (example number)
- Font: 16px, weight 500, `gray-700`
- Flex: 1 (takes remaining space)
- Text align: Center

**Increment Button**:
- Icon: Plus (Lucide), 16px, `gray-400`
- Size: 44px × 44px
- Background: Transparent
- Hover: Background `gray-100` (but disabled)
- Border left: 1px solid `gray-200`
- Cursor: not-allowed

**Disabled State**: All buttons and input have cursor: not-allowed, opacity 70%

**Helper Text** (below input):
- Text: "Maximum 50 students per class"
- Font: 13px, weight 400, `gray-500`
- Margin top: 4px

---

### Field 4: Duration (Optional)

**Label**: "Session Duration"

**Input Type**: Select dropdown (non-functional)

**Visual Style**: Same as Class Selection

**Value**: "4 hours"

**Options**:
- "2 hours"
- "4 hours"
- "8 hours"
- "Full day"

---

### Disabled Overlay (Optional)

**Purpose**: Make it crystal clear that controls are non-functional

**Implementation**: Semi-transparent overlay over entire form section

**Visual Style**:
- Position: Absolute, covering form fields
- Background: `white` with 40% opacity
- Cursor: not-allowed
- Z-index: 1 (above form fields)

**Alternative**: Use disabled states on individual fields (recommended for cleaner look)

---

## 4. Benefits Section

### Purpose
Explain the value proposition clearly. Help educators understand why this feature matters and what problems it solves.

### Container

**Position**: Below hero card

**Visual Style**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 12px
- Padding: 32px (desktop), 24px (mobile)
- Shadow: Subtle raised
- Max width: 800px, centered
- Margin bottom: 32px

**Heading**:
- Text: "Why Classroom Mode?"
- Font: 20px, weight 600
- Color: `gray-900`
- Margin bottom: 24px

---

### Benefits List

**Layout**: Vertical stack, 20px gap between items

**Item Structure**:
- Icon (left)
- Text content (right)
- Horizontal flex, 16px gap

---

### Benefit 1: Consistent Environments

**Icon**:
- Type: CheckCircle (Lucide)
- Size: 24px × 24px
- Color: `emerald-600`
- Flex: None (fixed size)

**Title**:
- Text: "Consistent Environments"
- Font: 16px, weight 600
- Color: `gray-900`
- Margin bottom: 4px

**Description**:
- Text: "Every student gets an identical desktop with the same software, configurations, and resources. No more 'it works on my machine' issues."
- Font: 14px, weight 400
- Color: `gray-600`
- Line height: 1.5

---

### Benefit 2: Time Savings

**Icon**: Clock (Lucide), 24px, `emerald-600`

**Title**: "Save Hours of Setup Time"

**Description**: "Deploy desktops for an entire class in seconds instead of spending hours helping students install software individually."

---

### Benefit 3: Centralized Management

**Icon**: Settings (Lucide), 24px, `emerald-600`

**Title**: "Centralized Management"

**Description**: "Monitor student progress, provide assistance, and manage resources from a single dashboard. Start, stop, or reset all desktops with one click."

---

### Benefit 4: Cost Control

**Icon**: DollarSign (Lucide), 24px, `emerald-600`

**Title**: "Predictable Costs"

**Description**: "Set session durations and automatically stop desktops when class ends. No surprise bills from students leaving instances running."

---

### Benefit 5: Better Student Experience

**Icon**: Users (Lucide), 24px, `emerald-600`

**Title**: "Better Student Experience"

**Description**: "Students focus on learning, not troubleshooting. Access powerful computing resources from any device, anywhere."

---

## 5. Call-to-Action Area

### Purpose
Provide a clear next step while being honest about the feature's status. Avoid frustration by clearly indicating this is not yet available.

### Container

**Position**: Below benefits section

**Visual Style**:
- Background: `indigo-50` (light accent background)
- Border: 1px solid `indigo-200`
- Rounded: 12px
- Padding: 32px (desktop), 24px (mobile)
- Max width: 800px, centered
- Text align: Center

---

### CTA Heading

**Text**: "Interested in Classroom Mode?"

**Font**: 20px, weight 600

**Color**: `gray-900`

**Margin bottom**: 12px

---

### CTA Description

**Text**: "We're actively developing this feature. Sign up to be notified when it launches and get early access."

**Font**: 16px, weight 400

**Color**: `gray-600`

**Line height**: 1.6

**Max width**: 560px, centered

**Margin bottom**: 24px

---

### Primary CTA Button (Disabled State)

**Text**: "Launch Classroom" or "Create Class Session"

**Icon**: Rocket or Users (Lucide), 16px, left of text

**Style**: Primary button appearance but disabled

**Visual Style**:
- Background: `gray-300` (disabled)
- Text: `gray-500`, 16px, weight 500
- Padding: 14px horizontal, 12px vertical (large)
- Rounded: 8px
- Cursor: not-allowed
- Opacity: 60%

**Disabled Indicator**:
- Badge: "Coming Soon" overlaid on button or next to it
- Font: 12px, weight 600, `blue-700`
- Background: `blue-50`
- Padding: 4px horizontal, 2px vertical
- Rounded: 4px

**Margin bottom**: 16px

---

### Secondary CTA: Notification Signup

**Text**: "Get Notified When Available"

**Style**: Secondary button (white background, indigo border)

**Visual Style**:
- Background: `white`
- Border: 1px solid `indigo-600`
- Text: `indigo-600`, 14px, weight 500
- Padding: 10px horizontal, 8px vertical
- Rounded: 8px
- Hover: Background `indigo-50`

**Behavior**:
- Click: Open modal or expand inline form
- Form: Email input + "Notify Me" button
- Success: Show "Thanks! We'll notify you when Classroom Mode launches."

**Alternative**: Link to feedback form or contact page

---

### Helper Text

**Text**: "This feature is currently in development. The interface shown above is a preview of planned functionality."

**Font**: 13px, weight 400

**Color**: `gray-500`

**Margin top**: 16px

**Icon**: Info (Lucide), 14px, left of text (optional)

---

## 6. Optional: Feature Roadmap Timeline

### Purpose
Build trust by showing transparency about development progress. Manage expectations with realistic timelines.

### Container

**Position**: Below CTA area (optional section)

**Visual Style**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 12px
- Padding: 32px (desktop), 24px (mobile)
- Max width: 800px, centered
- Margin top: 32px

**Heading**:
- Text: "Development Roadmap"
- Font: 20px, weight 600
- Color: `gray-900`
- Margin bottom: 24px

---

### Timeline Items

**Layout**: Vertical list with connecting line

**Visual Style**:
- Left: Status indicator (circle)
- Right: Content
- Connecting line: 2px solid `gray-200`, vertical

---

### Timeline Item 1: Design & Planning

**Status**: Complete (green checkmark)

**Title**: "Design & Planning"

**Description**: "Feature specification and UI design"

**Status**: "Complete"

**Color**: `emerald-600`

---

### Timeline Item 2: Core Development

**Status**: In Progress (blue dot, pulsing)

**Title**: "Core Development"

**Description**: "Building classroom provisioning and management APIs"

**Status**: "In Progress"

**Color**: `blue-600`

---

### Timeline Item 3: Beta Testing

**Status**: Upcoming (gray dot)

**Title**: "Beta Testing"

**Description**: "Limited release to select educators"

**Status**: "Q2 2024" (example)

**Color**: `gray-400`

---

### Timeline Item 4: General Availability

**Status**: Upcoming (gray dot)

**Title**: "General Availability"

**Description**: "Full release to all CloudDesk EDU users"

**Status**: "Q3 2024" (example)

**Color**: `gray-400`

---

## 7. Optional: Testimonial or Use Case

### Purpose
Build credibility by showing how educators would use this feature. Use hypothetical but realistic scenarios.

### Container

**Position**: Between benefits and CTA (optional)

**Visual Style**:
- Background: `gray-50`
- Border: 1px solid `gray-200`
- Rounded: 12px
- Padding: 32px (desktop), 24px (mobile)
- Max width: 800px, centered
- Margin: 32px vertical

---

### Quote

**Text**: "Classroom Mode would save me hours every semester. Instead of troubleshooting software installations for 30 students, I could focus on teaching."

**Font**: 18px, weight 400, italic

**Color**: `gray-900`

**Line height**: 1.6

**Margin bottom**: 16px

---

### Attribution

**Name**: "Dr. Sarah Chen"

**Title**: "Associate Professor, Mechanical Engineering"

**University**: "State University" (example)

**Font**: 14px, weight 500 (name), 400 (title)

**Color**: `gray-600`

**Layout**: Vertical stack or horizontal with separator

**Note**: Use "Hypothetical testimonial" disclaimer if not real

---

## 8. Responsive Behavior Summary

### Desktop (≥ 1024px)
- Page header: Centered, full width
- Hero card: 800px max width, centered
- Preset cards: 3 columns
- Benefits: Single column, icon + text side by side
- CTA: Centered, 800px max width

### Tablet (768px - 1023px)
- Hero card: Full width with padding
- Preset cards: 2 columns
- Benefits: Same as desktop
- CTA: Full width

### Mobile (< 768px)
- Hero card: Full width, reduced padding (24px)
- Preset cards: Single column
- Benefits: Icon above text (stacked) for better readability
- CTA: Full width
- Buttons: Full width

---

## 9. Interaction States

### Hover States (Limited)

**Preset Cards**:
- No hover effect (disabled state)
- Cursor: not-allowed

**Buttons**:
- Primary (disabled): No hover effect
- Secondary (notify me): Hover background `indigo-50`

**Links**:
- Standard link hover: `indigo-700`, underline

---

### Focus States

**All Interactive Elements**:
- Focus ring: 2px `indigo-600` with 2px offset
- Applies to: Secondary button, links, form inputs (if notification form)

---

### Loading States (Notification Signup)

**Form Submission**:
- Button shows spinner
- Text: "Submitting..."
- Disable input and button
- Duration: 1-2s (simulated)

**Success State**:
- Replace form with success message
- Icon: CheckCircle (Lucide), 24px, `emerald-600`
- Text: "Thanks! We'll notify you when Classroom Mode launches."
- Font: 16px, weight 500, `gray-900`

---

## 10. Accessibility Requirements

### Keyboard Navigation
- Tab order: Page header → Hero card → Form fields (disabled but focusable) → Benefits → CTA buttons
- Enter/Space: Activate buttons and links
- Disabled form fields: Focusable but not editable (for screen reader context)

### Screen Reader
- Status badge: Announced as "Coming Soon"
- Disabled form fields: Announced as "disabled" with field name
- Benefits list: Proper list semantics (`<ul>`, `<li>`)
- Primary button: Announced as "Launch Classroom, button, disabled, coming soon"

### Focus Management
- All interactive elements: Visible focus ring
- Skip link: "Skip to notification signup" (if form present)

### Color Contrast
- All text: Meets WCAG AA minimum
- Disabled states: Still readable (not too faded)
- Status badge: High contrast (`blue-700` on `blue-50`)

---

## 11. Content Guidelines

### Tone
- **Honest**: Clear about feature status (coming soon, not available)
- **Aspirational**: Show the vision and value
- **Professional**: No hype, no overpromising
- **Helpful**: Explain benefits clearly

### Writing Rules
- Use future tense or conditional: "would allow", "will enable"
- Avoid: "Revolutionary", "game-changing", "never before"
- Prefer: "Simplifies", "saves time", "improves experience"
- Be specific: "Deploy 30 desktops in seconds" not "Deploy quickly"

---

## 12. Implementation Notes

### Non-Functional Controls

**Approach**: Render real form components but disable them

**Rationale**:
- Looks more realistic than static images
- Easier to convert to functional when feature launches
- Maintains design system consistency

**Code Pattern**:
```
<Select disabled value="Intro to Engineering Simulation">
  <option>Intro to Engineering Simulation</option>
  ...
</Select>
```

---

### Notification Signup

**Backend**: Simple email collection (if implemented)

**Storage**: Store in database or send to mailing list service

**Validation**: Email format validation

**Privacy**: Include "We'll only email you about Classroom Mode" note

---

### Analytics Tracking

**Events to Track**:
- Page view (measure interest)
- Notification signup (measure demand)
- Time on page (measure engagement)
- Clicks on disabled button (measure confusion or eagerness)

**Purpose**: Validate demand for feature, prioritize development

---

This specification provides complete guidance for implementing a professional, credible feature teaser page that builds excitement while managing expectations appropriately.
