# CloudDesk EDU Usage & Cost Page Specification

## Overview

The Usage & Cost page (`/usage`) provides detailed analytics and billing information for all cloud desktop instances. It helps users understand their resource consumption patterns and associated costs. While data is hard-coded for the demo, the interface must look and feel like a production analytics dashboard with real-time data.

**Primary Goals**:
1. Show total usage and cost at a glance
2. Visualize spending trends over time
3. Break down costs by individual instance
4. Help users identify optimization opportunities
5. Build trust through transparent, detailed reporting

**User Context**: Users checking their monthly bill, analyzing usage patterns, or looking for ways to reduce costs.

---

## Page Structure

The Usage & Cost page consists of:
1. Page Header (title, description, optional date range)
2. Summary Metrics Row (3 cards)
3. Main Chart Area (cost/usage over time)
4. Detailed Breakdown Table (per-instance costs)
5. Optional: Export/Download actions

**Layout Container**:
- Max width: 1280px (matches content area spec)
- Horizontal padding: 32px (desktop), 24px (tablet), 16px (mobile)
- Vertical padding: 32px top, 32px bottom
- Background: `gray-50` (page background)

---

## 1. Page Header

### Purpose
Orient the user and provide context about the reporting period. Set expectations for what data is being shown.

### Layout & Dimensions

**Container**:
- Full width of content area
- Margin bottom: 32px (space before summary cards)
- Flex layout: Title/description left, time range selector right (desktop)
- Mobile: Stack vertically

**Desktop Layout**:
```
┌────────────────────────────────────────────────────────────┐
│ [Title]                              [Last 30 days ▼]      │
│ [Description]                                              │
└────────────────────────────────────────────────────────────┘
```

---

### Page Title

**Text**: "Usage & Cost"

**Font**: 24px (1.5rem), weight 600 (semibold)

**Color**: `gray-900`

**Line height**: 1.2

**Margin bottom**: 8px

---

### Description

**Text**: "Track your cloud desktop usage and estimated costs. All charges are based on actual runtime."

**Font**: 14px (0.875rem), weight 400

**Color**: `gray-500`

**Line height**: 1.5

**Max width**: 600px

---

### Time Range Selector (Right Side)

**Purpose**: Allow users to view different time periods (visual realism, even if data is static)

**Position**: Right-aligned, vertically centered with title

**Trigger Button**:
- Text: "Last 30 days" (default)
- Icon: Calendar (Lucide), 16px, left of text
- Chevron: ChevronDown (Lucide), 14px, right of text
- Style: Secondary button (white background, gray-200 border)
- Size: Default (px-4 py-2)
- Font: 14px, weight 500
- Rounded: 8px

**Dropdown Menu**:
- Position: Below trigger, right-aligned
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 8px
- Shadow: Elevated
- Width: 200px

**Menu Options**:
- "Last 7 days"
- "Last 30 days" (default, checkmark)
- "Last 90 days"
- "This month"
- "Last month"
- Divider
- "Custom range..." (future: opens date picker)

**Menu Item Style**:
- Padding: 10px horizontal, 8px vertical
- Font: 14px, weight 400
- Color: `gray-900`
- Hover: Background `gray-50`
- Selected: Background `indigo-50`, text `indigo-900`, checkmark icon (right)

**Behavior**:
- Click option: Update page data (in demo, just update label)
- Show loading state briefly (spinner overlay on charts/table)
- Update summary cards and chart with new data

**Mobile Behavior**:
- Full width button
- Margin top: 16px (below description)

---

## 2. Summary Metrics Row

### Purpose
Provide high-level overview of usage and costs for the selected time period. Users should immediately understand their total spend and usage.

### Layout & Dimensions

**Container**:
- Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile
- Gap: 24px between cards
- Margin bottom: 32px (space before chart)

**Responsive Breakpoints**:
- Desktop (≥ 1024px): 3 columns
- Tablet (768px - 1023px): 2 columns (third card wraps)
- Mobile (< 768px): 1 column (stacked)

---

### Summary Card Structure

**Visual Style**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 8px (medium)
- Padding: 24px (1.5rem)
- Shadow: Subtle raised (`0 1px 3px rgba(0,0,0,0.1)`)
- Min height: 140px (ensures consistent height)

**Content Layout** (Vertical stack):
1. Label (top)
2. Primary metric (large number)
3. Trend indicator or secondary info (bottom)

