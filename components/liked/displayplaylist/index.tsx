import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import React, { useState } from "react";
import SingleDisplay from "../singledisplay";
import { MaterialIcons } from "@expo/vector-icons";

const DisplayLiked = () => {
  const categories = ["songs", "playlists", "artists"];
  const [selectedCategory, setSelectedCategory] = useState("songs");

  const handleCategorySelection = (category: any) => {
    setSelectedCategory(category);
    // Perform any additional actions based on the selected category
  };

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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex items-center px-2 py-2">
          <View className="flex flex-row space-x-2">
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                className={`px-2 py-1 rounded-3xl ${
                  selectedCategory === category ? "bg-white" : ""
                }`}
                onPress={() => handleCategorySelection(category)}
              >
                <Text
                  className={`${
                    selectedCategory === category
                      ? "text-black font-bold"
                      : "text-white font-medium"
                  }`}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <ScrollView
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

export default DisplayLiked;
