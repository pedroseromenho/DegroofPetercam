import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class AvatarText extends React.Component {
  render() {
    return (
      <View style={styles.AvatarText}>
        <Text style={{ fontSize: 20, color: "#707070" }}>Hello</Text>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#707070" }}>
          Sylvia Steisel
        </Text>
        <Text style={{ marginTop: 12, fontWeight: "bold", color: "#50C285" }}>
          You did 8 hours
        </Text>
        <Text style={{ marginTop: 12, color: "#707070" }}>
          You have 16 hours left
        </Text>
        <Text style={{ marginTop: 12, color: "#707070" }}>
          sylviasteisel@degroofpetercam.com
        </Text>
        <Text style={{ marginTop: 12, color: "#707070" }}>Brussels</Text>
        <Text style={{ marginTop: 12, color: "#707070" }}>
          Human ressource management
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AvatarText: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
