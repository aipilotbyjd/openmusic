import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const DisplayArtists = () => {
  const playlists = [
    {
      id: 1,
      image:
        "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/5855db642ffa6a24efd860394aad2d1b_500x500.jpg",
      name: "Rajbha Gadhvi",
    },
    {
      id: 2,
      image:
        "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/981c1d0eb5e54ddbeeb33e09c51f0e8d_500x500.jpg",
      name: "Kirtidan Gadhvi",
    },
    {
      id: 3,
      image:
        "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/3457a857669b045ee423fa5cea2dd760_500x500.jpg",
      name: "Kinjal Dave",
    },
    // Add more stories as needed
    {
      id: 4,
      image:
        "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/812be67c4e96f655616c68add82d4227_500x500.jpg",
      name: "Geeta Rabariso",
    },
    {
      id: 5,
      image:
        "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/c6dd473e19190e1aca31898b59ea4da3_500x500.jpg",
      name: "Aishwarya Majmudar",
    },
  ];
  return (
    <View>
      <View className="flex flex-row items-center justify-between ml-4">
        <Text className="font-bold text-white text-base">Top Artists</Text>
        <TouchableOpacity>
          <MaterialIcons name="keyboard-arrow-right" size={32} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8, paddingVertical: 10 }}
      >
        {playlists.map((playlist) => (
          <TouchableOpacity key={playlist.id} className="p-3">
            <Image
              source={{ uri: playlist.image }}
              className="w-28 h-28 rounded-full"
            />
            <Text className="font-bold text-white text-xs text-center">
              {playlist.name.length > 14
                ? playlist.name.substring(0, 12) + ".."
                : playlist.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default DisplayArtists;
