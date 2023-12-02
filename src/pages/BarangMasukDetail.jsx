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
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteBarangMasuk, getBarangMasukDetailById } from '../modules/fetch';

export default function BarangMasukDetail() {
  const [barangMasuk, setBarangMasuk] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBarangMasuk = async () => {
      try {
        const response = await getBarangMasukDetailById(id);
        setBarangMasuk(response.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBarangMasuk();
  }, [id]);

  const handleDeleteBarangMasuk = async () => {
    try {
      await deleteBarangMasuk(id);
      navigate('/barangmasuk');
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
          {/* <Box w="300px">
            <Image
              src={`http://localhost:8000/${barangmasuk.image}`}
              alt={barangmasuk.nama_barang}
            />
          </Box> */}
          <Box ml="8">
            <Heading as="h1" size="lg">
              {barangMasuk.nama_barang}
            </Heading>
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">
              ID Masuk: {barangMasuk.id_masuk}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">
              ID Barang: {barangMasuk.id_barang}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">
              Tanggal: {barangMasuk.tanggal}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="gray.500" mb="4">
              Jumlah: {barangMasuk.jumlah}
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
                Are you sure you want to delete this data barang masuk?
              </PopoverBody>
              <Button onClick={handleDeleteBarangMasuk} colorScheme="red">
                Delete
              </Button>
            </PopoverContent>
          </Popover>
          <Link to={`/editbarangmasuk/${id}`}>
            <Button>Edit</Button>
          </Link>
        </HStack>
      )}
    </Box>
  );
}
