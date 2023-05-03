import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-rose-700 text-sm">
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
