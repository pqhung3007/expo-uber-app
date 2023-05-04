import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlices";

export default function Map() {
  const origin = useSelector(selectOrigin);
  return (
    <>
      <MapView
        className="flex-1"
        initialRegion={{
          latitude: origin?.location.lat || 21.027763,
          longitude: origin?.location.lng || 105.83416,
          latitudeDelta: 0.01,
          longitudeDelta: 0.008,
        }}
      />
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
    </>
  );
}
