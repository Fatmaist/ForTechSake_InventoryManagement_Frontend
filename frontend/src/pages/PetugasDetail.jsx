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
import { deleteDataPetugas, getDataPetugasDetailById } from "../modules/fetch";

export default function PetugasDetails() {
  const [Petugas, setPetugas] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPetugas = async () => {
      try {
        const response = await getDataPetugasDetailById(id);
        setPetugas(response.Petugas);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPetugas();
  }, [id]);

  const handleDeletePetugas = async () => {
    try {
      await deletePetugas(id);
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
              src={`http://localhost:8000/${Petugas.image}`}
              alt={Petugas.title}
            />
          </Box>
          <Box ml="8">
            <Heading as="h1" size="lg">
              {Petugas.title}
            </Heading>
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">
              {Petugas.author}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">
              {Petugas.publisher}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="gray.500" mb="4">
              {Petugas.year} | {Petugas.pages} pages
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
                Are you sure you want to delete this Petugas?
              </PopoverBody>
              <Button onClick={handleDeletePetugas} colorScheme="red">
                Delete
              </Button>
            </PopoverContent>
          </Popover>
          <Link to={`/editPetugas/${id}`}>
            <Button>Edit</Button>
          </Link>
        </HStack>
      )}
    </Box>
  );
}
