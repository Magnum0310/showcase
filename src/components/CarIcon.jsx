import React from "react";

const CarIcon = ({ carType, carIcon, link }) => {
  return (
    <li className="flex items-center justify-center gap-2 py-2 max-md:flex-col">
      <img src={carIcon} width={40} />
      <a href={link}>{carType}</a>
    </li>
  );
};

export default CarIcon;
