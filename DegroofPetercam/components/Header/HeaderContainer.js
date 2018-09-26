import React from "react";
import { Header, Icon } from "react-native-elements";
import { StyleSheet, Text } from "react-native";
import HeaderLogo from "./HeaderLogo";

export default class HeaderContainer extends React.Component {
  render() {
    return (
      <Header outerContainerStyles={{ backgroundColor: "#50C285" }}>
        <Icon
          name="chevron-left"
          color="#fff"
          size={35}
          containerStyle={{ marginLeft: -8, top: 8 }}
        />
        <HeaderLogo />
        <Text style={styles.text}>{"Profile".toUpperCase()}</Text>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#fff"
  }
});
