// CloudDesk EDU Data Types

export type InstanceStatus = 'PROVISIONING' | 'RUNNING' | 'STOPPED' | 'DELETED' | 'ERROR';

export type GpuType = 'NONE' | 'BASIC' | 'ADVANCED';

export type Region = 'US_EAST' | 'US_WEST' | 'EU_WEST' | 'EU_CENTRAL' | 'ASIA_PACIFIC';

export interface Instance {
  id: string;
  name: string;
  imageId: string;
  status: InstanceStatus;
  cpuCores: number;
  ramGb: number;
  storageGb: number;
  gpu: GpuType;
  region: Region;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface ImagePreset {
  id: string;
  name: string;
  description: string;
  osName: string; // e.g., "Ubuntu 22.04 LTS", "Windows 11 Pro"
  recommendedCpu: number;
  recommendedRamGb: number;
  recommendedStorageGb: number;
  supportsGpu: boolean;
  icon?: string; // Icon identifier for UI
}

export interface PricingConfig {
  basePerCpuPerHour: number;
  basePerRamGbPerHour: number;
  basePerStorageGbPerHour: number;
  gpuExtraPerHour: {
    NONE: number;
    BASIC: number;
    ADVANCED: number;
  };
  markupRate: number; // Multiplier for total cost (e.g., 1.1 for 10% markup)
}

export interface UsageRow {
  instanceId: string;
  instanceName: string;
  status: InstanceStatus;
  hours: number;
  avgHourlyRate: number;
  estimatedCost: number;
}

export interface UsageSummary {
  totalHours: number;
  totalCost: number;
  averageCostPerDesktop: number;
  activeDesktops: number;
}

export interface DailyUsage {
  date: string; // ISO date string
  cost: number;
  hours: number;
}

// Helper type for region display
export const REGION_NAMES: Record<Region, string> = {
  US_EAST: 'US East (Virginia)',
  US_WEST: 'US West (Oregon)',
  EU_WEST: 'EU West (Ireland)',
  EU_CENTRAL: 'EU Central (Frankfurt)',
  ASIA_PACIFIC: 'Asia Pacific (Singapore)',
};

// Helper type for GPU display
export const GPU_NAMES: Record<GpuType, string> = {
  NONE: 'None',
  BASIC: 'NVIDIA T4 (Basic)',
  ADVANCED: 'NVIDIA A100 (Advanced)',
};
