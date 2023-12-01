import {
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Input,
  Box,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllBarangMasuk, deleteBarangMasuk } from "../modules/fetch";

export default function Homepage() {
  const [barangmasuk, setBarangMasuk] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBarangMasuk, setFilteredBarangMasuk] = useState([]);

  useEffect(() => {
    const fetchBarangMasuk = async () => {
      const barangmasukData = await getAllBarangMasuk();
      setBarangMasuk(barangmasukData);
      setFilteredBarangMasuk(barangmasukData);
    };
    fetchBarangMasuk();
  }, []);

  const handleEdit = (id_masuk) => {
    console.log(`Edit item with ID: ${id_masuk}`);
  };

  const handleDelete = async (id_masuk) => {
    try {
      await deleteBarangMasuk(id_masuk);
      const updatedBarangMasuk = barangmasuk.filter(
        (barangmasuk) => barangmasuk.id_masuk !== id_masuk
      );
      setBarangMasuk(updatedBarangMasuk);
      setFilteredBarangMasuk(updatedBarangMasuk);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleContextMenu = (e, barangmasuk) => {
    e.preventDefault();
    console.log(`Right-clicked item with ID: ${barangmasuk.id_masuk}`);
  };

  const onNext = () => {
    if (startIndex + 5 < filteredBarangMasuk.length) {
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
    const filtered = barangmasuk.filter(
      (barangmasuk) =>
        barangmasuk.id_barang.toString().includes(query.toLowerCase()) ||
        barangmasuk.nama_barang.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBarangMasuk(filtered);
    setStartIndex(0);
  };

  const currentPage = Math.ceil((startIndex + 1) / 5);
  const totalPages = Math.ceil(filteredBarangMasuk.length / 5);

  return (
    <VStack w="100vw" align="center" bg="" marginTop="50px">
      <Button colorScheme="green" size="sm" marginRight="650px">
        <Link to="/tambahdata_barangmasuk">Tambah Data</Link>
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
            <Th textAlign="center">ID Barang</Th>
            <Th textAlign="center">Nama Barang</Th>
            <Th textAlign="center">Tanggal</Th>{" "}
          </Tr>
        </Thead>
        <Tbody>
          {filteredBarangMasuk
            .slice(startIndex, startIndex + 5)
            .map((barangmasuk) => (
              <Tr
                key={barangmasuk.id_masuk}
                onContextMenu={(e) => handleContextMenu(e, barangmasuk)}
              >
                <Td>{barangmasuk.id_barang}</Td>
                <Td>{barangmasuk.nama_barang}</Td>
                <Td>{barangmasuk.tanggal}</Td>
                <Td>{barangmasuk.jumlah}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    onClick={() => handleEdit(barangmasuk.id_masuk)}
                  >
                    Edit
                  </Button>
                </Td>
                <Td>
                  <Menu>
                    <MenuButton as={Button} colorScheme="red" size="sm">
                      Hapus
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        onClick={() => handleDelete(barangmasuk.id_masuk)}
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
        <Button colorScheme="blue" size="sm" onClick={onNext}>
          Next
        </Button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
      </HStack>
    </VStack>
  );
}
