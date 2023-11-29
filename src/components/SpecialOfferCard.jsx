import {
  headLightCloseUp,
  miniCooper,
  steeringWheelCloseUp,
} from "../assets/Cars/SpecialOffer/index";
const SpecialOfferCard = () => {
  return (
    <div>
      <div className=" relative grid h-[600px] w-full grid-flow-row grid-cols-2 grid-rows-2 gap-5 max-md:inline-block max-sm:inline-block ">
        <div className="flex h-full w-full rounded-2xl border-2 border-solid  max-md:mb-5 max-md:inline-block max-md:h-1/2 max-sm:hidden">
          <img
            src={headLightCloseUp}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
        <div className="relative row-span-2 h-full w-full rounded-2xl border-2 border-solid max-md:hidden  max-sm:inline-block">
          <img
            src={miniCooper}
            className="h-full w-full rounded-2xl object-cover "
          />
        </div>
        <div className="w-full overflow-hidden rounded-2xl border-2 border-solid  max-md:inline-block  max-md:h-1/2  max-sm:hidden">
          <img
            src={steeringWheelCloseUp}
            className=" h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferCard;
