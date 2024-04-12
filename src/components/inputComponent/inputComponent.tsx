import React from "react";

interface InputComponentProps {
  text: string;
  textColor: string;
  type: string;
  name: string;
  placeholder: string;
  placeholderColor: string;
  borderColor: string;
  value: string;
  require: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  text,
  textColor,
  type,
  name,
  placeholder,
  placeholderColor,
  borderColor,
  value,
  onChange,
  require,
}) => {
  return (
    <>
      <p className={`text-${textColor}`}>{text}</p>
      <input
        type={type}
        className={`block border border-${borderColor} w-full p-2 rounded-full mb-4 bg-transparent placeholder:text-${placeholderColor}`}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={require}
      />
    </>
  );
};

export default InputComponent;
