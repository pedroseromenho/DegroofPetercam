import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import Button from "../Avatar/Button";
import { singleOffer } from "../data";

export default class DetailsOffer extends React.Component {
  render() {
    return (
      <ScrollView style={{}} containerStyle={{ padding: 0 }}>
        {singleOffer.map((o, i) => {
          return (
            <View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  marginTop: 20
                }}
              >
                <Avatar
                  xlarge
                  rounded
                  title={o.initials}
                  overlayContainerStyle={{ backgroundColor: "#CCE3D7" }}
                  style={{
                    borderRadius: 100
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 20,
                  paddingRight: 60,
                  paddingTop: 20,
                  width: "80%"
                }}
              >
                <View>
                  <Text style={styles.label}>Request:</Text>
                  <Text style={styles.label}>Area:</Text>
                  <Text style={styles.label}>Skills:</Text>
                  <Text style={styles.label}>Area:</Text>
                  <Text style={styles.label}>Duration:</Text>
                </View>
                <View>
                  <Text style={{ paddingTop: 5, color: "#555555" }}>
                    {o.name}
                  </Text>
                  <Text style={{ paddingTop: 5, color: "#555555" }}>
                    {o.area}
                  </Text>
                  <Text style={{ paddingTop: 5, color: "#555555" }}>
                    {o.skills}
                  </Text>
                  <Text style={{ paddingTop: 5, color: "#555555" }}>
                    {o.area}
                  </Text>
                  <Text style={{ paddingTop: 5, color: "#555555" }}>
                    {o.duration}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  padding: 20
                }}
              >
                <Text style={styles.label}>Description:</Text>
                <Text style={{ paddingTop: 5, color: "#555555" }}>
                  {o.description}
                </Text>
              </View>
              <Button title={"Apply for this mission".toLocaleUpperCase()} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    color: "#50C285",
    paddingTop: 5,
    fontWeight: "bold"
  }
});
