import { StatusBar } from "expo-status-bar";
import { ScrollView, Dimensions, StyleSheet } from "react-native";
import Landing from "./assets/components/Landing";
import Ingredients from "./assets/components/Ingredients";
import Instructions from "./assets/components/Instructions";
import Nutrition from "./assets/components/Nutrition";
import Bar from "./assets/components/Bar";

export default function App() {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <Landing />
      <Ingredients />
      <Bar />
      <Instructions />
      <Bar />
      <Nutrition />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    justifyContent: "center",
  },
});

const windowWidth = Dimensions.get("window").width;
