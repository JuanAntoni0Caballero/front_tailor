import React from "react";
import ImageComponent from "../../src/components/imageComponent/imageComponent";
import MapImage from "../../../public/map_img.svg";
import RestaurantList from "../../src/components/restaurantListComponent/restaurantList";
import NavBar from "../../src/components/navBarComponent/navBarComponent";
import RestaurantService from "../../src/services/restaurant.service";

interface ListPageProps {
  restaurantData: any[];
  error: string[];
}

const ListPage: React.FC<ListPageProps> = ({ restaurantData, error }) => {
  return (
    <section>
      <NavBar />
      <div className="md:flex md:flex-row  flex flex-col mt-10 justify-between m-10 items-start">
        <div className="w-11/12 flex items-start md:w-1/2">
          <ImageComponent
            width={700}
            height={800}
            alt="Welcome image"
            src={MapImage}
          />
        </div>
        <div className="w-11/12 flex justify-center md:w-1/2">
          <RestaurantList restaurantData={restaurantData} error={error} />
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  try {
    const response = await RestaurantService.getAllRestaurant();
    if (response.error) {
      return { props: { error: response.error } };
    } else {
      return { props: { restaurantData: response } };
    }
  } catch (err) {
    return { props: { error: ["Error al recuperar los restaurantes"] } };
  }
}

export default ListPage;
