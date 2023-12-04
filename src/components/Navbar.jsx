import {
  VStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image, 
  IconButton, // Import IconButton
  useDisclosure, // Import useDisclosure
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { HamburgerIcon } from "@chakra-ui/icons" // Import HamburgerIcon
import logo from "../assets/images/logo_fts.png"

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure(); // Gunakan useDisclosure untuk mengatur keadaan terbuka/tutupnya menu

  return (
    <VStack
      h="100vh"
      w="280px"
      bg="gray.200"
      p={4}
      spacing={6}
      boxShadow="lg"
      position="fixed"
      left={0}
      top={0}
    >
      <Box>
        <IconButton
          icon={<HamburgerIcon />} // Gunakan HamburgerIcon di dalam IconButton
          aria-label="Menu"
          onClick={onToggle} // Panggil onToggle saat ikon hamburger diklik
        />
      </Box>
      <Image src={logo} alt="logo" height={'80px'} width={'200px'} /> 
      <Text fontWeight="bold" fontSize="xl">
        Inventory Management
      </Text>
      <Accordion defaultIndex={[0]} allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Link to="/">Dashboard</Link>
            </Box>
          </AccordionButton>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Data Barang
            </Box>
          </AccordionButton>
          <AccordionPanel>
            <VStack align="start" spacing={2}>
              <Link to="/data_barang">Item Data</Link>
              <Link to="/tambahdata_databarang">Tambah Data</Link>
              <Link to="/register">Register</Link>

              
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Link to="/barangmasuk">Barang Masuk</Link>
            </Box>
          </AccordionButton>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Link to="/barangkeluar">Barang Keluar</Link>
            </Box>
          </AccordionButton>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Link to="/restock">Restock Barang</Link>
            </Box>
          </AccordionButton>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Link to="/data_supplier">Data Supplier</Link>
            </Box>
          </AccordionButton>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Link to="/datapetugas">Data Petugas</Link>
            </Box>
          </AccordionButton>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Keluar
            </Box>
          </AccordionButton>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

export default Navbar;
