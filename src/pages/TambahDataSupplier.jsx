import { VStack, Button, Input, Box, Link } from "@chakra-ui/react";
import { useState } from "react";
import { createDataSupplier } from "../modules/fetch";

export default function TambahDataSupplier() {
  const [formData, setFormData] = useState({
    id_supplier: "",
    nama_supplier: "",
    no_telepon: "",
    alamat: "",
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
      await createDataSupplier(formData);

      // Clear the form after successful submission
      setFormData({
        id_supplier: "",
        nama_supplier: "",
        no_telepon: "",
        alamat: "",
      });

      // Optionally, you can navigate to another page after submission
      // Example: window.location.href = "/data_suppliers";
    } catch (error) {
      console.error("Error creating data supplier:", error);
    }
  };

  return (
    <VStack w="100vw" align="center" bg="" marginTop="50px">
      <Button colorScheme="green" size="sm" marginRight="650px">
        <Link to="/tambahdata_supplier">Tambah Data</Link>
      </Button>
      <Box w="70%">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} p={6}>
            <Input
              name="id_supplier"
              type="number"
              placeholder="ID Supplier"
              value={formData.id_supplier}
              onChange={handleChange}
            />
            <Input
              name="nama_supplier"
              type="text"
              placeholder="Nama Supplier"
              value={formData.nama_supplier}
              onChange={handleChange}
            />
            <Input
              name="no_telepon"
              type="text"
              placeholder="Nomor Telepon"
              value={formData.no_telepon}
              onChange={handleChange}
            />
            <Input
              name="alamat"
              type="text"
              placeholder="Alamat"
              value={formData.alamat}
              onChange={handleChange}
            />
            <Button type="submit" colorScheme="blue" size="sm">
              Tambah Data Supplier
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
}
