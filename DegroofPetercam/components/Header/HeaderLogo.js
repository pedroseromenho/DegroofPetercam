import React, { Component } from "react";
import SvgUri from "react-native-svg-uri";
import { StyleSheet } from "react-native";

class HeaderLogo extends Component {
  render() {
    return (
      <SvgUri
        width="130"
        height="50"
        style={styles.logo}
        source={require("./logo.svg")}
      />
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    margin: "auto",
    display: "flex",
    alignItems: "center"
  }
});

export default HeaderLogo;
