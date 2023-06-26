import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import StoryList from "../../components/stories/storylist";
import SliderList from "../../components/slider/sliderlist";
import DisplayPlaylist from "../../components/playlist/displayplaylist";
import Feed from "../../components/feed";
import DisplayArtists from "../../components/artists";

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View className="flex" style={{ backgroundColor: "#222222" }}>
        <StoryList />
        <SliderList />
        <Feed />
        <DisplayPlaylist />
        <Feed />
        <DisplayArtists />
        <Feed />
      </View>
    </ScrollView>
  );
}
