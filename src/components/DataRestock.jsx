import { Card, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function DataRestock({ restocks }) {
  return (
    <>
      {restocks.map((restock, index) => (
        <Link key={index} to={`/restock/${restock.id_restock}`}>
          <Card my={4} p={4} cursor='pointer'>
            <VStack>
              <Heading size={"md"}>
                {restock.id_barang}
              </Heading>
              <Heading size={"md"}>
                {restock.nama_barang}
              </Heading>
              <Text>{restock.tanggal}</Text>
              <Text>{restock.jumlah}</Text>
              <Text>
                <span>Status </span>
                {restock.status}
              </Text>
            </VStack>
          </Card>
        </Link>
      ))}
    </>
  );
}
