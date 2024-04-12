import RestaurantDetail from "@/components/restaurantDetail/restaurantDatail";

interface RestaurantDetailPageProps {
  params: { id: string };
}

const RestaurantDetailPage: React.FC<RestaurantDetailPageProps> = ({
  params,
}) => {
  return <RestaurantDetail params={params} />;
};

export default RestaurantDetailPage;
