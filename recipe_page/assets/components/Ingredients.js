import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const DATA = [
  {
    id: "1",
    title: "2-3 large eggs",
  },
  {
    id: "2",
    title: "Salt, to taste",
  },
  {
    id: "3",
    title: "Pepper, to taste",
  },
  {
    id: "4",
    title: "1 tablespoon of butter or oil",
  },
  {
    id: "5",
    title: "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>
      {"\u2022"} {title}
    </Text>
  </View>
);

function Ingredients(props) {
  return (
    <View>
      <Text style={styles.title}>Ingredients</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
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
  },
});

export default Ingredients;
