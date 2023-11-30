import { instance } from "../axios/index";

// Function for create Data Barang endpoint
async function createDataBarang(
  id_barang,
  nama_barang,
  stok,
  id_kategori,
  id_supplier
) {
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

// Function for get all Data Barang endpoint
async function getAllDataBarang() {
  try {
    const response = await instance.get("/data_barang");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for edit Data Barang endpoint
async function editDataBarang(
  id_barang,
  nama_barang,
  stok,
  id_kategori,
  id_supplier
) {
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

// Function for delete Data Barang endpoint
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

export {
  createDataBarang,
  getAllDataBarang,
  editDataBarang,
  deleteDataBarang,
  getDataBarangDetailById,
};
