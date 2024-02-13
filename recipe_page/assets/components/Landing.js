import React from "react";

import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Total",
    content: "Approximately 10 minutes",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Preparation",
    content: "5 minutes",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Cooking",
    content: "5 minutes",
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

function Landing(props) {
  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={require("../images/image-omelette.jpeg")}
      />
      <Text style={styles.title}>Simple Omelette Recipe</Text>
      <Text style={styles.text}>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </Text>
      <SafeAreaView style={styles.containerPrepTime}>
        <Text style={styles.titlePrepTime}>Preparation time</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} content={item.content} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "blue",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  containerPrepTime: {
    backgroundColor: "hsl(330, 100%, 98%)",
    margin: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  titlePrepTime: {
    fontSize: 20,
    fontWeight: "bold",
    color: "hsl(332, 51%, 32%)",
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

export default Landing;