**Spacing**:
- Label to metric: 12px
- Metric to secondary info: 8px

---

### Card 1: Total Hours Used

**Label**:
- Text: "Total Hours Used"
- Font: 14px, weight 500
- Color: `gray-500`

**Primary Metric**:
- Text: "142.5" (example number)
- Unit: "hours" (smaller, lighter)
- Font: 36px (2.25rem), weight 600 (semibold)
- Color: `gray-900`
- Line height: 1
- Unit font: 18px, weight 400, `gray-500`, margin left 4px

**Trend Indicator**:
- Icon: TrendingUp or TrendingDown (Lucide), 14px
- Text: "+12% from last period"
- Font: 13px, weight 400
- Color: `emerald-600` (increase) or `red-600` (decrease)
- Layout: Horizontal flex, icon left, 4px gap
- Note: For usage, increase might be neutral (not necessarily bad)

**Alternative Secondary Info**:
- Text: "Across 5 desktops"
- Font: 13px, weight 400
- Color: `gray-500`

---

### Card 2: Total Estimated Cost

**Label**:
- Text: "Total Estimated Cost"
- Font: 14px, weight 500
- Color: `gray-500`

**Primary Metric**:
- Text: "$59.85" (example amount)
- Font: 36px, weight 600
- Color: `gray-900`
- Line height: 1

**Trend Indicator**:
- Icon: TrendingUp or TrendingDown (Lucide), 14px
- Text: "+8% from last period"
- Font: 13px, weight 400
- Color: `amber-600` (increase, caution) or `emerald-600` (decrease, good)
- Layout: Horizontal flex, icon left, 4px gap

**Alternative Secondary Info**:
- Text: "Based on $0.42/hour average"
- Font: 13px, weight 400
- Color: `gray-500`

---

### Card 3: Average Cost Per Desktop

**Label**:
- Text: "Average Cost Per Desktop"
- Font: 14px, weight 500
- Color: `gray-500`

**Primary Metric**:
- Text: "$11.97" (example amount)
- Font: 36px, weight 600
- Color: `gray-900`
- Line height: 1

**Secondary Info**:
- Text: "5 active desktops"
- Font: 13px, weight 400
- Color: `gray-500`

**Alternative Card 3: Active Desktops**:
- Label: "Active Desktops"
- Metric: "5"
- Secondary: "3 running now"
- Icon: Monitor (Lucide), 24px, `indigo-600`, top right corner

---

### Card Interaction (Optional)

**Hover State**:
- Border: `gray-300`
- Shadow: Elevated (`0 4px 6px rgba(0,0,0,0.07)`)
- Cursor: Default (cards are informational, not clickable)

**Recommendation**: Keep cards non-interactive for simplicity

---

## 3. Main Chart Area

### Purpose
Visualize cost and usage trends over time. Help users identify patterns, spikes, or opportunities for optimization.

### Container

**Visual Style**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 12px (large)
- Padding: 24px (desktop), 20px (mobile)
- Shadow: Subtle raised
- Margin bottom: 32px (space before table)

**Heading**:
- Text: "Cost Over Time"
- Font: 18px, weight 600
- Color: `gray-900`
- Margin bottom: 20px

**Subheading** (Optional):
- Text: "Daily breakdown for the last 30 days"
- Font: 14px, weight 400
- Color: `gray-500`
- Margin bottom: 20px

---

### Chart Type Recommendation

**Primary Chart: Stacked Area or Bar Chart**

**Rationale**:
- Shows cost accumulation over time
- Can stack multiple instances to show contribution
- Easy to spot trends and anomalies
- Familiar to users from other analytics tools

**Alternative: Line Chart**
- Simpler, cleaner
- Good for showing single metric trend
- Less information density

**Recommendation**: Use **Bar Chart** for clarity and enterprise feel

---

### Chart Configuration

**Dimensions**:
- Width: Full width of card (minus padding)
- Height: 320px (desktop), 240px (mobile)

**Data**:
- X-axis: Date (last 30 days, daily granularity)
- Y-axis: Cost in dollars
- Bars: One per day, showing total cost
- Optional: Stack bars by instance (different colors)

**Visual Style**:
- Bar color: `indigo-600` (single instance) or stacked colors
- Bar width: Auto (based on data points)
- Bar spacing: 4px gap
- Grid lines: Horizontal only, `gray-200`, subtle
- Axis labels: 12px, `gray-500`
- Tooltip: On hover, show exact values

