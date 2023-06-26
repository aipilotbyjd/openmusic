import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import SingleDisplay from "../singledisplay";
import { MaterialIcons } from "@expo/vector-icons";

const DisplayPlaylist = () => {
  const playlists = [
    {
      id: 1,
      image:
        "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/5855db642ffa6a24efd860394aad2d1b_500x500.jpg",
      name: "Bollywood Top 40",
      subtitle: "Rajbha Gadhavi",
    },
    {
      id: 2,
      image:
        "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/981c1d0eb5e54ddbeeb33e09c51f0e8d_500x500.jpg",
      name: "Emma",
      subtitle: "Emma and Sun the",
    },
    {
      id: 3,
      image:
        "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/3457a857669b045ee423fa5cea2dd760_500x500.jpg",
      name: "Alex",
      subtitle: "Alex would",
    },
    // Add more stories as needed
    {
      id: 4,
      image:
        "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/812be67c4e96f655616c68add82d4227_500x500.jpg",
      name: "t series",
      subtitle: "T series series",
    },
    {
      id: 5,
      image:
        "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/c6dd473e19190e1aca31898b59ea4da3_500x500.jpg",
      name: "Block",
      subtitle: "Block Title",
    },
  ];
  return (
    <View>
      <View className="flex flex-row items-center justify-between ml-4">
        <Text className="font-bold text-white text-base">Top Playlists</Text>
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
          <SingleDisplay
            key={playlist.id}
            image={playlist.image}
            name={playlist.name}
            subtitle={playlist.subtitle}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default DisplayPlaylist;
