// import RestaurantDetail from "../../../app/components/restaurantDetail/restaurantDatail";
// import "../../../app/globals.css";

// interface RestaurantDetailPageProps {
//   params: { id: number };
// }

// const RestaurantDetailPage: React.FC<RestaurantDetailPageProps> = ({
//   params,
// }) => {
//   console.log("params ==>", params);
//   return <RestaurantDetail params={params} />;
// };

// export default RestaurantDetailPage;

import RestaurantDetail from "../../components/restaurantDetail/restaurantDatail";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import RestaurantService from "../../services/restaurant.sercice";
import ErrorAlert from "../../error";

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

const RestaurantDetailPage: React.FC<RestaurantDetailPageProps> = ({
  restaurantData,
  error,
}) => {
  return (
    <section className="min-h-screen">
      <div className="min-h-full relative m-10 flex flex-col justify-center items-center">
        {restaurantData && <RestaurantDetail restaurantData={restaurantData} />}
        {error && <ErrorAlert error={error} />}
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as ParsedUrlQuery;
  const restaurantId: number = Number(id);

  try {
    const response = await RestaurantService.getOneRestaurant(restaurantId);
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

export default RestaurantDetailPage;
