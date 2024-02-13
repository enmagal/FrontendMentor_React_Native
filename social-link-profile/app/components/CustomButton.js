import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import colors from "../config/colors";

export default function CustomButton(props) {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.grey,
    width: "80%",
    marginVertical: 7,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
});
