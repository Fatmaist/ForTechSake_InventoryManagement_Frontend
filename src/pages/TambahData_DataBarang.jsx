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
    Select, // Tambahkan Select dari Chakra UI untuk dropdown
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import { getAllDataBarang, deleteDataBarang } from "../modules/fetch";
  
  export default function TambahData_DataBarang() {
    const [data_barang, setDataBarang] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredDataBarang, setFilteredDataBarang] = useState([]);
    // State baru untuk dropdown
    const [stockOptions] = useState(Array.from({ length: 1000 }, (_, i) => i + 1));
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [supplierOptions, setSupplierOptions] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const dataBarangData = await getAllDataBarang();
          setDataBarang(dataBarangData);
          setFilteredDataBarang(dataBarangData);
        } catch (error) {
          console.error('Error fetching data barang:', error.message);
        }
      };
  
      const fetchDropdownOptions = async () => {
        try {
          // Ambil opsi kategori dan pemasok 
          const categoryOptionsResponse = await fetchCategoryOptions();
          setCategoryOptions(categoryOptionsResponse);
  
          const supplierOptionsResponse = await fetchSupplierOptions();
          setSupplierOptions(supplierOptionsResponse);
        } catch (error) {
          console.error('Error fetching dropdown options:', error);
        }
      };
  
      fetchData();
      fetchDropdownOptions();
    }, []);
  
    const fetchCategoryOptions = async () => {
      // Ganti URL sesuai dengan endpoint yang benar di backend Anda
      const response = await fetch('http://localhost:3010/api/kategori_barang');
      const data = await response.json();
  
      // Sesuaikan format data kategori sesuai kebutuhan
      return data.map(category => ({
        id: category.id_kategori,
        name: category.nama_kategori,
      }));
    };
  
    const fetchSupplierOptions = async () => {
      // Ganti URL sesuai dengan endpoint yang benar di backend Anda
      const response = await fetch('http://localhost:3010/api/data_supplier');
      const data = await response.json();
  
      // Sesuaikan format data supplier sesuai kebutuhan
      return data.map(supplier => ({
        id: supplier.id_supplier,
        name: supplier.nama_supplier,
      }));
    };
  
    const handleEdit = (id_barang) => {
      console.log(`Edit item with ID: ${id_barang}`);
    };
  
    const handleDelete = async (id_barang) => {
      try {
        await deleteDataBarang(id_barang);
        const updatedDataBarang = data_barang.filter((dataBarang) => dataBarang.id_barang !== id_barang);
        setDataBarang(updatedDataBarang);
        setFilteredDataBarang(updatedDataBarang);
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    };
  
    const handleContextMenu = (e, dataBarang) => {
      e.preventDefault();
      console.log(`Right-clicked item with ID: ${dataBarang.id_barang}`);
    };
  
    const onNext = () => {
      if (startIndex + 5 < filteredDataBarang.length) {
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
      const filtered = data_barang.filter(
        (dataBarang) =>
          dataBarang.id_barang.toString().includes(query.toLowerCase()) ||
          dataBarang.nama_barang.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredDataBarang(filtered);
      setStartIndex(0);
    };
  
    const currentPage = Math.ceil((startIndex + 1) / 5);
    const totalPages = Math.ceil(filteredDataBarang.length / 5);
  
    return (
      <VStack w="100vw" align="center" bg="" marginTop="50px">
        <Button colorScheme="green" size="sm" marginRight="650px">
          <Link to="/tambahdata_databarang">Tambah Data</Link>
        </Button>
        <Box w="70%" display="flex" justifyContent="flex-end" alignItems="center">
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
              <Th textAlign="center">Aksi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredDataBarang.slice(startIndex, startIndex + 5).map((dataBarang) => (
              <Tr key={dataBarang.id_barang} onContextMenu={(e) => handleContextMenu(e, dataBarang)}>
                <Td>{dataBarang.id_barang}</Td>
                <Td>{dataBarang.nama_barang}</Td>
                <Td>
                  {/* Menggunakan Select untuk dropdown stok */}
                  <Select value={dataBarang.stok} onChange={(e) => handleStokChange(e, dataBarang.id_barang)}>
                    {stockOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </Td>
                <Td>
                  {/* Menggunakan Select untuk dropdown kategori */}
                  <Select value={dataBarang.id_kategori} onChange={(e) => handleKategoriChange(e, dataBarang.id_barang)}>
                    {categoryOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </Select>
                </Td>
                <Td>
                  {/* Menggunakan Select untuk dropdown pemasok */}
                  <Select value={dataBarang.id_supplier} onChange={(e) => handleSupplierChange(e, dataBarang.id_barang)}>
                    {supplierOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </Select>
                </Td>
                <Td>
                  <Button colorScheme="blue" size="sm" onClick={() => handleEdit(dataBarang.id_barang)}>
                    Edit
                  </Button>
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
    );
  }
  