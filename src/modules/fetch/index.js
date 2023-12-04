import { instance } from '/src/modules/axios/index';

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
    const response = await instance.post('/restock', formData)
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

// Function to create Data Barang
async function createDataBarang({
  id_barang,
  nama_barang,
  stok,
  id_kategori,
  id_supplier,
}) {
  try {
    const response = await instance.post("/data_barang", {
      id_barang,
      nama_barang,
      stok,
      id_kategori,
      id_supplier,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function to get all Data Barang
async function getAllDataBarang() {
  try {
    const response = await instance.get("/data_barang");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function to edit Data Barang
async function editDataBarang({
  id_barang,
  nama_barang,
  stok,
  id_kategori,
  id_supplier,
}) {
  try {
    const response = await instance.put(`/data_barang/${id_barang}`, {
      nama_barang,
      stok,
      id_kategori,
      id_supplier,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function to delete Data Barang
async function deleteDataBarang(id_barang) {
  try {
    const response = await instance.delete(`/data_barang/${id_barang}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function to get Data Barang detail by ID
async function getDataBarangDetailById(id_barang) {
  try {
    const response = await instance.get(`/data_barang/${id_barang}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function to get all Kategori Barang
async function getAllDataKategori() {
  try {
    const response = await instance.get("/kategori_barang");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function to get all Data Supplier
async function getAllDataSupplier() {
  try {
    const response = await instance.get("/data_supplier");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for create Data Supplier endpoint
async function createDataSupplier(formData) {
  try {
    const response = await instance.post('/data_supplier', formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for edit Data Supplier endpoint
async function editDataSupplier(id_supplier, nama_supplier, no_telepon, alamat) {
  try {
    const response = await instance.put(`/data_supplier/${id_supplier}`, { nama_supplier, no_telepon, alamat });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for delete Data Supplier endpoint
async function deleteDataSupplier(id_supplier) {
  try {
    const response = await instance.delete(`/data_supplier/${id_supplier}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for get Data Supplier detail by ID endpoint
async function getDataSupplierDetailById(id_supplier) {
  try {
    const response = await instance.get(`/data_supplier/${id_supplier}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for get all Barang Masuk endpoint
async function getAllBarangMasuk() {
  try {
    const response = await instance.get('/barangmasuk');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for edit Barang Masuk endpoint
async function editBarangMasuk(
  id_masuk,
  id_barang,
  tanggal,
  nama_barang,
  jumlah
) {
  try {
    const response = await instance.put(`/barangmasuk/${id_masuk}`, {
      id_masuk,
      id_barang,
      tanggal,
      nama_barang,
      jumlah,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for delete Barang Masuk endpoint
async function deleteBarangMasuk(id_masuk) {
  try {
    const response = await instance.delete(`/barangmasuk/${id_masuk}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for get Barang Masuk detail by ID endpoint
async function getBarangMasukDetailById(id_masuk) {
  try {
    const response = await instance.get(`/barangmasuk/${id_masuk}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for create Barang Masuk endpoint
async function createBarangMasuk(formData) {
  console.log('formData ==>', formData);
  try {
    const response = await instance.post('/barangmasuk', formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for get all Barang Masuk endpoint
async function getAllKeluar() {
  try {
    const response = await instance.get('/barangkeluar');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for delete Barang Masuk endpoint
async function deleteKeluar(id) {
  try {
    const response = await instance.delete(`/barangkeluar/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
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

export { registerUser, loginUser, createRestock, getAllRestock, editRestock, deleteRestock,getRestockDetailById,
createDataBarang,
  getAllDataBarang,
  editDataBarang,
  deleteDataBarang,
  getDataBarangDetailById,
  getAllDataKategori,
  createDataSupplier,
  getAllDataSupplier,
  editDataSupplier,
  deleteDataSupplier,
  getDataSupplierDetailById,
  createBarangMasuk,
  getAllBarangMasuk,
  editBarangMasuk,
  deleteBarangMasuk,
  getBarangMasukDetailById,
  getAllKeluar,
  deleteKeluar,
createDataPetugas,getAllDataPetugas,
  editDataPetugas, deleteDataPetugas, getDataPetugasDetailById }