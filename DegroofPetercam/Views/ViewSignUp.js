import React from "react";
import { View } from "react-native";
import HeaderContainer from "../components/Header/HeaderContainer";
import SignUp from "../components/SignUp/SignUp";

export default class ViewSignUp extends React.Component {
  render() {
    return (
      <View style={{ paddingBottom: 75 }}>
        <HeaderContainer />
        <SignUp />
      </View>
    );
  }
}
