import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlavorCard from "./flavorCard";
import red from "../public/red.png";
import green from "../public/green.png";
import pink from "../public/pink.png";
import orange from "../public/orange.png";
import yellow from "../public/yellow.png";
import { useState, useEffect } from "react";

const cardData = [
  {
    id: 1,
    img: red,
    title: "Peanut Punch",
    stats1: "Peanut Butter",
    stats2: "Non Diary Milk",
    stats3: "Agave",
    stats4: "Vitamin E",
    stats5: "Magnesium",
    stats6: "Iron",
    description:
      "Peanut Punch is a healthy and delicious fruit drink with peanut butter, non-dairy milk, and agave. It's rich in nutrients like vitamin E, magnesium, and iron, making it an ideal choice for health-conscious individuals. Enjoy it as a quick breakfast or snack on the go.",
  },
  {
    id: 2,
    img: green,
    title: "Strango",
    stats1: "Strawberry",
    stats2: "Mango",
    stats3: "Agave",
    stats4: "Vitamin C",
    stats5: "High Fiber",
    stats6: "Anti Depressant",
    description:
      "Strango is a delicious and nutritious fruit drink with fresh strawberries, ripe mangoes, and agave. It's high in fiber and vitamin C, making it a great breakfast or mid-day snack. The combination of strawberries and mangoes provides anti-depressant properties, promoting a happy and energized mood. Enjoy Strango to start your day or for a quick pick-me-up in the afternoon.",
  },
  {
    id: 3,
    img: pink,
    title: "Strawnaza",
    stats1: "Strawberry",
    stats2: "Banana",
    stats3: "Agave",
    stats4: "Potassium",
    stats5: "Vitamin B6",
    stats6: "Reduces Risk Heart Disease",
    description:
      "Try Strawnaza, a healthy and delicious fruit drink with fresh strawberries, ripe bananas, and natural agave. It's rich in potassium and vitamin B6, reducing the risk of heart disease and supporting healthy bodily functions. Enjoy the sweet and creamy taste as a quick breakfast or mid-day snack. Fuel your day with Strawnaza, the refreshing and nutritious drink!",
  },
  {
    id: 4,
    img: orange,
    title: "Tapple",
    stats1: "Tamarind",
    stats2: "Apple",
    stats3: "Agave",
    stats4: "Good for Arthritis",
    stats5: "Immune Support",
    stats6: "Vitamin C",
    description:
      "Tapple is a flavorful and unique fruit drink with tamarind, apple, and agave. It's rich in calcium and magnesium, supporting healthy bones and bodily functions. Enjoy the sweet and sour taste as a refreshing drink on a hot day or a quick energy boost. Tapple is loaded with antioxidants, reducing the risk of chronic diseases. Try Tapple today for a delicious and nutritious drink!",
  },
  {
    id: 5,
    img: yellow,
    title: "Pineberry",
    stats3: "Pineapple",
    stats1: "Strawberry",
    stats2: "Agave",
    stats4: "Good for Arthritis",
    stats5: "Immune Support",
    stats6: "Vitamin C",
    description:
      "Pineberry is a delicious and nutritious fruit drink with juicy pineapple, sweet strawberries, and natural agave. It's rich in vitamin C, supporting immune function and healthy skin. Enjoy the tropical taste and anti-inflammatory properties that may help with arthritis. Pineberry is the perfect drink for a refreshing and immune-boosting experience on a hot day. Try Pineberry today for a delicious and healthy drink!",
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

  function onChange(cardId) {}

  function handleChange() {
    console.log("change");
  }
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
            cardId={card.id}
          ></FlavorCard>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
