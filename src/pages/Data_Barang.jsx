import { useEffect, useState } from 'react';
import { Select, Button } from '@chakra-ui/react';
import axios from 'axios';

const TabelDataBarang = () => {
    const [data_barang, setDataBarang] = useState([]);
    const [kategoriOptions, setKategoriOptions] = useState([]);
    const [supplierOptions, setSupplierOptions] = useState([]);

    useEffect(() => {
        // Ganti URL dengan URL API backend Anda
        const fetchData = async () => {
            try {
                const [barangResponse, kategoriResponse, supplierResponse] = await Promise.all([
                    axios.get('http://localhost:3010/api/data_barang'),
                    axios.get('http://localhost:3010/api/kategori_barang'),
                    axios.get('http://localhost:3010/api/data_supplier'),
                ]);

                setDataBarang(barangResponse.data);
                setKategoriOptions(kategoriResponse.data);
                setSupplierOptions(supplierResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (id) => {
        // Fungsi untuk menangani edit data, Anda perlu menyesuaikan sesuai kebutuhan
        console.log(`Edit data dengan ID ${id}`);
    };

    const handleDelete = (id) => {
        // Fungsi untuk menangani hapus data, Anda perlu menyesuaikan sesuai kebutuhan
        console.log(`Hapus data dengan ID ${id}`);
    };

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>No</th>
                    <th>ID Barang</th>
                    <th>Nama Barang</th>
                    <th>Stok</th>
                    <th>ID Kategori</th>
                    <th>ID Supplier</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {data_barang.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.id_barang}</td>
                        <td>{item.nama_barang}</td>
                        <td>
                            {/* Dropdown Stok */}
                            <Select defaultValue={item.stok} onChange={(e) => console.log('Selected Stok:', e.target.value)}>
                                {/* Isi dropdown dengan pilihan stok yang sesuai */}
                                {[...Array(1000).keys()].map((option) => (
                                    <option key={option} value={option + 1}>
                                        {option + 1}
                                    </option>
                                ))}
                            </Select>
                        </td>
                        <td>
                            {/* Dropdown Kategori */}
                            <Select defaultValue={item.id_kategori} onChange={(e) => console.log('Selected Kategori:', e.target.value)}>
                                {/* Isi dropdown dengan pilihan kategori yang sesuai */}
                                {kategoriOptions.map((kategori) => (
                                    <option key={kategori.id_kategori} value={kategori.id_kategori}>
                                        {kategori.nama_kategori}
                                    </option>
                                ))}
                            </Select>
                        </td>
                        <td>
                            {/* Dropdown Supplier */}
                            <Select defaultValue={item.id_supplier} onChange={(e) => console.log('Selected Supplier:', e.target.value)}>
                                {/* Isi dropdown dengan pilihan supplier yang sesuai */}
                                {supplierOptions.map((supplier) => (
                                    <option key={supplier.id_supplier} value={supplier.id_supplier}>
                                        {supplier.nama_supplier}
                                    </option>
                                ))}
                            </Select>
                        </td>
                        <td>
                            {/* Tombol Aksi */}
                            <Button colorScheme="teal" onClick={() => handleEdit(item.id_barang)}>
                                Edit
                            </Button>
                            <Button colorScheme="red" onClick={() => handleDelete(item.id_barang)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TabelDataBarang;
