import React from "react";
// Interface
import { CryptoData } from "../../pages/Home";
// Chakra UI
import {
  Divider,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
// Icons
import { FiExternalLink } from "react-icons/fi";

interface Props {
  data: CryptoData;
}

const CarouselCard = ({ data }: Props) => {
  return (
    <div
      key={data.id}
      className="h-60 mx-2 border-2 py-2 px-3 border-gray-200 rounded-lg"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-gray-600">{data.name}</div>
          <div className="text-sm font-semibold text-gray-500">
            {data.symbol}
          </div>
        </div>
        <div className="text-3xl font-bold text-gray-800">
          <div>${parseFloat(data.priceUsd).toFixed(2)}</div>
        </div>
      </div>
      <Divider className="my-2" />
      <div className="flex items-center">
        <div className="flex flex-col mr-5">
          <div className="text-gray-600 font-bold">
            <span className="text-gray-500 font-semibold">Supply:</span>{" "}
            {parseInt(data.supply)}
          </div>
          <div className="text-gray-600 font-bold">
            <span className="text-gray-500 font-semibold">Max Supply:</span>{" "}
            {data.maxSupply ? parseInt(data.maxSupply) : "N/A"}
          </div>
        </div>
        {data.maxSupply && (
          <CircularProgress
            value={(parseInt(data.supply) / parseInt(data.maxSupply)) * 100}
            color="green.400"
            size="2.5rem"
          >
            <CircularProgressLabel>
              {Math.round(
                (parseInt(data.supply) / parseInt(data.maxSupply)) * 100
              )}
              %
            </CircularProgressLabel>
          </CircularProgress>
        )}
      </div>
      <Divider className="my-2" />
      <div>
        <div className="text-gray-600 font-bold">
          <span className="text-gray-500 font-semibold">Market Cap: </span>$
          {(parseFloat(data.marketCapUsd) / 1000000000).toFixed(2)} B
        </div>
        <div className="text-gray-600 font-bold">
          <span className="text-gray-500 font-semibold">Last 24H Vol: </span>$
          {(parseFloat(data.volumeUsd24Hr) / 1000000000).toFixed(2)} B
        </div>
      </div>
      <Divider className="my-2" />
      <div className="flex justify-end">
        <a href={data.explorer} target="_blank" rel="noreferrer" className="flex items-center font-medium text-gray-500 hover:text-gray-600">
          <FiExternalLink className="mr-2" />
          Explorer
        </a>
      </div>
    </div>
  );
};

export default CarouselCard;
