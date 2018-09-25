import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';


export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    header:null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>History</Text>
        <Button title='To Profile' onPress={() =>this.props.navigation.navigate('Profile')}/>
        <Button title='To Home' onPress={() =>this.props.navigation.navigate('Home')}/>
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