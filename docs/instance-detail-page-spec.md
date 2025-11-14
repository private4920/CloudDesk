# CloudDesk EDU Instance Detail Page Specification

## Overview

The Instance Detail page (`/instances/:id`) provides a comprehensive view of a single cloud desktop instance. It displays current status, configuration, usage metrics, and provides quick access to common actions. The design prioritizes clarity and actionability—users should immediately understand the instance state and what they can do with it.

**Primary Goals**:
1. Show current instance status at a glance
2. Display complete configuration details
3. Provide quick access to common actions (connect, start/stop, delete)
4. Show usage and cost information
5. Build confidence through clear, honest information

**User Context**: Users checking on a specific instance, preparing to connect, or managing resources.

---

## Page Structure

The Instance Detail page consists of:
1. Page Header / Overview Strip (instance name, status, metadata, actions)
2. Two-column body layout (desktop) or stacked (mobile):
   - Left: Configuration Card
   - Right: Usage & Cost Summary Card
3. Optional: Activity Log or Recent Events (future enhancement)

**Layout Container**:
- Max width: 1280px (matches content area spec)
- Horizontal padding: 32px (desktop), 24px (tablet), 16px (mobile)
- Vertical padding: 32px top, 32px bottom
- Background: `gray-50` (page background)

---

## 1. Page Header / Overview Strip

### Purpose
Provide immediate context about the instance and enable quick actions. Users should know what instance they're viewing and what they can do with it within 2 seconds.

### Layout & Dimensions

**Container**:
- Full width of content area
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 12px (large)
- Padding: 24px (desktop), 20px (mobile)
- Shadow: Subtle raised
- Margin bottom: 24px (space before body content)

**Desktop Layout**:
```
┌────────────────────────────────────────────────────────────┐
│ [← Back]                                                   │
│                                                            │
│ [Instance Name] [Status Badge]                            │
│ [Metadata: Preset • Region • Created]                     │
│                                                            │
│                        [Connect] [Start/Stop] [⋮ More]    │
└────────────────────────────────────────────────────────────┘
```

**Mobile Layout**:
```
┌──────────────────────┐
│ [← Back]             │
│                      │
│ [Instance Name]      │
│ [Status Badge]       │
│ [Metadata]           │
│                      │
│ [Connect]            │
│ [Start/Stop] [More]  │
└──────────────────────┘
```

---

### Back Navigation

**Position**: Top left, above instance name

**Visual Style**:
- Icon: ArrowLeft (Lucide), 16px
- Text: "Back to Dashboard"
- Font: 14px, weight 500
- Color: `gray-600`
- Hover: `gray-900`, background `gray-50`, padding 6px horizontal, 4px vertical, rounded 6px
- Gap: 8px between icon and text

**Behavior**:
- Click: Navigate to dashboard (`/dashboard`)
- Keyboard: Tab to focus, Enter to activate

**Margin Bottom**: 16px (space before instance name)

---

### Instance Name & Status

**Layout**: Horizontal flex, aligned baseline

**Instance Name**:
- Text: "Ubuntu 22.04 LTS" (example)
- Font: 24px (1.5rem), weight 600 (semibold)
- Color: `gray-900`
- Line height: 1.2
- Editable: Optional pencil icon on hover (future enhancement)

**Status Badge**:
- Position: Right of name, 12px gap
- Vertical align: Center with name
- Style: As per component library spec
- Examples:
  - RUNNING: Green background, "Running" text
  - STOPPED: Gray background, "Stopped" text
  - PROVISIONING: Blue background, "Provisioning" text with spinner
  - ERROR: Red background, "Error" text with alert icon

**Margin Bottom**: 12px (space before metadata)

---

### Metadata Row

**Layout**: Horizontal list, bullet-separated

**Visual Style**:
- Font: 14px, weight 400
- Color: `gray-500`
- Separator: "•" in `gray-400`, 8px horizontal margin

**Metadata Items**:

