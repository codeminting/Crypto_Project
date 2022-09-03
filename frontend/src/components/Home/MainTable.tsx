import React, { useEffect, useState } from "react";
// Chakra UI
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
// Interface
import { CryptoData } from "../../pages/Home";

const MainTable = () => {
  // Hooks
  const [tableData, setTableData] = useState<CryptoData[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.coincap.io/v2/assets?offset=${
          offset * limit
        }&limit=${limit}`
      );
      const data = await result.json();
      console.log(data.data);
      setTableData(data.data);
    };
    fetchData();
  }, [offset]);

  return (
    <div>
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
                  <Td className="font-bold text-gray-500">{data.rank}</Td>
                  <Td className="font-bold">
                    <span className="symbol relative cursor-pointer text-gray-500 hover:text-gray-900">
                      {data.symbol}
                      <div className="card-hide absolute -top-12 left-14 bg-gray-50 text-gray-700 border rounded-md px-2 py-1">
                        <div className="text-xs font-black">{data.name}</div>
                        <div className="text-xs">
                          Market Cap: $
                          {(parseFloat(data.marketCapUsd) / 1000000000).toFixed(
                            2
                          )}{" "}
                          B
                        </div>
                        <div className="text-xs">
                          Circulating Supply: {parseInt(data.supply)}
                        </div>
                        <div className="text-xs">
                          Max Supply:{" "}
                          {data.maxSupply ? parseInt(data.maxSupply) : "N/A"}
                        </div>
                      </div>
                    </span>
                  </Td>
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
                    ${(parseFloat(data.volumeUsd24Hr) / 1000000).toFixed(2)} M
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <div className="my-5 flex justify-center items-center">
        <Button
          disabled={offset === 0}
          onClick={() => {
            setOffset(offset - 1);
          }}
        >
          Prev
        </Button>
        <div className="font-black mx-5 border px-3 rounded-md bg-gray-100 text-gray-700">
          {offset + 1}
        </div>
        <Button
          disabled={tableData.length !== 10}
          onClick={() => {
            setOffset(offset + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default MainTable;
