import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataSupplierForm from "../components/DataSupplierForm";
import { getDataSupplierDetailById } from "../modules/fetch";
import DataSupplier from "../components/DataSupplier";

export default function EditDataSupplier() {
  const { id } = useParams();
  const [dataSupplier, setDataSupplier] = useState(null);

  useEffect(() => {
    const fetchDataSupplier = async () => {
      try {
        const response = await getDataSupplierDetailById(id);
        setDataSupplier(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchDataSupplier();
  }, [id]);

  return (
    <Box>
      <DataSupplierForm dataSupplierData={DataSupplier} />
    </Box>
  );
}
