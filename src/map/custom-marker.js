import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import marker from "../assert/marker.png"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const CustomMarker = ({ position, children }) => {
  const map = useMap();

  const customIcon = L.icon({
    iconUrl: marker,
    iconSize: [20,30],
    iconAnchor: [25, 50],
  });

  return (
    <Marker position={position} icon={customIcon}>
      {children}
    </Marker>
  );
};

export default CustomMarker;

