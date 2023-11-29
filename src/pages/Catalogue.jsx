import Footer from "../sections/Footer";
import { gr86Services } from "../assets/Cars/Thumbnail";
import CarSortBar from "../utils/CarSortBar";
import Button from "../utils/Button";
import SortButton from "../utils/SortButton";
import { fleet } from "../constants";
import CarCard from "../components/CarCard";
import { NavLink } from "react-router-dom";
import GridCatalogue from "../components/GridCatalogue";
const Catalogue = () => {
  return (
    <div className=" xl:padding-l xl:padding-r padding-b flex min-h-screen flex-col ">
      <div className=" relative flex flex-col items-center justify-center text-white-400">
        <div className=" -z-10 w-full">
          <img
            src={gr86Services}
            alt="gr86"
            className="h-[800px] w-full object-cover opacity-75"
          />
        </div>
        <div className="max-container absolute">
          <h1 className="text-4xl">Our Fleet</h1>
          <p>
            Indulge in the Pinnacle of Luxury Travel with Rentz. Elevate your
            journey with our exclusive special offers designed for those who
            seek the extraordinary. From high-end sedans to exotic sports cars,
            experience opulence on the road while enjoying exceptional savings
            with our limited-time premium rental car offers.
          </p>
        </div>
        <div className="max-container absolute bottom-0 top-auto mb-5 flex w-full items-center justify-between font-bold">
          <NavLink to="/">
            <Button label="HOME" />
          </NavLink>
          <div className="flex gap-10">
            <CarSortBar />
            <SortButton />
          </div>
        </div>
      </div>
      <div className="mx-10 my-10 justify-center pb-32 pt-20 text-white-400">
        <GridCatalogue row={3} />
      </div>
      <footer className="padding-x padding-t bg-gray-200 pb-8">
        <Footer />
      </footer>
    </div>
  );
};

export default Catalogue;
