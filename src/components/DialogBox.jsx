import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { useState } from "react";
const DialogBox = ({
  fname,
  lname,
  contact,
  email,
  pickupdate,
  returndate,
  resetForm,
}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleOpen = () => setOpen(!open);

  const handleClose = () => {
    setOpen(false);
    setIsLoading(false);
    resetForm();
  };

  const sample = () => setTimeout(() => setIsLoading(!isLoading), 2000);

  return (
    <div className="">
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="round-full w-full rounded-full bg-orange-box p-5 "
      >
        Open Dialog
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="relative flex w-1/3 flex-1 flex-col items-center justify-center bg-text-gray text-white max-lg:w-1/2 max-sm:w-[60%]"
      >
        <DialogHeader className="px-2 text-2xl font-bold max-sm:text-lg">
          {isLoading
            ? "Booking Confirmed!"
            : "Please confirm the details below"}
        </DialogHeader>
        <DialogBody className="w-full px-10 max-sm:px-2">
          <div className="flex flex-col gap-5 ">
            <p>
              <span className="font-bold text-black">Full Name: </span>
              {fname} {lname}
            </p>
            <p>
              <span className="font-bold text-black">Contact #: </span>
              {contact}
            </p>
            <p>
              <span className="font-bold text-black">Email: </span>
              {email}
            </p>
            <p>
              <span className="font-bold text-black">Pickup Date: </span>
              {pickupdate
                ? new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                  }).format(new Date(pickupdate))
                : "n/a"}
            </p>
            <p>
              <span className="font-bold text-black">Return Date: </span>
              {returndate
                ? new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                  }).format(new Date(returndate))
                : "n/a"}
            </p>
          </div>
        </DialogBody>
        <DialogFooter
          className={
            isLoading ? "flex items-center" : "flex items-center gap-10"
          }
        >
          <Button variant="text" color="" onClick={handleClose} className="">
            <span className="">{isLoading ? "Close" : "Cancel"}</span>
          </Button>
          <Button
            variant="gradient"
            onClick={open ? sample : handleOpen}
            className={isLoading ? "" : "bg-orange-box px-5 py-2"}
          >
            {isLoading ? "" : <span>Confirm</span>}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default DialogBox;
