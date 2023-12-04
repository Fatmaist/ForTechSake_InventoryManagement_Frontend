import { Button, Box, FormControl, FormLabel, Input, useToast, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { createDataSupplier, editDataSupplier } from "../modules/fetch";

export default function DataSupplierForm({ dataSupplierData }) {
  const toast = useToast();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const id_supplier = parseInt(formData.get("id_supplier"));
    const nama_supplier = formData.get("nama_supplier").toString();
    const no_telepon = parseInt(formData.get("no_telepon"));
    const alamat = formData.get("alamat").toString();

    if (dataSupplierData) {
      try {
        const id_supplier = dataSupplierData.id_supplier;

        await editDataSupplier(
          id_supplier,
          nama_supplier,
          no_telepon,
          alamat
        );

        toast({
          title: "Success",
          description: "Data supplier edited successfully",
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
      await createDataSupplier({
        id_supplier,
        nama_supplier,
        no_telepon,
        alamat,
      });

      event.target.reset();
      toast({
        title: "Success",
        description: "Data supplier created successfully",
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
            <FormLabel>ID Supplier</FormLabel>
            <Input
              name="id_supplier"
              type="number"
              required
              defaultValue={dataSupplierData?.id_supplier}
              isReadOnly={dataSupplierData?.id_supplier !== undefined}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Nama Supplier</FormLabel>
            <Input
              name="nama_supplier"
              required
              defaultValue={dataSupplierData?.nama_supplier}
            />
          </FormControl>
          <FormControl>
            <FormLabel>No Telepon</FormLabel>
            <Input
              name="no_telepon"
              type="number"
              required
              defaultValue={dataSupplierData?.no_telepon}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Alamat</FormLabel>
            <Input
              name="alamat"
              required
              defaultValue={dataSupplierData?.alamat}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" ml="auto">
            {dataSupplierData ? "Edit Data Supplier" : "Create Data Supplier"}
          </Button>
        </VStack>
      </form>
    </Box>
  );
}