**Color Palette** (if stacked by instance):
- Instance 1: `indigo-600`
- Instance 2: `blue-500`
- Instance 3: `purple-500`
- Instance 4: `pink-500`
- Instance 5: `amber-500`
- Others: `gray-400`

---

### Chart Legend

**Position**: Top right of chart area (or below chart on mobile)

**Layout**: Horizontal flex, wrap if needed

**Legend Item**:
- Color swatch: 12px × 12px square, rounded 2px
- Label: Instance name, 13px, weight 400, `gray-600`
- Gap: 8px between swatch and label, 16px between items

**Interactive** (Optional):
- Click legend item: Toggle instance visibility in chart
- Dimmed state: Opacity 40% when toggled off

---

### Chart Interactions

**Hover**:
- Highlight bar
- Show tooltip with exact values
- Tooltip content:
  - Date: "March 15, 2024"
  - Total cost: "$2.45"
  - Breakdown: "Ubuntu: $1.20, Windows: $1.25" (if stacked)

**Tooltip Style**:
- Background: `gray-900`
- Text: `white`, 13px
- Padding: 8px horizontal, 6px vertical
- Rounded: 6px
- Shadow: Elevated
- Arrow pointing to bar

**Empty State** (if no data):
- Icon: BarChart (Lucide), 48px, `gray-300`
- Text: "No usage data for this period"
- Font: 16px, weight 400, `gray-600`
- Centered in chart area

---

### Chart Library Recommendation

**Recharts** (React-specific, declarative):
- Pros: React-friendly, good documentation, customizable
- Cons: Larger bundle size

**Chart.js** (with react-chartjs-2):
- Pros: Lightweight, performant, widely used
- Cons: More imperative API

**Recommendation**: Use **Recharts** for easier React integration and cleaner code

---

### Alternative: Dual-Axis Chart (Advanced)

**Purpose**: Show both cost and hours on same chart

**Configuration**:
- Left Y-axis: Cost ($)
- Right Y-axis: Hours
- Bars: Cost (indigo)
- Line: Hours (amber)

**Rationale**: More information density, shows correlation between usage and cost

**Complexity**: Higher, may be confusing for some users

**Recommendation**: Start with simple bar chart, add dual-axis in future iteration

---

## 4. Detailed Breakdown Table

### Purpose
Provide per-instance cost breakdown. Allow users to identify which desktops are consuming the most resources and costing the most.

### Container

**Visual Style**:
- Background: `white`
- Border: 1px solid `gray-200`
- Rounded: 12px (large)
- Padding: 0 (table extends to edges)
- Shadow: Subtle raised
- Overflow: Hidden (rounded corners clip table)

**Heading** (Above table, inside card):
- Text: "Cost by Desktop"
- Font: 18px, weight 600
- Color: `gray-900`
- Padding: 24px horizontal, 20px top, 16px bottom
- Border bottom: 1px solid `gray-200`

---

### Table Structure

**Layout**: Standard HTML table with proper semantics

**Columns**: 5 columns

1. **Desktop Name** (35% width)
2. **Status** (15% width)
3. **Hours Used** (15% width)
4. **Avg. Hourly Rate** (15% width)
5. **Total Cost** (20% width)

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

**Columns**:
- "Desktop Name" (sortable, alphabetical)
- "Status" (sortable, by status priority)
- "Hours Used" (sortable, numerical, default sort descending)
- "Avg. Hourly Rate" (sortable, numerical)
- "Total Cost" (sortable, numerical)

---

### Table Row

**Visual Style**:
- Height: 64px (generous for readability)
- Padding: 12px horizontal (first/last cells), 8px (middle cells)
- Border bottom: 1px solid `gray-200`
- Background: `white`

**Row States**:

**Default**:
- Background: `white`
- Text: As specified per column

**Hover**:
- Background: `gray-50`
- Cursor: Pointer (if row is clickable)
- Transition: 100ms ease-in-out

**Focus** (keyboard navigation):
- Ring: 2px `indigo-600` inset
- Background: `gray-50`

---

### Column 1: Desktop Name

**Content**: Instance name (e.g., "Ubuntu 22.04 LTS")

**Font**: 14px, weight 500 (medium)

**Color**: `gray-900`

