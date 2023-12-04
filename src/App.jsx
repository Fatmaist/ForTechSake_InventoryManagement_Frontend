import { VStack } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
// import RestockDetails from "./pages/RestockDetail"
import EditRestock from "./pages/EditRestock"
import Homepage from "./pages/Homepage"
import NewRestockPage from "./pages/NewRestock"
import Register from "./pages/Register"
import ListRestock from "./pages/ListRestock"
import TambahData_Restock from "./pages/TambahData_Restock"
import Login from "./pages/login"
import DataBarangDetail from "./pages/DataBarangDetail"
import EditDataBarang from "./pages/EditDataBarang"
import NewDataBarang from "./pages/NewDataBarang"
//import Register from "./pages/Register"  
// import PrivateRoute from "../src/components/PrivateRoute"
import ListDataBarang from "./pages/ListDataBarang"
import TambahData_DataBarang from "./pages/TambahData_DataBarang"

import DataSupplierDetail from "./pages/DataSupplierDetail"
import EditDataSupplier from "./pages/EditDataSupplier"
import NewDataSupplierPage from "./pages/NewDataSupplier"
import ListDataSupplier from "./pages/ListDataSupplier"
import TambahDataSupplier from "./pages/TambahDataSupplier"

import BarangMasukDetails from "./pages/BarangMasukDetail";
import EditBarangMasuk from "./pages/EditBarangMasuk";
import NewBarangMasukPage from "./pages/NewBarangMasuk";
import ListBarangMasuk from "./pages/ListBarangMasuk";
import TambahData_BarangMasuk from "./pages/TambahData_BarangMasuk";

import ListBarangKeluar from "./pages/ListKeluarBarang";

import PetugasDetail from "./pages/PetugasDetail"
import EditPetugas from "./pages/EditPetugas"
import NewPetugas from "./pages/NewPetugas"
import ListPetugas from "./pages/ListPetugas"
import DataPetugas from "./pages/DataPetugas"

function App() {
  const isLoginRoute = window.location.pathname === '/login';

  return (
    <VStack minH="100vh" minW="100vw">
      <Router>
        {!isLoginRoute && <Navbar />}
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/restock"} element={<ListRestock />} />
          <Route path={"/tambahdata_restock"} element={<TambahData_Restock />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/newrestock"} element={<NewRestockPage />} />
          {/* <Route path={"/restock/:id"} element={<RestockDetails />} /> */}
          <Route path={"/restock/:id_restock"} element={<EditRestock />} />
          {/* Jika user mencoba mengakses halaman yang tidak ada, arahkan kembali ke halaman utama */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/data_barang" element={<ListDataBarang />} />
          <Route path="/tambahdata_databarang" element={<TambahData_DataBarang />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newdatabarang" element={<NewDataBarang />} />
          <Route path="/data_barang/:id" element={<DataBarangDetail />} />
          <Route path="/editdatabarang/:id_barang" element={<EditDataBarang />} />

          <Route path={"/data_supplier"} element={<ListDataSupplier />} />
          <Route path={"/tambahdata_supplier"} element={<TambahDataSupplier />} />
          <Route path={"/newdatasupplier"} element={<NewDataSupplierPage />} />
          <Route path={"/data_supplier/:id"} element={<DataSupplierDetail />} />
          <Route path={"/editdatasupplier/:id_supplier"} element={<EditDataSupplier />} />

          <Route path={"/barangmasuk"} element={<ListBarangMasuk />} />
          <Route
            path={"/tambahdata_barangmasuk"}
            element={<TambahData_BarangMasuk />}
          />
          <Route path={"/newbarangmasuk"} element={<NewBarangMasukPage />} />
          <Route path={"/barangmasuk/:id"} element={<BarangMasukDetails />} />
          <Route
            path={"/editbarangmasuk/:id_masuk"}
            element={<EditBarangMasuk />}
          />
          <Route path={"/barangkeluar"} element={<ListBarangKeluar />} />

          <Route path={"/datapetugas"} element={<ListPetugas />} />
          <Route path={"/tambahdata_petugas"} element={<TambahData_Restock />} />
          <Route path={"/newpetugas"} element={<NewPetugas />} />
          <Route path={"/petugas/:id_petugas"} element={<PetugasDetail />} />
          <Route path={"/petugas/:id_petugas"} element={<EditPetugas />} />
        </Routes>
      </Router>
    </VStack>
  )
}

export default App
