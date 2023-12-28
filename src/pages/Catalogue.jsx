import Footer from "../sections/Footer";
import { gr86Services } from "../assets/Cars/Thumbnail";
import CarSortBar from "../utils/CarSortBar";
import Button from "../utils/Button";
import SortButton from "../utils/SortButton";
import { fleet } from "../constants";
import CarCard from "../components/CarCard";
import { NavLink } from "react-router-dom";
import GridCatalogue from "../components/GridCatalogue";
import { ScrollRestoration } from "react-router-dom";

import Nav from "../components/Nav";

const Catalogue = () => {
  return (
    <div className=" xl:padding-lg flex min-h-screen snap-start flex-col">
      <div className=" relative flex flex-col items-center justify-center  text-white-400">
        <div className=" -z-10 w-full">
          <img
            src={gr86Services}
            alt="gr86"
            className="h-[800px] w-full object-cover opacity-75"
          />
        </div>
        <div className="padding-x absolute  ">
          <h1 className=" text-8xl font-bold max-sm:text-4xl">Our Fleet</h1>
          <p className=" mt-5 text-lg leading-7">
            Indulge in the Pinnacle of Luxury Travel with Rentz. Elevate your
            journey with our exclusive special offers designed for those who
            seek the extraordinary. From high-end sedans to exotic sports cars,
            experience opulence on the road while enjoying exceptional savings
            with our limited-time premium rental car offers.
          </p>
        </div>
        <div className="max-sm:max-container padding-x absolute bottom-0 top-auto mb-5 flex w-full items-center justify-evenly  font-bold max-sm:flex-col ">
          <NavLink to="/" className="max-sm:max-container max-sm:w-full">
            <Button label="HOME" />
          </NavLink>
          <div className="max-sm:max-container relative flex gap-5 max-md:gap-0 max-sm:w-full max-sm:flex-col lg:gap-10">
            <CarSortBar />
            <SortButton />
          </div>
        </div>
      </div>
      <div className="padding my-10 snap-start justify-center pb-32 pt-20 text-white-400">
        <GridCatalogue row={3} />
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Catalogue;
