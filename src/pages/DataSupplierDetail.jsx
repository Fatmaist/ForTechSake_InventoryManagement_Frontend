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
  import { deleteDataSupplier, getDataSupplierDetailById } from "../modules/fetch";
  
  export default function DataSupplierDetail() {
    const [dataSupplier, setDataSupplier] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchDataSupplier = async () => {
        try {
          const response = await getDataSupplierDetailById(id);
          setDataSupplier(response.data);
          setLoading(false);
        } catch (e) {
          console.log(e);
        }
      };
      fetchDataSupplier();
    }, [id]);
  
    const handleDeleteDataSupplier = async () => {
      try {
        await deleteDataSupplier(id);
        navigate("/data_supplier");
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
                src={`http://localhost:8000/${dataSupplier.image}`}
                alt={dataSupplier.nama_supplier}
              />
            </Box> */}
            <Box ml="8">
              <Heading as="h1" size="lg">
                {dataSupplier.nama_supplier}
              </Heading>
              <Text fontSize="xl" fontWeight="semibold" color="gray.500">
                ID Supplier: {dataSupplier.id_supplier}
              </Text>
              <Text fontSize="xl" fontWeight="semibold" color="gray.500">
                No Telepon: {dataSupplier.no_telepon}
              </Text>
              <Text fontSize="xl" fontWeight="semibold" color="gray.500" mb="4">
                Alamat: {dataSupplier.alamat}
              </Text>
            </Box>
          </Flex>
        )}
        {/* Tambahkan tombol aksi sesuai kebutuhan */}
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
                  Are you sure you want to delete this data supplier?
                </PopoverBody>
                <Button onClick={handleDeleteDataSupplier} colorScheme="red">
                  Delete
                </Button>
              </PopoverContent>
            </Popover>
            <Link to={`/editdatasupplier/${id}`}>
              <Button>Edit</Button>
            </Link>
          </HStack>
        )}
      </Box>
    );
  }
  