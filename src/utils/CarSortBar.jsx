import CarIcon from "../components/CarIcon";
import { SuvIcon, SedanIcon, SportsCarIcon } from "../assets/icons/index";

const CarSortBar = () => {
  return (
    <ul className=" flex gap-10  max-lg:w-full max-lg:justify-evenly max-lg:gap-5 max-lg:text-sm max-md:mx-5 max-md:gap-5 max-sm:mx-0 max-sm:w-full md:mx-5 xl:pr-10">
      <CarIcon carIcon={SuvIcon} carType="SUV" link="https://google.com" />
      <CarIcon carIcon={SedanIcon} carType="LUXURY" link="https://google.com" />
      <CarIcon
        carIcon={SportsCarIcon}
        carType="SPORTSCAR"
        link="https://google.com"
      />
    </ul>
  );
};

export default CarSortBar;
