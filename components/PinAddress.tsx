import { Icon } from "@rneui/themed";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PinAddress() {
  const data = [
    {
      id: "1",
      icon: "home",
      type: "Home",
      address: "Khu Ngoai Giao Doan",
    },
    {
      id: "2",
      icon: "briefcase",
      type: "Work",
      address: "71 Alley Lang Ha street",
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View className="bg-gray-100 h-px w-full" />
      )}
      renderItem={({ item: { type, address, icon } }) => (
        <TouchableOpacity className="flex-row space-x-3 items-center p-2">
          <Icon
            name={icon}
            type="ionicon"
            color="white"
            size={16}
            style={styles.icon}
          />
          <View>
            <Text className="font-semibold text-base">{type}</Text>
            <Text className="text-gray-500 text-sm">{address}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 10,
    backgroundColor: "#6b7280",
    padding: 10,
  },
});
