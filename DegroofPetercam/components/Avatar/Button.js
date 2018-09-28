import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";

export default class ButtonApp extends React.Component {
  render() {
    return (
      <View style={styles.Button}>
        <Button
          title={this.props.title}
          color="#50C285"
          buttonStyle={{
            backgroundColor: "white",
            padding: 10,
            height: 45,
            color: "#000",
            shadowOffset: { width: 2, height: 2 },
            shadowColor: "#DDDDDD",
            shadowOpacity: 0.5,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#CCE3D7"
          }}
          onPress={() => {
            Actions.myMissionsDetails();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    alignItems: "flex-end",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
