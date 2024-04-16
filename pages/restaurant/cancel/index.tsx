import React from "react";
import CreateRestaurantResponse from "../../src/components/createRestaurantResponse/createRestaurantResponse";

const CancelPage: React.FC = () => {
  return (
    <div>
      <CreateRestaurantResponse isSuccessful={false} />
    </div>
  );
};

export default CancelPage;
