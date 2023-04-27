// Keep prettier from going to the top
import Navbar from "@/components/Navbar";
import { useState } from "react";

const Flavors = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <Navbar></Navbar>
      {!checked ? (
        <div className="w-screen h-screen bg-amber-300 flex ">
          <button
            onClick={handleClick}
            className="w-[60px] h-[30px] bg-white text-black mx-auto my-auto rounded"
          >
            Mango
          </button>
        </div>
      ) : (
        <div className="w-screen h-screen bg-rose-700 flex ">
          <button
            onClick={handleClick}
            className="w-[100px] h-[30px] bg-white text-black mx-auto my-auto rounded"
          >
            Strawberry
          </button>
        </div>
      )}
    </div>
  );
};

export default Flavors;
