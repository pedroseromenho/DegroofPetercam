import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Rating, Avatar } from "react-native-elements";
import { singleOffer } from "../data";

export default class RatingContainer extends React.Component {
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
                  paddingTop: 15,
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
              <View style={styles.rating}>
                <Rating
                  type="custom"
                  showRating
                  ratingImage={STAR_IMAGE}
                  ratingColor="#50C285"
                  ratingBackgroundColor="white"
                  ratingCount={5}
                  imageSize={30}
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10 }}
                />
              </View>
              <View
                style={{
                  padding: 20
                }}
              >
                <Text style={styles.label}>Feedback:</Text>
                <Text style={{ paddingTop: 5, color: "#555555" }}>
                  {o.description}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const STAR_IMAGE = require("../../assets/star-1.png");
const styles = StyleSheet.create({
  rating: {
    width: "100%",
    alignItems: "flex-end",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: 10
  },
  label: {
    color: "#50C285",
    paddingTop: 5,
    fontWeight: "bold"
  }
});
