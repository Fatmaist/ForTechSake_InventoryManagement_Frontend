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
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Link to="/restock">Restock Data</Link>
            </Box>
          </AccordionButton>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Data Supplier
            </Box>
          </AccordionButton>
        </AccordionItem>
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
  )
}

export default Navbar