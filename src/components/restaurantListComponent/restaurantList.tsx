"use client";

import React, { useEffect, useState } from "react";
import RestaurantService from "@/services/restaurant.sercice";
import ErrorAlert from "@/app/error";
import { useRouter } from "next/navigation";
import RestaurantCard from "../restaurantCard/restaurantCard";

interface Restaurant {
  name: string;
  description: string;
}

const RestaurantList: React.FC = () => {
  const [error, setError] = useState<string[]>([]);
  const [restaurantData, setRestaurantData] = useState<Restaurant[]>([]);

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
        setRestaurantData(response);
      }
    } catch (err) {
      setError(["Error al crear el restaurante"]);
      console.error("Error al crear el restaurante:", err);
    }
  };
  return (
    <div>
      <RestaurantCard restaurantData={restaurantData} />
      {error && <ErrorAlert error={error} />}
    </div>
  );
};

export default RestaurantList;
