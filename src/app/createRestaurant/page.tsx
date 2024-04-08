"use client";
import React, { useState, useEffect } from "react";

const CreateRestaurantForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  let service: google.maps.places.PlacesService;
  let map: google.maps.Map;

  useEffect(() => {
    if (!window.google || !window.google.maps) {
      console.log("error al cargar google");
      return;
    }
  }, [window.google.maps]);

  useEffect(() => {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 42.4139999, lng: -5.304394 },
      zoom: 7,
    });

    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const request = {
      query: searchTerm,
      fields: ["name", "geometry"],
    };

    service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(
      request,
      (
        results: google.maps.places.PlaceResult[] | null,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          setSearchResults(results);
        }
      }
    );
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchResults([]);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">New Restaurant Form</h1>
      <input
        type="text"
        placeholder="Search restaurant name with Google Places"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
      />
      <button
        onClick={handleSearch}
        className="w-full py-2 mb-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Search with Google Places
      </button>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
      {searchResults.map((result) => (
        <div key={result.name}>
          <p>{result.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CreateRestaurantForm;
