"use client";
import React, { useState, useContext } from "react";
import ArrowDown from "../../../public/arrow-down.svg";
import ArrowUp from "../../../public/arrow-up.svg";
import { AuthContext } from "../../context/authContext";
import ButtonComponent from "../buttonComponent/buttonComponent";
import LinkComponent from "../linkComponent/linkComponent";
import Image from "next/image";

interface MenuComponentProps {}

const MenuComponent: React.FC<MenuComponentProps> = () => {
  const [isProfileOpen, setIsProfileMenuOpen] = useState(false);
  const { userData, logout } = useContext(AuthContext);
  console.log("userdata ==>", userData);
  const handleProfileOpen = () => {
    setIsProfileMenuOpen(!isProfileOpen);
  };

  const img = isProfileOpen ? ArrowUp : ArrowDown;

  const logOut = () => {
    setIsProfileMenuOpen(false);
    logout();
  };
  return (
    <div className=" ml-auto z-50">
      <button
        className="flex justify-center items-center h-10 text-sm"
        onClick={handleProfileOpen}
      >
        <h1 className="text-black">{userData?.fullName}</h1>
        <Image src={img} alt="arrow icon" width={25} height={25} />
      </button>
      {isProfileOpen && (
        <div
          style={{ backgroundColor: "#264BEB", borderRadius: "8px 0 8px 8px" }}
          className="absolute right-0 w-48 h-40 py-5 px-2 flex flex-col justify-between"
        >
          <div>
            <LinkComponent href="#" text="Panel de control" title="" />
            <LinkComponent
              href="/restaurant/create"
              text="Añadir restaurante"
              title=""
            />
          </div>
          <div className="w-full flex justify-center">
            <div className="border-t border-white w-11/12"></div>
          </div>
          <ButtonComponent
            type="button"
            onClick={logOut}
            text={"Cerrar sesión"}
            textColor="white"
            borderColor="white"
          />
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
