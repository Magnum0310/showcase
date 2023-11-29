import { Navigation, Pagination, Scrollbar, Grid } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import CarCard from "./CarCard";
import { fleet } from "../constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const GridCatalogue = ({ row }) => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Grid]}
        spaceBetween={70}
        grid={{ rows: `${row}`, fill: "row" }}
        // slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          500: {
            grid: {
              rows: 1,
            },
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            grid: {
              rows: 2,
            },
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            grid: {
              rows: 2,
            },
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            grid: {
              rows: 3,
            },
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {fleet.map((car) => (
          <SwiperSlide>
            <CarCard key={car.thumbnail} {...car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GridCatalogue;
