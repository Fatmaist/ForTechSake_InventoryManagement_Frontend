import { Card, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Petugas({ id_petugas, nama_petugas, no_telepon, username, password }) {
  return (
    <Link to={`/datapetugas/${id_petugas}`}>
    <Card key={id_petugas} my={4} p={4} cursor='pointer'>
      <VStack>
        <Heading size={"md"}>
          {nama_petugas}
        </Heading>
        <Text>{no_telepon}</Text>
        <Text>{username}</Text>
        <Text>{password}</Text>
      </VStack>
    </Card>
    </Link>
  );
}