1. **Preset/OS**:
   - Icon: Monitor or Laptop (Lucide), 14px, left of text
   - Text: "Development & Engineering" or "Ubuntu 22.04"
   - Gap: 6px between icon and text

2. **Region**:
   - Icon: Globe (Lucide), 14px
   - Text: "US East (Virginia)"
   - Gap: 6px between icon and text

3. **Created**:
   - Icon: Calendar (Lucide), 14px
   - Text: "Created 3 days ago"
   - Tooltip: Show exact timestamp on hover
   - Gap: 6px between icon and text

**Mobile Behavior**:
- Stack vertically if space is tight
- Remove bullets, add 8px vertical gap
- Keep icons for visual consistency

**Margin Bottom**: 24px (space before actions)

---

### Action Buttons

**Container**:
- Position: Bottom right of header (desktop) or below metadata (mobile)
- Layout: Horizontal flex, 12px gap
- Alignment: Right (desktop), full width stacked (mobile)

---

### Primary Action: Connect Button

**Visibility**: Only shown when instance status is RUNNING

**Text**: "Connect"

**Icon**: ExternalLink or Play (Lucide), 16px, left of text

**Style**: Primary button (indigo-600 background, white text)

**Size**: 
- Desktop: Default (px-4 py-2)
- Mobile: Full width, large (px-4 py-3)

**Font**: 14px, weight 500

**States**:
- Default: Indigo-600 background
- Hover: Indigo-700 background, shadow elevated
- Focus: Ring 2px indigo-600 with 2px offset
- Disabled: Gray-300 background (when not running)

**Behavior**:
- Click: Open "Connect" modal (see Modal Spec below)
- Modal shows: Connection instructions, RDP/VNC links, credentials (simulated)

---

### Secondary Action: Start/Stop Button

**Dynamic Text**:
- "Start" when status is STOPPED
- "Stop" when status is RUNNING
- Hidden when status is PROVISIONING or ERROR

**Icon**:
- Play (Lucide) for Start
- Pause (Lucide) for Stop

**Style**: Secondary button (white background, gray-200 border)

**Size**: Same as Connect button

**States**:
- Default: White background, gray-200 border, gray-900 text
- Hover: Gray-50 background, gray-300 border
- Focus: Ring 2px indigo-600 with 2px offset
- Loading: Show spinner, text "Starting..." or "Stopping..."

**Behavior**:
- Click Start: Show loading state (2s), update status to RUNNING, show success toast
- Click Stop: Show confirmation modal, then loading state, update status to STOPPED
- Toast: "Desktop started successfully" or "Desktop stopped"

---

### Tertiary Action: More Menu (Overflow)

**Trigger Button**:
- Icon: MoreVertical (Lucide), 20px
- Style: Icon button (40px × 40px)
- Background: Transparent
- Border: 1px solid `gray-200`
- Rounded: 8px
- Hover: Background `gray-50`, border `gray-300`

**Dropdown Menu**:
- Position: Below trigger, right-aligned
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 8px
- Shadow: Elevated
- Width: 200px
- Z-index: 10

**Menu Items**:

1. **Restart** (if running)
   - Icon: RotateCw (Lucide), 16px
   - Text: "Restart"
   - Color: `gray-900`
   - Hover: Background `gray-50`

2. **Backup Now**
   - Icon: Save or Database (Lucide), 16px
   - Text: "Create Backup"
   - Color: `gray-900`
   - Hover: Background `gray-50`

3. **Edit Configuration**
   - Icon: Settings (Lucide), 16px
   - Text: "Edit Configuration"
   - Color: `gray-900`
   - Hover: Background `gray-50`
   - Navigate to: `/instances/:id/edit`

4. **View Logs**
   - Icon: FileText (Lucide), 16px
   - Text: "View Logs"
   - Color: `gray-900`
   - Hover: Background `gray-50`

5. **Divider**
   - Border top: 1px solid `gray-200`
   - Margin: 4px vertical

