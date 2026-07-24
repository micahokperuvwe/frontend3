import { ref } from 'vue';
import api from '../utils/api';
import type { Project } from '../types';

export const useProjects = () => {
  const projects = ref<Project[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchPublished = async (filters?: { category?: string; technology?: string; status?: string }) => {
    loading.value = true;
    error.value = null;
    try {
      const params = new URLSearchParams();
      if (filters?.category) params.append('category', filters.category);
      if (filters?.technology) params.append('technology', filters.technology);
      if (filters?.status) params.append('status', filters.status);

      const { data } = await api.get(`/api/projects?${params.toString()}`);
      projects.value = data;
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch projects';
    } finally {
      loading.value = false;
    }
  };

  const fetchBySlug = async (slug: string) => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await api.get(`/api/projects/${slug}`);
      return data;
    } catch (err: any) {
      error.value = err.message || 'Project not found';
      return null;
    } finally {
      loading.value = false;
    }
  };

  const fetchAll = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await api.get('/api/admin/projects');
      projects.value = data;
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch projects';
    } finally {
      loading.value = false;
    }
  };

  const create = async (project: Partial<Project>) => {
    try {
      const { data } = await api.post('/api/admin/projects', project);
      return data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to create project');
    }
  };

  const update = async (id: string, project: Partial<Project>) => {
    try {
      const { data } = await api.put(`/api/admin/projects/${id}`, project);
      return data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to update project');
    }
  };

  const deleteProject = async (id: string) => {
    try {
      await api.delete(`/api/admin/projects/${id}`);
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to delete project');
    }
  };

  return {
    projects,
    loading,
    error,
    fetchPublished,
    fetchBySlug,
    fetchAll,
    create,
    update,
    deleteProject,
  };
};
