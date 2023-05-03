import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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

        <Options />
      </View>
    </SafeAreaView>
  );
}
