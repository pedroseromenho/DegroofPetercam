import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import HeaderContainer from "./components/Header/HeaderContainer";
import CardItem from "./components/Cards/CardItem";
import FooterContainer from "./components/Footer/Footer";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderContainer />
        </View>
        <View style={styles.cardItem}>
          <CardItem />
        </View>
        <View style={styles.footer}>
          <FooterContainer />
        </View>
      </View>
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
    overflow: "scroll",
    height: "80%"
  },
  footer: {
    height: "10%"
  }
});
