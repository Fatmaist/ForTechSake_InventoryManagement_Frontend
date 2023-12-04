import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { Box } from '@chakra-ui/layout';
import { createBarangMasuk, editBarangMasuk } from '../modules/fetch';
import { useNavigate } from 'react-router-dom';

export default function BarangMasukForm({ barangMasukData }) {
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('barangMasukData:', barangMasukData);
    console.log('barangMasukData length:', barangMasukData?.length);
  }, [barangMasukData]);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const id_masuk = parseInt(formData.get('id_masuk'));
    const id_barang = parseInt(formData.get('id_barang'));
    const tanggal = formData.get('tanggal');
    const nama_barang = formData.get('nama_barang').toString();
    const jumlah = parseInt(formData.get('jumlah'));

    try {
      if (barangMasukData && barangMasukData.length > 0) {
        // Editing existing data
        const id_masuk = barangMasukData[0].id_masuk;

        await editBarangMasuk(
          id_masuk,
          id_barang,
          tanggal,
          nama_barang,
          jumlah
        );

        toast({
          title: 'Success',
          description: 'Data barang masuk edited successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        // Creating new data
        await createBarangMasuk({
          id_masuk,
          id_barang,
          tanggal,
          nama_barang,
          jumlah,
        });

        event.target.reset();
        toast({
          title: 'Success',
          description: 'Data barang masuk created successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }

      navigate('/barangmasuk');
    } catch (error) {
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="6"
      width="800px"
      maxW="900%"
      margin="20%"
      mt="100px"
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="start" w="800%" maxW="750px">
          <FormControl>
            <FormLabel>ID Masuk</FormLabel>
            <Input
              name="id_masuk"
              type="number"
              required
              defaultValue={
                barangMasukData && barangMasukData.length > 0
                  ? barangMasukData[0].id_masuk
                  : ''
              }
              isReadOnly={
                barangMasukData?.length > 0 &&
                barangMasukData[0].id_masuk !== undefined
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>ID Barang</FormLabel>
            <Input
              name="id_barang"
              type="number"
              required
              defaultValue={
                barangMasukData?.length > 0 ? barangMasukData[0].id_barang : ''
              }
              isReadOnly={
                barangMasukData?.length > 0 &&
                barangMasukData[0].id_barang !== undefined
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Tanggal</FormLabel>
            <Input
              name="tanggal"
              type="date"
              required
              defaultValue={
                barangMasukData?.length > 0 ? barangMasukData[0].tanggal : ''
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Nama Barang</FormLabel>
            <Input
              name="nama_barang"
              required
              defaultValue={
                barangMasukData?.length > 0
                  ? barangMasukData[0].nama_barang
                  : ''
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Jumlah</FormLabel>
            <Input
              name="jumlah"
              type="number"
              required
              defaultValue={
                barangMasukData?.length > 0 ? barangMasukData[0].jumlah : ''
              }
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" ml="auto">
            {barangMasukData
              ? 'Edit Data Barang Masuk'
              : 'Create Data Barang Masuk'}
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
