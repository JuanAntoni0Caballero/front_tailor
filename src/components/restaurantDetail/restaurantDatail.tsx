"use client";
import ImageComponent from "@/components/imageComponent/imageComponent";
import { useEffect, useState } from "react";
import RestaurantService from "@/services/restaurant.sercice";
import ErrorAlert from "@/app/error";
import NavBar from "../navBarComponent/navBarComponent";

interface Review {
  id: string;
  name: string;
  comment: string;
  rating: number;
}

interface Restaurant {
  id: string;
  image: string;
  name: string;
  address: string;
  reviews: Review[];
}

interface RestaurantDetailProps {
  params: { id: string };
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ params }) => {
  const [restaurantData, setRestaurantData] = useState<Restaurant | null>(null);
  const [error, setError] = useState<string[]>([]);
  console.log("restaurantData ==>", restaurantData);

  useEffect(() => {
    getRestaurant();
  }, [params]);

  const getRestaurant = async () => {
    if (params) {
      const restaurantId = params.id;
      try {
        const response = await RestaurantService.getOneRestaurant(restaurantId);
        if (!response.restaurant) {
          setError(response.errorMessages);
          return;
        }
        setRestaurantData(response.restaurant);
      } catch (err) {
        setError(["Error al obtener el restaurante"]);
      }
    }
  };

  if (!restaurantData) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="min-h-screen">
      <NavBar />
      <div className="relative m-10">
        {/* Image */}
        <div className="w-full h-60 relative">
          <ImageComponent
            src={restaurantData?.image}
            alt="restaurant image"
            className="object-cover w-full h-full rounded-xl"
            width={1000}
            height={1000}
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold">{restaurantData?.name}</h1>
            <h1 className="text-xl">{restaurantData?.address}</h1>
          </div>
        </div>
        {/* Description */}
        <div className="mt-6 text-gray-800">
          <h3 className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            autem asperiores dignissimos fugiat hic voluptas sapiente libero,
            laudantium molestias inventore aspernatur tempore itaque aperiam
            nulla minima est placeat ea iure.
          </h3>
        </div>
        {/* Reviews */}
        <div className="mt-6">
          {restaurantData?.reviews.map((review, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-bold">{review.name}</h3>
              <div className="flex justify-between">
                <h4 className="text-gray-600">Rating: {review.rating}</h4>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {error && <ErrorAlert error={error} />}
    </section>
  );
};

export default RestaurantDetail;
