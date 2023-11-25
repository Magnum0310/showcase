import {
  headLightCloseUp,
  miniCooper,
  steeringWheelCloseUp,
} from "../assets/Cars/SpecialOffer/index";
const SpecialOfferCard = () => {
  return (
    <div>
      <div className=" relative grid h-[600px] w-full grid-flow-row grid-cols-2 grid-rows-2 gap-5">
        <div className="flex h-full w-full rounded-2xl border-2 border-solid">
          <img src={headLightCloseUp} className="w-full rounded-2xl" />
        </div>
        <div className="relative row-span-2 h-full w-full rounded-2xl border-2 border-solid">
          <img src={miniCooper} className="h-full w-full rounded-2xl" />
        </div>
        <div className="w-full overflow-hidden rounded-2xl border-2 border-solid">
          <img src={steeringWheelCloseUp} className=" rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferCard;
