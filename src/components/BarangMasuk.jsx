import { Card, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function BarangMasuk({
  id_masuk,
  id_barang,
  tanggal,
  nama_barang,
  jumlah,
}) {
  return (
    <Link to={`/barangmasuk/${id_masuk}`}>
      <Card key={id_barang} my={4} p={4} cursor="pointer">
        <VStack>
          <Heading size={"md"}>{nama_barang}</Heading>
          <Text>{tanggal}</Text>
          <Text>{jumlah}</Text>
        </VStack>
      </Card>
    </Link>
  );
}
