import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';
import { AppNavigation } from './src/navigation/AppNavigation';
import {THEME_COLOR} from "./src/lib/Constants";

export default class App extends React.Component {

  componentWillMount() {
   
<script src="https://www.gstatic.com/firebasejs/5.5.1/firebase.js"></script>


  var config = {
    apiKey: "AIzaSyBR5x4SxtEbhp1thuZrm8LJcR_vJw6qhSQ",
    authDomain: "mon-projet-test-29983.firebaseapp.com",
    databaseURL: "https://mon-projet-test-29983.firebaseio.com",
    projectId: "mon-projet-test-29983",
    storageBucket: "mon-projet-test-29983.appspot.com",
    messagingSenderId: "383857906212"
  };
  firebase.initializeApp(config);


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle='light-content'/>}
            {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
            <AppNavigation />
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: THEME_COLOR
  },
});