import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { selectTravelTime } from "../slices/navSlices";

interface ICar {
  id: string;
  title: string;
  multiplier: number;
  image: string;
}

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://i.imgur.com/LewhnOh.png",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://i.imgur.com/kJhcU2I.png",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://i.imgur.com/KRMuzOU.png",
  },
];

export default function RideOptionsCard() {
  const [selectedCar, setSelectedCar] = useState<ICar | null>(null);
  const travelInformation = useSelector(selectTravelTime);
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View className="flex-row items-center justify-center gap-x-2">
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard" as never)}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="font-semibold py-3">
          Select a Ride - {travelInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            className={`flex-row items-center justify-between px-4  space-x-3
            ${id === selectedCar?.id ? "bg-gray-200" : ""} `}
            onPress={() => setSelectedCar(item)}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 80, height: 80, resizeMode: "contain" }}
            />
            <View className="-ml-4 flex-1">
              <Text className="text-base font-semibold">{title}</Text>
              <Text>{travelInformation?.duration?.text}</Text>
            </View>
            <Text className="text-base flex-1 text-right">
              {travelInformation?.duration?.value &&
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(
                  travelInformation?.duration?.value * multiplier * 100
                )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View className="mt-auto px-8 pb-4">
        <TouchableOpacity
          className={`w-full py-2 rounded-md ${
            !selectedCar ? "bg-gray-400" : "bg-gray-900"
          }`}
          disabled={!selectedCar}
        >
          <Text className="text-center text-white text-base">
            Choose {selectedCar?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
