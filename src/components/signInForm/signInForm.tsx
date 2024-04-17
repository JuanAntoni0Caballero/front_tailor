"use client";
import React, { useState } from "react";
import InputComponent from "../inputComponent/inputComponent";
import ButtonComponent from "../buttonComponent/buttonComponent";
import LinkComponent from "../linkComponent/linkComponent";
import AuthService from "../../services/auth.service";
import ErrorAlert from "../errorComponent/error";
import { useRouter } from "next/navigation";
import LogoComponent from "../logoComponent/logoComponent";

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
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = async () => {
    if (formData.fullName && formData.email) {
      setShowEmail(false);
      setShowPassword(true);
    } else {
      setError(["Rellene los campos antes de continuar"]);
    }
  };
  const createAccount = async () => {
    const { password, confirm_password } = formData;
    if (password !== confirm_password) {
      setError(["Las contraseñas no coinciden"]);
    } else {
      try {
        const response = await AuthService.signUp(formData);
        if (response.data) {
          router.push("/auth/login");
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
    text,
    type,
    name,
    placeholder,
    value,
    onChange,
    bgColor,
  }: any) => {
    return (
      <InputComponent
        text={text}
        textColor="white"
        type={type}
        name={name}
        placeholder={placeholder}
        placeholderColor="white"
        borderColor="white"
        value={value}
        onChange={onChange}
        require={true}
        bgColor="inherit"
      />
    );
  };

  return (
    <div
      style={{ backgroundColor: "#264BEB" }}
      className="p-10 w-full rounded-xl mb-10 flex flex-col justify-between"
    >
      <LogoComponent color="white" width={150} height={150} />
      {showEmail ? (
        <ButtonComponent
          type={"button"}
          onClick={() => {
            router.back();
          }}
          text={"back"}
          borderColor="white"
        />
      ) : (
        <ButtonComponent
          type={"button"}
          onClick={() => {
            setShowEmail(true);
            setShowPassword(false);
          }}
          text={"back"}
          borderColor="white"
        />
      )}

      {showEmail && (
        <div className="pt-4">
          {inputsGenerate({
            text: "Email:",
            type: "text",
            name: "email",
            placeholder: "Añade tu email",
            value: formData.email,
            onChange: handleInputChange,
          })}
          {inputsGenerate({
            text: "Nombre de usuario:",
            type: "text",
            name: "fullName",
            placeholder: "Añade tu nombre",
            value: formData.fullName,
            onChange: handleInputChange,
          })}
        </div>
      )}
      {showPassword && (
        <>
          {inputsGenerate({
            text: "Crea una contraseña nueva:",
            type: "password",
            name: "password",
            placeholder: "Password",
            value: formData.password,
            onChange: handleInputChange,
          })}
          {inputsGenerate({
            text: "Confirma tu contraseña:",
            type: "password",
            name: "confirm_password",
            placeholder: "Password",
            value: formData.confirm_password,
            onChange: handleInputChange,
          })}
        </>
      )}
      {showEmail ? (
        <ButtonComponent
          type={"button"}
          onClick={handleNextStep}
          text={"Siguiente"}
          textColor="white"
          borderColor="white"
        />
      ) : (
        <ButtonComponent
          type={"button"}
          onClick={createAccount}
          text={"Finalizar"}
          textColor="white"
          borderColor="white"
        />
      )}

      <LinkComponent
        title={" ¿Ya tienes cuenta? "}
        href={"/auth/login"}
        text={"Inicia sesión"}
      />
      {error && <ErrorAlert error={error} />}
    </div>
  );
};

export default SignUpForm;
