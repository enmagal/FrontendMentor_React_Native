import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Calories",
    content: "277kcal",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Carbs",
    content: "0g",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Protein",
    content: "20g",
  },
  {
    id: "4",
    title: "Fat",
    content: "22g",
  },
];

const Item = ({ title, content }) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>{title}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

function Nutrition(props) {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Nutrition</Text>
      <Text>
        The table below shows nutritional values per serving without the
        additional fillings.
      </Text>
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

export default Nutrition;
