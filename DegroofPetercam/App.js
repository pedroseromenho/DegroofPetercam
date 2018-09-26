import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import HeaderContainer from "./components/Header/HeaderContainer";
import CardItem from "./components/Cards/CardItem";
import FooterContainer from "./components/Footer/Footer";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderContainer />
        </View>
        <View style={styles.cardItem}>
          <CardItem />
          {/* <SignUp /> */}
        </View>
        <View style={styles.footer}>
          <FooterContainer />
        </View>
      </View>
      // <View>
      //   <LogIn />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    heigth: "10%"
  },

  cardItem: {
    height: "80%"
  },
  footer: {
    height: "10%"
  }
});
