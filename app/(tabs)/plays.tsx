import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import {
  AntDesign,
  FontAwesome,
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { AVPlaybackStatus, Audio } from "expo-av";

const screenWidth = Dimensions.get("window").width;
const imageHeight = screenWidth * 0.7;

const Plays: React.FC = () => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const animatedValue = useState(new Animated.Value(0))[0];

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [isPlaying]);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const stopAnimation = () => {
    animatedValue.stopAnimation();
  };

  const rotateInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const Header: React.FC = () => {
    const categories: string[] = [
      "Home",
      "Trending",
      "Popular",
      "Original",
      "Featured",
      "Interesting",
    ];
    const [selectedCategory, setSelectedCategory] = useState<string>("Home");

    const handleCategorySelection = (category: string) => {
      setSelectedCategory(category);
      // Perform any additional actions based on the selected category
    };

    const renderCategoryButtons = () => {
      return categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.categoryButton,
            selectedCategory === category && styles.selectedCategoryButton,
          ]}
          onPress={() => handleCategorySelection(category)}
        >
          <Text
            style={[
              styles.categoryButtonText,
              selectedCategory === category &&
                styles.selectedCategoryButtonText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ));
    };

    return (
      <View style={styles.headerContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryButtonsContainer}>
            {renderCategoryButtons()}
          </View>
        </ScrollView>
      </View>
    );
  };

  const handleHeaderPress = () => {
    setShowContent(!showContent);
  };

  const screenWidth = Dimensions.get("window").width;
  const imageHeight = screenWidth * 0.7;

  const playAudio = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: "https://domainback.000webhostapp.com/thalapathy.mp3" },
        { isLooping: true },
        onPlaybackStatusUpdate
      );
      setSound(sound);
      if (isPlaying) {
        await sound.playAsync();
      } else {
        await sound.playFromPositionAsync(position);
      }
      setIsPlaying(true);
    } catch (error) {
      console.log("Error playing audio: ", error);
    }
  };

  const pauseAudio = async () => {
    try {
      if (sound) {
        await sound.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log("Error pausing audio: ", error);
    }
  };

  const seekAudio = (value: number) => {
    if (sound) {
      sound.setPositionAsync(value);
      setPosition(value);
    }
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setDuration(status.durationMillis || 0);
      setPosition(status.positionMillis || 0);
    }
  };

  const handleToggleFollow = () => {
    setIsFollowing((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.forYouContainer}>
        <TouchableOpacity onPress={handleHeaderPress}>
          <View style={styles.header}>
            <Text style={styles.headerText}>For You</Text>
            <AntDesign
              name={showContent ? "up" : "down"}
              size={16}
              color="white"
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>
        {showContent && (
          <View>
            <Header />
          </View>
        )}
      </View>
      <View style={{ height: imageHeight, paddingTop: 20 }}>
        <Animated.Image
          source={{
            uri: "https://p16.resso.me/img/tos-alisg-v-2102/7c1085959d3a430f9ccd6415f22a3e6d~c5_500x500.jpg",
          }}
          style={[
            styles.imageStyle,
            { transform: [{ rotate: rotateInterpolation }] },
          ]}
          resizeMode="contain"
          className="rounded-lg"
        />
      </View>
      <View style={styles.lyrix}>
        <Text
          style={{ fontFamily: "SFProTextBold" }}
          className="text-white text-center"
        >
          Mere zakhmon ko zara aur hara
        </Text>
        <Text
          style={{ fontFamily: "SFProTextBold" }}
          className=" text-gray-300 text-center"
        >
          Oh bedard aa yaar bedard
        </Text>
      </View>
      <View style={{ height: 50, marginHorizontal: 20 }}>
        <Image
          source={{
            uri: "https://p16.resso.me/img/tos-alisg-v-2102/7c1085959d3a430f9ccd6415f22a3e6d~c5_500x500.jpg",
          }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
      <View>
        <View style={styles.audioPlayerContainer}>
          <View style={styles.fullSong}>
            <TouchableOpacity
              onPress={handleToggleFollow}
              className="flex flex-row border items-center justify-center border-white rounded-lg w-40"
            >
              <FontAwesome5 name="fingerprint" size={14} color="white" />
              <Text
                className="text-white text-[10px] pl-2"
                style={{ fontFamily: "SFProTextBold" }}
              >
                Watch Full Song
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.songName}>
            <Text className="text-white text-base" style={styles.songText}>
              Apna Bana Le (From "Bhediya")
            </Text>
          </View>
          <View style={styles.artistName}>
            <Text className="text-white text-xs" style={styles.artistText}>
              Rajbha Gadhavi
            </Text>
            <TouchableOpacity
              onPress={handleToggleFollow}
              className="flex border border-white rounded-3xl ml-2"
            >
              <Text
                className="text-white text-[10px] px-2 text-center"
                style={{ fontFamily: "SFProTextBold" }}
              >
                {isFollowing ? "Following" : "Follow"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.audioControlContainer}>
            <TouchableOpacity onPress={isPlaying ? pauseAudio : playAudio}>
              <Ionicons
                name={isPlaying ? "ios-pause" : "ios-play"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <View style={styles.audioSliderContainer}>
              <Slider
                style={styles.audioSlider}
                minimumValue={0}
                maximumValue={duration}
                value={position}
                minimumTrackTintColor="#ffffff"
                maximumTrackTintColor="#7e7e7e"
                thumbTintColor="#ffffff"
                onValueChange={seekAudio}
              />
            </View>
            <Text style={{ color: "#ffffff" }}>
              {Math.floor(position / 60000)}:
              {Math.floor((position % 60000) / 1000)}
            </Text>
          </View>
          <View style={styles.audioControlContainer}>
            <View style={styles.audiobuttons}>
              <TouchableOpacity>
                <Ionicons name="heart" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="comment-processing"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="share-alt" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.audiobuttons}>
              <TouchableOpacity>
                <MaterialIcons name="cloud-download" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="repeat-one" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Plays;

const colors = [
  "#0F4C81",
  "#8A2BE2",
  "#FF6B35",
  "#008080",
  "#FFD700",
  "#000000",
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    paddingTop: 18,
  },
  forYouContainer: {
    height: 80, // Adjust the height according to your requirement
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerText: {
    color: "white",
    fontFamily: "SFProDisplayBold",
    fontSize: 12,
    marginRight: 6,
  },
  arrowIcon: {
    paddingTop: 2,
  },
  headerContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  categoryButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    borderRadius: 20,
  },
  selectedCategoryButton: {
    backgroundColor: "white",
  },
  categoryButtonText: {
    color: "white",
    fontFamily: "SFProDisplayBold",
    fontSize: 12,
  },
  selectedCategoryButtonText: {
    color: "#222222",
  },
  imageStyle: {
    width: "70%",
    height: "100%",
    alignSelf: "center",
  },
  audioPlayerContainer: {
    flexDirection: "column",
    padding: 16,
  },
  audioControlContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },
  audioSliderContainer: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  audioSlider: {
    width: "100%",
    height: 40,
  },
  audiobuttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },
  songName: {
    marginBottom: 10,
  },
  artistName: {
    flexDirection: "row",
    marginBottom: 10,
  },
  songText: {
    fontFamily: "SFProDisplayBold",
  },
  artistText: {
    fontFamily: "SFProDisplayBold",
  },
  lyrix: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  fullSong: {},
});
