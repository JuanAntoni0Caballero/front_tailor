import Image from "next/image";
import RestaurantService from "../services/restaurant.sercice";
import LikeImg from "../../../public/like.svg";
import LikedImg from "../../../public/liked.svg";
interface RestaurantIsLikedProps {
  restaurantData: any;
  userData: any;
}

export default function restaurantIsLiked({
  restaurantData,
  userData,
}: RestaurantIsLikedProps) {
  if (restaurantData && userData) {
    const restaurantId: number = Number(restaurantData?.id);
    const user_id = userData?._id;
    const isLiked = userData?.favoritedRestaurants?.includes(restaurantId);
    return isLiked ? (
      <button
        onClick={() => {
          RestaurantService.unLikedRestaurant(restaurantId, user_id);
        }}
      >
        <Image src={LikedImg} alt="like logo" width={30} height={30} />
      </button>
    ) : (
      <button
        onClick={() => {
          if (user_id !== undefined) {
            RestaurantService.likedRestaurant(restaurantId, user_id);
          }
        }}
      >
        <Image src={LikeImg} alt="like logo" width={30} height={30} />
      </button>
    );
  }
}
