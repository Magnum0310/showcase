import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import Location from "./Location";
import { ScrollRestoration } from "react-router-dom";

const AccordionPage = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const Icon = ({ id, open }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  };

  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div>
      <div className="padding min-h-screen snap-center  text-white">
        <div className="mt-10 py-5 font-montserrat">
          <h1 className="mb-20 font-montserrat text-4xl font-bold">FAQ</h1>
          <Accordion
            open={open === 1}
            icon={<Icon id={1} open={open} />}
            animate={CUSTOM_ANIMATION}
            className={`mt-5 rounded-lg border-2 border-solid ${
              open === 1 ? "border-orange-box" : "border-white"
            } px-5`}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={` border-b-0 transition-colors ${
                open === 1 ? " text-orange-box" : "text-white"
              }`}
            >
              What is Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={<Icon id={2} open={open} />}
            animate={CUSTOM_ANIMATION}
            className={`mt-5 rounded-lg border-2 border-solid ${
              open === 2 ? "border-orange-box" : "border-white"
            } px-5`}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={` border-b-0 transition-colors ${
                open === 2 ? " text-orange-box" : "text-white"
              }`}
            >
              How to use Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            icon={<Icon id={3} open={open} />}
            animate={CUSTOM_ANIMATION}
            className={`mt-5 rounded-lg border-2 border-solid ${
              open === 3 ? "border-orange-box" : "border-white"
            } px-5`}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={` border-b-0 transition-colors ${
                open === 3 ? " text-orange-box" : "text-white"
              }`}
            >
              What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default AccordionPage;
