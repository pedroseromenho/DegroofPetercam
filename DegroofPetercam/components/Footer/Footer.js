import React from "react";
import { Icon } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { Actions } from "react-native-router-flux";

export default class FooterContainer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <Icon
          name="home"
          color="#6D8E7D"
          size="28"
          onPress={() => {
            Actions.offers();
          }}
        />
        <Icon
          name="description"
          color="#6D8E7D"
          size="28"
          onPress={() => {
            Actions.myMissions();
          }}
        />
        <Icon
          name="bookmark"
          color="#6D8E7D"
          size="28"
          onPress={() => {
            Actions.bookmarks();
          }}
        />
        <Icon
          name="history"
          color="#6D8E7D"
          size="28"
          onPress={() => {
            Actions.history();
          }}
        />
        <Icon
          name="face"
          color="#6D8E7D"
          size="28"
          onPress={() => {
            Actions.profile();
          }}
        />
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
