import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Vibration,
  TouchableOpacity,
  StatusBar,
  Animated,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AntDesign } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

import Declaration from "./src/pages/Declaration";
import Proceed from "./src/pages/Proceed";
import { Audio } from "expo-av";

import { styles } from "./styles";

const RootStack = createStackNavigator();

const Home = ({ navigation }) => {
  const [blinkingTextAnimation] = useState(new Animated.Value(0));
  let startButtonAnimationRef = useRef();
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/background.mp3")
    );
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    playSound();
    let toChangeValue = 1;
    setInterval(() => {
      Animated.timing(blinkingTextAnimation, {
        duration: 1000,
        toValue: toChangeValue,
        useNativeDriver: true,
      }).start(() => {
        toChangeValue = toChangeValue === 1 ? 0 : 1;
      });
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <LottieView
        speed={0.75}
        style={{
          width: 200,
          height: 200,
          position: "absolute",
          top: 24,
        }}
        autoPlay
        source={require("./assets/48733-couple-eating.json")}
      />
      <TouchableOpacity
        onPress={() => {
          Vibration.vibrate(1000);
          startButtonAnimationRef.current.reset();
          startButtonAnimationRef.current.play();
          setTimeout(() => {
            navigation.navigate("Declaration");
          }, 750);
        }}
        style={styles.button}
        activeOpacity={0.5}
      >
        <AntDesign name="rightcircle" size={48} color="pink" />
        <LottieView
          ref={startButtonAnimationRef}
          loop={false}
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            // backgroundColor: "red",
          }}
          source={require("./assets/2023-particle-explosion.json")}
        />
      </TouchableOpacity>
      <Animated.Text
        style={{
          position: "absolute",
          bottom: "27.5%",
          color: "rgba(0,0,0,0.75)",
          fontSize: 24,
          opacity: blinkingTextAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      >
        Aperte para iniciar
      </Animated.Text>
      <LottieView
        speed={0.1}
        style={{
          height: 200,
          position: "absolute",
          bottom: -5,
        }}
        autoPlay
        source={require("./assets/waves.json")}
      />
    </View>
  );
};

const RootRoutes = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        header: () => {},
        gestureEnabled: false,
      }}
      initialRouteName="Home"
    >
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Declaration" component={Declaration} />
      <RootStack.Screen name="Proceed" component={Proceed} />
    </RootStack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <RootRoutes />
    </NavigationContainer>
  );
};

export default Router;
