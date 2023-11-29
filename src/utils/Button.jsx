import React from "react";

const Button = ({ label }) => {
  return (
    <button className="grid h-[50px] place-items-center border-2 border-solid border-orange-box px-10 max-lg:w-[80%]">
      <h2>{label}</h2>
    </button>
  );
};

export default Button;
