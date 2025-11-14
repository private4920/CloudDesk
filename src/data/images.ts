import type { ImagePreset } from './types';

/**
 * Pre-configured image presets for CloudDesk EDU
 * These represent different optimized configurations for various use cases
 */
export const IMAGE_PRESETS: ImagePreset[] = [
  {
    id: 'general-purpose',
    name: 'General Purpose',
    description:
      'Balanced configuration for everyday tasks, web browsing, and light development.',
    osName: 'Ubuntu 22.04 LTS',
    recommendedCpu: 2,
    recommendedRamGb: 4,
    recommendedStorageGb: 30,
    supportsGpu: false,
    icon: 'monitor',
  },
  {
    id: 'dev-engineering',
    name: 'Development & Engineering',
    description:
      'Optimized for software development, compiling, and running development tools.',
    osName: 'Ubuntu 22.04 LTS',
    recommendedCpu: 4,
    recommendedRamGb: 8,
    recommendedStorageGb: 50,
    supportsGpu: false,
    icon: 'code',
  },
  {
    id: 'data-science-ml',
    name: 'Data Science & ML',
    description:
      'High-performance configuration for data analysis, machine learning, and Jupyter notebooks.',
    osName: 'Ubuntu 22.04 LTS',
    recommendedCpu: 8,
    recommendedRamGb: 16,
    recommendedStorageGb: 100,
    supportsGpu: true,
    icon: 'bar-chart',
  },
  {
    id: '3d-rendering-cad',
    name: '3D Rendering & CAD',
    description:
      'Powerful GPU-accelerated desktop for 3D modeling, rendering, and CAD applications.',
    osName: 'Windows 11 Pro',
    recommendedCpu: 8,
    recommendedRamGb: 32,
    recommendedStorageGb: 200,
    supportsGpu: true,
    icon: 'box',
  },
  {
    id: 'windows-general',
    name: 'Windows Desktop',
    description:
      'Standard Windows environment for general productivity and office applications.',
    osName: 'Windows 11 Pro',
    recommendedCpu: 4,
    recommendedRamGb: 8,
    recommendedStorageGb: 60,
    supportsGpu: false,
    icon: 'monitor',
  },
];

/**
 * Get a preset by ID
 */
export function getPresetById(id: string): ImagePreset | undefined {
  return IMAGE_PRESETS.find((preset) => preset.id === id);
}

/**
 * Get preset name by ID (with fallback)
 */
export function getPresetName(id: string): string {
  const preset = getPresetById(id);
  return preset ? preset.name : 'Unknown Preset';
}
