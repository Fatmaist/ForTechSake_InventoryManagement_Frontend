import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
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
import { deleteDataBarang, getDataBarangDetailById } from "../modules/fetch";

export default function DataBarangDetails() {
  const [data_barang, setDataBarang] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataBarang = async () => {
      try {
        const response = await getDataBarangDetailById(id);
        setDataBarang(response.data_barang);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchDataBarang();
  }, [id]);

  const handleDeleteDataBarang = async () => {
    try {
      await deleteDataBarang(id);
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
            <Image
              src={`http://localhost:8000/${data_barang.image}`}
              alt={data_barang.nama_barang}
            />
          </Box>
          <Box ml="8">
            
            <Heading as="h1" size="lg">
              {data_barang.nama_barang}
            </Heading>
            
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">
              {data_barang.stok}
            </Text>
            
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">
              {data_barang.id_kategori}
            </Text>
            
            <Text fontSize="xl" fontWeight="semibold" color="gray.500" mb="4">
              {data_barang.id_supplier}
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
                Are you sure you want to delete this data barang?
              </PopoverBody>
              <Button onClick={handleDeleteDataBarang} colorScheme="red">
                Delete
              </Button>
            </PopoverContent>
          </Popover>
          <Link to={`/EditDataBarang/${id}`}>
            <Button>Edit</Button>
          </Link>
        </HStack>
      )}
    </Box>
  );
}
