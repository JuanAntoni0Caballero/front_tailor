"use client";
import React, { useState } from "react";
import InputComponent from "../inputComponent/inputComponent";
import ButtonComponent from "../buttonComponent/buttonComponent";
import LinkComponent from "../linkComponent/linkComponent";
import AuthService from "@/services/auth.service";
import ErrorAlert from "@/app/error";
// import ErrorAlert from "@/app/error";
import { useRouter } from "next/navigation";

interface SignUpData {
  fullName: string;
  email: string;
  password: string;
  confirm_password: string;
}

const SignUpForm: React.FC = () => {
  const [error, setError] = useState<string[]>([]);
  const [formData, setFormData] = useState<SignUpData>({
    fullName: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createAccount = async () => {
    const { password, confirm_password } = formData;
    if (password !== confirm_password) {
      setError(["Las contraseñas no coinciden"]);
    } else {
      try {
        const response = await AuthService.signUp(formData);
        if (response.data) {
          router.push("/login");
        } else if (response.error) {
          setError([response.error]);
        }
      } catch (err) {
        setError(["Error al crear la cuenta:"]);
        console.error("Error al crear la cuenta:", err);
      }
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
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          {inputsGenerate({
            type: "text",
            name: "fullName",
            placeholder: "Full Name",
            value: formData.fullName,
            onChange: handleInputChange,
          })}
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
          {inputsGenerate({
            type: "password",
            name: "confirm_password",
            placeholder: "Confirm Password",
            value: formData.confirm_password,
            onChange: handleInputChange,
          })}
          <ButtonComponent
            type={"button"}
            onClick={createAccount}
            text={"Create Account"}
          />
        </div>
        <LinkComponent
          title={" Already have an account?"}
          href={"../login/"}
          text={"Log in"}
          className=""
        />
      </div>
      {error && <ErrorAlert error={error} />}
    </div>
  );
};

export default SignUpForm;
