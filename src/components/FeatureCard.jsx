const FeatureCard = ({ feature, note, icon }) => {
  return (
    <div>
      <div className="h-full rounded-xl  shadow-3xl  shadow-white-400 sm:w-[400px] sm:min-w-[400px]">
        <div className="flex items-center">
          <div className=" flex h-[100px] items-center p-5">
            <img src={icon} width={50} className="p-1" />
          </div>
          <p className=" font-montserrat font-bold text-orange-box">
            {feature}
          </p>
        </div>
        <div className="flex h-full flex-1 p-5 font-montserrat leading-7">
          {note}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
