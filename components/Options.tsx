import { Icon } from "@rneui/themed";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://i.imgur.com/LewhnOh.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://i.imgur.com/UvzqqY3.png",
    screen: "EatsScreen",
  },
];

export default function Options() {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity className="p-4 m-2 bg-slate-400/60 w-36 rounded-lg">
          <View className="justify-center items-start">
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text className="mt-2 font-semibold text-base">{item.title}</Text>
            <Icon
              iconStyle={{
                padding: 5,
                borderRadius: 50,
                backgroundColor: "black",
                marginTop: 10,
              }}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
