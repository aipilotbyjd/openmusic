import React from "react";
import { Image, View, Dimensions } from "react-native";

const SliderList = () => {
  const image: any =
    "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/a7219b927cb21e46c5a75856f0e5aca0_924x520.jpg";

  const screenWidth = Dimensions.get("window").width;
  const bannerWidth = screenWidth - 24; // Adjust the margin/padding as needed

  return (
    <View className="p-4 flex items-center">
      <Image
        source={{ uri: image }}
        style={{ width: bannerWidth, height: 130 }}
        className="rounded-lg"
      />
    </View>
  );
};

export default SliderList;
