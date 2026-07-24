import { ref } from 'vue';
import api from '../utils/api';
import type { Skill } from '../types';

export const useSkills = () => {
  const skills = ref<Skill[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchSkills = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await api.get('/api/skills');
      skills.value = data;
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch skills';
    } finally {
      loading.value = false;
    }
  };

  const create = async (skill: Partial<Skill>) => {
    try {
      const { data } = await api.post('/api/admin/skills', skill);
      return data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to create skill');
    }
  };

  const update = async (id: string, skill: Partial<Skill>) => {
    try {
      const { data } = await api.put(`/api/admin/skills/${id}`, skill);
      return data;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to update skill');
    }
  };

  const deleteSkill = async (id: string) => {
    try {
      await api.delete(`/api/admin/skills/${id}`);
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to delete skill');
    }
  };

  return {
    skills,
    loading,
    error,
    fetchSkills,
    create,
    update,
    deleteSkill,
  };
};
