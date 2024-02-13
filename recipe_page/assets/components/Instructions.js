import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Beat the eggs",
    content:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    id: "2",
    title: "Heat the pan",
    content:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    id: "3",
    title: " Cook the omelette",
    content:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    id: "4",
    title: "Add fillings (optional)",
    content:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    id: "5",
    title: "Fold and serve",
    content:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    id: "6",
    title: "Enjoy",
    content: "Serve hot, with additional salt and pepper if needed.",
  },
];

const Item = ({ title, content }) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>
      {"\u2022"} {title}
    </Text>
    <Text style={styles.content}>: {content}</Text>
  </View>
);

function Instructions(props) {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Instructions</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} content={item.content} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
  },
});

export default Instructions;
