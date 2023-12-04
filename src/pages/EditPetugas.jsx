import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PetugasForm from "../components/PetugasForm"
import { getDataPetugasDetailById } from "../modules/fetch"
import Petugas from "../components/Petugas"

export default function EditPetugas() {
  const { id_petugas } = useParams()
  const [petugas, setPetugas] = useState(null)

  useEffect(() => {
    const fetchPetugas = async () => {
      try {
        const response = await getDataPetugasDetailById(id_petugas)
        setPetugas(response.Petugas)
      } catch (e) {
        console.log(e)
      }
    }
    fetchPetugas()
  }, [id_petugas])

  return (
    <Box>
      <PetugasForm PetugasData={Petugas} />
    </Box>
  )
}
