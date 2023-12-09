import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import FormCard from "../components/FormCard";

import { format } from "date-fns";
import DatePicker from "../utils/DatePicker";
import { useState } from "react";
import DialogBox from "../components/DialogBox";

const Forms = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [contact, setContact] = useState("");
  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const [values, setValues] = useState({
    fname: "",
    lname: "",
    contact: "",
    email: "",
    pickupdate: "",
    returndate: "",
  });

  const [details, setDetails] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const f = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" });

  const inputs = [
    {
      id: 1,
      name: "fname",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
      errorMessage: "First Name is required",
      pattern: "^[A-Za-z,.'-]{3,16}$",
    },
    {
      id: 2,
      name: "lname",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
      errorMessage: "Last Name is required",
      pattern: "^[A-Za-z]{3,16}$",
    },
    {
      id: 3,
      name: "contact",
      type: "text",
      placeholder: "+63-xxxx-xxxx",
      label: "Contact",
      required: true,
      errorMessage: "Valid number is required",
      pattern: "^[0-9]{11}$",
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
      errorMessage: "Valid email is required",
    },
    {
      id: 5,
      name: "pickupdate",
      type: "date",
      placeholder: "Pickup Date",
      label: "Pickup Date",
    },
    {
      id: 6,
      name: "returndate",
      type: "date",
      placeholder: "Return Date",
      label: "Retrun Date",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    const date = new Date(values.pickupdate);
    console.log(f.format(date));
  };

  return (
    <>
      <Card shadow={false} className="rounded-none">
        <div className="">
          {inputs.map((input) => (
            <FormCard
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
      </Card>
      <Button onClick={onClick}>CLICK ME!</Button>
      <div className="mt-5">
        <DialogBox
          key={values.fname}
          {...values}
          pickupDate={pickupDate}
          returnDate={returnDate}
        />
      </div>
    </>
  );
};

export default Forms;
