import { ref } from 'vue';
import api from '../utils/api';
import type { Service } from '../types';

export const useServices = () => {
  const services = ref<Service[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchServices = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await api.get('/api/services');
      services.value = data;
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch services';
    } finally {
      loading.value = false;
    }
  };

  const create = async (service: Partial<Service>) => {
    try {
      const { data } = await api.post('/api/admin/services', service);
      return data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to create service');
    }
  };

  const update = async (id: string, service: Partial<Service>) => {
    try {
      const { data } = await api.put(`/api/admin/services/${id}`, service);
      return data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to update service');
    }
  };

  const deleteService = async (id: string) => {
    try {
      await api.delete(`/api/admin/services/${id}`);
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to delete service');
    }
  };

  return {
    services,
    loading,
    error,
    fetchServices,
    create,
    update,
    deleteService,
  };
};
