import React from "react";

const CarIcon = ({ carType, carIcon, link }) => {
  return (
    <li className="max-xl:flex-col flex items-center justify-center gap-2 py-2">
      <img src={carIcon} width={40} className=" max-md:scale-75" />
      <a href={link}>{carType}</a>
    </li>
  );
};

export default CarIcon;
