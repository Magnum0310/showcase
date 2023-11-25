import {
  blackCar,
  jeep,
  miniCooper,
  audi,
  audiHigh,
} from "../assets/Hero/index";
import SocialBar from "../components/SocialBar";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col gap-10 text-white xl:flex-row">
      <div className="flex flex-col items-start justify-center xl:w-2/5">
        <div className="absolute top-72 ml-12 hidden justify-center xl:block">
          <SocialBar />
        </div>
        <h1 className=" max-xl:mt-40 max-xl:leading-[80px] max-sm:padding max-sm:text-[75px] relative z-10 mt-32 overflow-visible pr-10 font-montserrat font-bold leading-[100px] sm:ml-[32px] sm:text-[75px] md:ml-[70px] xl:ml-[250px] xl:whitespace-nowrap">
          Your Journey,
          <br />
          <span>Your Car</span>
        </h1>
        <h3 className="  max-sm:ml-[32px] max-sm:text-sm mb-6 mt-10 text-lg leading-7 text-slate-gray sm:ml-[32px] sm:max-w-sm md:ml-[70px] xl:ml-[250px]">
          Unleash the Road Ahead with Premium Car Rentals
        </h3>
        <div className=" max-sm:ml-[32px] max-sm:text-sm mb-6 mt-5 leading-[60px] sm:ml-[32px] md:ml-[70px] xl:ml-[250px]">
          <p className="max-sm:text-sm text-lg font-bold">
            THE BLACK AUDI Coupe
          </p>
          <span className=" text-orange-box">P Price</span> /{" "}
          <span className="text-slate-gray">Per Day</span>
        </div>
        <div className=" max-sm:ml-[32px] max-sm:text-sm mt-5 grid h-[50px] w-[200px] place-items-center border-2 border-solid border-orange-box text-base font-bold sm:ml-[32px] md:ml-[70px] xl:ml-[250px]">
          <p>Drive Now</p>
        </div>
      </div>

      <div className=" max-sm:mx-[32px] max-lg:mx-[64px] relative flex justify-center sm:ml-[32px] md:mx-[70px] xl:min-h-screen">
        <img
          src={audiHigh}
          width={1200}
          height={500}
          className="relative object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
