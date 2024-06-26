"use client";
import React, { useEffect, useState } from "react";
import InputComponent from "../inputComponent/inputComponent";
import ButtonComponent from "../buttonComponent/buttonComponent";
import ErrorAlert from "../errorComponent/error";
import RestaurantService from "../../services/restaurant.service";
import Image from "next/image";
import LogoComponent from "../logoComponent/logoComponent";
import NavBar from "../navBarComponent/navBarComponent";
import { useRouter } from "next/navigation";

interface RestaurantData {
  id: number | undefined;
  name: string;
  description: string;
  address: string;
  image: File | string;
}

interface RestaurantFormProps {
  restaurantEditData?: RestaurantData;
}

const RestaurantForm: React.FC<RestaurantFormProps> = ({
  restaurantEditData,
}) => {
  const router = useRouter();
  const [error, setError] = useState<string[]>([]);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<File | string>("");
  const restaurant_id = restaurantEditData?.id;

  useEffect(() => {
    if (restaurantEditData && restaurantEditData.image) {
      setFormData({
        id: restaurantEditData.id,
        name: restaurantEditData.name,
        address: restaurantEditData.address,
        image: restaurantEditData.image,
        description: "",
      });
      setImagePreviewUrl(restaurantEditData.image);
    }
  }, [restaurantEditData]);

  const [formData, setFormData] = useState<RestaurantData>({
    id: restaurantEditData?.id,
    name: "",
    description: "",
    address: "",
    image: "",
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
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  const createRestaurant = async () => {
    try {
      const response = await RestaurantService.createRestaurant(formData);
      if (response.error) {
        router.push("/restaurant/cancel");
        setError(response.error);
      } else {
        router.push("/restaurant/successful");
      }
    } catch (err) {
      setError(["Error al crear el restaurante"]);
      console.error("Error al crear el restaurante:", err);
    }
  };
  const editRestaurant = async () => {
    try {
      const response = await RestaurantService.editRestaurant(
        restaurant_id,
        formData
      );
      console.log("la response ==>", response);
      if (response.error) {
        router.push("/restaurant/cancel");
        setError(response.error);
      } else {
        router.push("/restaurant/successful");
      }
    } catch (err) {
      setError(["Error al editar el restaurante"]);
      console.error("Error al editar el restaurante:", err);
    }
  };

  const inputsGenerate = ({
    type,
    name,
    placeholder,
    value,
    onChange,
    text,
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
          bgColor="inherit"
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
                    src={
                      typeof formData.image === "string"
                        ? formData.image
                        : URL.createObjectURL(formData.image)
                    }
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
                    onClick={() => setFormData({ ...formData, image: "" })}
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
              value: formData.address,
              onChange: handleInputChange,
            })}
            <textarea
              id="description"
              name="description"
              rows={5}
              style={{ backgroundColor: "inherit" }}
              className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Escribe información acerca del restaurante"
              value={formData.description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleInputChange(e)
              }
            ></textarea>
            {restaurantEditData ? (
              <ButtonComponent
                type="button"
                onClick={editRestaurant}
                text="Editar"
              />
            ) : (
              <ButtonComponent
                type="button"
                onClick={createRestaurant}
                text="Guardar"
              />
            )}
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

export default RestaurantForm;
