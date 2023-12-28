import Nav from "../components/Nav";
import Hero from "../sections/Hero";
import TodaysSpecials from "../sections/TodaysSpecials";
import Services from "../sections/Services";
import Features from "../sections/features";
import SpecialOffer from "../sections/SpecialOffer";
import Footer from "../sections/Footer";

const HomePage = () => {
  return (
    <div className="">
      <section className="xl:padding-l xl:padding-r padding-b snap-start">
        <Hero />
      </section>
      <section className="padding snap-start">
        <TodaysSpecials />
      </section>
      <section className="padding snap-start">
        <Services />
      </section>
      <section className="padding snap-start text-white">
        <Features />
      </section>
      <section className="padding snap-start text-white">
        <SpecialOffer />
      </section>
    </div>
  );
};

export default HomePage;
