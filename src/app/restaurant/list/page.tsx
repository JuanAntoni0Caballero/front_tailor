import React from "react";
import ImageComponent from "@/components/imageComponent/imageComponent";
import MapImage from "../../../../public/map_img.svg";
import RestaurantList from "@/components/restaurantListComponent/restaurantList";
import NavBar from "@/components/navBarComponent/navBarComponent";

const MapPage: React.FC = () => {
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
          <RestaurantList />
        </div>
      </div>
    </section>
  );
};

export default MapPage;
