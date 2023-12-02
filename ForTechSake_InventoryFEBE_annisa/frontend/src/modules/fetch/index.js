import { instance } from '../axios/index'

// Function for register user endpoint
async function registerUser(name, email, password) {
  try {
    const response = await instance.post('/register', { name, email, password })
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong')
  }
}

// Function for login user endpoint
async function loginUser(email, password) {
  try {
    const response = await instance.post('/login', { email, password })
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong')
  }
}

// Function for create Data Petugas endpoint
async function createDataPetugas(formData) {
  try {
    const response = await instance.post('/datapetugas', formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for get all Data Petugas endpoint
async function getAllDataPetugas() {
  try {
    const response = await instance.get('/datapetugas');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for edit Data Petugas endpoint
async function editDataPetugas(nama_petugas, no_telepon, username, password) {
  try {
    const response = await instance.put(`/datapetugas/${id_petugas}`, {nama_petugas, no_telepon, username });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for delete Data Petugas endpoint
async function deleteDataPetugas(id_petugas) {
  try {
    const response = await instance.delete(`/datapetugas/${id_petugas}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for get Data Petugas detail by ID endpoint
async function getDataPetugasDetailById(id_petugas) {
  try {
    const response = await instance.get(`/datapetugas/${id_petugas}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}


export { registerUser, loginUser, createDataPetugas,getAllDataPetugas,
  editDataPetugas, deleteDataPetugas, getDataPetugasDetailById }
