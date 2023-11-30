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

// Function for create Restock endpoint
async function createRestock(formData) {
  console.log('formData ==>', formData)
  try {
    const response = await instance.post('/restock', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    console.log('response==>', response.data)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong')
  }
}

// Function for get all Restock endpoint
async function getAllRestock() {
  try {
    const response = await instance.get('/restock')
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong')
  }
}

// Function for edit Restock endpoint
async function editRestock(id_restock, id_barang, tanggal, nama_barang, jumlah, status) {
  try {
    const response = await instance.put(`/restock/${id_restock}`, { id_barang, tanggal, nama_barang, jumlah, status })
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong')
  }
}

// Function for delete Restock endpoint
async function deleteRestock(id_restock) {
  try {
    const response = await instance.delete(`/restock/${id_restock}`)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong')
  }
}

async function getRestockDetailById(id_restock) {
  try {
    const response = await instance.get(`/restock/${id_restock}`)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong')
  }
}

export { registerUser, loginUser, createRestock, getAllRestock, editRestock, deleteRestock,getRestockDetailById }
