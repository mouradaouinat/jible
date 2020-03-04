import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const icon = L.icon({ iconUrl: require("../assets/marker.svg") });

const MapContainer = ({ position, address }) => (
  <Map center={position} zoom={8} className="w-full h-24">
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position} icon={icon}>
      <Popup>{address.substr(0, 20).concat("...")}</Popup>
    </Marker>
  </Map>
);

export default MapContainer;
