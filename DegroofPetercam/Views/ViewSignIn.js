import React from "react";
import { View } from "react-native";
import HeaderContainer from "../components/Header/HeaderContainer";
import SignIn from "../components/SignIn/SignIn";

export default class ViewSignIn extends React.Component {
  render() {
    return (
      <View style={{ paddingBottom: 75 }}>
        <HeaderContainer />
        <SignIn />
      </View>
    );
  }
}
