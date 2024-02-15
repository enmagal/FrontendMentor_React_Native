import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "./app/config/colors";
import Tag from "./app/components/Tag";
import User from "./app/components/User";
import {
  Figtree_600SemiBold,
  Figtree_800ExtraBold,
} from "@expo-google-fonts/figtree";
import { useFonts } from "expo-font";

export default function App(props) {
  const { onPress, title = "Save" } = props;
  const [fontsLoaded] = useFonts({ Figtree_600SemiBold, Figtree_800ExtraBold });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.illustration}
          source={require("./app/assets/images/illustration-article.svg")}
        />
        <Tag />
        <Text style={styles.date}>Published 21 Dec 2023</Text>
        <Text style={styles.title}>HTML & CSS foundations</Text>
        <Text style={styles.description}>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </Text>
        <User />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "80%",
    backgroundColor: colors.white,
    padding: 30,
    borderRadius: 20,
    borderBlockColor: colors.black,
    borderWidth: 1,
  },
  illustration: {
    width: "100%",
    height: 150,
    backgroundColor: colors.yellow,
  },
  description: {
    marginBottom: 20,
    color: colors.grey,
    fontFamily: "Figtree_600SemiBold",
    fontSize: 16,
  },
  title: {
    fontSize: 25,
    marginVertical: 18,
    fontFamily: "Figtree_800ExtraBold",
  },
  date: {
    marginTop: 8,
    fontFamily: "Figtree_600SemiBold",
    fontSize: 14,
  },
});
