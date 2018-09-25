import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Header } from "react-native-elements";
import { HeaderLogo } from "./components/Header/HeaderLogo";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          // centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          centerComponent={<HeaderLogo />}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
