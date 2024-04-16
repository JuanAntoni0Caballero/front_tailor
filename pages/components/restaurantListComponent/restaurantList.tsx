// "use client";
// import React from "react";
// import ImageComponent from "../imageComponent/imageComponent";
// import Link from "next/link";
// import starImage from "../../../public/star.svg";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import RestaurantService from "@/services/restaurant.sercice";
// import ErrorAlert from "@/app/error";

// interface Review {
//   rating: number;
// }

// interface RestaurantData {
//   name: string;
//   address: string;
//   reviews: Review[];
//   image: string;
//   id: number;
// }

// const RestaurantList: React.FC = () => {
//   const [error, setError] = useState<string[]>([]);
//   const [restaurantData, setRestaurantData] = useState<RestaurantData[]>([]);

//   useEffect(() => {
//     getRestaurant();
//   }, []);

//   const getRestaurant = async () => {
//     try {
//       const response = await RestaurantService.getAllRestaurant();
//       if (response.error) {
//         setError(response.error);
//       } else {
//         setRestaurantData(response);
//       }
//     } catch (err) {
//       setError(["Error al crear el restaurante"]);
//     }
//   };
//   const averageReviews = (reviews: Review[]) => {
//     if (reviews.length === 0)
//       return (
//         <div>
//           <h1>No hay valoraciones</h1>
//         </div>
//       );
//     const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
//     const average = Math.ceil(totalRating / reviews.length);

//     const starImages = [];
//     for (let i = 0; i < average; i++) {
//       starImages.push(
//         <Image width={25} height={25} src={starImage} alt="Star" key={i} />
//       );
//     }

//     return <div className="flex">{starImages}</div>;
//   };

//   return (
//     <div className="h-auto w-11/12 flex flex-col items-center">
//       {restaurantData?.map((restaurant, i) => {
//         return (
//           <Link
//             href={`/restaurant/${restaurant.id}`}
//             key={i}
//             className="flex items-center w-3/4 mb-4"
//           >
//             <div className="mr-4">
//               <ImageComponent
//                 src={restaurant.image}
//                 alt={"restaurant image"}
//                 width={150}
//                 height={150}
//                 className="rounded-lg"
//               />
//             </div>
//             <div className="ml-4">
//               <div className="mb-2">
//                 <h1 className="text-xl font-bold mb-1 sm:text-lg md:text-xl lg:text-2xl">
//                   {restaurant.name}
//                 </h1>
//                 <p className="text-gray-600 text-base sm:text-sm md:text-base lg:text-lg">
//                   {restaurant.address}
//                 </p>
//               </div>
//               <div className="flex flex-row items-center justify-between">
//                 {averageReviews(restaurant.reviews)}
//                 <p className="text-base md:text-sm">
//                   ({restaurant.reviews.length} comentarios)
//                 </p>
//               </div>
//             </div>
//           </Link>
//         );
//       })}
//       {error && <ErrorAlert error={error} />}
//     </div>
//   );
// };

// export default RestaurantList;

import React, { useState, useEffect } from "react";
import ImageComponent from "../imageComponent/imageComponent";
import Link from "next/link";
import starImage from "../../../public/star.svg";
import Image from "next/image";
import ErrorAlert from "../../error";

interface Review {
  rating: number;
}

interface RestaurantData {
  name: string;
  address: string;
  reviews: Review[];
  image: string;
  id: number;
}

interface RestaurantListProps {
  restaurantData: RestaurantData[];
  error: string[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurantData,
  error,
}) => {
  const averageReviews = (reviews: Review[]) => {
    if (reviews.length === 0)
      return (
        <div>
          <h1>No hay valoraciones</h1>
        </div>
      );
    const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    const average = Math.ceil(totalRating / reviews.length);

    const starImages = [];
    for (let i = 0; i < average; i++) {
      starImages.push(
        <Image width={25} height={25} src={starImage} alt="Star" key={i} />
      );
    }

    return <div className="flex">{starImages}</div>;
  };

  return (
    <div className="h-auto w-11/12 flex flex-col items-center">
      {restaurantData?.map((restaurant, i) => {
        return (
          <Link
            href={`/restaurant/${restaurant.id}`}
            key={i}
            className="flex items-center w-3/4 mb-4"
          >
            <div className="mr-4">
              <ImageComponent
                src={restaurant.image}
                alt={"restaurant image"}
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
            <div className="ml-4">
              <div className="mb-2">
                <h1 className="text-xl font-bold mb-1 sm:text-lg md:text-xl lg:text-2xl">
                  {restaurant.name}
                </h1>
                <p className="text-gray-600 text-base sm:text-sm md:text-base lg:text-lg">
                  {restaurant.address}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between">
                {averageReviews(restaurant.reviews)}
                <p className="text-base md:text-sm">
                  ({restaurant.reviews.length} comentarios)
                </p>
              </div>
            </div>
          </Link>
        );
      })}
      {error && <ErrorAlert error={error} />}
    </div>
  );
};

export default RestaurantList;
