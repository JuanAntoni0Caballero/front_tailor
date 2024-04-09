"use client";
import React, { useState, useContext, useEffect } from "react";
import InputComponent from "../inputComponent/inputComponent";
import ButtonComponent from "../buttonComponent/buttonComponent";
import { AuthContext } from "@/context/authContext";
import ErrorAlert from "@/app/error";
import { useRouter } from "next/navigation";
import RestaurantService from "@/services/restaurant.sercice";

interface RestaurantData {
  name: string;
  description: string;
  city: string;
}

const CreateRestaurantForm: React.FC = () => {
  const [error, setError] = useState<string[]>([]);
  const [formData, setFormData] = useState<RestaurantData>({
    name: "",
    description: "",
    city: "",
  });

  const { isLogin } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    }
  }, [isLogin]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createRestaurant = async () => {
    try {
      const response = await RestaurantService.createRestaurant(formData);
      if (response.error) {
        setError(response.error);
      } else {
        console.log("Restaurant created:", response);
        router.push("/");
      }
    } catch (err) {
      setError(["Error al crear el restaurante"]);
      console.error("Error al crear el restaurante:", err);
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
          <h1 className="mb-8 text-3xl text-center">Create Restaurant</h1>
          {inputsGenerate({
            type: "text",
            name: "name",
            placeholder: "Restaurant Name",
            value: formData.name,
            onChange: handleInputChange,
          })}
          {inputsGenerate({
            type: "text",
            name: "description",
            placeholder: "Description",
            value: formData.description,
            onChange: handleInputChange,
          })}
          {inputsGenerate({
            type: "text",
            name: "city",
            placeholder: "City",
            value: formData.city,
            onChange: handleInputChange,
          })}
          <ButtonComponent
            type={"button"}
            onClick={createRestaurant}
            text={"Create Restaurant"}
          />
        </div>
      </div>
      {error && <ErrorAlert error={error} />}
    </div>
  );
};

export default CreateRestaurantForm;
