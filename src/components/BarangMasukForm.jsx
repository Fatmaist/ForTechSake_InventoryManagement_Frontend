import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { createBarangMasuk, editBarangMasuk } from "../modules/fetch";

export default function BarangMasukForm({ barangmasukData }) {
  const toast = useToast();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const id_barang = parseInt(formData.get("id_barang"));
    const tanggal = formData.get("tanggal");
    const nama_barang = formData.get("nama_barang").toString();
    const jumlah = parseInt(formData.get("jumlah"));

    if (barangmasukData) {
      try {
        const id_masuk = barangmasukData.id_masuk;

        await editBarangMasuk(
          id_masuk,
          id_barang,
          tanggal,
          nama_barang,
          jumlah
        );

        toast({
          title: "Success",
          description: "Data barang masuk edited successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: error.response.data.message || "Something went wrong",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
      return;
    }

    try {
      await createBarangMasuk({
        id_barang,
        tanggal,
        nama_barang,
        jumlah,
      });

      event.target.reset();
      toast({
        title: "Success",
        description: "Data barang masuk created successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data.message || "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>ID Barang</FormLabel>
          <Input
            name="id_barang"
            type="number"
            required
            defaultValue={barangmasukData?.id_barang}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Tanggal</FormLabel>
          <Input
            name="tanggal"
            type="date"
            required
            defaultValue={barangmasukData?.tanggal}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Nama Barang</FormLabel>
          <Input
            name="nama_barang"
            required
            defaultValue={barangmasukData?.nama_barang}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Jumlah</FormLabel>
          <Input
            name="jumlah"
            type="number"
            required
            defaultValue={barangmasukData?.jumlah}
          />
        </FormControl>
        <Button type="submit">
          {barangmasukData ? "Edit Barang Masuk" : "Create Data Barang Masuk"}
        </Button>
      </VStack>
    </form>
  );
}
