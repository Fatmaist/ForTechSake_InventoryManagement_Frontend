import { VStack, Button, Input, Box, Link } from "@chakra-ui/react";
import { useState } from "react";
import { createBarangMasuk } from "../modules/fetch";

export default function TambahDataBarangMasuk() {
  const [formData, setFormData] = useState({
    id_masuk: "",
    id_barang: "",
    tanggal: "",
    nama_barang: "",
    jumlah: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createBarangMasuk(formData);

      // Clear the form after successful submission
      setFormData({
        id_masuk: "",
        id_barang: "",
        tanggal: "",
        nama_barang: "",
        jumlah: "",
      });

      // Optionally, you can navigate to another page after submission
      // Example: window.location.href = "/barangmasuk";
    } catch (error) {
      console.error("Error creating data barang masuk:", error);
    }
  };

  return (
    <VStack w="100vw" align="center" bg="" marginTop="50px">
      <Button colorScheme="green" size="sm" marginRight="650px">
        <Link to="/tambahdata_barangmasuk">Tambah Data</Link>
      </Button>
      <Box w="70%">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} p={6}>
            <Input
              name="id_masuk"
              type="number"
              placeholder="ID Masuk"
              value={formData.id_masuk}
              onChange={handleChange}
            />
            <Input
              name="id_barang"
              type="number"
              placeholder="ID Barang"
              value={formData.id_barang}
              onChange={handleChange}
            />
            <Input
              name="tanggal"
              type="text"
              placeholder="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
            />
            <Input
              name="nama_barang"
              type="text"
              placeholder="Nama Barang"
              value={formData.nama_barang}
              onChange={handleChange}
            />
            <Input
              name="jumlah"
              type="text"
              placeholder="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
            />
            <Button type="submit" colorScheme="blue" size="sm">
              Tambah Data Barang Masuk
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
}
