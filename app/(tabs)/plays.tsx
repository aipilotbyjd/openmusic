import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Plays = () => {
  const [showContent, setShowContent] = useState(false);

  const Header = () => {
    const categories = [
      "Home",
      "Trending",
      "popular",
      "Original",
      "Featured",
      "interesting",
    ];
    const [selectedCategory, setSelectedCategory] = useState("Home");

    const handleCategorySelection = (category: any) => {
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

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
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
            {/* Add your content here */}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Plays;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#222222",
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
    borderRadius: 12,
    marginHorizontal: 4,
    backgroundColor: "transparent",
  },
  selectedCategoryButton: {
    backgroundColor: "white",
  },
  categoryButtonText: {
    color: "white",
    fontSize: 12,
    fontFamily: "SFProTextMedium",
  },
  selectedCategoryButtonText: {
    color: "black",
    fontFamily: "SFProDisplayBold",
  },
});
