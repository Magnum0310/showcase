import logo from "../assets/logo.svg";
import { facebook, instagram, twitter } from "../assets/icons/index";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="relative font-montserrat">
      <div className=" max-lg:flex-col relative z-10 flex flex-wrap  justify-between gap-20 ">
        <div className="flex flex-col justify-center p-5">
          <div className="flex items-center">
            <img src={logo} width={100} />
            <p className="p-5 text-4xl">Rentz</p>
          </div>
          <div className="mt-5">
            <p>Unleash the Road Ahead with Premium Car Rentals</p>
            <p>
              Indulge in Elegance, Drive with Prestige: Your Luxurious Adventure
              Awaits with Rentz.
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
        <div className="flex flex-1 flex-wrap justify-between gap-20 p-5">
          {/* <div className="flex gap-20 p-5"> */}
          <div className="">
            <p className=" text-2xl">Vehicles</p>
            <div className=" flex flex-col gap-5 pt-5">
              <p>SUV</p>
              <p>LUXURY</p>
              <p>SPORTSCAR</p>
            </div>
          </div>
          <div className="">
            <p>Help</p>
            <div className="mt-5 flex flex-col gap-5">
              <p>About us</p>
              <p>FAQs</p>
              <p>How it works</p>
              <p>Privacy Policy</p>
              <p>Payment Policy</p>
            </div>
          </div>
          <div className="">
            <p>Get in touch</p>
            <div className="mt-5 flex flex-col gap-5">
              <p>lux@rentz.com</p>
              <p>+63 999 999 999</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="  mt-24 p-5 text-2xl">
        <p>&copy; {currentYear} Rentz</p>
      </div>
      {/* <div className=" absolute bottom-0 left-0 right-0 top-0 flex h-full items-center justify-center  text-black">
        <p className="relative text-[340px] font-bold leading-[1.15]">
          CONTACTS
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
