import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Animated,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AntDesign } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

import { styles } from "./styles";

const RootStack = createStackNavigator();

const Home = ({ navigation }) => {
  const [blinkingTextAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
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
          navigation.navigate("Declaration");
        }}
        style={styles.button}
        activeOpacity={0.5}
      >
        <AntDesign name="rightcircle" size={48} color="pink" />
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

const Declaration = () => {
  return <View></View>;
};

const RootRoutes = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        header: () => {},
      }}
      initialRouteName="Home"
    >
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Declaration" component={Declaration} />
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
