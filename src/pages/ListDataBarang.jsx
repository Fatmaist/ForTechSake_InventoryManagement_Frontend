import { VStack, Table, Thead, Tbody, Tr, Th, Td, Text, Button, Menu, MenuButton, MenuList, MenuItem, HStack, Input, Box, Link } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getAllRestock, deleteRestock } from "../modules/fetch"

export default function Homepage() {
    const [data_barang, setDataBarang] = useState([])
    const [startIndex, setStartIndex] = useState(0)
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredDataBarang, setFilteredDataBarang] = useState([])

    useEffect(() => {
        const fetchDataBarang = async () => {
            const dataBarang = await getAllRestock()
            setDataBarang(dataBarang)
            setFilteredDataBarang(dataBarang)
        }
        fetchDataBarang()
    }, [])

    const handleEdit = (id_restock) => {
        console.log(`Edit item with ID: ${id_restock}`)
    }

    const handleDelete = async (id_restock) => {
        try {
            await deleteRestock(id_restock)
            const updatedDataBarang = data_barang.filter((barang) => barang.id_restock !== id_restock)
            setDataBarang(updatedDataBarang)
            setFilteredDataBarang(updatedDataBarang)
        } catch (error) {
            console.error("Error deleting item:", error)
        }
    }

    const handleContextMenu = (e, barang) => {
        e.preventDefault()
        console.log(`Right-clicked item with ID: ${barang.id_restock}`)
    }

    const onNext = () => {
        if (startIndex + 5 < filteredDataBarang.length) {
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
        const filtered = data_barang.filter(
            (barang) =>
                barang.id_barang.toString().includes(query.toLowerCase()) ||
                barang.nama_barang.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredDataBarang(filtered)
        setStartIndex(0)
    }

    const currentPage = Math.ceil((startIndex + 1) / 5)
    const totalPages = Math.ceil(filteredDataBarang.length / 5)

    return (
        <VStack w="100vw" align="center" bg="" marginTop="50px">
            <Text fontSize="xl" fontWeight="bold" marginBottom="20px">
                Restock Barang
            </Text>
            <Button colorScheme="green" size="sm" marginRight="650px">
                <Link href="/newrestock">Tambah Data</Link>
            </Button>
            <Box w="70%" display="flex" justifyContent="flex-end" alignItems="center" >
                <p style={{ marginRight: '10px', fontWeight: 'bold' }}>Search : </p>
                <Input
                    placeholder="search by id barang or nama barang"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    w="300px"
                    marginRight="20px" backgroundColor={'#DAF5FF'}
                />
            </Box>

            <Table variant="simple" w="70%" p={6} marginRight={-300}>
                <Thead>
                    <Tr align="center">
                        <Th textAlign="center">ID Barang</Th>
                        <Th textAlign="center">Nama Barang</Th>
                        <Th textAlign="center">Tanggal</Th>
                        <Th textAlign="center">Jumlah</Th>
                        <Th textAlign="center">Status</Th>
                        <Th textAlign="center">Aksi</Th>
                        <Th textAlign="center"></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredDataBarang.slice(startIndex, startIndex + 5).map((barang) => (
                        <Tr key={barang.id_restock} onContextMenu={(e) => handleContextMenu(e, barang)}>
                            <Td>{barang.id_barang}</Td>
                            <Td>{barang.nama_barang}</Td>
                            <Td>{barang.tanggal}</Td>
                            <Td>{barang.jumlah}</Td>
                            <Td>{barang.status}</Td>
                            <Td>
                                <Button colorScheme="blue" size="sm" onClick={() => handleEdit(barang.id_restock)}>
                                    <Link href="">Edit</Link>
                                </Button>
                            </Td>
                            <Td>
                                <Menu>
                                    <MenuButton as={Button} colorScheme="red" size="sm">
                                        Hapus
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem onClick={() => handleDelete(barang.id_restock)}>Hapus</MenuItem>
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
