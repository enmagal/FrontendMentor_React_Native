import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Figtree_600SemiBold,
  Figtree_800ExtraBold,
} from "@expo-google-fonts/figtree";
import { useFonts } from "expo-font";

function User(props) {
  const { onPress, title = "Save" } = props;
  const [fontsLoaded] = useFonts({ Figtree_600SemiBold, Figtree_800ExtraBold });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.user}>
      <Image
        style={styles.avatar}
        source={require("../assets/images/image-avatar.webp")}
      />
      <Text style={styles.name}>Greg Hooper</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  name: {
    fontFamily: "Figtree_800ExtraBold",
    fontSize: 16,
  },
});

export default User;
