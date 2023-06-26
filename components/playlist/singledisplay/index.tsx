import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SingleDisplay = ({ image, name, subtitle }: any) => {
  const truncatedTitle = name.length > 14 ? name.substring(0, 15) + ".." : name;
  const truncatedSubtitle =
    subtitle.length > 14 ? subtitle.substring(0, 14) + ".." : subtitle;
  return (
    <TouchableOpacity className="p-2">
      <Image source={{ uri: image }} className="w-32 h-32 rounded-md" />
      <Text className="font-bold text-white text-xs">{truncatedTitle}</Text>
      <Text className="text-white text-xs">{truncatedSubtitle}</Text>
    </TouchableOpacity>
  );
};

export default SingleDisplay;
