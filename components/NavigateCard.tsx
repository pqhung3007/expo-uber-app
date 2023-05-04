import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";

import { setDestination } from "../slices/navSlices";

export default function NavigateCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            styles={InputBoxStyles}
            placeholder="Enter pick-up location"
            query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
            nearbyPlacesAPI="GooglePlacesSearch"
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry?.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard" as never);
            }}
            onFail={(error) => console.error(error)}
            fetchDetails={true}
            debounce={400}
            minLength={2}
            enablePoweredByContainer={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const InputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 15,
    flex: 0,
  },
  textInputContainer: {
    paddingHorizontal: 15,
    paddingBottom: 0,
  },
  textInput: {
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    fontSize: 16,
  },
});
