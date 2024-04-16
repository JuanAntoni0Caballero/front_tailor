import React from "react";
import ArrowLeft from "../../../public/arrow-left.svg";
import Image from "next/image";

interface ButtonComponentProps {
  type: "button" | "submit";
  onClick?: () => void;
  text: string | any;
  textColor?: string;
  borderColor?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  type,
  text,
  onClick,
  textColor,
  borderColor,
}) => {
  const textSizeClass = "text-base md:text-lg";

  const className = `px-4 text-center py-1 rounded block border border-1 rounded-xl bg-green focus:outline-none my-1 ${textSizeClass}`;
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} text-${textColor} border-${borderColor} h-fit w-fit m-2`}
    >
      {text !== "back" ? (
        text
      ) : (
        <Image src={ArrowLeft} alt="logo" width={30} height={30} />
      )}
    </button>
  );
};

export default ButtonComponent;
