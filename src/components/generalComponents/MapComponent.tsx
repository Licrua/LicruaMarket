'use client'

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Создание иконки для маркера
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854878.png', // Здесь можно заменить ссылку на собственную иконку
  iconSize: [32, 32],
  iconAnchor: [16, 32],
})

// Функция для генерации случайной локации в Ростове-на-Дону
function getRandomLocation() {
  const minLat = 47.2 // Минимальная широта для Ростова-на-Дону
  const maxLat = 47.3 // Максимальная широта
  const minLng = 39.6 // Минимальная долгота
  const maxLng = 39.8 // Максимальная долгота

  const latitude = Math.random() * (maxLat - minLat) + minLat
  const longitude = Math.random() * (maxLng - minLng) + minLng

  return [latitude, longitude]
}

const MapComponent = () => {
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    47.222078, 39.720358,
  ]) // Координаты центра Ростова-на-Дону

  useEffect(() => {
    // Устанавливаем случайную позицию маркера при загрузке компонента
    setMarkerPosition(getRandomLocation() as [number, number])
  }, [])

  return (
    <MapContainer
      center={[47.222078, 39.720358]} // Центр карты (Ростов-на-Дону)
      zoom={13}
      className="h-[200px] mb-10 w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={markerPosition} icon={customIcon}>
        <Popup>LicruaShop</Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapComponent
