import React from "react";

interface InputComponentProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className="block border border-grey-light w-full p-3 rounded mb-4"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputComponent;
