import { Card, Heading, VStack, Text, Select, Link } from "@chakra-ui/react";
import { useState } from "react";

export default function DataBarang({ id_barang, nama_barang, stok, kategori, supplier }) {
  const [selectedStok, setSelectedStok] = useState(stok);

  const handleStokChange = (event) => {
    setSelectedStok(event.target.value);
  };

  return (
    <Link to={`/data_barang/${id_barang}`}>
      <Card key={id_barang} my={4} p={4} cursor='pointer'>
        <VStack>
          <Heading size={"md"}>
            {nama_barang}
          </Heading>
          <Text>{`Stok: ${selectedStok}`}</Text>
          <Select value={selectedStok} onChange={handleStokChange}>
            {[...Array(1000).keys()].map((number) => (
              <option key={number} value={number + 1}>
                {number + 1}
              </option>
            ))}
          </Select>
          <Text>{`Kategori: ${kategori ? kategori.nama_kategori : "Nama Kategori"}`}</Text>
          <Text>{`Supplier: ${supplier ? supplier.nama_supplier : "Nama Supplier"}`}</Text>
        </VStack>
      </Card>
    </Link>
  );
}
