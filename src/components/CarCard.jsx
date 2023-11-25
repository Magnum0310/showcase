import { cars } from "../constants/index";
import audiCoupe from "../assets/Cars/Thumbnail/audiCoupe.svg";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";

const CarCard = ({ thumbnail, type, price }) => {
  return (
    <div className="flex flex-1 flex-col place-items-center">
      <div className=" grid h-[150px] w-full place-items-center ">
        <img src={thumbnail} width={300} />
      </div>
      <h3 className="mt-3 font-bold leading-7">{type}</h3>
      <div className="flex gap-10 leading-7">
        <p className=" text-slate-gray">
          <span className="font-bold text-orange-box">{price}</span> / Per Day
        </p>
        <p className="font-bold text-orange-box">
          DRIVE NOW <TrendingFlatOutlinedIcon />
        </p>
      </div>
    </div>
  );
};

export default CarCard;
