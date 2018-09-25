import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import HistoryScreen from './screens/History';

const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
  History: HistoryScreen,
});

export default class App extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}