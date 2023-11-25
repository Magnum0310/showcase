import { interiorServices, gr86Services } from "../assets/Cars/Thumbnail/index";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";

const Services = () => {
  return (
    <section className="flex-col font-montserrat text-white lg:grid lg:grid-cols-2 lg:grid-rows-2 xl:flex">
      <div className="relative flex  lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 xl:h-96">
        <div className="flex-1 lg:col-start-1 lg:col-end-2 lg:grid xl:flex">
          <p className=" flex flex-1 flex-col items-start justify-center p-5  ">
            <span className="relative left-0 mt-10 whitespace-nowrap font-montserrat  font-bold leading-[106px] lg:text-[72px] xl:text-[82px]">
              <span className="text-orange-box">Unparalleled</span>
              <br /> Elegance
            </span>
            <br />
            {/* <span className=" text-base leading-7">
              Indulge in the epitome of automotive luxury.
            </span> */}
          </p>
        </div>
        <div className=" lg:col-start-1 lg:col-end-2 lg:grid xl:flex xl:h-[500px] xl:w-3/5 xl:flex-1">
          <img
            src={gr86Services}
            width={1200}
            className="z-10 lg:h-full lg:w-full lg:object-cover"
          />
        </div>
      </div>
      <div className="relative  lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:grid xl:flex xl:h-1/2">
        <div className="max-lg:grid flex-1 bg-orange-box lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 xl:flex">
          <img
            src={interiorServices}
            className="lg:h-full lg:w-full lg:object-cover xl:w-[900px]"
          />
        </div>
        <div className=" absolute left-[47%] right-0 top-[30%] z-20 h-1/2 w-[120px] bg-orange-box lg:hidden xl:block"></div>
        <div className=" flex flex-1 flex-col items-center justify-center gap-10 text-xl  lg:col-start-2 lg:col-end-3  lg:row-start-2 lg:row-end-3 lg:ml-5 lg:mt-20 lg:grid lg:text-lg xl:mt-40">
          <p className="z-30 font-montserrat leading-7">
            Indulge in the epitome of automotive{" "}
            <span className="text-orange-box">luxury.</span> <br />
            Our collection boasts an array of prestigious brands and models,
            each meticulously crafted to deliver an unparalleled{" "}
            <span className="text-orange-box">driving experience.</span> <br />
          </p>
          <p className="z-30 font-montserrat leading-7">
            Revel in the sleek lines, opulent interiors, and cutting-edge
            technology that define our premium fleet. At{" "}
            <span className="text-orange-box">Rentz</span>, we believe in
            offering not just cars, but works of automotive art.
          </p>
          <div className="ml-[50%] flex items-center gap-5 text-orange-box">
            <button>DRIVE NOW</button>
            <TrendingFlatOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