6. **Delete**
   - Icon: Trash2 (Lucide), 16px
   - Text: "Delete Desktop"
   - Color: `red-600`
   - Hover: Background `red-50`
   - Requires: Confirmation modal

---

## 2. Body Layout: Two-Column Structure

### Desktop Layout (≥ 1024px)

**Grid Structure**:
- Two columns: 60% / 40% split (or flexible / 400px)
- Gap: 24px between columns
- Left column: Configuration card (wider, more content)
- Right column: Usage & Cost card (narrower, summary info)

```
┌──────────────────────────────┬─────────────────────┐
│                              │                     │
│ Configuration Card           │ Usage & Cost Card   │
│                              │                     │
│ [CPU: 4 vCPU]                │ [Hours Used: 24h]   │
│ [RAM: 8 GB]                  │ [Cost: $10.08]      │
│ [Storage: 50 GB]             │                     │
│ [GPU: None]                  │ [Chart]             │
│ [Region: US East]            │                     │
│ [Preset: Development]        │                     │
│                              │                     │
└──────────────────────────────┴─────────────────────┘
```

### Tablet Layout (768px - 1023px)

**Structure**: Same as desktop, but columns may be 50/50 split

### Mobile Layout (< 768px)

**Structure**: Single column, stacked
- Configuration card first
- Usage & Cost card second
- Full width for both

---

## 3. Configuration Card

### Purpose
Display all technical specifications and settings for the instance. Users should be able to quickly scan and understand the instance's capabilities.

### Container

**Visual Style**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 12px (large)
- Padding: 24px (desktop), 20px (mobile)
- Shadow: Subtle raised

**Heading**:
- Text: "Configuration"
- Font: 18px, weight 600
- Color: `gray-900`
- Margin bottom: 20px

---

### Configuration Items Layout

**Structure**: Key-value pairs in a vertical list

**Spacing**:
- Between items: 16px
- Within item: 8px between label and value

**Visual Style**:
- Label: 14px, weight 500, `gray-500`, uppercase or sentence case
- Value: 16px, weight 500, `gray-900`
- Optional icon: 20px, left of label, `gray-400`

---

### Configuration Item 1: CPU

**Label**: "CPU Cores"

**Icon**: Cpu (Lucide), 20px, `gray-400`

**Value**: "4 vCPU"

**Layout**:
```
[CPU Icon] CPU Cores
           4 vCPU
```

---

### Configuration Item 2: RAM

**Label**: "Memory (RAM)"

**Icon**: MemoryStick or Zap (Lucide), 20px, `gray-400`

**Value**: "8 GB"

---

### Configuration Item 3: Storage

**Label**: "Storage"

**Icon**: HardDrive (Lucide), 20px, `gray-400`

**Value**: "50 GB SSD"

**Optional**: Progress bar showing used vs available
- Bar: 4px height, rounded full
- Background: `gray-200`
- Fill: `indigo-600` (or `amber-500` if >80% full)
- Text below: "28 GB used (56%)"
- Font: 13px, weight 400, `gray-500`

---

### Configuration Item 4: GPU

**Label**: "Graphics (GPU)"

**Icon**: Zap or Box (Lucide), 20px, `gray-400`

**Value**: 
- "None" (if no GPU)
- "NVIDIA T4 (Basic)" (if basic GPU)
- "NVIDIA A100 (Advanced)" (if advanced GPU)

**Color**:
- `gray-600` if None
- `gray-900` if GPU present

---

### Configuration Item 5: Region

**Label**: "Region"

**Icon**: Globe (Lucide), 20px, `gray-400`

**Value**: "US East (Virginia)"

---

### Configuration Item 6: Operating System

**Label**: "Operating System"

**Icon**: Monitor or Terminal (Lucide), 20px, `gray-400`

**Value**: "Ubuntu 22.04 LTS" or "Windows 11 Pro"

---

### Configuration Item 7: Preset

**Label**: "Preset Template"

**Icon**: Layers or Grid (Lucide), 20px, `gray-400`

**Value**: "Development & Engineering"

