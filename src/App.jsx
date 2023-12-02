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
        </Routes>
      </Router>
    </VStack>
  )
}

export default App
