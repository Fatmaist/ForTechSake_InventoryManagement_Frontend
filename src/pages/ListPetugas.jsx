import { VStack, Table, Thead, Tbody, Tr, Th, Td, Text, Button, Menu, MenuButton, MenuList, MenuItem, HStack, Input, Box, Link } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getAllDataPetugas, deleteDataPetugas } from "../modules/fetch"

export default function Homepage() {
    const [petugass, setpetugass] = useState([])
    const [startIndex, setStartIndex] = useState(0)
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredpetugass, setFilteredpetugass] = useState([])

    useEffect(() => {
        const fetchpetugass = async () => {
            const petugassData = await getAllDataPetugas()
            setpetugass(petugassData)
            setFilteredpetugass(petugassData)
        }
        fetchpetugass()
    }, [])

    const handleEdit = (id_petugas) => {
        console.log(`Edit item with ID: ${id_petugas}`)
    }

    const handleDelete = async (id_petugas) => {
        try {
            await deleteDataPetugas(id_petugas)
            const updatedpetugass = petugass.filter((petugas) => petugas.id_petugas !== id_petugas)
            setpetugass(updatedpetugass)
            setFilteredpetugass(updatedpetugass)
        } catch (error) {
            console.error("Error deleting item:", error)
        }
    }

    const handleContextMenu = (e, petugas) => {
        e.preventDefault()
        console.log(`Right-clicked item with ID: ${petugas.id_petugas}`)
    }

    const onNext = () => {
        if (startIndex + 5 < filteredpetugass.length) {
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
        const filtered = petugass.filter(
            (petugas) =>
                petugas.id_petugas.toString().includes(query.toLowerCase()) ||
                petugas.nama_petugas.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredpetugass(filtered)
        setStartIndex(0)
    }

    const currentPage = Math.ceil((startIndex + 1) / 5)
    const totalPages = Math.ceil(filteredpetugass.length / 5)

    return (
        <VStack w="100vw" align="center" bg="" marginTop="50px">
            <Text fontSize="xl" fontWeight="bold" marginBottom="20px">
                Data Petugas
            </Text>
            <Button colorScheme="green" size="sm" marginRight="650px">
                <Link href="/newpetugas">Tambah Data</Link>
            </Button>
            <Box w="70%" display="flex" justifyContent="flex-end" alignItems="center" >
                <p style={{ marginRight: '10px', fontWeight: 'bold' }}>Search : </p>
                <Input
                    placeholder="search by id petugas or nama petugas"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    w="300px"
                    marginRight="20px" backgroundColor={'#DAF5FF'}
                />
            </Box>

            <Table variant="simple" w="70%" p={6} marginRight={-300}>
                <Thead>
                    <Tr align="center">
                        <Th textAlign="center">ID Petugas</Th>
                        <Th textAlign="center">Nama Petugas</Th>
                        <Th textAlign="center">No Telepon</Th>
                        <Th textAlign="center">Username</Th>
                        <Th textAlign="center">Password</Th>
                        <Th textAlign="center">Aksi</Th>
                        <Th textAlign="center"></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredpetugass.slice(startIndex, startIndex + 5).map((petugas) => (
                        <Tr key={petugas.id_petugas} onContextMenu={(e) => handleContextMenu(e, petugas)}>
                            <Td>{petugas.id_petugas}</Td>
                            <Td>{petugas.nama_petugas}</Td>
                            <Td>{petugas.no_telepon}</Td>
                            <Td>{petugas.username}</Td>
                            <Td>{petugas.password}</Td>
                            <Td>
                                <Button colorScheme="blue" size="sm" onClick={() => handleEdit(petugas.id_petugas)}>
                                    <Link href="">Edit</Link>
                                </Button>
                            </Td>
                            <Td>
                                <Menu>
                                    <MenuButton as={Button} colorScheme="red" size="sm">
                                        Hapus
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem onClick={() => handleDelete(petugas.id_petugas)}>Hapus</MenuItem>
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
