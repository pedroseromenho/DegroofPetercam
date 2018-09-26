import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-elements";
import SvgUri from "react-native-svg-uri";

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "Philantropy Management Application"
    };
  }
  render() {
    return (
      <View>
        <SvgUri
          width="1500"
          height="700"
          // height="100%"
          style={{ top: 0, left: -600 }}
          source={require("./fond.svg")}
        />
        <SvgUri
          width="230"
          height="70"
          style={{ position: "absolute", top: 80, left: 70 }}
          source={require("./logo.svg")}
        />
        <View style={{ position: "absolute", top: 300, left: 50 }}>
          <Button
            title="LOG IN"
            buttonStyle={{
              marginBottom: 20,
              width: 250,
              height: 60,
              fontSize: 30,
              backgroundColor: "#fff",
              color: "#000",
              shadowOffset: { width: 2, height: 2 },
              shadowColor: "#DDDDDD",
              shadowOpacity: 0.5,
              borderRadius: 5
            }}
            color="#50C285"
          />
          <Button
            title="SIGN UP"
            buttonStyle={{
              marginBottom: 20,
              width: 250,
              height: 60,
              fontSize: 30,
              backgroundColor: "#fff",
              color: "#000",
              shadowOffset: { width: 2, height: 2 },
              shadowColor: "#DDDDDD",
              shadowOpacity: 0.5,
              borderRadius: 5
            }}
            color="#50C285"
          />
        </View>
        <Text
          style={{
            position: "absolute",
            fontSize: 14,
            width: 300,
            textAlign: "center",
            left: 40,
            top: 580,
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          {this.state.description.toLocaleUpperCase()}
        </Text>
      </View>
    );
  }
}
