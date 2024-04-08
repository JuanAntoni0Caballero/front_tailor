"use client";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";

interface GoogleMapsLoaderProps {
  apiKey: string;
}

const GoogleMapsLoader: React.FC<GoogleMapsLoaderProps> = ({ apiKey }) => {
  useEffect(() => {
    if (!apiKey) {
      console.error("API key is not provided");
      return;
    }

    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
    });

    loader.load().then(() => {
      console.log("Google Maps API loaded successfully");
    });
  }, [apiKey]);

  return null;
};

export default GoogleMapsLoader;
