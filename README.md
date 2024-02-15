# FrontendMentor React Native 🤓

## Init an expo app

```Bash
npx create-expo-app AwesomeProject

cd AwesomeProject
npx expo start
```

## Run the app

```Bash
npm start
```

## Use custom font

1. Install the font with expo

```Bash
npx expo install @expo-google-fonts/inter expo-font
```

2. Import the fonts in your JS file

```javascript
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
```

3. Define font variables

```javascript
export default function App() {
  const { onPress, title = "Save" } = props;
  const [fontsLoaded] = useFonts({ Inter_400Regular });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    ...
  );
}
```

4. Set your style in your stylesheet

```javascript
const styles = StyleSheet.create({
  catch: {
    color: colors.white,
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    marginVertical: 20,
  },
});
```
