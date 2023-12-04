import { VStack, Table, Link, Thead, Tbody, Tr, Th, Td, Text, Button, Menu, MenuButton, MenuList, MenuItem, HStack, Input, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllBarangMasuk, deleteBarangMasuk } from "../modules/fetch";

export default function ListBarangMasuk() {
  const [barangMasuks, setBarangMasuks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBarangMasuks, setFilteredBarangMasuks] = useState([]);

  useEffect(() => {
        const fetchBarangMasuks = async () => {
            const BarangMasuksData = await getAllBarangMasuk()
            setBarangMasuks(BarangMasuksData)
            setFilteredBarangMasuks(BarangMasuksData)
        }
        fetchBarangMasuks()
    }, [])

  const handleEdit = (id_masuk) => {
    console.log(`Edit item with ID: ${id_masuk}`);
  };

  const handleDelete = async (id_masuk) => {
    try {
      await deleteBarangMasuk(id_masuk);
      const updatedBarangMasuks = barangMasuks.filter(
        (barangMasuk) => barangMasuk.id_masuk !== id_masuk
      );
      setBarangMasuks(updatedBarangMasuks);
      setFilteredBarangMasuks(updatedBarangMasuks);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleContextMenu = (e, barangMasuk) => {
    e.preventDefault();
    console.log(`Right-clicked item with ID: ${barangMasuk.id_masuk}`);
  };

  const onNext = () => {
    if (startIndex + 5 < filteredBarangMasuks.length) {
      setStartIndex(startIndex + 5);
    }
  };

  const onPrevious = () => {
    if (startIndex - 5 >= 0) {
      setStartIndex(startIndex - 5);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = barangMasuks.filter(
      (barangMasuk) =>
        barangMasuk.id_barang.toString().includes(query.toLowerCase()) ||
        barangMasuk.nama_barang.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBarangMasuks(filtered);
    setStartIndex(0);
  };

  const currentPage = Math.ceil((startIndex + 1) / 5);
  const totalPages = Math.ceil(filteredBarangMasuks.length / 5);

  return (
    <VStack w="100vw" align="center" bg="" marginTop="50px">
      <Text fontSize="xl" fontWeight="bold" marginBottom="20px">
        Barang Masuk
      </Text>
      <Button colorScheme="green" size="sm" marginRight="650px">
        <Link href="/newbarangmasuk">Tambah Data</Link>
      </Button>
      <Box w="70%" display="flex" justifyContent="flex-end" alignItems="center">
        <p style={{ marginRight: "10px", fontWeight: "bold" }}>Search : </p>
        <Input
          placeholder="search by id barang or nama barang"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          w="300px"
          marginRight="20px"
          backgroundColor={"#DAF5FF"}
        />
      </Box>

      <Table variant="simple" w="70%" p={6} marginRight={-300}>
        <Thead>
          <Tr align="center">
            <Th textAlign="center">ID Masuk</Th>
            <Th textAlign="center">ID Barang</Th>
            <Th textAlign="center">Tanggal</Th>
            <Th textAlign="center">Nama Barang</Th>
            <Th textAlign="center">Jumlah</Th>
            <Th textAlign="center">Aksi</Th>
            <Th textAlign="center"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.isArray(filteredBarangMasuks) &&
            filteredBarangMasuks
              .slice(startIndex, startIndex + 5)
              .map((barangMasuk) => (
                <Tr
                  key={barangMasuk.id_masuk}
                  onContextMenu={(e) => handleContextMenu(e, barangMasuk)}
                >
                  <Td>{barangMasuk.id_masuk}</Td>
                  <Td>{barangMasuk.id_barang}</Td>
                  <Td>{barangMasuk.tanggal}</Td>
                  <Td>{barangMasuk.nama_barang}</Td>
                  <Td>{barangMasuk.jumlah}</Td>
                  <Td>
                    {/* Add your button to navigate to the form to edit data barang masuk */}
                    <Button
                      colorScheme="blue"
                      size="sm"
                      onClick={() => handleEdit(barangMasuk.id_masuk)}
                    >
                      <NavLink to={`/editbarangmasuk/${barangMasuk.id_masuk}`}>
                        Edit
                      </NavLink>
                    </Button>
                  </Td>
                  <Td>
                    <Menu>
                      <MenuButton as={Button} colorScheme="red" size="sm">
                        Hapus
                      </MenuButton>
                      <MenuList>
                        <MenuItem
                          onClick={() => handleDelete(barangMasuk.id_masuk)}
                        >
                          Hapus
                        </MenuItem>
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
  );
}
