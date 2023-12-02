import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BarangMasukForm from '../components/BarangMasukForm';
import { getBarangMasukDetailById } from '../modules/fetch';

const EditBarangMasuk = () => {
  const { id_masuk } = useParams();
  const [barangMasuk, setBarangMasuk] = useState(null);

  useEffect(() => {
    const fetchBarangMasuk = async () => {
      try {
        const response = await getBarangMasukDetailById(id_masuk);
        console.log('Response:', response);
        setBarangMasuk(response);
      } catch (e) {
        console.log('Error:', e);
      }
    };
    fetchBarangMasuk();
  }, [id_masuk]);

  if (!barangMasuk) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <BarangMasukForm barangMasukData={barangMasuk} />
    </Box>
  );
};

export default EditBarangMasuk;
