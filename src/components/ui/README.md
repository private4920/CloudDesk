# CloudDesk EDU UI Components

Enterprise-grade React + TypeScript + Tailwind UI primitives following the CloudDesk EDU design system.

## Components

### Button

Primary interactive element for user actions.

**Props:**
- `variant`: "primary" | "secondary" | "ghost" | "destructive" (default: "primary")
- `size`: "sm" | "md" | "lg" (default: "md")
- `children`: ReactNode
- `className`: string (optional)
- All standard button HTML attributes

**Usage:**
```tsx
import { Button } from '@/components/ui'

// Primary button
<Button variant="primary" onClick={handleClick}>
  Create Desktop
</Button>

// Secondary button
<Button variant="secondary" size="sm">
  Cancel
</Button>

// Ghost button
<Button variant="ghost">
  View Details
</Button>

// Destructive button
<Button variant="destructive">
  Delete
</Button>

// With icon
<Button variant="primary">
  <PlusIcon className="h-4 w-4 mr-2" />
  Create
</Button>
```

**States:**
- Default: Base styling per variant
- Hover: Darker background (primary/destructive) or gray background (secondary/ghost)
- Focus: 2px indigo ring with offset
- Disabled: 60% opacity, cursor not-allowed

---

### Card

Container component for grouping related content.

**Components:**
- `Card`: Main container
- `CardHeader`: Optional header section with bottom border
- `CardBody`: Main content area
- `CardFooter`: Optional footer section with top border

**Props:**
- `children`: ReactNode
- `className`: string (optional)
- `onClick`: () => void (optional, makes card interactive)
- `interactive`: boolean (adds hover effects)

**Usage:**
```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui'

// Basic card
<Card className="p-6">
  <h2>Card Title</h2>
  <p>Card content</p>
</Card>

// Card with sections
<Card>
  <CardHeader>
    <h2 className="text-lg font-semibold">Dashboard</h2>
  </CardHeader>
  <CardBody>
    <p>Main content goes here</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Interactive card
<Card interactive onClick={handleClick}>
  <div className="p-6">Clickable card</div>
</Card>
```

---

### Input

Text input field with consistent styling.

**Components:**
- `Input`: Single-line text input
- `Textarea`: Multi-line text input
- `Label`: Form label with optional required indicator
- `HelperText`: Helper or error text below input

**Props (Input):**
- `error`: boolean (shows error state)
- `className`: string (optional)
- All standard input HTML attributes

**Props (Textarea):**
- `error`: boolean
- `rows`: number (default: 4)
- `className`: string (optional)
- All standard textarea HTML attributes

**Props (Label):**
- `htmlFor`: string
- `required`: boolean (shows red asterisk)
- `children`: ReactNode

**Props (HelperText):**
- `error`: boolean (changes color to red)
- `children`: ReactNode

**Usage:**
```tsx
import { Input, Textarea, Label, HelperText } from '@/components/ui'

// Text input with label
<div>
  <Label htmlFor="name" required>Instance Name</Label>
  <Input
    id="name"
    type="text"
    placeholder="e.g., My Ubuntu Desktop"
  />
  <HelperText>Choose a descriptive name</HelperText>
</div>

// Input with error
<div>
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    error
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <HelperText error>Invalid email address</HelperText>
</div>

// Textarea
<div>
  <Label htmlFor="description">Description</Label>
  <Textarea
    id="description"
    rows={6}
    placeholder="Enter description..."
  />
</div>
```

---

### Select

Dropdown select field matching input styling.

**Components:**
- `Select`: Select container with chevron icon
- `SelectOption`: Option element

**Props (Select):**
- `error`: boolean
- `className`: string (optional)
- `children`: ReactNode (SelectOption elements)
- All standard select HTML attributes

**Props (SelectOption):**
- `value`: string | number
- `children`: ReactNode
- `disabled`: boolean (optional)

**Usage:**
```tsx
import { Select, SelectOption, Label } from '@/components/ui'

<div>
  <Label htmlFor="region">Region</Label>
  <Select
    id="region"
    value={region}
    onChange={(e) => setRegion(e.target.value)}
  >
    <SelectOption value="">Select a region</SelectOption>
    <SelectOption value="us-east">US East (Virginia)</SelectOption>
    <SelectOption value="us-west">US West (Oregon)</SelectOption>
    <SelectOption value="eu-west">EU West (Ireland)</SelectOption>
  </Select>
</div>
```

---

### Badge

Small status indicator or label.

**Components:**
- `Badge`: Status badge with semantic colors
- `CountBadge`: Circular count badge (for notifications)

