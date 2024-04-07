import React from "react";

interface CreateRestaurantFormProps {
  // Define los tipos de las props si es necesario
}

const CreateRestaurantForm: React.FC<CreateRestaurantFormProps> = () => {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">New Restaurant Form</h1>
      {/* Input de texto para buscar nombre de restaurante con Google Places */}
      <input
        type="text"
        placeholder="Search restaurant name with Google Places"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
      />
      {/* Botón para buscar nombre de restaurante con Google Places */}
      {/* <button className="w-full py-2 mb-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Search with Google Places
      </button> */}
      {/* Inputs que se rellenarán con los datos del restaurante */}
      {/* Aquí debes agregar los inputs necesarios con sus respectivas clases de Tailwind CSS */}
      <input
        type="text"
        placeholder="Restaurant Name"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
      />
      {/* Botón para guardar el restaurante */}
      <button className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600">
        Save Restaurant
      </button>
    </div>
  );
};

export default CreateRestaurantForm;
