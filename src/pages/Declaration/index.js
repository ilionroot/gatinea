import React, { useState, useEffect, useRef } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";

import LottieView from "lottie-react-native";

import { styles } from "./styles";

const Declaration = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [buttonContainerAnimation] = useState(new Animated.Value(0));
  const [yesReactionAnimation] = useState(new Animated.Value(0));
  const [noReactionAnimation] = useState(new Animated.Value(0));
  const [responseNo, setResponseNo] = useState(false);

  let declarationAnimationRef = useRef();
  let yesButtonAnimationRef = useRef();
  let yesReactionAnimationRef = useRef();
  let noReactionAnimationRef = useRef();

  function yes() {
    yesButtonAnimationRef.current.reset();
    yesButtonAnimationRef.current.play();
    Animated.timing(yesReactionAnimation, {
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      yesReactionAnimationRef.current.play();
    });
  }

  function no() {
    setResponseNo(true);
    Animated.timing(noReactionAnimation, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }

  function proceed() {
    navigation.navigate("Proceed");
  }

  function tryAgain() {
    Animated.timing(noReactionAnimation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setResponseNo(false);
    });
  }

  useEffect(() => {
    setIsPlaying(true);
    setTimeout(() => {
      declarationAnimationRef.current.play();
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={declarationAnimationRef}
        style={{
          flex: 1,
        }}
        loop={false}
        onAnimationFinish={() => {
          setIsPlaying(false);
          Animated.timing(buttonContainerAnimation, {
            delay: 500,
            duration: 750,
            toValue: 1,
            useNativeDriver: true,
          }).start();
        }}
        source={require("../../../assets/animation.json")}
      />
      <Animated.View
        style={{
          opacity: yesReactionAnimation,
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
      >
        <LottieView
          ref={yesReactionAnimationRef}
          style={{
            height: "100%",
          }}
          loop={false}
          onAnimationFinish={proceed}
          source={require("../../../assets/8897-particle-rain.json")}
        />
      </Animated.View>
      {!isPlaying && (
        <Animated.View
          style={{
            ...styles.buttonsContainer,
            opacity: buttonContainerAnimation,
          }}
        >
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "rgba(32,255,128, 1)" }}
            activeOpacity={0.5}
            onPress={yes}
          >
            <Text
              style={{
                fontFamily: "Ubuntu_700Bold",
              }}
            >
              SIIIMMMM❤️❤️❤️❤️❤️
            </Text>
            <LottieView
              ref={yesButtonAnimationRef}
              loop={false}
              style={{
                position: "absolute",
                width: 1000,
                height: 1000,
              }}
              source={require("../../../assets/2023-particle-explosion.json")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.button,
              flex: 0.5,
              backgroundColor: "rgba(255,128,128, 1)",
            }}
            activeOpacity={0.5}
            onPress={no}
          >
            <Text
              style={{
                fontFamily: "Ubuntu_700Bold",
              }}
            >
              nao.
            </Text>
          </TouchableOpacity>
          <LottieView
            style={{
              position: "absolute",
              width: 50,
              height: 50,
              top: -15,
              left: 20,
            }}
            autoPlay
            source={require("../../../assets/18440-arrow-up-down.json")}
          />
        </Animated.View>
      )}
      {responseNo && (
        <Animated.View
          ref={noReactionAnimationRef}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.9)",
            alignItems: "center",
            justifyContent: "center",
            opacity: noReactionAnimation,
          }}
        >
          <LottieView
            style={{
              width: "65%",
            }}
            autoPlay
            loop
            source={require("../../../assets/28443-sad-emoji.json")}
          />
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: "rgba(255,255,128, 1)",
              flex: 0,
              width: "45%",
              height: 55,
              marginTop: 64,
            }}
            activeOpacity={0.5}
            onPress={tryAgain}
          >
            <Text>Tentar novamente... ):</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default Declaration;
