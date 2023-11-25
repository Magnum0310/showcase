import logo from "../assets/logo.svg";
import { hamburger } from "../assets/icons/index";
import PhoneEnabledRoundedIcon from "@mui/icons-material/PhoneEnabledRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
const Nav = () => {
  return (
    <nav className="absolute z-10 flex w-full place-items-center justify-between px-16 font-montserrat text-white  lg:gap-[2.9rem] xl:gap-14">
      <a href="/">
        <img
          className="border-5 border-solid border-white py-4"
          src={`${logo}`}
          width={130}
        />
      </a>
      <ul className=" flex flex-1 gap-8 max-lg:hidden lg:gap-7 lg:pl-2 xl:gap-20 xl:pl-14">
        <li>
          <a>HOME</a>
        </li>
        <li>
          <a>GARRAGE</a>
        </li>
        <li>
          <a>ABOUT US</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
        <li>
          <a>CONTACTS</a>
        </li>
      </ul>
      <div className="hidden  max-lg:block">
        <img src={hamburger} width={40} />
      </div>
      <div className="grid h-[40px] w-[200px] place-items-center bg-orange-box max-lg:hidden">
        <p>
          <PhoneEnabledRoundedIcon /> +63 999-999-999
        </p>
      </div>
    </nav>
  );
};

export default Nav;
