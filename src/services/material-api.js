import axios from 'axios';

axios.defaults.baseURL = 'https://6468873360c8cb9a2cabac53.mockapi.io';

export const addMaterial = async values => {
    const response = await axios.post('/materials', values);
    return response.data;
};

export const getMaterials = async () => {
    const respones = await axios.get('/materials');
    return respones.data;
};

export const deleteMaterial = async id => {
    const respones = await axios.delete(`/materials/${id}`);
    return respones.data;
};

export const updateMaterial = async (fields) => {
    const respones = await axios.put(`/materials/${fields.id}`, fields);
    return respones.data;
};