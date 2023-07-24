'use client';

import { useJsApiLoader, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { useCallback, useState } from 'react';

export default function MapCard(params: { center: any }) {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
  const { center } = params;
  const containerStyle = {
    width: '100%',
    height: '100%',
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key ?? '',
  });
  const t = useTranslations('ContactUs')

  const [map, setMap] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const handleMarkerClick = () => {
    setIsOpen(true);
  };

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="map-card">
      <GoogleMap
        mapContainerClassName="contact-map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}>
        <Marker position={center} onClick={() => setIsOpen(true)}>
          {isOpen && (
            <InfoWindow
              onCloseClick={() => {
                setIsOpen(false);
              }}>
              <Link
                target="_blank"
                href={`https://maps.google.com/?q=${center.lat},${center.lng}`}
                className=" text-primary-500 o text-lg ">
                {t('get_direction')}
              </Link>
            </InfoWindow>
          )}
        </Marker>
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}
