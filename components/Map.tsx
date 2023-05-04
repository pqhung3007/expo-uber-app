import { GOOGLE_MAPS_APIKEY } from "@env";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlices";

export default function Map() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <MapView
      className="flex-1"
      initialRegion={{
        latitude: origin?.location.lat || 21.027763,
        longitude: origin?.location.lng || 105.83416,
        latitudeDelta: 0.01,
        longitudeDelta: 0.008,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={2}
          strokeColor="#16a34a"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
}
