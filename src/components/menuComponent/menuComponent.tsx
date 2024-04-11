"use client";
import React, { useState, useContext } from "react";
import ImageComponent from "@/components/imageComponent/imageComponent";
import ArrowDown from "../../../public/arrow-down.svg";
import ArrowUp from "../../../public/arrow-up.svg";
import Link from "next/link";
import { AuthContext } from "@/context/authContext";
import ButtonComponent from "../buttonComponent/buttonComponent";

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
        // id="user-menu-button"
        onClick={handleProfileOpen}
      >
        <h1>{userData?.fullName}</h1>
        <ImageComponent src={img} alt="arrow icon" width={20} height={20} />
      </button>
      {isProfileOpen && (
        <div
          className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          //   aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700">
            Panel de control
          </Link>
          <Link
            href="/createRestaurant"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setIsProfileMenuOpen(false)}
          >
            Añadir restaurante
          </Link>
          <button
            type="button"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={logOut}
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
