import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import AvatarContainer from "../Avatar/AvatarContainer";
import AvatarText from "../Avatar/AvatarText";
import Button from "../Avatar/Button";
import { offers } from "../data";

export default class DetailsOffer extends React.Component {
  render() {
    return (
      <ScrollView style={{}} containerStyle={{ padding: 0 }}>
        {offers.map((o, i) => {
          return (
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
                //   source={{ uri: "https://facebook.github.io/react/logo-og.png" }}

                style={{
                  borderRadius: 100
                }}
              />
            </View>

            // <View key={i} style={{ padding: 10, paddingTop: 20 }}>
            //   <Text style={{ fontSize: 12, color: "#707070" }}>
            //     {"Posted: " + o.date}
            //   </Text>
            //   <View style={styles.card}>
            //     <View
            //       style={{
            //         borderRightWidth: 1,
            //         paddingRight: 15,
            //         borderColor: "#DDDDDD"
            //       }}
            //     >
            //       <Avatar
            //         large
            //         rounded
            //         // source={{
            //         //   uri: o.avatar
            //         // }}
            //         style={{ justifyContent: "center" }}
            //         title={o.initials}
            //         overlayContainerStyle={{ backgroundColor: "#CCE3D7" }}
            //       />
            //     </View>
            //     <View style={styles.text}>
            //       <View
            //         style={{
            //           flexDirection: "row",
            //           justifyContent: "space-between"
            //         }}
            //       >
            //         <Text
            //           h1
            //           style={{
            //             fontWeight: "bold",
            //             color: "#555555",
            //             fontSize: 17,
            //             paddingBottom: 3
            //           }}
            //         >
            //           {o.name}
            //         </Text>
            //         <Icon name="bookmark" color="#9A9A9A" />
            //       </View>
            //       <Text
            //         h2
            //         style={{
            //           fontWeight: "bold",
            //           color: "#9A9A9A",
            //           paddingBottom: 3
            //         }}
            //       >
            //         {o.skills.toUpperCase()}
            //       </Text>
            //       <Text
            //         h3
            //         style={{
            //           paddingBottom: 3,
            //           fontWeight: "bold",
            //           color: "#555555"
            //         }}
            //       >
            //         {o.area}
            //       </Text>
            //       <View
            //         style={{
            //           flexDirection: "row",
            //           justifyContent: "space-between"
            //         }}
            //       >
            //         <Text h3 style={{ color: "#555555" }}>
            //           {o.type + " / " + o.duration}
            //         </Text>
            //         <Text h3 style={{ color: "#9A9A9A", fontWeight: "bold" }}>
            //           …
            //         </Text>
            //       </View>
            //     </View>
            //     <View />
            //   </View>
            // </View>
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
  }
});
