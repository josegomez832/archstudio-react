import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

function Map() {
    const position = [29.6053051,-96.0605501];
    const austin = [30.2901908,-97.749031];
    const houston = [29.7199489,-95.3444221];
  return (
    <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     <Marker position={houston}>
    <Popup>
        4800 Calhoun Rd,<br />Houston, TX 77004
    </Popup>
  </Marker>
    <Marker position={austin}>
    <Popup>
    Pharmacy Building,<br />2409 University Ave,<br />Austin, TX 78712
    </Popup>
  </Marker>
    </MapContainer>
  )
}

export default Map