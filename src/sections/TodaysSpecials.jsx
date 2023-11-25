import TodaysSpecialBar from "../components/TodaysSpecialBar";
const TodaysSpecials = () => {
  return (
    <section className="relative ">
      <div className=" max-xl:mx-[0px] relative z-10 text-white">
        <TodaysSpecialBar />
      </div>
      <div className=" absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center overflow-hidden ">
        <p className=" relative text-[300px] font-bold leading-[1.15]">
          RENTALS
        </p>
      </div>
    </section>
  );
};

export default TodaysSpecials;
