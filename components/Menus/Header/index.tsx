import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const image = require("../assets/images/logo.png");
  const avatar: string =
    "https://yt3.ggpht.com/SBra9X0UPsNzyDjGcvN4iw2pb5Qku_3qFd1figMt48J7rUdU8mJYHPHAx0t6d0E6wLcUU__nZjg=s68-c-k-c0x00ffffff-no-rj";

  return (
    <View
      className="flex flex-row items-center justify-between px-4 py-2 pt-6"
      style={{ backgroundColor: "#282828" }}
    >
      <Image source={image} style={{ width: 150, height: 40 }} />

      <View className="flex flex-row items-center space-x-4">
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="md-notifications-outline" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={{ uri: avatar }}
            style={{ width: 30, height: 30, borderRadius: 15 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
