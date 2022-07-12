import React from "react";

const Button = ({ text, type = "button", onClick }) => {
  return (
    <div className="w-full">
      <button
        type={type}
        onClick={onClick && onClick}
        className="w-full border-none bg-green-800 text-white text-base font-medium uppercase p-2 rounded-md"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
