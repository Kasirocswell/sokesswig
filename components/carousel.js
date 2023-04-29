import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlavorCard from "./flavorCard";
import red from "../public/red.png";

const cardData = [
  {
    id: 1,
    img: { red },
    title: "Card 1",
    stats1: "stats",
    stats2: "stats",
    stats3: "stats",
    stats4: "stats",
    stats5: "stats",
    stats6: "stats",
    description: "This is the description for Card 1",
  },
  {
    id: 2,
    img: { red },
    title: "Card 2",
    stats1: "stats",
    stats2: "stats",
    stats3: "stats",
    stats4: "stats",
    stats5: "stats",
    stats6: "stats",
    description: "This is the description for Card 1",
  },
  {
    id: 3,
    img: { red },
    title: "Card 3",
    stats1: "stats",
    stats2: "stats",
    stats3: "stats",
    stats4: "stats",
    stats5: "stats",
    stats6: "stats",
    description: "This is the description for Card 1",
  },
  {
    id: 4,
    img: { red },
    title: "Card 4",
    stats1: "stats",
    stats2: "stats",
    stats3: "stats",
    stats4: "stats",
    stats5: "stats",
    stats6: "stats",
    description: "This is the description for Card 1",
  },
  {
    id: 5,
    img: { red },
    title: "Card 5",
    stats1: "stats",
    stats2: "stats",
    stats3: "stats",
    stats4: "stats",
    stats5: "stats",
    stats6: "stats",
    description: "This is the description for Card 1",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="pt-[5%] w-screen h-screen">
      <Slider {...settings}>
        {cardData.map((card) => (
          <FlavorCard
            key={card.id}
            image={card.img}
            title={card.title}
            stats1={card.stats1}
            stats2={card.stats2}
            stats3={card.stats3}
            stats4={card.stats4}
            stats5={card.stats5}
            stats6={card.stats6}
            description={card.description}
          ></FlavorCard>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
