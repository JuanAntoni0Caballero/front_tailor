import React from "react";
import RestaurantForm from "../../../src/components/restaurantFrom/restaurantForm";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import RestaurantService from "../../../src/services/restaurant.service";
import ErrorAlert from "../../../src/components/errorComponent/error";

interface Review {
  id: number;
  name: string;
  comments: string;
  rating: number;
}
interface Restaurant {
  id: number;
  image: any;
  name: string;
  address: string;
  reviews: Review[];
}

interface RestaurantDetailPageProps {
  restaurantData: Restaurant | null;
  error: string[];
}

const EditRestaurantPage: React.FC<RestaurantDetailPageProps> = ({
  restaurantData,
  error,
}) => {
  return (
    <div>
      {restaurantData && <RestaurantForm restaurantEditData={restaurantData} />}
      {error && <ErrorAlert error={error} />}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { restaurantId } = context.query as ParsedUrlQuery;
  const id: number = Number(restaurantId);
  try {
    const response = await RestaurantService.getOneRestaurant(id);
    if (!response.restaurant) {
      return {
        props: {
          restaurantData: null,
          error: response.errorMessages,
        },
      };
    }
    return {
      props: {
        restaurantData: response.restaurant,
        error: [],
      },
    };
  } catch (err) {
    return {
      props: {
        restaurantData: null,
        error: ["Error al obtener el restaurante"],
      },
    };
  }
};

export default EditRestaurantPage;
