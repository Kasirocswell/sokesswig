import React, { useEffect, useState } from "react";

const ButtonComponent = (props) => {
  return (
    <button className="w-[75px] h-[50px] text-black bg-white absolute z-0 flex-nowrap text-lg ml-[190px] mr-[-200px] mt-[415px]">
      {props.text}
    </button>
  );
};

export default ButtonComponent;
