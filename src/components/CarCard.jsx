import { cars } from "../constants/index";
import audiCoupe from "../assets/Cars/Thumbnail/audiCoupe.svg";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import { Link, NavLink, Navigate } from "react-router-dom";

const CarCard = ({ thumbnail, type, price, carId }) => {
  return (
    <div className="mb-10 flex flex-1 flex-col place-items-center ">
      <div className=" grid h-[150px] w-full place-items-center ">
        <img src={thumbnail} width={300} />
      </div>
      <h3 className="mt-3 font-bold leading-7">{type}</h3>
      <div className="flex gap-10 leading-7">
        <p className=" text-slate-gray">
          <span className="font-bold text-orange-box">{price}</span> / Per Day
        </p>
        <NavLink to={`${carId}`}>
          <button className="font-bold text-orange-box">
            DRIVE NOW <TrendingFlatOutlinedIcon />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CarCard;
