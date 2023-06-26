import { ScrollView, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import DisplayPlaylist from "../../components/playlist/displayplaylist";
import DisplayArtists from "../../components/artists";

const ExploreSection = () => {
  return (
    <ScrollView style={{ backgroundColor: "#222222" }}>
      <View>
        <View className="flex">
          <View className="flex flex-grow pt-2">
            <View className="flex flex-row bg-gray-700 items-center justify-center py-4 my-2 mx-3 rounded-lg">
              <MaterialCommunityIcons
                name="music-circle-outline"
                size={30}
                color="white"
              />
              <Text className="text-white text-lg font-bold ml-2">
                New Releases
              </Text>
            </View>
            <View className="flex flex-row bg-gray-700 items-center justify-center py-4 my-2 mx-3 rounded-lg">
              <MaterialCommunityIcons
                name="chart-box-outline"
                size={30}
                color="white"
              />
              <Text className="text-white text-lg font-bold ml-2">Charts</Text>
            </View>
            <View className="flex flex-row bg-gray-700 items-center justify-center py-4 my-2 mx-3 rounded-lg">
              <MaterialIcons name="mood" size={30} color="white" />
              <Text className="text-white text-lg font-bold ml-2">Moods</Text>
            </View>
          </View>
        </View>
        <View className="flex pt-2">
          <DisplayPlaylist />
        </View>
        <View className="flex">
          <DisplayArtists />
        </View>
      </View>
    </ScrollView>
  );
};

export default ExploreSection;
