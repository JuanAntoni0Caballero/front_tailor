"use client";
import React, { useState, useContext } from "react";
import InputComponent from "../components/inputComponent";
import ButtonComponent from "../components/buttonComponent";
import LinkComponent from "../components/linkComponent";
import { AuthContext } from "@/context/authContext";
import AuthService from "@/services/auth.service";
import { useRouter } from "next/navigation";
import ErrorAlert from "@/app/error";

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string[]>([]);

  const { login } = useContext(AuthContext);
  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const { email, password } = formData;
      if (!email) {
        setError(["Please enter your email"]);
        return;
      }
      if (!password) {
        setError(["Please fill in all fields"]);
        return;
      }
      const response = await AuthService.login(formData);
      if (response.token) {
        login(response.token);
        router.push("/");
      } else if (response.error) {
        setError([response.error]);
      }
    } catch (err) {
      setError(["Error al iniciar sesión:"]);
      console.error("Error al iniciar sesión:", err);
    }
  };

  const inputsGenerate = ({
    type,
    name,
    placeholder,
    value,
    onChange,
  }: any) => {
    return (
      <InputComponent
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Log in</h1>
          {inputsGenerate({
            type: "text",
            name: "email",
            placeholder: "Email",
            value: formData.email,
            onChange: handleInputChange,
          })}
          {inputsGenerate({
            type: "password",
            name: "password",
            placeholder: "Password",
            value: formData.password,
            onChange: handleInputChange,
          })}
          <ButtonComponent
            type={"button"}
            onClick={handleLogin}
            text={"Log in"}
          />
        </div>
        <LinkComponent
          title={" Don't have an account yet?"}
          href={"./signup"}
          text={"Sign up"}
          className=""
        />
      </div>
      {error && <ErrorAlert error={error} />}
    </div>
  );
};

export default Login;
