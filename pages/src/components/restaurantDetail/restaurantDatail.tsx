import ImageComponent from "../imageComponent/imageComponent";
import { useContext } from "react";
import NavBar from "../navBarComponent/navBarComponent";
import { AuthContext } from "../../context/authContext";
import restaurantIsLiked from "../../utils/restaurantLiked";
import starGenerator from "../../utils/starGenerator";
import NewCommentBox from "../newCommentBoxComponent/newCommentBox";
import RestaurantDetailButtons from "../restaurantDetailsButtons/restaurantDetailsButtons";

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

interface RestaurantDetailProps {
  restaurantData: Restaurant;
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({
  restaurantData,
}) => {
  const { userData } = useContext(AuthContext);

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
              <RestaurantDetailButtons />
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 md:ml-6">
              <NewCommentBox />
              {userData ? (
                <div>
                  <h1>Si te gusta, deja tu like!</h1>
                  {restaurantIsLiked({ restaurantData, userData })}
                </div>
              ) : (
                <div>
                  <h1>¡Inicia sesión para valorar el restaurante!</h1>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RestaurantDetail;
