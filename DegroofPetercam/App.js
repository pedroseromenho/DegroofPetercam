import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderContainer from './components/Header/HeaderContainer';
import SvgUri from 'react-native-svg-uri';
import AvatarContainer from './components/Avatar/AvatarContainer';
import AvatarText from './components/Avatar/AvatarText';
import ButtonApp from './components/Avatar/Button';

import RatingContainer from './components/Rating/RatingContainer';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderContainer />
        <AvatarContainer />
        <AvatarText />
        <ButtonApp />

        <RatingContainer />

        {/* <FooterContainer /> */} */}
        {/* <FooterBis /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",


  }
})