**Truncate**: Ellipsis if too long (max-width: 200px)

**Link** (Optional): Clickable, navigates to instance detail page

**Hover** (if link): `indigo-600`, underline

---

### Column 2: Status

**Content**: Status badge (RUNNING, STOPPED, etc.)

**Badge Style**: As per component library spec
- RUNNING: Green background, "Running" text
- STOPPED: Gray background, "Stopped" text
- PROVISIONING: Blue background, "Provisioning" text

**Alignment**: Left

---

### Column 3: Hours Used

**Content**: Number of hours (e.g., "42.5")

**Font**: 14px, weight 400

**Color**: `gray-900`

**Alignment**: Right (numerical data)

**Format**: One decimal place, "hours" unit in smaller text

---

### Column 4: Avg. Hourly Rate

**Content**: Average cost per hour (e.g., "$0.42")

**Font**: 14px, weight 400

**Color**: `gray-600`

**Alignment**: Right

**Format**: Currency with 2 decimal places

---

### Column 5: Total Cost

**Content**: Total cost for period (e.g., "$17.85")

**Font**: 14px, weight 600 (semibold, emphasize total)

**Color**: `gray-900`

**Alignment**: Right

**Format**: Currency with 2 decimal places

---

### Table Footer (Totals Row)

**Position**: Last row of table

**Visual Style**:
- Background: `gray-50`
- Border top: 2px solid `gray-300` (thicker than regular rows)
- Height: 56px
- Font: 14px, weight 600 (semibold)

**Content**:
- Column 1: "Total" (left-aligned)
- Column 2: Empty
- Column 3: Sum of all hours (e.g., "142.5 hours")
- Column 4: Average of all rates (e.g., "$0.42 avg")
- Column 5: Sum of all costs (e.g., "$59.85")

**Color**: `gray-900` for all text

---

### Empty State

**When to Show**: No instances exist or no usage in selected period

**Container**: Replace table with empty state

**Content**:
- Icon: BarChart or DollarSign (Lucide), 48px, `gray-300`
- Heading: "No usage data"
- Description: "No desktops were running during this period."
- Font: 16px (heading), 14px (description)
- Color: `gray-900` (heading), `gray-600` (description)
- Centered in table area
- Min height: 300px

---

### Row Click Behavior (Optional)

**Action**: Navigate to instance detail page (`/instances/:id`)

**Visual Feedback**: Hover state on entire row

**Alternative**: Add "View Details" link in last column (more explicit)

---

## 5. Filters & Controls (Optional)

### Purpose
Provide additional filtering and export capabilities for power users. Enhance the "real analytics dashboard" feel.

### Position

**Location**: Below page header, above summary cards (or in page header right side)

**Layout**: Horizontal flex, right-aligned

**Gap**: 12px between controls

---

### Filter: Instance Selector

**Purpose**: Filter data to show only specific instances

**Trigger Button**:
- Text: "All Desktops" (default) or "3 selected"
- Icon: Filter (Lucide), 16px, left of text
- Chevron: ChevronDown (Lucide), 14px, right of text
- Style: Secondary button
- Size: Default (px-4 py-2)

**Dropdown Menu**:
- Checkboxes for each instance
- "Select All" / "Clear All" options at top
- Apply button at bottom (or auto-apply on change)

**Behavior**:
- Select instances: Update all data (summary, chart, table)
- Show loading state briefly

---

### Export Button

**Purpose**: Download usage report (simulated in demo)

**Text**: "Export"

**Icon**: Download (Lucide), 16px, left of text

**Style**: Secondary button

**Size**: Default (px-4 py-2)

**Behavior**:
- Click: Show dropdown menu with format options
- Options: "Export as CSV", "Export as PDF"
- In demo: Show success toast "Report downloaded" (no actual file)

---

### Refresh Button (Optional)

**Purpose**: Manually refresh data (visual realism)

**Icon**: RefreshCw (Lucide), 16px

**Style**: Icon button (40px × 40px)

**Background**: Transparent

**Border**: 1px solid `gray-200`

**Hover**: Background `gray-50`, border `gray-300`

**Behavior**:
- Click: Show loading state (spinner), refresh data (in demo, just animation)
- Animation: Rotate icon 360° during refresh

---

## 6. Additional Enhancements (Future)

### Cost Optimization Recommendations

**Position**: Below table or in sidebar

