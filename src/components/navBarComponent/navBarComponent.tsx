"use client";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { AuthContext } from "@/context/authContext";
import ButtonComponent from "../buttonComponent/buttonComponent";

const NavBar: React.FC = () => {
  const { userData, logout } = useContext(AuthContext);
  console.log("userData ==>", userData);
  const [selectedLink, setSelectedLink] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileMenuOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleProfileOpen = () => {
    setIsProfileMenuOpen(!isProfileOpen);
  };

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  const logOut = () => {
    setIsProfileMenuOpen(false);
    setIsMenuOpen(false);
    logout();
  };
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={handleMenuButtonClick}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-6 w-6 ${isMenuOpen ? "hidden" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg
                  className={`block h-6 w-6 ${isMenuOpen ? "" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    href="/"
                    className={`${
                      selectedLink === "Home"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    onClick={() => handleLinkClick("Home")}
                    aria-current={selectedLink === "Home" ? "page" : undefined}
                  >
                    Home
                  </Link>
                  {!userData ? (
                    <>
                      <Link
                        href="/signup"
                        className={`${
                          selectedLink === "SignUp"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        } rounded-md px-3 py-2 text-sm font-medium`}
                        onClick={() => handleLinkClick("SignUp")}
                        aria-current={
                          selectedLink === "SignUp" ? "page" : undefined
                        }
                      >
                        SignUp
                      </Link>
                      <Link
                        href="/login"
                        className={`${
                          selectedLink === "Login"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        } rounded-md px-3 py-2 text-sm font-medium`}
                        onClick={() => handleLinkClick("Login")}
                        aria-current={
                          selectedLink === "Login" ? "page" : undefined
                        }
                      >
                        Login
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/createRestaurant"
                        className={`${
                          selectedLink === "New restaurant"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        } rounded-md px-3 py-2 text-sm font-medium`}
                        onClick={() => handleLinkClick("New restaurant")}
                        aria-current={
                          selectedLink === "New restaurant" ? "page" : undefined
                        }
                      >
                        New restaurant
                      </Link>
                      <Link
                        href="/pruebaMaps"
                        className={`${
                          selectedLink === "Prueba Maps"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        } rounded-md px-3 py-2 text-sm font-medium`}
                        onClick={() => handleLinkClick("Prueba Maps")}
                        aria-current={
                          selectedLink === "Prueba Maps" ? "page" : undefined
                        }
                      >
                        Prueba Maps
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative ml-3">
                  {userData && (
                    <div>
                      <button
                        type="button"
                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded={isProfileOpen ? "true" : "false"}
                        aria-haspopup="true"
                        onClick={handleProfileOpen}
                      >
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>
                        <h1>{userData.fullName}</h1>
                      </button>
                    </div>
                  )}
                  {isProfileOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-1"
                      >
                        Settings
                      </Link>
                      <ButtonComponent
                        type="button"
                        text="Log out"
                        onClick={logOut}
                        className="block px-4 py-2 text-sm text-gray-700"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
              <Link
                href="/"
                className={`${
                  selectedLink === "Home"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } rounded-md px-3 py-2 text-sm font-medium`}
                aria-current={selectedLink === "Home" ? "page" : undefined}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </Link>

              {!userData ? (
                <>
                  <Link
                    href="/signup"
                    className={`${
                      selectedLink === "SignUp"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    aria-current={
                      selectedLink === "SignUp" ? "page" : undefined
                    }
                    onClick={() => handleLinkClick("SignUp")}
                  >
                    SignUp
                  </Link>
                  <Link
                    href="/login"
                    className={`${
                      selectedLink === "Login"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    aria-current={selectedLink === "Login" ? "page" : undefined}
                    onClick={() => handleLinkClick("Login")}
                  >
                    Login
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/createRestaurant"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    aria-current={
                      selectedLink === "New restaurant" ? "page" : undefined
                    }
                    onClick={() => handleLinkClick("New restaurant")}
                  >
                    New restaurant
                  </Link>
                  <Link
                    href="/pruebaMaps"
                    className={`${
                      selectedLink === "Prueba Maps"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    onClick={() => handleLinkClick("Prueba Maps")}
                    aria-current={
                      selectedLink === "Prueba Maps" ? "page" : undefined
                    }
                  >
                    Prueba Maps
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
