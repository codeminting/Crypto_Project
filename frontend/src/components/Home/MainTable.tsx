import React, { useEffect, useState } from "react";
// Chakra UI
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
// Interface
import { CryptoData } from "../../pages/Home";

const MainTable = () => {
  // Hooks
  const [tableData, setTableData] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://api.coincap.io/v2/assets?limit=10");
      const data = await result.json();
      setTableData(data.data);
    };
    fetchData();
  }, []);

  return (
    <TableContainer className="border rounded-lg">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Symbol</Th>
            <Th>Price ($USD)</Th>
            <Th>% Change Last 24H</Th>
            <Th>Last 24H Vol ($USD)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData &&
            tableData.map((data: CryptoData) => (
              <Tr key={data.id}>
                <Td className="font-extrabold text-gray-600">{data.rank}</Td>
                <Td className="font-bold">{data.symbol}</Td>
                <Td className="font-semibold text-gray-700">
                  {parseFloat(data.priceUsd).toFixed(2)}
                </Td>
                <Td
                  className={`font-semibold ${
                    parseFloat(data.changePercent24Hr) > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {parseFloat(data.changePercent24Hr).toFixed(4)}
                </Td>
                <Td className="font-semibold">
                  {parseFloat(data.volumeUsd24Hr).toFixed(2)}
                </Td>
              </Tr>
            ))}
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
