import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderContainer from "../components/Header/HeaderContainer";
import Footer from "../components/Footer/Footer";
import Profile from "../components/Profile/Profile";

export default class ViewProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderContainer />
        </View>
        <View style={styles.main}>
          <Profile />
        </View>
        <View style={styles.footer}>
          <Footer />
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

  main: {
    height: "80%"
  },
  footer: {
    height: "10%"
  }
});
