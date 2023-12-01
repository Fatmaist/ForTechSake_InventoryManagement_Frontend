import { Card, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function DataBarang({ id_barang, nama_barang, stok, id_kategori, id_supplier }) {
  return (
    <Link to={`/data_barang/${id_barang}`}>
      <Card key={id_barang} my={4} p={4} cursor='pointer'>
        <VStack>
          <Heading size={"md"}>
            {nama_barang}
          </Heading>
          <Text>{`Stok: ${stok}`}</Text>
          <Text>{`Kategori: ${id_kategori}`}</Text>
          <Text>{`Supplier: ${id_supplier}`}</Text>
        </VStack>
      </Card>
    </Link>
  );
}
