import React from "react";

interface ButtonComponentProps {
  type: "button" | "submit";
  onClick?: () => void;
  text: string;
  className?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  type,
  text,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        className ||
        "w-full text-center py-3 rounded block border border-grey-light bg-green text-black focus:outline-none my-1"
      }
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
