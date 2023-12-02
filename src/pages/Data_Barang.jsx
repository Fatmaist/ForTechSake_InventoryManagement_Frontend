import { useEffect, useState } from 'react';
import axios from 'axios';

const TabelDataBarang = () => {
    const [data_barang, setDataBarang] = useState([]);

    useEffect(() => {
        // Ganti URL dengan URL API backend Anda
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3010/api/data_barang');
                setDataBarang(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
                        <td>{item.stok}</td>
                        <td>{item.id_kategori}</td>
                        <td>{item.id_supplier}</td>
                        <td>
                            {/* Tambahkan tombol aksi sesuai kebutuhan */}
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TabelDataBarang;
