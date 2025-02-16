'use client'

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Создание иконки для маркеров
const customIcon = new L.Icon({
  iconUrl: '/icons8-shop-32.png', // Здесь можно заменить ссылку на собственную иконку
  iconSize: [32, 32],
  iconAnchor: [16, 32],
})

const MapComponent = () => {
  return (
    <MapContainer
      center={[47.222078, 39.720358]} // Центр карты (Ростов-на-Дону)
      zoom={13}
      className="h-[500px] max-h-[500px] mb-10 w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      
      {/* Маркер для Мечникова 81/3 */}
      <Marker position={[47.225329, 39.735636]} icon={customIcon}>
        <Popup>LicruaShop - Мечникова 81/3</Popup>
      </Marker>
      
      {/* Маркер для Юфимцева 12 */}
      <Marker position={[47.217934, 39.729810]} icon={customIcon}>
        <Popup>LicruaShop - Юфимцева 12</Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapComponent
