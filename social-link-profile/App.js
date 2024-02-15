import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import colors from "./app/config/colors";
import CustomButton from "./app/components/CustomButton";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
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
    borderRadius: 15,
  },
  name: {
    color: colors.white,
    fontSize: 25,
    fontFamily: "Inter_600SemiBold",
  },
  location: {
    color: colors.green,
    fontFamily: "Inter_700Bold",
    marginVertical: 5,
  },
  catch: {
    color: colors.white,
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    marginVertical: 20,
  },
  avatar: {
    borderRadius: 100,
    height: 100,
    width: 100,
    marginBottom: 20,
  },
});
