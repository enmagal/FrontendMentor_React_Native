import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import colors from "./app/config/colors";
import CustomButton from "./app/components/CustomButton";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.avatar}
          source={require("./app/assets/images/avatar-jessica.jpeg")}
        />
        <Text style={styles.name}>Jessica Randall</Text>
        <Text style={styles.location}>London, United Kingdom</Text>
        <Text style={styles.catch}>"Front-end developer and avid reader."</Text>
        <CustomButton
          title="GitHub"
          onPress={() => console.log("GitHub Button pressed")}
        />
        <CustomButton
          title="Frontend Mentor"
          onPress={() => console.log("Frontend Mentor Button pressed")}
        />
        <CustomButton
          title="LinkedIn"
          onPress={() => console.log("LinkedIn Button pressed")}
        />
        <CustomButton
          title="Twitter"
          onPress={() => console.log("Twitter Button pressed")}
        />
        <CustomButton
          title="Instagram"
          onPress={() => console.log("Instagram Button pressed")}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offBlack,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: colors.darkGrey,
    alignItems: "center",
    width: "90%",
    paddingVertical: 20,
  },
  name: {
    color: colors.white,
    fontSize: 30,
  },
  location: {
    color: colors.green,
  },
  catch: {
    color: colors.white,
  },
  avatar: {
    borderRadius: 100,
    height: 100,
    width: 100,
  },
});
