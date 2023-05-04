import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Map from "../components/Map";

export default function MapScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        <TouchableOpacity
          className="bg-slate-100 absolute top-16 left-4 z-20 rounded-full shadow-md p-3"
          onPress={() => navigation.goBack()}
        >
          <Icon name="menu" />
        </TouchableOpacity>

        <View className="h-1/2">
          <Map />
        </View>
        <View className="h-1/2"></View>
      </View>
    </SafeAreaView>
  );
}
