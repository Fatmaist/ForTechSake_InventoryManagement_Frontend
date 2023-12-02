import { useEffect, useState } from "react";
import axios from "axios";

const TabelBarangMasuk = () => {
  const [barangMasuk, setBarangMasuk] = useState([]);

  useEffect(() => {
    // Fungsi untuk mengambil data dari API backend (ganti URL dengan URL API Anda)
    const fetchData = async () => {
      try {
        const response = await axios.get("localhost:3000/barangmasuk");
        setBarangMasuk(response.data);
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
          <th>ID Masuk</th>
          <th>ID Barang</th>
          <th>Tanggal</th>
          <th>Barang</th>
          <th>Jumlah</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {barangMasuk.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.id_masuk}</td>
            <td>{item.id_barang}</td>
            <td>{item.tanggal}</td>
            <td>{item.nama_barang}</td>
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
