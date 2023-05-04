import React from "react";
import { Image, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

import { GOOGLE_MAPS_APIKEY } from "@env";
import Options from "../components/Options";
import { setDestination, setOrigin } from "../slices/navSlices";

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-4">
        <Image
          style={{
            width: 90,
            height: 90,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://i.imgur.com/miaXRpv.png",
          }}
        />

        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 16,
            },
          }}
          placeholder="Where from?"
          query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
          nearbyPlacesAPI="GooglePlacesSearch"
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry?.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          onFail={(error) => console.error(error)}
          debounce={400}
          minLength={2}
          enablePoweredByContainer={false}
        />

        <Options />
      </View>
    </SafeAreaView>
  );
}
