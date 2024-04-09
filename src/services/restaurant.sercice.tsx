interface RestaurantData {
  name: string;
  description: string;
  city: string;
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

// const getMarkets = async (): Promise<any> => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/market/getMarkets`
//     );
//     if (!response.ok) {
//       console.log("Error en la respuesta del servidor al obtener los markets");
//     } else {
//       const data = await response.json();
//       return data;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getOneMarket = async (market_id: string): Promise<any> => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/market/getOneMarket/${market_id}`
//     );
//     if (!response.ok) {
//       console.log("Error en la respuesta del servidor al recuperar el market");
//     } else {
//       const code = await response.json();
//       return code;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const editMarket = async (
//   market_id: string,
//   marketData: RestaurantData
// ): Promise<any> => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/market/editMarket/${market_id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(marketData),
//       }
//     );
//     if (!response.ok) {
//       console.log("Error en la respuesta del servidor al editar el market");
//     } else {
//       const code = await response.json();
//       return code;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const deleteMarket = async (market_id: string): Promise<any> => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/market/deleteMarket/${market_id}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     if (!response.ok) {
//       console.log("Error en la respuesta del servidor al eliminar el market");
//     }
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };

const restaurantService = {
  createRestaurant,
  //   getMarkets,
  //   getOneMarket,
  //   editMarket,
  //   deleteMarket,
};

export default restaurantService;