**Optional**: Badge style instead of plain text
- Background: `indigo-50`
- Text: `indigo-700`
- Padding: 4px horizontal, 2px vertical
- Rounded: 4px

---

### Configuration Item 8: IP Address (Optional)

**Label**: "IP Address"

**Icon**: Network (Lucide), 20px, `gray-400`

**Value**: "54.123.45.67" (simulated)

**Copy Button**:
- Icon: Copy (Lucide), 14px
- Position: Right of value
- Style: Ghost button, small
- Hover: Background `gray-50`
- Click: Copy to clipboard, show "Copied!" tooltip

---

### Divider (Optional)

**Position**: Between configuration groups (e.g., after hardware specs, before network info)

**Style**:
- Border top: 1px solid `gray-200`
- Margin: 20px vertical

---

### Edit Configuration Link (Optional)

**Position**: Bottom of card

**Text**: "Edit Configuration"

**Icon**: Settings (Lucide), 14px, left of text

**Style**: Ghost button or text link

**Color**: `indigo-600`

**Hover**: `indigo-700`, underline

**Behavior**: Navigate to `/instances/:id/edit`

---

## 4. Usage & Cost Summary Card

### Purpose
Show resource usage and cost information. Help users understand how much they're using and spending on this instance.

### Container

**Visual Style**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 12px (large)
- Padding: 24px (desktop), 20px (mobile)
- Shadow: Subtle raised

**Heading**:
- Text: "Usage & Cost"
- Font: 18px, weight 600
- Color: `gray-900`
- Margin bottom: 20px

---

### Usage Metrics

**Layout**: Vertical stack, 20px gap between items

---

### Metric 1: Hours Used (This Month)

**Label**: "Hours Used (This Month)"

**Value**: "24.5 hours"

**Visual Style**:
- Label: 14px, weight 500, `gray-500`
- Value: 24px, weight 600, `gray-900`
- Margin bottom: 4px

**Secondary Info**:
- Text: "Last 30 days"
- Font: 13px, weight 400, `gray-500`

---

### Metric 2: Estimated Cost (This Month)

**Label**: "Estimated Cost (This Month)"

**Value**: "$10.29"

**Visual Style**:
- Label: 14px, weight 500, `gray-500`
- Value: 32px, weight 600, `gray-900`
- Color: `gray-900` (or `amber-600` if unusually high)
- Margin bottom: 4px

**Secondary Info**:
- Text: "Based on $0.42/hour"
- Font: 13px, weight 400, `gray-500`

---

### Divider

**Style**:
- Border top: 1px solid `gray-200`
- Margin: 20px vertical

---

### Usage Chart (Optional)

**Purpose**: Visualize usage over time (last 7 days or 30 days)

**Chart Type**: Simple bar chart or line chart

**Dimensions**:
- Width: Full width of card
- Height: 180px

**Data**: Simulated daily usage hours

**Visual Style**:
- Bars/Line: `indigo-600`
- Background: `gray-50` (optional)
- Grid lines: `gray-200`, subtle
- Axis labels: 12px, `gray-500`
- Tooltip on hover: Show exact value

**Library Suggestion**: Recharts or Chart.js (lightweight)

**Alternative (Simpler)**: Sparkline
- Mini line chart, no axes
- Height: 40px
- Color: `indigo-600`
- Position: Below cost metric

---

### Quick Actions (Optional)

**Position**: Bottom of card

**Actions**:
- "View Detailed Usage" link
- "Download Invoice" link (future)

**Style**: Text links, 14px, `indigo-600`, hover underline

**Layout**: Vertical stack, 8px gap

---

## 5. Status-Specific UI Variations

### Running Instance

**Header**:
- Status badge: Green "Running"
- Connect button: Visible and enabled (primary style)
- Start/Stop button: Shows "Stop"

**Configuration Card**:
- All values displayed normally
- Optional: Show "Uptime: 3 hours 24 minutes"

**Usage Card**:
- Shows current month usage
- Chart displays recent activity

---

### Stopped Instance

