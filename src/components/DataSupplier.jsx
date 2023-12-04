import { Card, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function DataSupplier({ id_supplier, nama_supplier, no_telepon, alamat }) {
  return (
    <Link to={`/data_supplier/${id_supplier}`}>
      <Card key={id_supplier} my={4} p={4} cursor='pointer'>
        <VStack>
          <Heading size={"md"}>
            {nama_supplier}
          </Heading>
          <Text>{no_telepon}</Text>
          <Text>{alamat}</Text>
        </VStack>
      </Card>
    </Link>
  );
}
