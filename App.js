import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { Constants } from 'expo';
import firebase from './Firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
    };
  }
  onChangeEmail(text) {
    this.setState({ email: text });
  }
  onChangePass(text) {
    this.setState({ pass: text });
  }
  signup(email, pass) {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, pass);

      alert('Account created');

      // Navigate to the Home page, the user is auto logged in
    } catch (error) {
      alert(error.toString());
    }
  }
  login(email, pass) {
    try {
      firebase.auth().signInWithEmailAndPassword(email, pass);

      alert('Logged In!');

      // Navigate to the Home page
    } catch (error) {
      console.log(error.toString());
    }
  }
  logout() {
    try {
      firebase.auth().signOut();

      alert('Logged Out!');

      // Navigate to login view
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={email => this.onChangeEmail(email)}
          value={this.props.email}
        />
        <TextInput
          onChangeText={pass => this.onChangePass(pass)}
          value={this.props.pass}
        />
        <Button
          onPress={() => {
            this.signup(this.state.email, this.state.pass);
          }}
          title="signUp"
        />
        <Button
          onPress={() => {
            this.login(this.state.email, this.state.pass);
          }}
          title="login"
        />
        <Button
          onPress={() => {
            this.logout();
          }}
          title="logout"
        />
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
  },
});
