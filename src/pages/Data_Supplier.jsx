import { useEffect, useState } from 'react';
import axios from 'axios';

const DataTableSupplier = () => {
    const [dataSupplier, setDataSupplier] = useState([]);

    useEffect(() => {
        // Fungsi untuk mengambil data dari API backend
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/data_supplier');
                setDataSupplier(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    console.log(fetchData)
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>No</th>
                    <th>ID Supplier</th>
                    <th>Nama Supplier</th>
                    <th>No Telepon</th>
                    <th>Alamat</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {dataSupplier.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.id_supplier}</td>
                        <td>{item.nama_supplier}</td>
                        <td>{item.no_telepon}</td>
                        <td>{item.alamat}</td>
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
}

export default DataTableSupplier;
