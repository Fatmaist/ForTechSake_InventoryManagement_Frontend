import { VStack } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import RestockDetails from "./pages/RestockDetail"
import EditRestock from "./pages/EditRestock"
import Homepage from "./pages/Homepage"
import NewRestockPage from "./pages/NewRestock"
import Register from "./pages/Register"
// import PrivateRoute from "../src/components/PrivateRoute"
import ListRestock from "./pages/ListRestock"
import TambahData_Restock from "./pages/TambahData_Restock"

function App() {
  return (
    <VStack minH="100vh" minW="100vw">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/restock" element={<restock_barang />} /> */}
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/restock"} element={<ListRestock />} />
          <Route path={"/tambahdata_restock"} element={<TambahData_Restock />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/newrestock"} element={<NewRestockPage />} />
          <Route path={"/restock/:id"} element={<RestockDetails />} />
          <Route path={"/restock/:id_restock"} element={<EditRestock />} />
        </Routes>
      </Router>
    </VStack>
  )
}

export default App
