import Footer from "../sections/Footer";
import Fortuner from "../assets/Cars/Fortuner/Fortuner.png";
import FortunerFront from "../assets/Cars/Fortuner/FortunerFront.png";
import FortunerSide from "../assets/Cars/Fortuner/FortunerSide.png";
import FortunerRear from "../assets/Cars/Fortuner/FortunerRear.png";
import Button from "../utils/Button";
import { NavLink } from "react-router-dom";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";

import DataTable from "../utils/DataTable";
import Forms from "../utils/Forms";

const CarDetails = () => {
  return (
    <div className="relative flex min-h-screen flex-col  text-white-400">
      <div className="flex items-center justify-center text-4xl">
        <p>Header</p>
      </div>
      <div className="padding ">
        <div className=" flex min-h-screen items-start justify-center gap-20  p-10 text-4xl">
          <div className="flex h-full flex-col ">
            <div className="py-5 text-lg font-bold">
              <NavLink to="/garage">
                <button className="py-2 text-text-gray">
                  <TrendingFlatOutlinedIcon
                    sx={{ fontSize: 50 }}
                    className="rotate-180"
                  />
                  <span className="ml-5">BACK TO GARAGE</span>
                </button>
              </NavLink>
              <p className="text-4xl text-white">TOYOTA FORTUNER FOR RENT</p>
            </div>
            <div className=" mb-20 mt-14 text-2xl">
              <p>
                <span className="text-4xl font-bold text-orange-box">$$$$</span>
                <span className="text-text-gray">/ PER DAY</span>
              </p>
            </div>
            <div className="text-lg">
              <DataTable />
            </div>
            <div className="  h-screen py-5 text-lg">
              <Forms />
            </div>
          </div>

          <div className="h-full ">
            <div className=" items-center justify-center">
              <img
                src={Fortuner}
                alt="Fortuner"
                className=" h-full w-full object-cover"
              />
            </div>
            <div className="flex h-full w-full justify-evenly gap-5  pt-5">
              <img
                src={FortunerFront}
                alt="FrontView"
                className="flex w-[100px] flex-1 object-cover"
              />
              <img
                src={FortunerSide}
                alt="FrontSide"
                className="flex w-[100px]  flex-1 object-cover"
              />
              <img
                src={FortunerRear}
                alt="FrontRear"
                className="flex w-[100px]  flex-1 object-cover"
              />
            </div>
            <div className=" col-start-1 col-end-1 row-start-4 row-end-5 flex items-center justify-center  pt-5">
              <p className="text-xl leading-7">
                The Fortuner is known for its robust and muscular design, often
                characterized by a prominent grille, high ground clearance, and
                a strong and durable chassis. The SUV is built on the Toyota IMV
                platform, which it shares with other Toyota models like the
                Hilux pickup truck.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="padding-x padding-t bg-gray-200 pb-8">
        <Footer />
      </footer>
    </div>
  );
};

export default CarDetails;
