import { VStack } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import KeluarDetails from "./pages/KeluarDetail"
import EditKeluar from "./pages/EditKeluar"
import Homepage from "./pages/Homepage"
import NewRestockPage from "./pages/NewKeluar"
import Register from "./pages/Register"
// import PrivateRoute from "../src/components/PrivateRoute"
import ListKeluar from "./pages/ListKeluar"
import TambahData_Keluar from "./pages/TambahData_Keluar"

function App() {
  return (
    <VStack minH="100vh" minW="100vw">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/restock" element={<keluar_barang />} /> */}
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/keluar"} element={<ListKeluar />} />
          <Route path={"/tambahdata_keluar"} element={<TambahData_Keluar />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/newkeluar"} element={<NewRestockPage />} />
          <Route path={"/keluar/:id"} element={<KeluarDetails />} />
          <Route path={"/keluar/:id_keluar"} element={<EditKeluar/>} />
        </Routes>
      </Router>
    </VStack>
  )
}

export default App
