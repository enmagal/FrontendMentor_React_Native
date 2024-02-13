import { StatusBar } from "expo-status-bar";
import { ScrollView, Dimensions, StyleSheet, SafeAreaView } from "react-native";
import Landing from "./assets/components/Landing";
import Ingredients from "./assets/components/Ingredients";
import Instructions from "./assets/components/Instructions";
import Nutrition from "./assets/components/Nutrition";
import Bar from "./assets/components/Bar";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.flex}>
        <Landing />
        <Ingredients />
        <Bar />
        <Instructions />
        <Bar />
        <Nutrition />
      </SafeAreaView>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flex: {
    flex: 1,
  },
});

const windowWidth = Dimensions.get("window").width;
