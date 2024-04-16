import RestaurantDetail from "../../restaurantDetail/restaurantDatail";

interface RestaurantDetailPageProps {
  params: { id: number };
}

const RestaurantDetailPage: React.FC<RestaurantDetailPageProps> = ({
  params,
}) => {
  return <RestaurantDetail params={params} />;
};

export default RestaurantDetailPage;
