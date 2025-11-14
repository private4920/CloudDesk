import type { Instance } from './types';

/**
 * Initial demo instances for CloudDesk EDU
 * These represent a realistic set of cloud desktops for demonstration
 */
export const INITIAL_INSTANCES: Instance[] = [
  {
    id: 'inst-001',
    name: 'Ubuntu 22.04 LTS',
    imageId: 'dev-engineering',
    status: 'RUNNING',
    cpuCores: 4,
    ramGb: 8,
    storageGb: 50,
    gpu: 'NONE',
    region: 'US_EAST',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-20T14:22:00Z',
  },
  {
    id: 'inst-002',
    name: 'Windows 11 Pro',
    imageId: 'windows-general',
    status: 'RUNNING',
    cpuCores: 4,
    ramGb: 8,
    storageGb: 60,
    gpu: 'NONE',
    region: 'US_EAST',
    createdAt: '2024-01-10T08:15:00Z',
    updatedAt: '2024-01-20T09:45:00Z',
  },
  {
    id: 'inst-003',
    name: 'Data Science ML',
    imageId: 'data-science-ml',
    status: 'RUNNING',
    cpuCores: 8,
    ramGb: 16,
    storageGb: 100,
    gpu: 'BASIC',
    region: 'US_WEST',
    createdAt: '2024-01-12T14:20:00Z',
    updatedAt: '2024-01-20T16:30:00Z',
  },
  {
    id: 'inst-004',
    name: 'Development Env',
    imageId: 'dev-engineering',
    status: 'STOPPED',
    cpuCores: 4,
    ramGb: 8,
    storageGb: 50,
    gpu: 'NONE',
    region: 'EU_WEST',
    createdAt: '2024-01-08T11:00:00Z',
    updatedAt: '2024-01-19T18:00:00Z',
  },
  {
    id: 'inst-005',
    name: '3D Rendering',
    imageId: '3d-rendering-cad',
    status: 'STOPPED',
    cpuCores: 8,
    ramGb: 32,
    storageGb: 200,
    gpu: 'ADVANCED',
    region: 'US_EAST',
    createdAt: '2024-01-18T09:30:00Z',
    updatedAt: '2024-01-19T22:15:00Z',
  },
  {
    id: 'inst-006',
    name: 'Testing Environment',
    imageId: 'general-purpose',
    status: 'PROVISIONING',
    cpuCores: 2,
    ramGb: 4,
    storageGb: 30,
    gpu: 'NONE',
    region: 'US_EAST',
    createdAt: '2024-01-20T16:45:00Z',
    updatedAt: '2024-01-20T16:45:00Z',
  },
];

/**
 * Get an instance by ID
 */
export function getInstanceById(id: string): Instance | undefined {
  return INITIAL_INSTANCES.find((instance) => instance.id === id);
}

/**
 * Get instances by status
 */
export function getInstancesByStatus(status: Instance['status']): Instance[] {
  return INITIAL_INSTANCES.filter((instance) => instance.status === status);
}

/**
 * Get running instances count
 */
export function getRunningInstancesCount(): number {
  return INITIAL_INSTANCES.filter((instance) => instance.status === 'RUNNING').length;
}

/**
 * Get total instances count
 */
export function getTotalInstancesCount(): number {
  return INITIAL_INSTANCES.length;
}
