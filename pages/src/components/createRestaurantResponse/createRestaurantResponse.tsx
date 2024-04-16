"use client";
import React from "react";
import ButtonComponent from "../buttonComponent/buttonComponent";
import LogoComponent from "../logoComponent/logoComponent";
import NavBar from "../navBarComponent/navBarComponent";
import { useRouter } from "next/navigation";

interface CreateRestaurantResponseProps {
  isSuccessful: boolean;
}

const CreateRestaurantResponse: React.FC<CreateRestaurantResponseProps> = ({
  isSuccessful,
}) => {
  const router = useRouter();
  return (
    <section>
      <NavBar />
      <div className="bg-grey-lighter min-h-screen flex flex-col items-center justify-center">
        <div className="my-5">
          <LogoComponent color="blue" width={30} height={30} />
        </div>
        <div>
          {isSuccessful ? (
            <div className="flex flex-col items-center w-full">
              <h1 className="mb-5" style={{ color: "#264BEB" }}>
                Restaurante guardado
              </h1>
              <ButtonComponent
                type="button"
                text={"Ver restaurantes"}
                borderColor="black"
                onClick={() => {
                  router.push("/restaurant/list");
                }}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center w-full">
              <h1 className="mb-5" style={{ color: "#264BEB" }}>
                Ups, algo salió mal
              </h1>
              <ButtonComponent
                type="button"
                text={"Volver"}
                borderColor="black"
                onClick={() => {
                  router.push("/restaurant/create");
                }}
              />
            </div>
          )}
        </div>
        <div className="my-5">
          <LogoComponent color="blue" width={30} height={30} />
        </div>
      </div>
    </section>
  );
};

export default CreateRestaurantResponse;
