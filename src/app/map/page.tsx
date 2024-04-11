import React from "react";
import PageComponent from "@/components/pageComponent/pageComponent";
import ImageComponent from "@/components/imageComponent/imageComponent";
import MapImage from "../../../public/map_img.svg";
import RestaurantList from "@/components/restaurantListComponent/restaurantList";
import NavBar from "@/components/navBarComponent/navBarComponent";

const MapPage: React.FC = () => {
  return (
    <div className="max-h-screen">
      <NavBar />
      <PageComponent
        leftSide={
          <ImageComponent
            width={700}
            height={800}
            alt="Welcome image"
            src={MapImage}
          />
        }
        rightSide={<RestaurantList />}
      />
    </div>
  );
};

export default MapPage;