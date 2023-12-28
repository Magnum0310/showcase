import logo from "../assets/logo.svg";
import { facebook, instagram, twitter } from "../assets/icons/index";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="relative font-montserrat max-sm:text-sm">
      <div className=" relative z-10 flex flex-wrap justify-between gap-20 max-lg:flex-col ">
        <div className="flex flex-1 flex-col">
          <div className="flex items-center">
            <img src={logo} width={100} />
            <p className="max-sm:text-2x  text-4xl font-bold text-orange-box">
              Rentz
            </p>
          </div>
          <div className="mt-5 ">
            <p>Unleash the Road Ahead with Premium Car Rentals</p>
            <p>
              Indulge in Elegance, Drive with Prestige: Your Luxurious Adventure
              Awaits with{" "}
              <span className="font-bold text-orange-box">Rentz</span>.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-5">
            <div className="m-2 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-black">
              <img src={facebook} />
            </div>
            <div className="m-2 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-black">
              <img src={instagram} />
            </div>
            <div className="m-2 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-black">
              <img src={twitter} />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between gap-20 max-sm:text-sm lg:gap-10">
          <div className="">
            <p className=" text-2xl max-sm:text-xl">Vehicles</p>
            <div className=" flex flex-col gap-5 pt-5">
              <p>SUV</p>
              <p>LUXURY</p>
              <p>SPORTSCAR</p>
            </div>
          </div>
          <div className="">
            <p className=" text-2xl max-sm:text-xl ">Promos</p>
            <div className="mt-5 flex flex-col gap-5">
              <p>Holiday Promos</p>
              <p>Vip Promos</p>
              <p>----------</p>
              <p>----------</p>
              <p>----------</p>
            </div>
          </div>
          <div className="">
            <p className=" text-2xl max-sm:text-xl">Help</p>
            <div className="mt-5 flex flex-col gap-5">
              <p>About us</p>
              <p>FAQs</p>
              <p>How it works</p>
              <p>Privacy Policy</p>
              <p>Payment Policy</p>
            </div>
          </div>
          <div className="">
            <p className=" text-2xl max-sm:text-xl">Get in touch</p>
            <div className="mt-5 flex flex-col gap-5">
              <p>lux@rentz.com</p>
              <p>+63 999 999 999</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className=" text-2xl max-sm:text-xl">
        <p>&copy; {currentYear} Rentz</p>
      </div>
    </footer>
  );
};

export default Footer;
