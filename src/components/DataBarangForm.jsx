import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { createDataBarang, editDataBarang } from "../modules/fetch"

export default function DataBarangForm({ data_barang }) {
  const toast = useToast()

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const id_barang = parseInt(formData.get("id_barang"))
    const nama_barang = formData.get("nama_barang").toString()
    const stok = parseInt(formData.get("stok"))
    const id_kategori = parseInt(formData.get("id_kategori"))
    const id_supplier = parseInt(formData.get("id_supplier"))

    if (data_barang) {
      try {
        await editDataBarang(
          id_barang,
          nama_barang,
          stok,
          id_kategori,
          id_supplier
        )

        toast({
          title: "Success",
          description: "Data Barang edited successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
      } catch (error) {
        toast({
          title: "Error",
          description: error.response.data.message || "Something went wrong",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      }
      return
    }

    try {
      await createDataBarang({
        id_barang,
        nama_barang,
        stok,
        id_kategori,
        id_supplier,
      })

      event.target.reset()
      toast({
        title: "Success",
        description: "Data Barang created successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data.message || "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
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
            defaultValue={data_barang?.id_barang}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Nama Barang</FormLabel>
          <Input
            name="nama_barang"
            type="text"
            required
            defaultValue={data_barang?.nama_barang}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Stok</FormLabel>
          <Input
            name="stok"
            type="number"
            required
            defaultValue={data_barang?.stok}
          />
        </FormControl>
        <FormControl>
          <FormLabel>ID Kategori</FormLabel>
          <Input
            name="id_kategori"
            type="number"
            required
            defaultValue={data_barang?.id_kategori}
          />
        </FormControl>
        <FormControl>
          <FormLabel>ID Supplier</FormLabel>
          <Input
            name="id_supplier"
            type="number"
            required
            defaultValue={data_barang?.id_supplier}
          />
        </FormControl>
        <Button type="submit">
          {data_barang ? "Edit Data Barang" : "Create Data Barang"}
        </Button>
      </VStack>
    </form>
  )
}
