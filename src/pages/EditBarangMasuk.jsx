import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BarangMasukForm from "../components/BarangMasukForm";
import { getBarangMasukDetailById } from "../modules/fetch";
import BarangMasuk from "../components/BarangMasuk";

export default function EditBarangMasukPage() {
  const { id } = useParams();
  const [barangmasuk, setBarangMasuk] = useState(null);

  useEffect(() => {
    const fetchBarangMasuk = async () => {
      try {
        const response = await getBarangMasukDetailById(id);
        setBarangMasuk(response.barangmasuk);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBarangMasuk();
  }, [id]);

  return (
    <Box>
      <BarangMasukForm BarangMasukData={BarangMasuk} />
    </Box>
  );
}
