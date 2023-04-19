import React, { useEffect, useState } from "react";

const ButtonComponent = ({ text }) => {
  return (
    <button className="w-[75px] h-[50px] text-black bg-white">{text}</button>
  );
};

export default ButtonComponent;
