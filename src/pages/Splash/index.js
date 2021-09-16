import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const styles = StyleSheet.create({
  animationContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Splash = ({ setIsSplashing }) => {
  let animation = useRef();

  useEffect(() => {
    animation.current.play();

    setTimeout(() => {
      animation.current.pause();
    }, 5000);
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        speed={0.2}
        ref={animation}
        style={{
          width: 125,
          height: 125,
        }}
        onAnimationFinish={() => {
          setIsSplashing(false);
        }}
        source={require("../../../assets/70305-love-emoji.json")}
      />
    </View>
  );
};

export default Splash;
