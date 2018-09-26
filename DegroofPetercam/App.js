import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import HeaderContainer from "./components/Header/HeaderContainer";
import CardItem from "./components/Cards/CardItem";
import FooterContainer from "./components/Footer/Footer";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import MyMissionsDetails from "./components/MyMissionsDetails";
import Popup from "./components/Confirmation/Confirmation";
import ButtonApp from "./components/Avatar/Button";
// import MyDatePicker from "./components/DatePicker/DatePicker";



export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Popup />
        <ButtonApp />
        {/* <MyMissionsDetails /> */}
        {/* <View style={styles.header}>
          <HeaderContainer />
        </View>
        <View style={styles.cardItem}>
          <CardItem />
          {/* <SignUp /> */}
      </View>

      // <View style={styles.footer}>
      //   <FooterContainer />
      // </View> * /}
      // </View >
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
    height: "10%"
  },

  cardItem: {
    height: "80%"
  },
  footer: {
    height: "10%"
  }
});
