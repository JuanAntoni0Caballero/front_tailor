"use client";
import React, { useState, useContext, useEffect } from "react";
import InputComponent from "../inputComponent/inputComponent";
import ButtonComponent from "../buttonComponent/buttonComponent";
import { AuthContext } from "@/context/authContext";
import ErrorAlert from "@/app/error";
import { useRouter } from "next/navigation";
import RestaurantService from "@/services/restaurant.sercice";
import Image from "next/image";
import LogoComponent from "../logoComponent/logoComponent";
import ImageComponent from "../imageComponent/imageComponent";
import NavBar from "../navBarComponent/navBarComponent";

interface RestaurantData {
  name: string;
  description: string;
  direction: string;
  image: File | null;
}

const CreateRestaurantForm: React.FC = () => {
  const [error, setError] = useState<string[]>([]);
  const [formData, setFormData] = useState<RestaurantData>({
    name: "",
    description: "",
    direction: "",
    image: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const createRestaurant = async () => {
    try {
      const response = await RestaurantService.createRestaurant(formData);
      if (response.error) {
        setError(response.error);
      } else {
        console.log("Restaurant created:", response);
        // Redirigir a la página de inicio u otra página
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
    text,
    textColor,
    placeholderColor,
    borderColor,
    require,
  }: any) => {
    return (
      <div>
        <InputComponent
          type={type}
          name={name}
          placeholder={placeholder}
          borderColor="black"
          value={value}
          onChange={onChange}
          text={text}
          textColor="black"
          placeholderColor="white"
          require={true}
        />
      </div>
    );
  };

  return (
    <section>
      <NavBar />
      <div className="bg-grey-lighter min-h-screen flex flex-col items-center justify-center">
        <div className="my-5">
          <LogoComponent color="blue" width={30} height={30} />
        </div>
        <div className="grid grid-cols-2 gap-4 w-9/12 mx-5">
          <div className="relative border border-black rounded-xl p-4 text-center">
            {!formData.image && (
              <label
                htmlFor="imageInput"
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <span className="px-4 py-2">Añadir imagen</span>
              </label>
            )}

            <input
              type="file"
              id="imageInput"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
            {formData.image && (
              <>
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <Image
                    src={URL.createObjectURL(formData.image)}
                    alt="Preview"
                    width={10000}
                    height={10000}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-white px-4 py-2 rounded-lg borde">
                  <ButtonComponent
                    type="button"
                    text={"Eliminar"}
                    textColor="White"
                    onClick={() => setFormData({ ...formData, image: null })}
                  />
                </div>
              </>
            )}
          </div>

          <div>
            {inputsGenerate({
              text: "Nombre del restaurante",
              placeholder: "Nombre del restaurante",
              type: "text",
              name: "name",
              value: formData.name,
              onChange: handleInputChange,
            })}
            {inputsGenerate({
              type: "text",
              name: "direction",
              placeholder: "Dirección",
              text: "Dirección del restaurante",
              value: formData.direction,
              onChange: handleInputChange,
            })}
            <textarea
              id="description"
              name="description"
              rows={5}
              className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Escribe información acerca del restaurante"
              value={formData.description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleInputChange(e)
              }
            ></textarea>
            <ButtonComponent
              type="button"
              onClick={createRestaurant}
              text="Guardar"
            />
          </div>
        </div>
        <div className="my-5">
          <LogoComponent color="blue" width={30} height={30} />
        </div>
        {error && <ErrorAlert error={error} />}
      </div>
    </section>
  );
};

export default CreateRestaurantForm;
