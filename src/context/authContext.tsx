"use client";
import { useRouter } from "next/navigation";
import { createContext, useState, useEffect, ReactNode } from "react";

interface UserData {
  _id: string;
  fullName: string;
  email: string;
  favoritedRestaurants: number[];
}

interface AuthContextType {
  token: string;
  isLogin: boolean;
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
  login: (tailorToken: string) => void;
  logout: () => void;
  checkAuthentication: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: "",
  isLogin: false,
  userData: null,
  setUserData: () => {},
  login: () => {},
  logout: () => {},
  checkAuthentication: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();
  useEffect(() => {
    const storedToken = localStorage.getItem("tailorToken");
    if (storedToken) {
      setToken(storedToken);
      getUserData(storedToken);
    } else {
      checkAuthentication();
      return;
    }
  }, []);

  const checkAuthentication = () => {
    if (!token) {
      router.push("/welcome");
    }
  };

  const getUserData = async (tailorToken: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/verify`,
        {
          headers: {
            Authorization: `Bearer ${tailorToken}`,
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setUserData(userData);
      } else {
        router.push("/welcome");
        return;
      }
    } catch (error) {
      router.push("/welcome");
      return;
    }
  };

  const login = (tailorToken: string) => {
    if (!tailorToken) {
      console.error("Error al hacer login");
    } else {
      localStorage.setItem("tailorToken", tailorToken);
      setToken(tailorToken);
      getUserData(tailorToken);
      setIsLogin(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("tailorToken");
    setToken("");
    setUserData(null);
    setIsLogin(false);
    router.push("/welcome");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLogin,
        userData,
        setUserData,
        login,
        logout,
        checkAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