**Container**: Card with light blue background (`blue-50`)

**Content**:
- Icon: Lightbulb (Lucide), 24px, `blue-600`
- Heading: "Optimization Tips"
- List of recommendations:
  - "Stop unused desktops to save $X/month"
  - "Downgrade oversized instances"
  - "Use scheduled start/stop"

---

### Budget Alerts

**Position**: Top of page (if budget exceeded)

**Container**: Banner with amber background

**Content**:
- Icon: AlertTriangle (Lucide), 20px, `amber-600`
- Text: "You've used 85% of your monthly budget ($50)"
- Action: "Manage Budget" link

---

### Comparison View

**Purpose**: Compare current period to previous period

**Toggle**: Switch between "Current" and "Comparison" views

**Chart**: Show two lines or bar groups (current vs previous)

**Table**: Add "Previous Period" column for comparison

---

## 7. Responsive Behavior Summary

### Desktop (≥ 1024px)
- Page header: Title left, time range right
- Summary cards: 3 columns
- Chart: Full width, 320px height
- Table: All 5 columns visible
- Filters: Horizontal layout, right-aligned

### Tablet (768px - 1023px)
- Page header: May stack time range below title
- Summary cards: 2 columns (third wraps)
- Chart: Full width, 280px height
- Table: All columns visible, may reduce padding
- Filters: May wrap to second row

### Mobile (< 768px)
- Page header: Fully stacked
- Time range: Full width button
- Summary cards: Single column
- Chart: Full width, 240px height, simplified legend
- Table: Convert to cards or horizontal scroll
  - Card format recommended:
    - Desktop name (large)
    - Status badge
    - Hours + Cost (side by side)
    - Avg rate (small text)
- Filters: Full width, stacked

---

## 8. Loading States

### Page Load

**Skeleton Screen**:
- Summary cards: Show 3 card skeletons with pulsing rectangles
- Chart: Show gray rectangle with pulsing animation
- Table: Show 5 row skeletons
- Duration: 500ms - 1s

---

### Time Range Change

**Loading Overlay**:
- Position: Over chart and table
- Background: `white` with 80% opacity
- Spinner: Indigo-600, 32px, centered
- Duration: 500ms (simulated)

---

### Chart Rendering

**Progressive Loading**:
- Show axes first
- Animate bars/lines from left to right
- Duration: 300ms (smooth, not too slow)

---

## 9. Accessibility Requirements

### Keyboard Navigation
- Tab order: Time range → Summary cards → Chart → Table → Filters
- Arrow keys: Navigate table rows
- Enter: Sort table column, activate buttons
- Escape: Close dropdowns

### Screen Reader
- Summary cards: Announce metric and trend
- Chart: Provide data table alternative (hidden visually)
- Table: Proper `<table>` semantics with `<thead>`, `<tbody>`
- Sort indicators: Announce "sorted ascending" or "sorted descending"

### Focus Management
- All interactive elements: Visible focus ring
- Dropdown menus: Focus trap
- Chart: Keyboard accessible (tab through data points)

### Color Contrast
- All text: Meets WCAG AA minimum
- Chart colors: Distinguishable without color (patterns optional)
- Status badges: Don't rely on color alone

---

## 10. Data Simulation Guidelines

### Hard-coded Data Structure

**Summary Metrics**:
- Total hours: 142.5
- Total cost: $59.85
- Average cost per desktop: $11.97
- Trend: +8% from previous period

**Chart Data** (30 days):
- Daily costs ranging from $1.50 to $3.20
- Realistic variation (weekdays higher, weekends lower)
- Occasional spikes (simulate heavy usage days)

**Table Data** (5 instances):
1. Ubuntu 22.04 LTS: 42.5 hrs, $0.42/hr, $17.85
2. Windows 11 Pro: 38.0 hrs, $0.48/hr, $18.24
3. Data Science ML: 28.5 hrs, $0.65/hr, $18.53
4. Development Env: 22.0 hrs, $0.38/hr, $8.36
5. 3D Rendering: 11.5 hrs, $0.95/hr, $10.93

**Realism Tips**:
- Use realistic hourly rates based on instance specs
- Vary usage patterns (some instances used more than others)
- Include stopped instances with 0 hours
- Make totals add up correctly

---

This specification provides complete guidance for implementing a professional, data-rich usage and cost analytics page that looks and feels like a production SaaS billing dashboard.
