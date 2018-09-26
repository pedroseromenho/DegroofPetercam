import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Icon, Avatar } from "react-native-elements";

export default class AvatarContainer extends React.Component {
  render() {
    return (
      <View style={styles.avatar}>
        <Avatar
          xlarge
          rounded
          title="SS"
          overlayContainerStyle={{ backgroundColor: "#CCE3D7" }}
          //   source={{ uri: "https://facebook.github.io/react/logo-og.png" }}

          style={{ width: 200, height: 200, borderRadius: 100, marginTop: 20 }}
        />
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
