import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AvatarContainer from "../Avatar/AvatarContainer";
import AvatarText from "../Avatar/AvatarText";
import Button from "../Avatar/Button";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={{ padding: 20 }}>
        <AvatarContainer />
        <View style={{ marginTop: 10 }}>
          <AvatarText />
        </View>
        <View style={{ paddingTop: 30 }}>
          <Button title={"Modify personal informations".toLocaleUpperCase()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
