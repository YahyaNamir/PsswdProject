import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Update with your backend URL

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
