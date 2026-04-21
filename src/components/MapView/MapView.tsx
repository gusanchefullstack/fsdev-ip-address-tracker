import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { IpData } from '../../types/ip';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

const customIcon = new L.Icon({
  iconUrl: '/icon-location.svg',
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

interface MapRecenterProps {
  lat: number;
  lng: number;
}

function MapRecenter({ lat, lng }: MapRecenterProps) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 13);
  }, [lat, lng, map]);
  return null;
}

interface MapViewProps {
  ipData: IpData | null;
}

export function MapView({ ipData }: MapViewProps) {
  const lat = ipData?.location.lat ?? 51.505;
  const lng = ipData?.location.lng ?? -0.09;

  return (
    <div className="map-wrapper" aria-label="Map showing IP location">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        zoomControl={false}
        className="map-container"
        attributionControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]} icon={customIcon} />
        {ipData && <MapRecenter lat={lat} lng={lng} />}
      </MapContainer>
    </div>
  );
}
