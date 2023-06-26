import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const StorySingle = ({ image, name }: any) => {
  return (
    <View className="mr-4">
      <View className="w-16 h-16 rounded-full border-2 border-orange-500 overflow-hidden">
        <Image source={{ uri: image }} className="w-full h-full" />
      </View>
      <Text className="mt-2 text-xs text-center text-white font-semibold">
        {name}
      </Text>
    </View>
  );
};

export default StorySingle;
