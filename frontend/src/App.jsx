import { VStack } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import PetugasDetail from "./pages/PetugasDetail"
import EditPetugas from "./pages/EditPetugas"
import Homepage from "./pages/Homepage"
import NewPetugas from "./pages/NewPetugas"
import Register from "./pages/Register"
// import PrivateRoute from "../src/components/PrivateRoute"
import ListPetugas from "./pages/ListPetugas"
import TambahData_Restock from "./pages/TambahData_Restock"
import DataPetugas from "./pages/DataPetugas"


function App() {
  return (
    <VStack minH="100vh" minW="100vw">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/restock" element={<restock_barang />} /> */}
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/datapetugas"} element={<ListPetugas />} />
          <Route path={"/tambahdata_petugas"} element={<TambahData_Restock />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/newpetugas"} element={<NewPetugas />} />
          <Route path={"/petugas/:id_petugas"} element={<PetugasDetail />} />
          <Route path={"/petugas/:id_petugas"} element={<EditPetugas />} />

        </Routes>
      </Router>
    </VStack>
  )
}

export default App
