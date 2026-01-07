import axios from './axios';

export const getRequests = async () => {
  const response = await axios.get('/api/requests');
  return response.data;
};

export const createRequest = async (requestData) => {
  const response = await axios.post('/api/requests', requestData);
  return response.data;
};
