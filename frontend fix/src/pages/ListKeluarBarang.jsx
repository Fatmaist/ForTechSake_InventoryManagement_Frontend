import { VStack, Table, Thead, Tbody, Tr, Th, Td, Text, Button, Menu, MenuButton, MenuList, MenuItem, HStack, Input, Box, Link } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getAllKeluar, deleteKeluar } from "../modules/fetch"

export default function Homepage() {
    const [restocks, setRestocks] = useState([])
    const [startIndex, setStartIndex] = useState(0)
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredKeluar, setFilteredKeluar] = useState([])

    useEffect(() => {
        const fetchKeluar = async () => {
            const keluarData = await getAllKeluar()
            setkeluar(keluarData)
            setFilteredkeluar(keluarData)
        }
        fetchKeluar()
    }, [])

    const handleEdit = (id_keluar) => {
        console.log(`Edit item with ID: ${id_keluar}`)
    }

    const handleDelete = async (id_keluar) => {
        try {
            await deleteKeluar(id_restock)
            const updatedKeluar = Keluar.filter((keluar) => Keluar.id_keluar !== id_keluar)
            setRestocks(updatedKeluar)
            setFilteredKeluar(updatedKeluar)
        } catch (error) {
            console.error("Error deleting item:", error)
        }
    }

    const handleContextMenu = (e, keluar) => {
        e.preventDefault()
        console.log(`Right-clicked item with ID: ${keluar.id_keluar}`)
    }

    const onNext = () => {
        if (startIndex + 5 < filteredkeluar.length) {
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
        const filtered = keluar.filter(
            (keluar) =>
                keluar.id_barang.toString().includes(query.toLowerCase()) ||
                keluar.nama_barang.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredKeluar(filtered)
        setStartIndex(0)
    }

    const currentPage = Math.ceil((startIndex + 1) / 5)
    const totalPages = Math.ceil(filteredKeluar.length / 5)

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
                        <Th textAlign="center">Tempat <Distributor></Distributor></Th>
                        <Th textAlign="center">Aksi</Th>
                        <Th textAlign="center"></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredKeluar.slice(startIndex, startIndex + 5).map((keluar) => (
                        <Tr key={keluar.id_keluar} onContextMenu={(e) => handleContextMenu(e, keluar)}>
                            <Td>{keluar.id_barang}</Td>
                            <Td>{keluar.nama_barang}</Td>
                            <Td>{keluar.tanggal}</Td>
                            <Td>{keluar.jumlah}</Td>
                            <Td>{keluar.tempat_distributor}</Td>
                            <Td>
                                <Button colorScheme="blue" size="sm" onClick={() => handleEdit(keluar.id_keluar)}>
                                    <Link href="">Edit</Link>
                                </Button>
                            </Td>
                            <Td>
                                <Menu>
                                    <MenuButton as={Button} colorScheme="red" size="sm">
                                        Hapus
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem onClick={() => handleDelete(keluar.id_keluar)}>Hapus</MenuItem>
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
