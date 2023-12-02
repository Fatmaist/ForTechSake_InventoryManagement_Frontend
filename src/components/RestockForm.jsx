import { Button, Box, FormControl, FormLabel, Input, useToast, VStack, Select } from "@chakra-ui/react";
import { createRestock, editRestock } from "../modules/fetch";

export default function RestockForm({ restockData }) {
  const toast = useToast();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const id_restock = parseInt(formData.get("id_restock"))
    const id_barang = parseInt(formData.get("id_barang"))
    const tanggal = formData.get("tanggal")
    const nama_barang = formData.get("nama_barang").toString();
    const jumlah = parseInt(formData.get("jumlah"));
    const status = formData.get("status").toString();

    if (restockData) {
      try {
        const id_restock = restockData.id_restock;

        await editRestock(
          restockData.id_restock,
          id_barang,
          tanggal,
          nama_barang,
          jumlah,
          status
        );

        toast({
          title: "Success",
          description: "Restock Data edited successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: error.response?.data.message || "Something went wrong",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
      return;
    }

    try {
      await createRestock({
          id_barang,
          tanggal,
          nama_barang,
          jumlah,
          status
      });

      event.target.reset();
      toast({
        title: "Success",
        description: "Restock Data created successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data.message || "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="6"
      width="800px"
      maxW="900%"  
      margin="20%" 
      mt="100px"  
    >
      <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="start" w="800%" maxW="750px">
          <FormControl>
            <FormLabel>ID Barang</FormLabel>
            <Input
              name="id_barang"
              type="number"
              required
              defaultValue={restockData?.Id_barang}
              isReadOnly={restockData?.id_barang !== undefined}
            />
          </FormControl>
          <FormControl>
            <FormLabel>tanggal</FormLabel>
            <Input
              name="tanggal"
              type="date"
              required
              defaultValue={restockData?.tanggal}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Nama Barang</FormLabel>
            <Input
              name="nama_barang"
              required
              defaultValue={restockData?.nama_barang}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Jumlah</FormLabel>
            <Input
              name="jumlah"
              type="number"
              required
              defaultValue={restockData?.jumlah}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Status</FormLabel>
            <Select
              name="status"
              defaultValue={restockData?.status || ""}
              required
            >
              <option value="Pengajuan">Pengajuan</option>
              <option value="Diproses">Diproses</option>
              <option value="Selesai">Selesai</option>
              <option value="Dibatalkan">Dibatalkan</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue" ml="auto">
            {restockData ? "Edit Data Restock" : "Create Data Restock"}
          </Button>
        </VStack>
      </form>
    </Box>
  );
}