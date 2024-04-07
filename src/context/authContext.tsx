"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

interface UserData {
  id: number;
  fullName: string;
  email: string;
}

interface AuthContextType {
  token: string;
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
  login: (authoToken: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: "",
  userData: null,
  setUserData: () => {},
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string>("");
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("authoToken");
    if (storedToken) {
      setToken(storedToken);
      getUserData(storedToken);
    }
  }, []);

  const getUserData = async (authoToken: string) => {
    console.log("getUserData");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/verify`,
        {
          headers: {
            Authorization: `Bearer ${authoToken}`,
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setUserData(userData);
      } else {
        window.location.href = "/login";
        console.error("Error al obtener los datos del usuario");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const login = (authoToken: string) => {
    if (!authoToken) {
      console.error("Error al hacer login");
    } else {
      console.log("authoToken ==>", authoToken);
      localStorage.setItem("authoToken", authoToken);
      setToken(authoToken);
      getUserData(authoToken);
    }
  };

  const logout = () => {
    localStorage.removeItem("authoToken");
    setToken("");
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, userData, setUserData, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
