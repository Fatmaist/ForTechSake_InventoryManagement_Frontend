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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo_fts.png";

const Navbar = () => {
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
              Barang Masuk
            </Box>
          </AccordionButton>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Barang Keluar
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
