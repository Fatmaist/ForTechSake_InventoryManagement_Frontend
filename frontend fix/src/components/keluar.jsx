import { Card, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Keluar({ id_keluar, id_barang, tanggal, nama_barang, jumlah, tempat_distributor }) {
  return (
    <Link to={`/keluar/${id_keluar}`}>
    <Card key={id_barang} my={4} p={4} cursor='pointer'>
      <VStack>
        <Heading size={"md"}>
          {nama_barang}
        </Heading>
        <Text>{tanggal}</Text>
        <Text>{jumlah}</Text>
        <Text>
          <span>tempat_distributor </span>
          {tempat_distributor}
        </Text>
      </VStack>
    </Card>
    </Link>
  );
}