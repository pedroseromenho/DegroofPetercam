import React from "react";
import { Header, Icon } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
// import FontAwesome, { Icons } from 'react-native-fontawesome';
import SvgUri from "react-native-svg-uri";

export default class FooterContainer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <Icon name="home" color="#000" />
        <Icon name="list" color="#000" />
        <Icon name="bookmark" color="#000" />
        <Icon name="history" color="#000" />
        <Icon name="exclamation" color="#000" />
        {/* <SvgUri
                    width="130"
                    height="50"
                    style={styles.logo}
                    source={require("./assets/user-solid.svg")}
                /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#fff"
  },
  footer: {
    backgroundColor: "#DDDDDD",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  }
});
