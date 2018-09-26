import React from "react";
import { Header, Icon } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import SvgUri from "react-native-svg-uri";

export default class FooterContainer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <Icon name="home" color="#6D8E7D" size="28" />
        <Icon name="description" color="#6D8E7D" size="28" />
        <Icon name="bookmark" color="#6D8E7D" size="28" />
        <Icon name="history" color="#6D8E7D" size="28" />
        <Icon name="face" color="#6D8E7D" size="28" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#fff"
  },
  footer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    shadowOffset: { width: 3, height: -3 },
    shadowColor: "#DDDDDD",
    shadowOpacity: 0.5,
    backgroundColor: "white"
  }
});
