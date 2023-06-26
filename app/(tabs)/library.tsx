import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import History from "../../components/history";
import DisplayPlaylist from "../../components/saved/displayplaylist";
import DisplayLiked from "../../components/liked/displayplaylist";
import DisplaySaved from "../../components/saved/displayplaylist";
import DisplayDown from "../../components/downloaded/displayplaylist";

const Library = () => {
  const categories = ["ઇતિહાસ", "મનપસંદ", "સાચવેલ", "ડાઉનલોડ કરેલ"];
  const [selectedCategory, setSelectedCategory] = useState("ઇતિહાસ");

  const handleCategorySelection = (category: any) => {
    setSelectedCategory(category);
    // Perform any additional actions based on the selected category
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case "ઇતિહાસ":
        return <History />;
      case "મનપસંદ":
        return <DisplayLiked />;
      case "સાચવેલ":
        return <DisplaySaved />;
      case "ડાઉનલોડ કરેલ":
        return <DisplayDown />;
      default:
        return <DisplayPlaylist />;
    }
  };

  return (
    <View style={{ backgroundColor: "#222222" }}>
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
      <ScrollView className="mb-12">{renderContent()}</ScrollView>
    </View>
  );
};

export default Library;
