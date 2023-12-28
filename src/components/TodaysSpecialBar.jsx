import { SuvIcon, SedanIcon, SportsCarIcon } from "../assets/icons/index";
import { cars } from "../constants/index";
import CarCard from "./CarCard";
import CarCardHomePage from "../components/CarCardHomePage";
import CarIcon from "./CarIcon";
import CarSortBar from "../utils/CarSortBar";
import Button from "../utils/Button";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TodaysSpecialBar = () => {
  return (
    <section className=" max-container ">
      <div className="flex items-center justify-center max-lg:flex-col">
        <h2 className="flex-1 text-2xl font-bold max-xl:text-lg max-lg:w-full max-lg:text-center  max-lg:text-[60px] max-lg:leading-[90px] max-md:text-[46px] max-sm:text-[32px] ">
          TODAYS SPECIALS
        </h2>
        <CarSortBar />
        <NavLink to="/garage">
          <Button label="VIEW ALL CARS" />
        </NavLink>
      </div>
      <div className=" mt-[100px] flex  lg:mt-[200px] ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1140: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {cars.map((car) => (
            <SwiperSlide>
              <CarCardHomePage key={car.thumbnail} {...car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TodaysSpecialBar;
