# CloudDesk EDU Data Layer

This directory contains all TypeScript types and hard-coded demo data for the CloudDesk EDU frontend.

## Files

- **types.ts** - Core TypeScript interfaces and types
- **images.ts** - Image preset configurations (OS templates)
- **instances.ts** - Demo cloud desktop instances
- **pricing.ts** - Pricing configuration and cost calculation utilities
- **usage.ts** - Usage data and analytics helpers
- **index.ts** - Central export for easy imports

## Usage

```typescript
import { INITIAL_INSTANCES, IMAGE_PRESETS, PRICING_CONFIG } from '@/data';
import { calculateHourlyCost, buildUsage } from '@/data';
```

## Data Structure

### Instances
6 demo instances with various statuses (RUNNING, STOPPED, PROVISIONING)

### Image Presets
5 pre-configured templates for different use cases

### Pricing
Simple per-resource pricing model with GPU add-ons

### Usage
Hard-coded usage hours with helper functions for calculations

All data is static and deterministic for demo purposes.
