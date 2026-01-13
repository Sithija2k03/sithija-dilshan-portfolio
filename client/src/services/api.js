import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects
export const getProjects = () => api.get('/projects');
export const getFeaturedProjects = () => api.get('/projects/featured');
export const getProjectById = (id) => api.get(`/projects/${id}`);

// Skills
export const getSkills = () => api.get('/skills');

// Contact
export const submitContact = (data) => api.post('/contact', data);

export default api;