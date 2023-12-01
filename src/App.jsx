import { VStack } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RestockDetails from "./pages/RestockDetail";
import EditRestock from "./pages/EditRestock";
import Homepage from "./pages/Homepage";
import NewRestockPage from "./pages/NewRestock";
import Register from "./pages/Register";
// import PrivateRoute from "../src/components/PrivateRoute"
import ListRestock from "./pages/ListRestock";
import TambahData_Restock from "./pages/TambahData_Restock";
import BarangMasukDetails from "./pages/BarangMasukDetail";
import EditBarangMasuk from "./pages/EditBarangMasuk";
import NewBarangMasukPage from "./pages/NewBarangMasuk";
import ListBarangMasuk from "./pages/ListBarangMasuk";
import TambahData_BarangMasuk from "./pages/TambahData_BarangMasuk";

function App() {
  return (
    <VStack minH="100vh" minW="100vw">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/restock" element={<restock_barang />} /> */}
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/restock"} element={<ListRestock />} />
          <Route
            path={"/tambahdata_restock"}
            element={<TambahData_Restock />}
          />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/newrestock"} element={<NewRestockPage />} />
          <Route path={"/restock/:id"} element={<RestockDetails />} />
          <Route path={"/restock/:id_restock"} element={<EditRestock />} />
          <Route path={"/barangmasuk"} element={<ListBarangMasuk />} />
          <Route
            path={"/tambahdata_barangmasuk"}
            element={<TambahData_BarangMasuk />}
          />
          <Route path={"/newbarangmasuk"} element={<NewBarangMasukPage />} />
          <Route path={"/barangmasuk/:id"} element={<BarangMasukDetails />} />
          <Route
            path={"/barangmasuk/:id_masuk"}
            element={<EditBarangMasuk />}
          />
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;
