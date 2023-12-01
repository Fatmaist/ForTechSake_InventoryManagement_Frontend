<<<<<<< HEAD
import { Card, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Restock({ id_restock, id_barang, tanggal, nama_barang, jumlah, status }) {
  return (
    <Link to={`/restock/${id_restock}`}>
    <Card key={id_barang} my={4} p={4} cursor='pointer'>
      <VStack>
        <Heading size={"md"}>
          {nama_barang}
        </Heading>
        <Text>{tanggal}</Text>
        <Text>{jumlah}</Text>
        <Text>
          <span>Status </span>
          {status}
        </Text>
      </VStack>
    </Card>
    </Link>
  );
=======
import { Card, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Restock({ id_restock, id_barang, tanggal, nama_barang, jumlah, status }) {
  return (
    <Link to={`/restock/${id_restock}`}>
    <Card key={id_barang} my={4} p={4} cursor='pointer'>
      <VStack>
        <Heading size={"md"}>
          {nama_barang}
        </Heading>
        <Text>{tanggal}</Text>
        <Text>{jumlah}</Text>
        <Text>
          <span>Status </span>
          {status}
        </Text>
      </VStack>
    </Card>
    </Link>
  );
>>>>>>> ebb58e66a60be14d34149f9c0b9c9c42dee52ad8
}