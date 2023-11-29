import Nav from "../components/Nav";
import Hero from "../sections/Hero";
import TodaysSpecials from "../sections/TodaysSpecials";
import Services from "../sections/Services";
import Features from "../sections/features";
import SpecialOffer from "../sections/SpecialOffer";
import Footer from "../sections/Footer";

const HomePage = () => {
  return (
    <>
      <Nav />
      <section className="xl:padding-l xl:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding ">
        <TodaysSpecials />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding text-white">
        <Features />
      </section>
      <section className="padding  text-white">
        <SpecialOffer />
      </section>
      <section className="padding-x padding-t bg-gray-200 pb-8">
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
