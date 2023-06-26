import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Audio, AVPlaybackStatus } from "expo-av";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fixHeight = windowHeight / 3; // Adjust the height values as needed

const AudioPlay = (audiopost: any) => {
  // State variables
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Load the audio file
    const loadAudio = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          { uri: "https://domainback.000webhostapp.com/thalapathy.mp3" },
          { shouldPlay: false, isLooping: true },
          updatePlaybackStatus
        );
        setSound(sound);
      } catch (error) {
        console.error("Error loading audio:", error);
      }
    };

    // Call the function to load the audio file
    loadAudio();

    // Clean up the audio resources
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const updatePlaybackStatus = async (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setDuration(status.durationMillis || 0);
      setPosition(status.positionMillis || 0);
      setIsPlaying(status.isPlaying || false);
    }
  };

  const playAudio = async () => {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const pauseAudio = async () => {
    if (sound && isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const seekAudio = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value);
    }
  };

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds - minutes * 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleToggleLike = () => {
    setIsLiked((prevState) => !prevState);
  };

  const handleToggleFollow = () => {
    setIsFollowing((prevState) => !prevState);
  };

  const handleToggleRepeat = () => {
    setIsRepeat((prevState) => !prevState);
  };
  return (
    <>
      <LinearGradient
        colors={["#222222", "#222222"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 1]}
        className="absolute flex-row items-center px-4 pb-24"
        style={{ width: windowWidth, height: fixHeight }}
      >
        <View className="flex-1">
          <TouchableOpacity
            onPress={handleToggleFollow}
            className="flex border border-white w-36 rounded-3xl"
          >
            <Text
              className="text-white text-[12px] px-2 text-center"
              style={{ fontFamily: "LilitaOne" }}
            >
              Watch Full Song
            </Text>
          </TouchableOpacity>
          <View className="flex">
            <Text
              className="text-white text-lg"
              style={{ fontFamily: "LilitaOne" }}
            >
              {audiopost && audiopost.audiopost && audiopost.audiopost.name
                ? audiopost.audiopost.name
                : "unknown name"}
            </Text>
          </View>
          <View className="flex flex-row space-x-2 items-center py-2">
            <Text
              className="text-white text-xs"
              style={{ fontFamily: "LilitaOne" }}
            >
              {audiopost && audiopost.audiopost && audiopost.audiopost.name
                ? audiopost.audiopost.name
                : "unknown artist"}
            </Text>
            <TouchableOpacity
              onPress={handleToggleFollow}
              className="flex border border-white rounded-3xl"
            >
              <Text
                className="text-white text-[10px] px-2 text-center"
                style={{ fontFamily: "LilitaOne" }}
              >
                {isFollowing ? "Following" : "Follow"}
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row space-x-8 items-center">
              <TouchableOpacity onPress={handleToggleLike}>
                <Ionicons
                  name="md-heart"
                  size={24}
                  color={isLiked ? "red" : "white"}
                />
              </TouchableOpacity>
              <Octicons name="comment" size={24} color="white" />
              <Ionicons name="ios-share-social-sharp" size={24} color="white" />
            </View>
            <View className="flex flex-row space-x-8 items-center">
              <MaterialCommunityIcons
                name="cloud-download-outline"
                size={24}
                color="white"
              />
              <TouchableOpacity onPress={handleToggleRepeat}>
                {isRepeat ? (
                  <MaterialIcons name="repeat-one" size={24} color="white" />
                ) : (
                  <MaterialIcons name="repeat" size={24} color="white" />
                )}
              </TouchableOpacity>
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
          </View>
          <View className="flex flex-row items-center px-1 mb-[-60]">
            <View className="flex w-1/10">
              <TouchableOpacity
                onPress={isPlaying ? pauseAudio : playAudio}
                disabled={!sound}
              >
                {isPlaying ? (
                  <FontAwesome5 name="pause" size={24} color="white" />
                ) : (
                  <FontAwesome5 name="play" size={24} color="white" />
                )}
              </TouchableOpacity>
            </View>
            <View className="flex w-9/10">
              <Slider
                style={{
                  width: windowWidth * 0.86,
                  height: windowHeight * 0.06,
                }}
                minimumValue={0}
                maximumValue={duration}
                minimumTrackTintColor="#fff8dc"
                maximumTrackTintColor="#f8f8ff"
                value={position}
                onSlidingComplete={seekAudio}
                disabled={!sound}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default AudioPlay;

const styles = StyleSheet.create({});
