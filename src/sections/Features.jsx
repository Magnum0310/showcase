import { features } from "../constants/index";
import FeatureCard from "../components/FeatureCard";

const Features = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-10">
        {features.map((feat) => (
          <FeatureCard key={feat.feature} {...feat} />
        ))}
      </div>
    </div>
  );
};

export default Features;
