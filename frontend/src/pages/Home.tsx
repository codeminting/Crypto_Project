import React, { ReactElement, useEffect, useState } from "react";
// Import carousel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// Components
import CarouselCard from "../components/Home/CarouselCard";

// Interface
export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  priceUsd: string;
  volumeUsd24Hr: string;
  marketCapUsd: string;
  supply: string;
  maxSupply: string;
  explorer: string;
}

const Home = () => {
  // Hooks
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://api.coincap.io/v2/assets");
      const data = await result.json();
      setCryptoData(data.data.slice(0, 10));
    };
    fetchData();
  }, []);

  // Carousel responsive settings
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 },
  };

  // Function to render carousel cards
  const renderCard = () => {
    let cards: ReactElement[] = [];
    cryptoData.forEach((data: CryptoData) => {
      cards.push(
        <CarouselCard data={data} />
      );
    });
    return cards;
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="w-[80%]">
        <AliceCarousel
          mouseTracking
          items={renderCard()}
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls={true}
        />
      </div>
    </div>
  );
};

export default Home;
