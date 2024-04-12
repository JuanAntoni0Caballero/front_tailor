"use client";
import React, { useState, useContext } from "react";
import InputComponent from "../inputComponent/inputComponent";
import ButtonComponent from "../buttonComponent/buttonComponent";
import LinkComponent from "../linkComponent/linkComponent";
import { AuthContext } from "@/context/authContext";
import AuthService from "@/services/auth.service";
import { useRouter } from "next/navigation";
import ErrorAlert from "@/app/error";
import LogoComponent from "../logoComponent/logoComponent";

interface LoginData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
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
        router.push("/map");
      } else if (response.error) {
        setError([response.error]);
      }
    } catch (err) {
      setError(["Error al iniciar sesión:"]);
      console.error("Error al iniciar sesión:", err);
    }
  };

  const inputsGenerate = ({
    text,
    type,
    name,
    placeholder,
    value,
    onChange,
  }: any) => {
    return (
      <InputComponent
        text={text}
        textColor="white"
        type={type}
        name={name}
        placeholder={placeholder}
        placeholderColor="white"
        value={value}
        onChange={onChange}
        require={true}
      />
    );
  };

  return (
    <div
      style={{ backgroundColor: "#264BEB" }}
      className="p-10 w-full h-auto rounded-xl m-10 flex flex-col justify-between"
    >
      <LogoComponent color="white" width={150} height={150} />
      <LinkComponent
        title={"¿No tienes cuenta? "}
        href={"/auth/signin"}
        text={"Regístrate"}
      />
      {inputsGenerate({
        text: "Email:",
        type: "email",
        name: "email",
        placeholder: "Email",
        value: formData.email,
        onChange: handleInputChange,
      })}
      {inputsGenerate({
        text: "Contraseña:",
        type: "password",
        name: "password",
        placeholder: "Password",
        value: formData.password,
        onChange: handleInputChange,
      })}
      <ButtonComponent
        type={"button"}
        onClick={handleLogin}
        text={"Entrar"}
        textColor="white"
      />
      {error && <ErrorAlert error={error} />}
    </div>
  );
};

export default LoginForm;
