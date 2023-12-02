import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteRestock, getRestockDetailById } from "../modules/fetch";

export default function RestockDetails() {
  const [restock, setRestock] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestock = async () => {
      try {
        const response = await getRestockDetailById(id);
        setRestock(response.restock);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchRestock();
  }, [id]);

  const handleDeleteRestock = async () => {
    try {
      await deleteRestock(id_restock);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box>
      {isLoading ? (
        <Skeleton height="300px" my="6" />
      ) : (
        <Flex my="6">
          <Box w="300px">
          </Box>
          <Box ml="8">
            <Heading as="h1" size="lg">
              {restock.id_barang}
            </Heading>
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">
              {restock.tanggal}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">
              {restock.nama_barang}
            </Text>
          </Box>
        </Flex>
      )}
      {localStorage.getItem('token') && (
        <HStack>
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="red">Delete</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>
                Are you sure you want to delete this book?
              </PopoverBody>
              <Button onClick={handleDeleteRestock} colorScheme="red">
                Delete
              </Button>
            </PopoverContent>
          </Popover>
          <Link to={`/restock/${id_barang}`}>
            <Button>Edit</Button>
          </Link>
        </HStack>
      )}
    </Box>
  );
}
