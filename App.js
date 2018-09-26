import * as React from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import firebase from './Firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  onChange(text) {
    this.setState({ text: text });
  }
  writeData(value) {
    try {
      firebase
        .database()
        .ref('test')
        .update({ vdf: value });
      alert('Ok!');
    } catch (error) {
      alert(error.toString());
    }
  }
  readData() {
    try {
      firebase
        .database()
        .ref('/test')
        .on('value', function(snapshot) {
          let data = snapshot.val();
          alert(data);
        });
    } catch (error) {
      alert(error.toString());
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.onChange(text)}
          value={this.props.text}
        />
        <Button
          onPress={() => {
            this.writeData(this.state.text);
          }}
          title="Write"
        />
        <Button
          onPress={() => {
            this.readData();
          }}
          title="Write"
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
