"use client";
import ImageComponent from "@/components/imageComponent/imageComponent";
import { useEffect, useState, useContext } from "react";
import RestaurantService from "@/services/restaurant.sercice";
import ErrorAlert from "@/app/error";
import NavBar from "../navBarComponent/navBarComponent";
import BlueStar from "../../../public/blue_star.svg";
import WhiteStar from "../../../public/white_star.svg";
import Image from "next/image";
import ButtonComponent from "../buttonComponent/buttonComponent";
import { AuthContext } from "@/context/authContext";
import LikeImg from "../../../public/like.svg";
import LikedImg from "../../../public/liked.svg";

interface Review {
  id: number;
  name: string;
  comments: string;
  rating: number;
}

interface Restaurant {
  _id: number;
  image: any;
  name: string;
  address: string;
  reviews: Review[];
}

interface RestaurantDetailProps {
  params: { id: number };
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ params }) => {
  const [restaurantData, setRestaurantData] = useState<Restaurant | null>(null);
  const [error, setError] = useState<string[]>([]);
  const { userData } = useContext(AuthContext);
  const user_id = userData?._id;
  useEffect(() => {
    getRestaurant();
  }, [params]);

  const getRestaurant = async () => {
    if (params) {
      const restaurantId: number = Number(params.id);
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
  const restaurantIsLiked = () => {
    if (params && user_id) {
      const restaurantId: number = Number(params.id);

      const isLiked = userData?.favoritedRestaurants?.includes(restaurantId);
      return isLiked ? (
        <button
          onClick={() => {
            RestaurantService.unLikedRestaurant(restaurantId, user_id);
          }}
        >
          <Image src={LikedImg} alt="like logo" width={30} height={30} />
        </button>
      ) : (
        <button
          onClick={() => {
            if (user_id !== undefined) {
              RestaurantService.likedRestaurant(restaurantId, user_id);
            }
          }}
        >
          <Image src={LikeImg} alt="like logo" width={30} height={30} />
        </button>
      );
    }
  };

  const starGenerator = (rating: number) => {
    if (!rating) {
      return (
        <div>
          <h1>No hay rating para mostrar</h1>
        </div>
      );
    }

    const numOfStar = rating;
    const blueStars = Array.from({ length: numOfStar }, (_, i) => (
      <Image key={i} src={BlueStar} alt="Blue Star" width={20} height={20} />
    ));

    const whiteStars = Array.from({ length: 5 - numOfStar }, (_, i) => (
      <Image
        key={numOfStar + i}
        src={WhiteStar}
        alt="White Star"
        width={20}
        height={20}
      />
    ));

    return (
      <div className="flex">
        {blueStars}
        {whiteStars}
      </div>
    );
  };

  return (
    <section className="min-h-screen">
      <NavBar />
      <div className="min-h-full relative m-10 flex flex-col justify-center items-center">
        {restaurantData && (
          <div className="w-full relative" style={{ height: "25vh" }}>
            <ImageComponent
              src={restaurantData?.image}
              alt="restaurant image"
              className="object-cover w-full h-full rounded-xl"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold">{restaurantData?.name}</h1>
              <h1 className="text-xl">{restaurantData?.address}</h1>
            </div>
          </div>
        )}
        {restaurantData && (
          <div className="flex flex-col-reverse md:flex-row mx-16 mt-6 w-11/12">
            <div className="w-11/12 mx-auto text-gray-800">
              <div>
                <h3 className="text-l">
                  Lorem ipsum dolor sit amet consectetur. At vel elementum amet
                  est nulla cras turpis. Fringilla ornare massa eu a
                  sollicitudin vestibulum auctor risus. Elementum quam sit neque
                  quis. A vestibulum consectetur tincidunt vitae.Lorem ipsum
                  dolor sit amet consectetur. At vel elementum amet est nulla
                  cras turpis. Fringilla ornare massa eu a sollicitudin
                  vestibulum auctor risus. Elementum quam sit neque quis. A
                  vestibulum consectetur tincidunt vitae.Lorem ipsum dolor sit
                  amet consectetur. At vel elementum amet est nulla cras turpis.
                  Fringilla ornare massa eu a sollicitudin vestibulum auctor
                  risus. Elementum quam sit neque quis. A vestibulum consectetur
                  tincidunt vitae.
                </h3>
              </div>

              <div className="mt-6">
                {restaurantData?.reviews.map((review, i) => (
                  <div
                    key={i}
                    style={{ borderColor: "#264BEB", borderBottomWidth: "1px" }}
                    className="mb-4 flex py-5"
                  >
                    <div className="w-1/6">
                      <h3 className="text-2xl font-bold">{review.name}</h3>
                    </div>
                    <div className="flex-col justify-between w-5/6">
                      <div className="py-2 flex justify-end">
                        {starGenerator(review.rating)}
                      </div>
                      <p className="text-gray-600 py-2">{review.comments}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <ButtonComponent
                  text={"Editar"}
                  textColor="Black"
                  borderColor="Black"
                  type="button"
                  onClick={() => {
                    console.log("Editando");
                  }}
                />
                <ButtonComponent
                  text={"Eliminar"}
                  textColor="Black"
                  borderColor="Black"
                  type="button"
                  onClick={() => {
                    console.log("Eliminando");
                  }}
                />
              </div>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 md:ml-6">
              <div className="border border-black rounded-2xl p-4">
                <div className="flex">
                  <Image src={WhiteStar} width={20} height={20} alt="star" />
                  <Image src={WhiteStar} width={20} height={20} alt="star" />
                  <Image src={WhiteStar} width={20} height={20} alt="star" />
                  <Image src={WhiteStar} width={20} height={20} alt="star" />
                  <Image src={WhiteStar} width={20} height={20} alt="star" />
                </div>
                <h3>Escribe tu comentario sobre el restaurante</h3>
                <button className="border border-black rounded-2xl p-2 mt-2">
                  Enviar
                </button>
              </div>
              <div>
                <h1>Si te gusta, deja tu like!</h1>
                {restaurantIsLiked()}
              </div>
            </div>
          </div>
        )}
      </div>
      {error && <ErrorAlert error={error} />}
    </section>
  );
};

export default RestaurantDetail;
