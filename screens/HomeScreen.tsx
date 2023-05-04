import React from "react";
import { Image, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";

import { GOOGLE_MAPS_APIKEY } from "@env";
import Options from "../components/Options";

export default function HomeScreen() {
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
          onFail={(error) => console.error(error)}
          debounce={400}
        />

        <Options />
      </View>
    </SafeAreaView>
  );
}
