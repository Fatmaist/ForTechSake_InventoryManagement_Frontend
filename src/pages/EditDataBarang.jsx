import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataBarangForm from "../components/DataBarangForm";
import { getDataBarangDetailById } from "../modules/fetch";

export default function EditDataBarangPage() {
  const { id_barang } = useParams();
  const [data_barang, setDataBarang] = useState(null);

  useEffect(() => {
    const fetchDataBarang = async () => {
      try {
        const response = await getDataBarangDetailById(id_barang);
        setDataBarang(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchDataBarang();
  }, [id_barang]);

  return (
    <Box>
      <DataBarangForm dataBarang={data_barang} />
    </Box>
  );
}
