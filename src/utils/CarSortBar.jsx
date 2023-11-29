import CarIcon from "../components/CarIcon";
import { SuvIcon, SedanIcon, SportsCarIcon } from "../assets/icons/index";

const CarSortBar = () => {
  return (
    <ul className="flex gap-10 max-lg:w-full max-lg:justify-evenly max-lg:gap-20 max-lg:text-sm max-sm:gap-10 lg:mr-20 xl:pr-10">
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
