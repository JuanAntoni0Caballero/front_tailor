import React from "react";
import CreateRestaurantResponse from "../../components/createRestaurantResponse/createRestaurantResponse";
import "../../../app/globals.css";

const CancelPage: React.FC = () => {
  return (
    <div>
      <CreateRestaurantResponse isSuccessful={false} />
    </div>
  );
};

export default CancelPage;