**Header**:
- Status badge: Gray "Stopped"
- Connect button: Hidden or disabled
- Start/Stop button: Shows "Start"

**Configuration Card**:
- All values displayed normally
- Optional: Show "Last stopped: 2 hours ago"

**Usage Card**:
- Shows usage up to stop time
- Note: "Instance is stopped. No charges are accruing."
- Font: 14px, weight 400, `gray-600`
- Background: `blue-50`, padding 12px, rounded 8px

---

### Provisioning Instance

**Header**:
- Status badge: Blue "Provisioning" with spinner icon
- Connect button: Disabled
- Start/Stop button: Hidden

**Configuration Card**:
- All values displayed
- Banner at top: "Your desktop is being created. This usually takes 2-3 minutes."
- Banner style: `blue-50` background, `blue-700` text, Info icon

**Usage Card**:
- Shows "Not yet available"
- No chart displayed

**Auto-refresh**:
- Page polls every 5 seconds to check status
- When status changes to RUNNING, update UI and show success toast

---

### Error State

**Header**:
- Status badge: Red "Error" with alert icon
- Connect button: Disabled
- Start/Stop button: Hidden

**Error Banner**:
- Position: Below header, above body cards
- Background: `red-50`
- Border: 1px solid `red-200`
- Padding: 16px
- Rounded: 8px
- Icon: AlertCircle (Lucide), 20px, `red-600`
- Title: "Desktop Error" (16px, weight 600, `red-900`)
- Message: "This desktop encountered an error and cannot be started. Please contact support or delete and recreate."
- Action: "Contact Support" button (secondary style)

**Configuration Card**:
- All values displayed (grayed out slightly, opacity 80%)

**Usage Card**:
- Shows usage up to error time
- Note: "Instance is in error state. No charges are accruing."

---

## 6. Modals & Confirmations

### Connect Modal

**Trigger**: Click "Connect" button

**Modal Structure**:
- Width: 600px (desktop), full width minus 32px (mobile)
- Background: `white`
- Rounded: 12px
- Padding: 32px
- Shadow: Floating
- Backdrop: Semi-transparent black (rgba(0,0,0,0.5))

**Content**:

**Header**:
- Title: "Connect to Ubuntu 22.04 LTS"
- Font: 20px, weight 600, `gray-900`
- Close button: X icon, top right

**Body**:
- Text: "Your desktop is ready. Choose a connection method:"
- Font: 14px, weight 400, `gray-600`
- Margin bottom: 24px

**Connection Options** (Simulated):

1. **Browser-based (Recommended)**
   - Button: "Open in Browser"
   - Icon: ExternalLink (Lucide)
   - Style: Primary button, full width
   - Description: "No software required"

2. **RDP Client**
   - Button: "Download RDP File"
   - Icon: Download (Lucide)
   - Style: Secondary button, full width
   - Description: "For Windows Remote Desktop"

3. **VNC Client**
   - Button: "Copy VNC Address"
   - Icon: Copy (Lucide)
   - Style: Secondary button, full width
   - Description: "For VNC Viewer"

**Credentials Section**:
- Heading: "Credentials" (14px, weight 600)
- Username: "clouddesk" (with copy button)
- Password: "••••••••" (with show/hide toggle and copy button)
- Layout: Key-value pairs, copy buttons right-aligned

**Footer**:
- Link: "Connection troubleshooting"
- Style: Text link, 14px, `indigo-600`

---

### Stop Confirmation Modal

**Trigger**: Click "Stop" button

**Modal Structure**: Same as Connect modal

**Content**:

**Header**:
- Title: "Stop Desktop?"
- Icon: AlertCircle (Lucide), 24px, `amber-500`, left of title

**Body**:
- Text: "Stopping this desktop will close all running applications. Any unsaved work will be lost."
- Font: 14px, weight 400, `gray-600`
- Margin bottom: 24px

**Warning** (Optional):
- Background: `amber-50`
- Border: 1px solid `amber-200`
- Padding: 12px
- Rounded: 8px
- Text: "Make sure to save your work before stopping."
- Font: 14px, weight 500, `amber-900`

