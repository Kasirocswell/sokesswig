// Keep prettier from going to the top
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Carousel from "@/components/carousel";

const Flavors = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex w-screen h-screen bg-sky-300">
      <Navbar></Navbar>
      <Carousel></Carousel>
    </div>
  );
};

export default Flavors;
