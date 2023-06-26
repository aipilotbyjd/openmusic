import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import StorySingle from "../storysingle";

const StoryList = () => {
  const stories = [
    {
      id: 1,
      image:
        "https://yt3.ggpht.com/ytc/AGIKgqPAl3A8_-KRf7MfN3oCr-NbQNY0A0By7tenqALJdA=s68-c-k-c0x00ffffff-no-rj",
      name: "John",
    },
    {
      id: 2,
      image:
        "https://yt3.ggpht.com/Q5wDZkznd7zSD2RWT3HU9sqbwNkkkJtXgTxulaJoLAEl-U9-gbcIm6Of1rASj9RBotOedTih=s68-c-k-c0x00ffffff-no-rj",
      name: "Emma",
    },
    {
      id: 3,
      image:
        "https://yt3.ggpht.com/VaLfhmjNN3XY3Bft1hl0GK9xQh-beoYlopkfCs3nNI91g8O4PXOw2jjYzlsYoDCf7XCN5MKx=s68-c-k-c0x00ffffff-no-rj",
      name: "Alex",
    },
    // Add more stories as needed
    {
      id: 4,
      image:
        "https://yt3.ggpht.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s68-c-k-c0x00ffffff-no-rj",
      name: "t series",
    },
    {
      id: 5,
      image:
        "https://yt3.ggpht.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s68-c-k-c0x00ffffff-no-rj",
      name: "Block",
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 10 }}
    >
      {stories.map((story) => (
        <StorySingle key={story.id} image={story.image} name={story.name} />
      ))}
    </ScrollView>
  );
};

export default StoryList;

const styles = StyleSheet.create({});
