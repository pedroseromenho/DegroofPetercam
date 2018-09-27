import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Icon, Avatar } from "react-native-elements";

import { offers } from "../data";

export default class CardItem extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ScrollView style={{}} containerStyle={{ padding: 0 }}>
        {offers.map((o, i) => {
          return (
            <View key={i} style={{ padding: 10, paddingTop: 20 }}>
              <Text style={{ fontSize: 12, color: "#707070" }}>
                {"Posted: " + o.date}
              </Text>
              <View style={styles.card}>
                <View
                  style={{
                    borderRightWidth: 1,
                    paddingRight: 15,
                    borderColor: "#DDDDDD"
                  }}
                >
                  <Avatar
                    large
                    rounded
                    style={{ justifyContent: "center" }}
                    title={o.initials}
                    overlayContainerStyle={{ backgroundColor: "#CCE3D7" }}
                  />
                </View>
                <View style={styles.text}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text
                      h1
                      style={{
                        fontWeight: "bold",
                        color: "#555555",
                        fontSize: 17,
                        paddingBottom: 3
                      }}
                    >
                      {o.name}
                    </Text>
                    <Icon name="bookmark" color="#9A9A9A" />
                  </View>
                  <Text
                    h2
                    style={{
                      fontWeight: "bold",
                      color: "#9A9A9A",
                      paddingBottom: 3
                    }}
                  >
                    {o.skills.toUpperCase()}
                  </Text>
                  <Text
                    h3
                    style={{
                      paddingBottom: 3,
                      fontWeight: "bold",
                      color: "#555555"
                    }}
                  >
                    {o.area}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text h3 style={{ color: "#555555" }}>
                      {o.type + " / " + o.duration}
                    </Text>
                    <Text h3 style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                      …
                    </Text>
                  </View>
                </View>
                <View />
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 10,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "#DDDDDD",
    shadowOpacity: 1.0,
    backgroundColor: "white",
    marginBottom: 10,
    marginTop: 8,
    flexDirection: "row"
  },

  text: {
    justifyContent: "center",
    paddingLeft: 20,
    width: "73%"
  }
});
