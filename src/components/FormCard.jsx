import React from "react";
import { useState } from "react";

const FormCard = (props) => {
  const { label, onChange, id, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="">
      <label className="flex flex-1 font-bold">{label}</label>
      <input
        className="peer mb-5 w-full border-2 border-solid border-text-gray bg-transparent px-5 py-5 font-bold text-white"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
      />
      <span
        className={
          focused
            ? "mb-5 hidden pl-5 text-sm font-bold text-red-500 peer-invalid:inline-block"
            : "hidden pl-5 text-sm"
        }
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default FormCard;
