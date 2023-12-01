import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { createRestock, editRestock } from "../modules/fetch"

export default function RestockForm({ restockData }) {
  const toast = useToast()

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const id_barang = parseInt(formData.get("id_barang"))
    const tanggal = formData.get("tanggal")
    const nama_barang = formData.get("nama_barang").toString()
    const jumlah = parseInt(formData.get("jumlah"))
    const status = formData.get("status").toString()

    if (restockData) {
      try {
        const id_restock = restockData.id_restock

        await editRestock(
          id_restock,
          id_barang,
          tanggal,
          nama_barang,
          jumlah,
          status
        )

        toast({
          title: "Success",
          description: "Restock edited successfully",
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
      await createRestock({
        id_barang,
        tanggal,
        nama_barang,
        jumlah,
        status,
      })

      event.target.reset()
      toast({
        title: "Success",
        description: "Restock created successfully",
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
            defaultValue={restockData?.id_barang}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Tanggal</FormLabel>
          <Input
            name="tanggal"
            type="date"
            required
            defaultValue={restockData?.tanggal}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Nama Barang</FormLabel>
          <Input name="nama_barang" required defaultValue={restockData?.nama_barang} />
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
          <Input name="status" required defaultValue={restockData?.status} />
        </FormControl>
        <Button type="submit">{restockData ? "Edit Restock" : "Create Restock"}</Button>
      </VStack>
    </form>
  )
}
