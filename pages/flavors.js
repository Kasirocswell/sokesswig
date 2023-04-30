// Keep prettier from going to the top
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Carousel from "@/components/carousel";

const Flavors = () => {
  const bgColors = [
    "bg-red-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-pink-400",
    "bg-orange-400",
    "bg-purple-400",
    "bg-cyan-400",
    "bg-emerald-400",
    "bg-indigo-400",
    "bg-rose-400",
  ];

  const [backgroundColor, setBackgroundColor] = useState();

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    console.log(randomIndex);
    setBackgroundColor(bgColors[randomIndex]);
  }
  useEffect(() => {
    setInterval(() => {
      getRandomColor();
    }, 10000);
  }, [5000]);
  return (
    <div
      className={`flex w-screen h-screen main-bg transition duration-1000 ${
        backgroundColor || "bg-sky-300"
      }`}
    >
      <Navbar></Navbar>
      <Carousel></Carousel>
    </div>
  );
};

export default Flavors;
