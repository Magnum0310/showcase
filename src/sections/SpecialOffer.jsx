import SpecialOfferCard from "../components/SpecialOfferCard";
const SpecialOffer = () => {
  return (
    <div className="flex items-center  max-xl:flex-col-reverse max-sm:text-sm ">
      <div className="flex flex-1 justify-center ">
        <SpecialOfferCard />
      </div>
      <div className="flex h-[600px] flex-1 items-center justify-center ">
        <div className="m-5 font-montserrat">
          <p className="leading-7">
            <span className=" text-2xl">
              Ready to Experience{" "}
              <span className="text-orange-box">Unrivaled Luxury?</span>
            </span>
          </p>
          <br />
          <p>
            Unlock the door to unparalleled luxury with{" "}
            <span className="text-orange-box">Rentz</span>.
            <br /> Our special offers are crafted to ensure you experience the
            epitome of sophistication without compromise. Seize these
            limited-time opportunities and transform your journey into an
            extraordinary escape.
          </p>
          <div className="h-15 mt-10 flex gap-5 max-xl:justify-center">
            <button className=" w-40 bg-orange-box p-3">VIEW DETAILS</button>
            <button className="w-40 border-2 border-solid border-orange-box">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
