import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SingleDisplay = ({ image, name, subtitle }: any) => {
  const truncatedTitle = name.length > 14 ? name.substring(0, 15) + ".." : name;
  const truncatedSubtitle =
    subtitle.length > 14 ? subtitle.substring(0, 14) + ".." : subtitle;
  return (
    <TouchableOpacity className="flex flex-row p-2 ">
      <Image source={{ uri: image }} className="w-16 h-16 rounded-md" />
      <View className="flex pl-2">
        <Text className="font-bold text-white text-xs">{truncatedTitle}</Text>
        <Text className="text-white text-xs">{truncatedSubtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleDisplay;
