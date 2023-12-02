import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestockForm from "../components/RestockForm";
import { getRestockDetailById } from "../modules/fetch";

export default function EditRestock() {
  const { id_restock } = useParams();
  const [dataRestock, setDataRestock] = useState(null);

  useEffect(() => {
    const fetchDataRestock = async () => {
      try {
        if (id_restock) {
          const response = await getRestockDetailById(id_restock);
          setDataRestock(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchDataRestock();
  }, [id_restock]);

  return (
    <Box>
      <RestockForm restockData={dataRestock} />
    </Box>
  );
}
