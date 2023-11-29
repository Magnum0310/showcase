import Footer from "../sections/Footer";
import Fortuner from "../assets/Cars/Fortuner/Fortuner.png";
import FortunerFront from "../assets/Cars/Fortuner/FortunerFront.png";
import FortunerSide from "../assets/Cars/Fortuner/FortunerSide.png";
import FortunerRear from "../assets/Cars/Fortuner/FortunerRear.png";
import Button from "../utils/Button";
import { NavLink } from "react-router-dom";
import DataTable from "../utils/DataTable";

const CarDetails = () => {
  return (
    <div className="flex min-h-screen flex-col text-white-400">
      <div className="flex items-center justify-center text-4xl">
        <p>Header</p>
      </div>
      <div className="padding flex flex-1 items-center justify-center gap-10 text-4xl">
        <div className="min-h-screen w-3/4 bg-red-500">
          <div className="text-lg">
            <NavLink to="/garage">
              <Button label="BACK TO GARAGE" />
            </NavLink>
          </div>
          <p>TOYOTA FORTUNER FOR RENT</p>
          <div className="text-2xl">
            <p>
              <span className="text-4xl">$$$$</span> / PER DAY
            </p>
          </div>
          <div>
            <DataTable />
          </div>
        </div>

        <div className="flex min-h-screen w-full flex-col bg-purple-500">
          <div className=" w-full">
            <img
              src={Fortuner}
              alt="Fortuner"
              className="w-[1000px] object-cover opacity-50"
            />
          </div>
          <div className=" flex h-[200px] w-full justify-evenly gap-5 pt-5">
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
          <div className="py-5">
            <p className="text-2xl">
              The Fortuner is known for its robust and muscular design, often
              characterized by a prominent grille, high ground clearance, and a
              strong and durable chassis. The SUV is built on the Toyota IMV
              platform, which it shares with other Toyota models like the Hilux
              pickup truck.
            </p>
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
