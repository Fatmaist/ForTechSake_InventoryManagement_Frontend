import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { createDataPetugas, editDataPetugas } from "../modules/fetch"

export default function PetugasForm({ PetugasData }) {
  const toast = useToast()

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target);
    const nama_petugas = formData.get("nama_petugas").toString()
    const no_telepon = parseInt(formData.get("no_telepon"))
    const username = formData.get("username").toString()
    const password = formData.get("password").toString()

    if (PetugasData) {
      try {
        const id_petugas = PetugasData.id_petugas

        await editDataPetugas(
          petugas.id_petugas,
          nama_petugas,
          no_telepon,
          username,
          password
        )

        toast({
          title: "Success",
          description: "Petugas edited successfully",
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
      await createDataPetugas({
          nama_petugas,
          no_telepon,
          username,
          password
      })

      event.target.reset()
      toast({
        title: "Success",
        description: "Petugas created successfully",
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
          <FormLabel>Nama Petugas</FormLabel>
          <Input name="nama_petugas" required defaultValue={PetugasData?.nama_petugas} />
        </FormControl>
        <FormControl>
          <FormLabel>No Telepon</FormLabel>
          <Input
            name="no_telepon"
            type="number"
            required
            defaultValue={PetugasData?.no_telepon}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input name="username" required defaultValue={PetugasData?.username} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input name="password" required defaultValue={PetugasData?.username} />
        </FormControl>
        <Button type="submit">{PetugasData ? "Edit Petugas" : "Create Petugas"}</Button>
      </VStack>
    </form>
  )
}
