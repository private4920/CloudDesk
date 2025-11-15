import { useState, useCallback, useEffect } from 'react';
import { INITIAL_INSTANCES } from '../data/instances';
import type { Instance, InstanceStatus } from '../data/types';

const STORAGE_KEY = 'clouddesk_instances';

/**
 * Demo hook for managing instance state with localStorage persistence.
 * Provides CRUD operations for instances without backend.
 */
export function useInstancesDemo() {
  // Load from localStorage or use initial data
  const [instances, setInstances] = useState<Instance[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load instances from localStorage:', error);
    }
    return INITIAL_INSTANCES;
  });

  // Save to localStorage whenever instances change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(instances));
    } catch (error) {
      console.error('Failed to save instances to localStorage:', error);
    }
  }, [instances]);

  // Auto-transition PROVISIONING instances to RUNNING after 3-5 seconds
  useEffect(() => {
    const provisioningInstances = instances.filter(
      (instance) => instance.status === 'PROVISIONING'
    );

    if (provisioningInstances.length === 0) return;

    const timers = provisioningInstances.map((instance) => {
      // Random delay between 3-5 seconds to simulate real provisioning
      const delay = 3000 + Math.random() * 2000;
      
      return setTimeout(() => {
        setInstances((prev) =>
          prev.map((inst) =>
            inst.id === instance.id
              ? {
                  ...inst,
                  status: 'RUNNING',
                  updatedAt: new Date().toISOString(),
                }
              : inst
          )
        );
      }, delay);
    });

    // Cleanup timers on unmount or when instances change
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [instances]);

  /**
   * Create a new instance with generated ID and timestamps.
   * Status defaults to PROVISIONING if not provided.
   */
  const createInstance = useCallback(
    (
      input: Omit<Instance, 'id' | 'status' | 'createdAt' | 'updatedAt'> & {
        status?: InstanceStatus;
      }
    ) => {
      const now = new Date().toISOString();
      const newInstance: Instance = {
        ...input,
        id: `inst-${Date.now()}`,
        status: input.status || 'PROVISIONING',
        createdAt: now,
        updatedAt: now,
      };

      setInstances((prev) => [...prev, newInstance]);
      return newInstance;
    },
    []
  );

  /**
   * Update the status of an existing instance.
   */
  const updateStatus = useCallback((id: string, status: InstanceStatus) => {
    setInstances((prev) =>
      prev.map((instance) =>
        instance.id === id
          ? {
              ...instance,
              status,
              updatedAt: new Date().toISOString(),
            }
          : instance
      )
    );
  }, []);

  /**
   * Delete an instance by ID.
   */
  const deleteInstance = useCallback((id: string) => {
    setInstances((prev) => prev.filter((instance) => instance.id !== id));
  }, []);

  /**
   * Get a single instance by ID.
   */
  const getInstance = useCallback(
    (id: string) => {
      return instances.find((instance) => instance.id === id);
    },
    [instances]
  );

  return {
    instances,
    createInstance,
    updateStatus,
    deleteInstance,
    getInstance,
  };
}
