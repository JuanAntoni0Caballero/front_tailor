"use client";
import React, { useState, useContext } from "react";
import ImageComponent from "@/components/imageComponent/imageComponent";
import ArrowDown from "../../../public/arrow-down.svg";
import ArrowUp from "../../../public/arrow-up.svg";
import { AuthContext } from "@/context/authContext";
import ButtonComponent from "../buttonComponent/buttonComponent";
import LinkComponent from "../linkComponent/linkComponent";

interface MenuComponentProps {}

const MenuComponent: React.FC<MenuComponentProps> = () => {
  const [isProfileOpen, setIsProfileMenuOpen] = useState(false);
  const { userData, logout } = useContext(AuthContext);

  const handleProfileOpen = () => {
    setIsProfileMenuOpen(!isProfileOpen);
  };

  const img = isProfileOpen ? ArrowUp : ArrowDown;

  const logOut = () => {
    setIsProfileMenuOpen(false);
    logout();
  };

  return (
    <div className="relative ml-auto">
      <button
        className="relative flex bg-transparent text-sm"
        onClick={handleProfileOpen}
      >
        <h1>{userData?.fullName}</h1>
        <ImageComponent src={img} alt="arrow icon" width={20} height={20} />
      </button>
      {isProfileOpen && (
        <div
          style={{ backgroundColor: "#264BEB", borderRadius: "8px 0 8px 8px" }}
          className="absolute right-0 m-2 w-48 h-40 origin-top-right py-5 px-2 flex flex-col justify-between"
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
