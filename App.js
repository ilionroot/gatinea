import React, { useState } from "react";
import Splash from "./src/pages/Splash";

import { setCustomText } from "react-native-global-props";

import {
  useFonts,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";

import Router from "./router";

export default function App() {
  const [isSplashing, setIsSplashing] = useState(true);

  let [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (isSplashing && fontsLoaded) {
    setCustomText({
      style: {
        fontFamily: "Ubuntu_500Medium",
      },
    });
    return <Splash setIsSplashing={setIsSplashing} />;
  }

  return <Router />;
}
