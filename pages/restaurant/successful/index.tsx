import React from "react";
import CreateRestaurantResponse from "../../components/createRestaurantResponse/createRestaurantResponse";
import "../../../app/globals.css";

const SuccsesfulPage: React.FC = () => {
  return (
    <div>
      <CreateRestaurantResponse isSuccessful={true} />
    </div>
  );
};

export default SuccsesfulPage;
