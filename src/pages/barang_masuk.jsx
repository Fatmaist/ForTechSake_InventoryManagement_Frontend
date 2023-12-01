import { useEffect, useState } from "react";
import axios from "axios";

const TabelBarangMasuk = () => {
  const [dataBarangMasuk, setDataBarangMasuk] = useState([]);

  useEffect(() => {
    // Fungsi untuk mengambil data dari API backend (ganti URL dengan URL API Anda)
    const fetchData = async () => {
      try {
        const response = await axios.get("localhost:3000/barangmasuk");
        setDataBarangMasuk(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>No</th>
          <th>Tanggal</th>
          <th>Barang</th>
          <th>Kategori</th>
          <th>Jumlah</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataBarangMasuk.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.tanggal}</td>
            <td>{item.barang}</td>
            <td>{item.kategori}</td>
            <td>{item.jumlah}</td>
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

export default TabelBarangMasuk;
