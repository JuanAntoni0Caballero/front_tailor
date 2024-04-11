"use client";
import React, { useEffect, useState } from "react";
import RestaurantService from "@/services/restaurant.sercice";
import ErrorAlert from "@/app/error";
import { useRouter } from "next/navigation";
const RestaurantList: React.FC = () => {
  const [error, setError] = useState<string[]>([]);
  const [data, setData] = useState<object[]>([]);
  console.log("la data ==>", data);
  const router = useRouter();
  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    try {
      const response = await RestaurantService.getAllRestaurant();
      if (response.error) {
        setError(response.error);
      } else {
        setData(response);
      }
    } catch (err) {
      setError(["Error al crear el restaurante"]);
      console.error("Error al crear el restaurante:", err);
    }
  };
  return (
    <div>
      <h1>Restaurant list</h1>
      {error && <ErrorAlert error={error} />}
    </div>
  );
};

export default RestaurantList;
