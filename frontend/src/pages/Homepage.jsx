import { VStack, HStack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getAllDataPetugas } from "../modules/fetch"

export default function Homepage() {
  const [restockBarangCount, setrestockBarangCount] = useState(0)
  // const [barangMasukCount, setBarangMasukCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const restocks = await getAllDataPetugas()

        const uniqueIdRestocks = new Set(restocks.map(restock => restock.id_restock))
        const restockBarangCount = uniqueIdRestocks.size
        setrestockBarangCount(restockBarangCount)

        // const barangMasukCount = restocks.reduce(
        //   (acc, restock) => acc + (restock.barang_masuk ? restock.barang_masuk.length : 0),
        //   0
        // )
        // setBarangMasukCount(barangMasukCount)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <><VStack width="100%" bg="gray.200" p="4" mb="4">
        <Text fontSize="30px" fontWeight="bold">
          For Tech's Sake Inventory Management System
        </Text>
        <Text fontSize="md">Hello, </Text>
      </VStack>
    <VStack spacing="16" align="center" height="100vh" justifyContent="center">
        <HStack spacing="20">
          <VStack bg="green.100" p="4" borderRadius="md" width="320px" height="280px" display="flex" justifyContent="center" alignItems="center">
            <Text fontSize="xl" fontWeight="bold" textAlign="center">Total Banyak Jenis Data Barang</Text>
            <Text fontSize="100px" fontWeight="bold">{restockBarangCount}</Text>
          </VStack>
          <VStack bg="blue.100" p="4" borderRadius="md" width="320px" height="280px" display="flex" justifyContent="center" alignItems="center">
            <Text fontSize="xl" fontWeight="bold" textAlign="center">Total Permintaan Barang Masuk</Text>
            <Text fontSize="100px" fontWeight="bold">{restockBarangCount}</Text>
          </VStack>
        </HStack>
        <HStack spacing="20">
          <VStack bg="red.100" p="4" borderRadius="md" width="320px" height="280px" display="flex" justifyContent="center" alignItems="center">
            <Text fontSize="xl" fontWeight="bold" textAlign="center">Total Permintaan Barang Keluar</Text>
            <Text fontSize="100px" fontWeight="bold">{restockBarangCount}</Text>
          </VStack>
          <VStack bg="orange.100" p="4" borderRadius="md" width="320px" height="280px" display="flex" justifyContent="center" alignItems="center">
            <Text fontSize="xl" fontWeight="bold" textAlign="center">Total Permintaan Restock Barang</Text>
            <Text fontSize="100px" fontWeight="bold">{restockBarangCount}</Text>
          </VStack>
        </HStack>
      </VStack></>

  )
}
