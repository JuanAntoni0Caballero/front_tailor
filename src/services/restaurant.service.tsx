interface RestaurantData {
  id: number | undefined;
  name: string;
  description: string;
  address: string;
  image: File | null;
}

const createRestaurant = async (
  restaurantData: RestaurantData
): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/restaurant/createRestaurant`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ restaurantData }),
      }
    );
    if (!response.ok) {
      console.log("Error en la respuesta del servidor al crear un restaurant");
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

const getAllRestaurant = async (): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/restaurant/getAllRestaurant`
    );
    if (!response.ok) {
      console.log(
        "Error en la respuesta del servidor al obtener los restaurantes"
      );
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

const getOneRestaurant = async (restaurant_id: number): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/restaurant/getOneRestaurant/${restaurant_id}`
    );
    if (!response.ok) {
      console.log(
        "Error en la respuesta del servidor al recuperar el restaurant"
      );
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

const editRestaurant = async (
  restaurant_id: number | undefined,
  formData: RestaurantData
): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/restaurant/editRestaurant/${restaurant_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (!response.ok) {
      console.log("Error en la respuesta del servidor al editar el restaurant");
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteRestaurant = async (restaurant_id: number): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/restaurant/deleteRestaurant/${restaurant_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      console.log(
        "Error en la respuesta del servidor al eliminar el restaurant"
      );
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};

const likedRestaurant = async (
  restaurant_id: number,
  user_id: string
): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/restaurant/likedRestaurant/${restaurant_id}/${user_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      console.log(
        "Error en la respuesta del servidor al eliminar el restaurant"
      );
    }
    return response;
  } catch (err) {
    console.log("error ==>", err);
  }
};

const unLikedRestaurant = async (
  restaurant_id: number,
  user_id: string
): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/restaurant/unlikedRestaurant/${restaurant_id}/${user_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      console.log(
        "Error en la respuesta del servidor al eliminar el restaurant"
      );
    }
    return response;
  } catch (err) {
    console.log("error ==>", err);
  }
};

const restaurantService = {
  createRestaurant,
  getAllRestaurant,
  getOneRestaurant,
  editRestaurant,
  deleteRestaurant,
  likedRestaurant,
  unLikedRestaurant,
};

export default restaurantService;
