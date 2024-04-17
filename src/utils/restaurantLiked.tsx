import Image from "next/image";
import { useEffect, useState } from "react";
import RestaurantService from "../services/restaurant.service";
import LikeImg from "../../public/like.svg";
import LikedImg from "../../public/liked.svg";

interface RestaurantIsLikedProps {
  restaurantData: any;
  userData: any;
}

export default function RestaurantIsLiked({
  restaurantData,
  userData,
}: RestaurantIsLikedProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  useEffect(() => {
    if (restaurantData && userData) {
      const restaurantId: number = Number(restaurantData?.id);
      const isLiked = userData?.favoritedRestaurants?.includes(restaurantId);
      setIsLiked(isLiked);
    }
  }, [restaurantData, userData]);

  const handleLikeClick = () => {
    const restaurantId: number = Number(restaurantData?.id);
    const user_id = userData?._id;

    if (isLiked) {
      setIsLiked(false);
      RestaurantService.unLikedRestaurant(restaurantId, user_id);
    } else {
      setIsLiked(true);
      if (user_id !== undefined) {
        RestaurantService.likedRestaurant(restaurantId, user_id);
      }
    }
  };

  return (
    <button onClick={handleLikeClick}>
      <Image
        src={isLiked ? LikedImg : LikeImg}
        alt="like logo"
        width={30}
        height={30}
      />
    </button>
  );
}
