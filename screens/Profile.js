import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';


export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header:null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button title='To Home' onPress={() =>this.props.navigation.navigate('Home')}/>
        <Button title='To History' onPress={() =>this.props.navigation.navigate('History')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});