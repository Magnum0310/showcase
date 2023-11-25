import { SuvIcon, SedanIcon, SportsCarIcon } from "../assets/icons/index";
import { cars } from "../constants/index";
import CarCard from "./CarCard";
import CarIcon from "./CarIcon";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TodaysSpecialBar = () => {
  return (
    <section className=" ">
      <div className="max-lg:flex-col flex items-center justify-center">
        <h2 className="max-xl:text-lg  max-lg:w-full max-lg:text-[60px] max-md:text-[46px] max-sm:text-[32px] max-lg:leading-[90px]  max-lg:text-center flex-1 text-2xl font-bold ">
          TODAYS SPECIALS
        </h2>
        <ul className="max-xl:gap-5 max-lg:text-sm max-lg:w-full max-lg:justify-evenly max-lg:gap-20 max-sm:gap-10 flex lg:mr-10">
          <CarIcon carIcon={SuvIcon} carType="SUV" link="https://google.com" />
          <CarIcon
            carIcon={SedanIcon}
            carType="LUXURY"
            link="https://google.com"
          />
          <CarIcon
            carIcon={SportsCarIcon}
            carType="SPORTSCAR"
            link="https://google.com"
          />
        </ul>
        <div className="max-lg:w-[80%] grid h-[50px] place-items-center border-2 border-solid border-orange-box px-10">
          <h2>VIEW ALL CARS</h2>
        </div>
      </div>
      <div className=" mt-[100px] flex lg:mt-[200px] ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
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
              <CarCard key={car.thumbnail} {...car} />
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
    </section>
  );
};

export default TodaysSpecialBar;
