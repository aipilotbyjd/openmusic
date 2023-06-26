import { Image, Text, View } from "react-native";
import React from "react";

const SliderSingle = ({ image, title, description }: any) => {
  return <Image source={{ uri: image }} className="w-30 h-30" />;
};

export default SliderSingle;
