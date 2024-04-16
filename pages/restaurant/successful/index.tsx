import React from "react";
import CreateRestaurantResponse from "../../../src/components/createRestaurantResponse/createRestaurantResponse";

const SuccsesfulPage: React.FC = () => {
  return (
    <div>
      <CreateRestaurantResponse isSuccessful={true} />
    </div>
  );
};

export default SuccsesfulPage;
