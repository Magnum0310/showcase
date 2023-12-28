import logo from "../assets/logo.svg";
import { hamburger } from "../assets/icons/index";
import PhoneEnabledRoundedIcon from "@mui/icons-material/PhoneEnabledRounded";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useBodyScrollLock from "../hooks/useBodyScrollLock";

const Nav = () => {
  const [show, setShow] = useState(false);

  const [isLocked, toggle] = useBodyScrollLock();

  const handleClick = () => {
    setShow(!show);
    toggle();
  };

  return (
    <nav className="padding-x relative z-10 flex w-full snap-start place-items-center justify-between  px-16 font-montserrat text-white xl:gap-14">
      <NavLink to="/">
        <img
          className="border-5 border-solid border-white py-4"
          src={`${logo}`}
          width={130}
        />
      </NavLink>
      <ul className="flex flex-1 gap-8 max-lg:hidden lg:gap-7 lg:pl-2 xl:gap-20 xl:pl-14">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="garage" preventScrollReset={true}>
            GARAGE
          </NavLink>
        </li>
        <li>
          <NavLink to="about">ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to="faq">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="contact">CONTACTS</NavLink>
        </li>
      </ul>
      <button
        className="relative z-30 hidden max-lg:block"
        onClick={handleClick}
      >
        {show ? (
          <CloseIcon fontSize="large" />
        ) : (
          <img src={hamburger} width={40} />
        )}
      </button>
      <div className="absolute left-0 top-0 w-full ">
        <div
          className={`"absolute left-0 flex h-screen w-full flex-col items-center justify-center gap-12 bg-text-gray ${
            show ? "top-[100]" : "top-[-1000px] hidden"
          }`}
        >
          <NavLink
            to="/"
            onClick={handleClick}
            className={
              show
                ? "flex h-12 w-full items-center justify-center hover:bg-white hover:text-black"
                : "hidden"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/garage"
            onClick={handleClick}
            className={
              show
                ? "flex h-12 w-full items-center justify-center hover:bg-white hover:text-black"
                : "hidden"
            }
          >
            GARAGE
          </NavLink>
          <NavLink
            to="about"
            onClick={handleClick}
            className={
              show
                ? "flex h-12 w-full items-center justify-center hover:bg-white hover:text-black"
                : "hidden"
            }
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="faq"
            onClick={handleClick}
            className={
              show
                ? "flex h-12 w-full items-center justify-center hover:bg-white hover:text-black"
                : "hidden"
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="contact"
            onClick={handleClick}
            className={
              show
                ? "flex h-12 w-full items-center justify-center hover:bg-white hover:text-black"
                : "hidden"
            }
          >
            CONTACTS
          </NavLink>
        </div>
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
