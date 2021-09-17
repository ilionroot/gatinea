import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#efefef",
    padding: 32,
    paddingTop: 0,
    overflow: "hidden",
  },
  title: {
    fontSize: 36,
    margin: 32,
    fontFamily: "Ubuntu_700Bold",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    borderRadius: 5,
  },
  topicText: {
    color: "rgba(0,0,0,0.75)",
    fontSize: 14,
    marginVertical: 8,
  },
  acceptButton: {
    height: 75,
    marginTop: 32,
    marginBottom: 225,
    backgroundColor: "rgba(32,255,128, 1)",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,

    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.75)",
  },
  acceptButtonText: {
    fontFamily: "Ubuntu_700Bold",
    fontSize: 20,
  },
});
