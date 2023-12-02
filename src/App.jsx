import { VStack } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import DataBarangDetail from "./pages/DataBarangDetail"
import EditDataBarang from "./pages/EditDataBarang"
import Homepage from "./pages/Homepage"
import NewDataBarang from "./pages/NewDataBarang"
//import Register from "./pages/Register"  
// import PrivateRoute from "../src/components/PrivateRoute"
import ListDataBarang from "./pages/ListDataBarang"
import TambahData_DataBarang from "./pages/TambahData_DataBarang"

function App() {
  return (
    <VStack minH="100vh" minW="100vw">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/data_barang" element={<ListDataBarang />} />
          <Route path="/tambahdata_databarang" element={<TambahData_DataBarang />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newdatabarang" element={<NewDataBarang />} />
          <Route path="/data_barang/:id" element={<DataBarangDetail />} />
          <Route path="/editdatabarang/:id_barang" element={<EditDataBarang />} />
        </Routes>
      </Router>
    </VStack>
  )
}

export default App
