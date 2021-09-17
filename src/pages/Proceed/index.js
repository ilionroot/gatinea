import React, { useRef, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import LottieView from "lottie-react-native";

import { styles } from "./styles";

const Proceed = ({ navigation }) => {
  const [initialStateAnimation, setInitialStateAnimation] = useState(true);
  const [matrixStateAnimation, setMatrixStateAnimation] = useState(false);

  const [opacityPegadinhaAnimation] = useState(new Animated.Value(0));
  const [opacityAgoraAnimation] = useState(new Animated.Value(0));
  const [opacityGostoAnimation] = useState(new Animated.Value(0));
  const [opacityVoltarAnimation] = useState(new Animated.Value(0));

  let initialAnimation = useRef();
  let matrixAnimation = useRef();

  function accept() {
    setMatrixStateAnimation(true);

    setTimeout(() => {
      matrixAnimation.current.pause();

      Animated.sequence([
        Animated.timing(opacityPegadinhaAnimation, {
          duration: 750,
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAgoraAnimation, {
          duration: 750,
          toValue: 1,
          delay: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityGostoAnimation, {
          duration: 750,
          toValue: 1,
          delay: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityVoltarAnimation, {
          duration: 750,
          toValue: 1,
          delay: 1500,
          useNativeDriver: true,
        }),
      ]).start();
    }, 3000);
  }

  useEffect(() => {
    setTimeout(() => {
      initialAnimation.current?.pause();
    }, 3500);
  }, []);

  return (
    <>
      <SafeAreaView>
        <Text style={styles.title}>Termos e serviços</Text>
        <View style={{ width: "100%", height: "100%" }}>
          <ScrollView bounces={false} style={styles.content}>
            <Text
              style={{
                color: "rgba(0,0,0,0.8)",
                fontSize: 18,
                fontFamily: "Ubuntu_700Bold",
                marginVertical: 24,
              }}
            >
              ◉ Aceitando nossos termos você concorda em:
            </Text>
            <Text style={styles.topicText}>
              🍊 Dividir 314L de suco de laranja com iGuinhO 2207, em qualquer e
              sem exclusão, parque de diversão.
            </Text>
            <Text style={styles.topicText}>
              👠 Pisar em mim por ser macho escroto!
            </Text>
            <Text style={styles.topicText}>
              😎 Perder pra mim em todos (sem excessões) os jogos que jogarmos.
            </Text>
            <Text style={styles.topicText}>
              🫂 Sempre mantermos a sinceridade.
            </Text>

            <Text style={styles.topicText}>
              💰 Fazer um pix de R$329,99 para realização de compra de Robux.
            </Text>
            <Text style={styles.topicText}>
              😓 Me aturar sempre quando eu tiver chatão.
            </Text>
            <Text style={styles.topicText}>
              🐮 Não me dar chifreKKKKKKKKKeh seriopf.
            </Text>
            <Text style={styles.topicText}>
              😏 Doar um de seus gatos pra mim.
            </Text>
            <Text
              style={{
                color: "rgba(0,0,0,0.8)",
                fontSize: 18,
                fontFamily: "Ubuntu_700Bold",
                marginVertical: 24,
              }}
            >
              ◉ Para consagração de protocolo:
            </Text>
            <Text style={styles.topicText}>
              <Feather name="arrow-right" color={"rgba(0,0,0,0.8"} size={14} />{" "}
              Caso deseje desfazer o contrato, siga os seguintes passos: nao.
            </Text>
            <Text style={styles.topicText}>
              <Feather name="arrow-right" color={"rgba(0,0,0,0.8"} size={14} />{" "}
              Se desfeito, você receberá uma penalidade no WhatsApp (Aplicativo
              de telecomunicação e mensagens instantâneas), conhecida como
              "Block" em meio aos jovens.
            </Text>
            <Text style={styles.topicText}>
              <Feather name="arrow-right" color={"rgba(0,0,0,0.8"} size={14} />{" "}
              Uma vez aceito, os termos tem um periodo mínimo de 7891731 anos e
              3 horas (Horário de Roma).
            </Text>
            <Text style={styles.topicText}>
              <Feather name="arrow-right" color={"rgba(0,0,0,0.8"} size={14} />{" "}
              Possivelmente você perceberá ocorrências pertinentes sendo
              registradas em seu CPF, com localização de feitura na Guatemala.
              Caso incomode, contate #osguri.
            </Text>
            <TouchableOpacity
              onPress={accept}
              activeOpacity={0.5}
              style={styles.acceptButton}
            >
              <Text style={styles.acceptButtonText}>Aceitar</Text>
            </TouchableOpacity>
          </ScrollView>
          <LinearGradient
            style={{
              height: 30,
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            colors={["#efefef", "#ffffff00"]}
          />
          <LinearGradient
            style={{
              height: 30,
              width: "100%",
              position: "absolute",
              top: "78%",
              left: 0,
            }}
            colors={["#ffffff00", "#efefef"]}
          />
        </View>
        {initialStateAnimation && (
          <LottieView
            ref={initialAnimation}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundColor: "rgba(255,255,255,0.8)",
            }}
            autoPlay
            loop
            onAnimationFinish={() => {
              setInitialStateAnimation(false);
            }}
            source={require("../../../assets/37211-google-icons-forms.json")}
          />
        )}
      </SafeAreaView>
      {matrixStateAnimation && (
        <>
          <LottieView
            ref={matrixAnimation}
            style={{
              position: "absolute",
              height: "100%",
              top: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.75)",
            }}
            loop
            autoPlay
            source={require("../../../assets/18707-dragon-matrix-effect.json")}
          />
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                flex: 0.75,
                fontFamily: "Ubuntu_700Bold",
                fontSize: 32,
              }}
            >
              Clonando número...
            </Text>
            <Animated.Text
              style={{
                position: "absolute",
                bottom: "65%",
                alignSelf: "center",
                color: "rgba(255,128,128,0.85)",
                fontFamily: "Ubuntu_700Bold",
                fontSize: 28,
                opacity: opacityPegadinhaAnimation,
              }}
            >
              Pegadinhakkkkk
            </Animated.Text>
            <Animated.Text
              style={{
                position: "absolute",
                bottom: "50%",
                alignSelf: "center",
                color: "rgba(128,200,255,1)",
                fontFamily: "Ubuntu_700Bold",
                fontSize: 28,
                opacity: opacityAgoraAnimation,
              }}
            >
              Agora a gnt ta namo S2!!!
            </Animated.Text>
            <Animated.Text
              style={{
                position: "absolute",
                bottom: "35%",
                alignSelf: "center",
                color: "rgba(255,255,128,1)",
                fontFamily: "Ubuntu_700Bold",
                fontSize: 28,
                opacity: opacityGostoAnimation,
              }}
            >
              gosto???
            </Animated.Text>
            <Animated.View
              style={{
                position: "absolute",
                bottom: "10%",
                alignSelf: "center",
                opacity: opacityVoltarAnimation,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  borderRadius: 16,
                  padding: 16,
                  width: 350,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 2,
                  borderColor: "rgba(0,0,0,0.75)",
                }}
                onPress={() => {
                  navigation.navigate("Home");
                }}
                activeOpacity={0.5}
              >
                <Text
                  style={{
                    color: "rgba(0,0,0,0.85)",
                    fontFamily: "Ubuntu_700Bold",
                    fontSize: 24,
                  }}
                >
                  Voltar ao início
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </>
      )}
    </>
  );
};

export default Proceed;
