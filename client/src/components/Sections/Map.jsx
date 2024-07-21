import { AdvancedMarker, APIProvider, Map, Pin } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";

function MapSection({ places, hotels }) {
    const [center, setCenter] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        if (places.length > 0) {
            const [lat, lng] = places[0].geoCoordinates.split(',');
            setCenter({ lat: Number(lat), lng: Number(lng) });
        }
    }, [places]);

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_PLACES_API}>
            <Map center={center} defaultZoom={12} mapId={import.meta.env.VITE_MAP_ID}>
                {/*---*Places*---*/}
                {places.map(({ location, _id, geoCoordinates }) => {
                    const [lat, lng] = geoCoordinates.split(',');
                    const position = { lat: Number(lat), lng: Number(lng) };
                    return (
                        <AdvancedMarker key={_id} position={position} title={location}>
                            <Pin background={'#FF5733 '} glyphColor={'#000'} borderColor={'#000'} />
                        </AdvancedMarker>
                    );
                })}
                {/*---*Hotels*---*/}
                {hotels.map(({ name, _id, geoCoordinates }) => {
                    const [lat, lng] = geoCoordinates.split(',');
                    const position = { lat: Number(lat), lng: Number(lng) };
                    return (
                        <AdvancedMarker key={_id} position={position} title={name}>
                            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                        </AdvancedMarker>
                    );
                })}
            </Map>
        </APIProvider>
    );
}

export default MapSection;
