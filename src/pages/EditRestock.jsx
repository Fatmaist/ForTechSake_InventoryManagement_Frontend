import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RestockForm from "../components/RestockForm"
import { getRestockDetailById } from "../modules/fetch"
import Restock from "../components/Restock"

export default function EditRestockPage() {
  const { id } = useParams()
  const [restock, setRestock] = useState(null)

  useEffect(() => {
    const fetchRestock = async () => {
      try {
        const response = await getRestockDetailById(id)
        setRestock(response.restock)
      } catch (e) {
        console.log(e)
      }
    }
    fetchRestock()
  }, [id])

  return (
    <Box>
      <RestockForm restockData={Restock} />
    </Box>
  )
}
