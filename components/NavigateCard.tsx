import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";

import { setDestination } from "../slices/navSlices";
import PinAddress from "./PinAddress";

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

        <PinAddress />
      </View>

      <View className="flex-row justify-evenly py-2 pb-8 mt-auto border-t border-gray-100">
        <TouchableOpacity
          className="flex-row space-x-2 justify-center items-center px-4 py-3 rounded-full bg-black"
          onPress={() => navigation.navigate("RideOptionsCard" as never)}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row space-x-2 justify-center items-center px-4 py-2 rounded-full bg-black">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="white"
            size={16}
          />
          <Text className="text-white text-center">Eats</Text>
        </TouchableOpacity>
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
