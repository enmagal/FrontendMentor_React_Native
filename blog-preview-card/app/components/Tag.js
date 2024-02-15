import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import {
  Figtree_600SemiBold,
  Figtree_800ExtraBold,
} from "@expo-google-fonts/figtree";
import { useFonts } from "expo-font";

function Tag(props) {
  const { onPress, title = "Save" } = props;
  const [fontsLoaded] = useFonts({ Figtree_600SemiBold, Figtree_800ExtraBold });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>Learning</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tagText: {
    backgroundColor: colors.yellow,
    marginVertical: 5,
    padding: 8,
    fontFamily: "Figtree_800ExtraBold",
    fontSize: 14,
  },
});

export default Tag;
