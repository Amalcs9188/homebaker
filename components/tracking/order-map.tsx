"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue with Next.js
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const deliveryIcon = L.icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Auto-zoom to include both markers
function ChangeView({ driverLocation, customerLocation }: any) {
  const map = useMap();
  
  useEffect(() => {
    const bounds = L.latLngBounds([
      [driverLocation.lat, driverLocation.lng],
      [customerLocation.lat, customerLocation.lng]
    ]);
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map, driverLocation, customerLocation]);
  
  return null;
}

interface OrderMapProps {
  driverLocation: { lat: number; lng: number };
  customerLocation: { lat: number; lng: number };
}

export default function OrderMap({ driverLocation, customerLocation }: OrderMapProps) {
  return (
    <div className="h-80 rounded-md overflow-hidden">
      <MapContainer
        center={[driverLocation.lat, driverLocation.lng]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <ChangeView driverLocation={driverLocation} customerLocation={customerLocation} />
        
        <Marker position={[driverLocation.lat, driverLocation.lng]} icon={deliveryIcon}>
          <Popup>
            Your delivery driver is here
          </Popup>
        </Marker>
        
        <Circle 
          center={[driverLocation.lat, driverLocation.lng]}
          radius={100}
          pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.1 }}
        />
        
        <Marker position={[customerLocation.lat, customerLocation.lng]} icon={icon}>
          <Popup>
            Your delivery location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}