import React from "react";

const InputText = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChangeValue,
}) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className="capitalize font-medium text-base">
        {label}:
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeValue}
        name={name}
        className="border border-gray-400 text-base font-medium p-2 rounded-md"
        id={name}
        required
      />
    </div>
  );
};

export default InputText;
