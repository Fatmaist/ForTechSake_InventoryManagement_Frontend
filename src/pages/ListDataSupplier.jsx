import { VStack, Table, Thead, Tbody, Tr, Th, Td, Text, Button, Menu, MenuButton, MenuList, MenuItem, HStack, Input, Box, Link } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getAllDataSupplier, deleteDataSupplier } from "../modules/fetch"

export default function ListDataSupplier() {
  const [dataSuppliers, setDataSuppliers] = useState([])
  const [startIndex, setStartIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredDataSuppliers, setFilteredDataSuppliers] = useState([])

  useEffect(() => {
    const fetchDataSuppliers = async () => {
      const dataSuppliersData = await getAllDataSupplier()
      setDataSuppliers(dataSuppliersData)
      setFilteredDataSuppliers(dataSuppliersData)
    }
    fetchDataSuppliers()
  }, [])

  const handleEdit = (id_supplier) => {
    console.log(`Edit item with ID: ${id_supplier}`)
    // Implement your edit logic here
  }

  const handleDelete = async (id_supplier) => {
    try {
      await deleteDataSupplier(id_supplier)
      const updatedDataSuppliers = dataSuppliers.filter((dataSupplier) => dataSupplier.id_supplier !== id_supplier)
      setDataSuppliers(updatedDataSuppliers)
      setFilteredDataSuppliers(updatedDataSuppliers)
    } catch (error) {
      console.error("Error deleting item:", error)
    }
  }

  const handleContextMenu = (e, dataSupplier) => {
    e.preventDefault()
    console.log(`Right-clicked item with ID: ${dataSupplier.id_supplier}`)
  }

  const onNext = () => {
    if (startIndex + 5 < filteredDataSuppliers.length) {
      setStartIndex(startIndex + 5)
    }
  }

  const onPrevious = () => {
    if (startIndex - 5 >= 0) {
      setStartIndex(startIndex - 5)
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    const filtered = dataSuppliers.filter(
      (dataSupplier) =>
        dataSupplier.id_supplier.toString().includes(query.toLowerCase()) ||
        dataSupplier.nama_supplier.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredDataSuppliers(filtered)
    setStartIndex(0)
  }

  const currentPage = Math.ceil((startIndex + 1) / 5)
  const totalPages = Math.ceil(filteredDataSuppliers.length / 5)

  return (
    <VStack w="100vw" align="center" bg="" marginTop="50px">
      <Text fontSize="xl" fontWeight="bold" marginBottom="20px">
        Data Supplier
      </Text>
      <Button colorScheme="green" size="sm" marginRight="650px">
        <Link href="/newdatasupplier">Tambah Data</Link>
      </Button>
      <Box w="70%" display="flex" justifyContent="flex-end" alignItems="center" >
        <p style={{ marginRight: '10px', fontWeight: 'bold' }}>Search : </p>
        <Input
          placeholder="search by id supplier or nama supplier"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          w="300px"
          marginRight="20px" backgroundColor={'#DAF5FF'}
        />
      </Box>

      <Table variant="simple" w="70%" p={6} marginRight={-300}>
        <Thead>
          <Tr align="center">
            <Th textAlign="center">ID Supplier</Th>
            <Th textAlign="center">Nama Supplier</Th>
            <Th textAlign="center">No Telepon</Th>
            <Th textAlign="center">Alamat</Th>
            <Th textAlign="center">Aksi</Th>
            <Th textAlign="center"></Th>
          </Tr>
        </Thead>
        <Tbody>
        {Array.isArray(filteredDataSuppliers) && filteredDataSuppliers.slice(startIndex, startIndex + 5).map((dataSupplier) => (
            <Tr key={dataSupplier.id_supplier} onContextMenu={(e) => handleContextMenu(e, dataSupplier)}>
              <Td>{dataSupplier.id_supplier}</Td>
              <Td>{dataSupplier.nama_supplier}</Td>
              <Td>{dataSupplier.no_telepon}</Td>
              <Td>{dataSupplier.alamat}</Td>
              <Td>
                {/* Add your button to navigate to the form to edit data supplier */}
                <Button colorScheme="blue" size="sm" onClick={() => handleEdit(dataSupplier.id_supplier)}>
                  <Link to={`/data_supplier/${id}`}>
                    <Button>Edit</Button>
                  </Link>
                </Button>
              </Td>
              <Td>
                <Menu>
                  <MenuButton as={Button} colorScheme="red" size="sm">
                    Hapus
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleDelete(dataSupplier.id_supplier)}>Hapus</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <HStack>
        <Button colorScheme="blue" size="sm" onClick={onPrevious}>
          Previous
        </Button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <Button colorScheme="blue" size="sm" onClick={onNext}>
          Next
        </Button>
      </HStack>
    </VStack>
  )
}
