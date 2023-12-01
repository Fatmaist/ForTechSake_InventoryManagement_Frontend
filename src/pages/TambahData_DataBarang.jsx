import { VStack, Table, Thead, Tbody, Tr, Th, Td, Button, Menu, MenuButton, MenuList, MenuItem, HStack, Input, Box, Link } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getAllDataBarang, deleteDataBarang } from "../modules/fetch"

export default function TambahData_DataBarang() {
    const [dataBarangs, setDataBarangs] = useState([])
    const [startIndex, setStartIndex] = useState(0)
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredDataBarangs, setFilteredDataBarangs] = useState([])

    useEffect(() => {
        const fetchDataBarangs = async () => {
            const dataBarangsData = await getAllDataBarang()
            setDataBarangs(dataBarangsData)
            setFilteredDataBarangs(dataBarangsData)
        }
        fetchDataBarangs()
    }, [])

    const handleEdit = (id_barang) => {
        console.log(`Edit item with ID: ${id_barang}`)
    }

    const handleDelete = async (id_barang) => {
        try {
            await deleteDataBarang(id_barang)
            const updatedDataBarangs = dataBarangs.filter((dataBarang) => dataBarang.id_barang !== id_barang)
            setDataBarangs(updatedDataBarangs)
            setFilteredDataBarangs(updatedDataBarangs)
        } catch (error) {
            console.error("Error deleting item:", error)
        }
    }

    const handleContextMenu = (e, dataBarang) => {
        e.preventDefault()
        console.log(`Right-clicked item with ID: ${dataBarang.id_barang}`)
    }

    const onNext = () => {
        if (startIndex + 5 < filteredDataBarangs.length) {
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
        const filtered = dataBarangs.filter(
            (dataBarang) =>
                dataBarang.id_barang.toString().includes(query.toLowerCase()) ||
                dataBarang.nama_barang.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredDataBarangs(filtered)
        setStartIndex(0)
    }

    const currentPage = Math.ceil((startIndex + 1) / 5)
    const totalPages = Math.ceil(filteredDataBarangs.length / 5)

    return (
        <VStack w="100vw" align="center" bg="" marginTop="50px">
            <Button colorScheme="green" size="sm" marginRight="650px">
                <Link to="/tambahdata_databarang">Tambah Data</Link>
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
                        <Th textAlign="center">Stok</Th>
                        <Th textAlign="center">ID Kategori</Th>
                        <Th textAlign="center">ID Supplier</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredDataBarangs.slice(startIndex, startIndex + 5).map((dataBarang) => (
                        <Tr key={dataBarang.id_barang} onContextMenu={(e) => handleContextMenu(e, dataBarang)}>
                            <Td>{dataBarang.id_barang}</Td>
                            <Td>{dataBarang.nama_barang}</Td>
                            <Td>{dataBarang.stok}</Td>
                            <Td>{dataBarang.id_kategori}</Td>
                            <Td>{dataBarang.id_supplier}</Td>
                            <Td>
                                <Button colorScheme="blue" size="sm" onClick={() => handleEdit(dataBarang.id_barang)}>
                                    Edit
                                </Button>
                            </Td>
                            <Td>
                                <Menu>
                                    <MenuButton as={Button} colorScheme="red" size="sm">
                                        Hapus
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem onClick={() => handleDelete(dataBarang.id_barang)}>Hapus</MenuItem>
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
                <Button colorScheme="blue" size="sm" onClick={onNext}>
                    Next
                </Button>
                <div>
                    Page {currentPage} of {totalPages}
                </div>
            </HStack>
        </VStack>
    )
}
