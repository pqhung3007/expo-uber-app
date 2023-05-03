import { GOOGLE_MAPS_APIKEY } from "@env";
import React from "react";
import { Image, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";

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

        <Text>{GOOGLE_MAPS_APIKEY}</Text>

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
          onPress={(data, details = null) => console.log(data, details)}
          onFail={(error) => console.error(error)}
          debounce={400}
        />
        {/*  <Options /> */}
      </View>
    </SafeAreaView>
  );
}
