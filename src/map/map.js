import React from "react";
import { observer } from "mobx-react-lite"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { json, useParams } from "react-router-dom"
import packageStore from "../data/packageStore";
import { useEffect, useState } from "react";
import CustomMarker from "./custom-marker";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Map = observer(() => {

  let { id } = useParams()
  const [p, setPackage] = useState()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const pckg = packageStore.getById(id)
      setPackage(pckg)
      setIsLoading(true)
    }, 1000);
  }, [id])
  return (<>
    {!isLoading && <Box sx={{ display: 'flex',width:"100vw",height:"100vh",justifyContent:"center",alignItems:"center" }}>
      <CircularProgress />
    </Box>}

    {isLoading &&
      <MapContainer center={[p.lat, p.lng]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CustomMarker position={[p.lat, p.lng]} >
          <Popup>I'm package {p.name}</Popup>
        </CustomMarker>
      </MapContainer>}
  </>
  );
})

export default Map
