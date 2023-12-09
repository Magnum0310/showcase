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
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [isLoading, setIsLoading] = useState(false);

  const loadDetails = () => {
    setTimeout(() => setIsLoading(!isLoading), 5000);
  };

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
        className="relative flex w-1/4 flex-1 flex-col items-center justify-center bg-text-gray text-white"
      >
        <DialogHeader className="text-2xl font-bold">
          Please confirm the details below:
        </DialogHeader>
        <DialogBody className="w-full px-10">
          {isLoading ? (
            <div>Page is Loading</div>
          ) : (
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
          )}
        </DialogBody>
        <DialogFooter className="flex gap-10">
          <Button
            variant="text"
            color=""
            onClick={handleOpen}
            className="mr-1 "
          >
            <span className="">Cancel</span>
          </Button>
          <Button
            variant="gradient"
            onClick={() => loadDetails()}
            className="bg-orange-box px-5 py-2"
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default DialogBox;