**Props (Badge):**
- `variant`: "neutral" | "success" | "warning" | "danger" | "info" | "running" | "stopped" | "provisioning" | "error"
- `children`: ReactNode
- `icon`: ReactNode (optional)
- `className`: string (optional)

**Props (CountBadge):**
- `count`: number
- `variant`: "primary" | "neutral" (default: "primary")
- `className`: string (optional)

**Usage:**
```tsx
import { Badge, CountBadge } from '@/components/ui'

// Status badges
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Failed</Badge>
<Badge variant="info">Beta</Badge>

// Instance status badges
<Badge variant="running">RUNNING</Badge>
<Badge variant="stopped">STOPPED</Badge>
<Badge variant="provisioning">PROVISIONING</Badge>
<Badge variant="error">ERROR</Badge>

// Badge with icon
<Badge variant="success" icon={<CheckIcon className="h-3 w-3" />}>
  Verified
</Badge>

// Count badge
<div className="relative">
  <BellIcon className="h-6 w-6" />
  <CountBadge count={5} className="absolute -top-1 -right-1" />
</div>
```

---

### Tabs

Pill-style tabs for filtering and navigation.

**Components:**
- `Tabs`: Pill-style tabs with gray background container
- `UnderlineTabs`: Traditional underline tabs

**Props (Tabs):**
- `items`: TabItem[] - Array of `{ id: string, label: string, count?: number }`
- `activeId`: string - Currently active tab ID
- `onChange`: (id: string) => void - Callback when tab changes
- `className`: string (optional)

**Props (UnderlineTabs):**
- `items`: UnderlineTabItem[] - Array of `{ id: string, label: string }`
- `activeId`: string
- `onChange`: (id: string) => void
- `className`: string (optional)

**Usage:**
```tsx
import { Tabs, UnderlineTabs } from '@/components/ui'

// Pill tabs (for filters)
const [activeTab, setActiveTab] = useState('all')

<Tabs
  items={[
    { id: 'all', label: 'All', count: 24 },
    { id: 'running', label: 'Running', count: 3 },
    { id: 'stopped', label: 'Stopped', count: 21 },
  ]}
  activeId={activeTab}
  onChange={setActiveTab}
/>

// Underline tabs (for navigation)
<UnderlineTabs
  items={[
    { id: 'overview', label: 'Overview' },
    { id: 'performance', label: 'Performance' },
    { id: 'logs', label: 'Logs' },
  ]}
  activeId={activeSection}
  onChange={setActiveSection}
/>
```

---

## Design Principles

### Consistency
All components follow the CloudDesk EDU design system:
- Colors: Indigo accent, gray neutrals, semantic colors
- Typography: 14px base, Inter font family
- Spacing: 4px base unit scale
- Border radius: 8px (medium) for most components
- Shadows: Subtle, enterprise-appropriate

### Accessibility
- All interactive elements have focus states (2px indigo ring)
- Proper ARIA attributes where needed
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Disabled states clearly indicated

### Flexibility
- All components accept `className` for customization
- Standard HTML attributes passed through
- Composable (Card with Header/Body/Footer)
- TypeScript types for safety

### Performance
- No external dependencies
- Minimal JavaScript
- Leverages Tailwind for optimal CSS
- Tree-shakeable exports

## Import Patterns

```tsx
// Named imports (recommended)
import { Button, Card, Input, Badge } from '@/components/ui'

// Individual imports (for tree-shaking)
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

// Type imports
import type { ButtonProps, CardProps } from '@/components/ui'
```

## Customization

All components accept a `className` prop for additional styling:

```tsx
// Add custom spacing
<Button className="mt-4 w-full">Full Width Button</Button>

// Override specific styles (use with caution)
<Card className="border-2 border-indigo-600">
  Highlighted card
</Card>

// Combine with Tailwind utilities
<Input className="max-w-xs" />
```

## Best Practices

1. **Use semantic variants**: Choose the appropriate variant for the context (primary for main actions, secondary for alternatives)

2. **Maintain hierarchy**: Limit primary buttons to 1-2 per screen

3. **Provide feedback**: Use disabled states, loading states, and error states appropriately

4. **Label inputs**: Always use Label component with inputs for accessibility

5. **Group related content**: Use Card to group related information

6. **Consistent spacing**: Use Tailwind spacing utilities (p-4, p-6, etc.) consistently

7. **Error handling**: Show error states with both visual indicators and helper text

## Future Enhancements

Potential additions (not yet implemented):
- Checkbox and Radio components
- Toggle/Switch component
- Modal/Dialog component
- Dropdown menu component
- Toast notification component
- Tooltip component
- Skeleton loading states
- Progress indicators
