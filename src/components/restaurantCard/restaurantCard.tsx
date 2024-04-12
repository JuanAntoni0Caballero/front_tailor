"use client";
import React from "react";
import ImageComponent from "../imageComponent/imageComponent";
import Link from "next/link";

interface Review {
  rating: number;
}

interface RestaurantData {
  id: string;
  image: string;
  name: string;
  address: string;
  reviews: Review[];
  description: string;
}

interface RestaurantCardProps {
  restaurantData: RestaurantData[];
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurantData }) => {
  const averageReviews = (reviews: Review[]) => {
    if (reviews.length === 0) return 0;

    const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    const average = totalRating / reviews.length;
    return Math.ceil(average);
  };

  return (
    <section className="max-h-screen">
      <div className="mt-10 pt-5">
        {restaurantData?.map((restaurant, i) => {
          return (
            <Link
              href={`/restaurant/${restaurant.id}`}
              key={i}
              className="flex items-center mb-4"
            >
              <div className="mr-4">
                <ImageComponent
                  src={restaurant.image}
                  alt={"restaurant image"}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </div>
              <div>
                <div className="mb-2">
                  <h1 className="text-xl font-bold mb-1">{restaurant.name}</h1>
                  <p className="text-gray-600">{restaurant.address}</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2">
                    Average Rating: {averageReviews(restaurant.reviews)}
                  </p>
                  <p>({restaurant.reviews.length} comentarios)</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RestaurantCard;