**Actions**:
- Cancel button: Secondary style, left-aligned
- Stop button: Primary style (or warning style with amber background), right-aligned
- Gap: 12px

---

### Delete Confirmation Modal

**Trigger**: Click "Delete" in overflow menu

**Modal Structure**: Same as above

**Content**:

**Header**:
- Title: "Delete Desktop?"
- Icon: AlertTriangle (Lucide), 24px, `red-500`, left of title

**Body**:
- Text: "This will permanently delete **Ubuntu 22.04 LTS** and all associated data. This action cannot be undone."
- Font: 14px, weight 400, `gray-600`
- Bold instance name for emphasis
- Margin bottom: 24px

**Confirmation Input**:
- Label: "Type the instance name to confirm:"
- Input: Text field
- Placeholder: "Ubuntu 22.04 LTS"
- Validation: Must match instance name exactly
- Error: "Instance name doesn't match" (if incorrect)

**Actions**:
- Cancel button: Secondary style, left-aligned
- Delete button: Destructive style (red-600 background), right-aligned, disabled until input matches
- Text: "Delete Desktop"
- Gap: 12px

**Behavior**:
- On delete: Show loading state (2s), redirect to dashboard, show success toast
- Toast: "Desktop deleted successfully"

---

## 7. Loading States

### Page Load

**Skeleton Screen**:
- Header: Show skeleton for name, status, metadata, buttons
- Configuration card: Show 6-8 skeleton rows
- Usage card: Show skeleton for metrics and chart
- Animation: Subtle pulse

**Duration**: 500ms - 1s (simulated)

---

### Action Loading

**Start/Stop Button**:
- Show spinner in button
- Text: "Starting..." or "Stopping..."
- Disable all other actions
- Duration: 2-3s (simulated)

**Delete Action**:
- Modal shows loading overlay
- Spinner with "Deleting desktop..."
- Duration: 2s, then redirect

---

## 8. Responsive Behavior Summary

### Desktop (≥ 1024px)
- Header: Single row, actions right-aligned
- Body: Two columns (60/40 split)
- All content visible

### Tablet (768px - 1023px)
- Header: Same as desktop, may wrap actions to second row
- Body: Two columns (50/50 split) or stacked
- Chart: Smaller or hidden

### Mobile (< 768px)
- Header: Stacked layout
  - Back link
  - Name + status (may wrap)
  - Metadata (stacked, no bullets)
  - Actions (full width, stacked)
- Body: Single column
  - Configuration card first
  - Usage card second
- Chart: Simplified or hidden

---

## 9. Accessibility Requirements

### Keyboard Navigation
- Tab order: Back link → Actions → Configuration items → Usage card → Modals
- Enter/Space: Activate buttons and links
- Escape: Close modals and dropdowns

### Screen Reader
- Status badge: Announced as "Status: Running" (not just color)
- Configuration items: Announced as "CPU: 4 vCPU"
- Actions: Clear labels ("Connect to desktop", "Stop desktop")
- Modals: Focus trap, announce title on open

### Focus Management
- All interactive elements: Visible focus ring
- Modal open: Focus on first interactive element
- Modal close: Return focus to trigger button

### Color Contrast
- All text: Meets WCAG AA minimum
- Status badges: Don't rely on color alone (include text and icons)
- Error states: Icon + color + text

---

## 10. Error Handling

### Network Errors
- Show error toast: "Failed to load desktop details. Please try again."
- Retry button in toast
- Keep skeleton visible until retry succeeds

### Action Errors
- Show error toast with specific message
- Keep user on page (don't navigate away)
- Re-enable actions after error

### Not Found (404)
- Show empty state: "Desktop not found"
- Message: "This desktop may have been deleted or you don't have access."
- Action: "Back to Dashboard" button

---

This specification provides complete guidance for implementing a professional, informative instance detail page that balances information density with clarity and actionability.
