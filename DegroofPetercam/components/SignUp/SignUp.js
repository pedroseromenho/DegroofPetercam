import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {
  Button,
  Input,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {};

    this.state = {
      favColor: undefined,
      items: [
        {
          label: "Red",
          value: "red"
        },
        {
          label: "Orange",
          value: "orange"
        },
        {
          label: "Blue",
          value: "blue"
        }
      ]
    };
  }
  render() {
    return (
      <View
        style={{
          height: "88%",
          margin: 20,
          padding: 10,
          shadowOffset: { width: 2, height: 2 },
          shadowColor: "#DDDDDD",
          shadowOpacity: 1,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#DDDDDD",
          backgroundColor: "#fff"
        }}
      >
        <FormLabel labelStyle={styles.label}>First Name</FormLabel>
        <FormInput
          placeholder="John"
          inputStyle={styles.input}
          containerStyle={{ borderBottomColor: "#E6E6E6" }}
        />
        <FormLabel labelStyle={styles.label}>Last Name</FormLabel>
        <FormInput
          placeholder="Doe"
          inputStyle={styles.input}
          containerStyle={{ borderBottomColor: "#E6E6E6" }}
        />
        <FormLabel labelStyle={styles.label}>E-Mail Adress</FormLabel>
        <FormInput
          placeholder="johndoe@degroofpetercam.com"
          inputStyle={styles.input}
          containerStyle={{ borderBottomColor: "#E6E6E6" }}
        />
        <FormLabel labelStyle={styles.label}>Skills</FormLabel>
        <View style={{ width: "88%", left: 20 }}>
          <RNPickerSelect
            placeholder={{
              label: "Select your skills...",
              value: null
            }}
            items={this.state.items}
            onValueChange={value => {
              this.setState({
                favColor: value
              });
            }}
            onUpArrow={() => {
              this.inputRefs.name.focus();
            }}
            onDownArrow={() => {
              this.inputRefs.picker2.togglePicker();
            }}
            style={{ ...pickerSelectStyles }}
            value={this.state.favColor}
            ref={el => {
              this.inputRefs.picker = el;
            }}
          />
        </View>
        <FormLabel labelStyle={styles.label}>Area</FormLabel>
        <View style={{ width: "88%", left: 20 }}>
          <RNPickerSelect
            placeholder={{
              label: "Select your area...",
              value: null
            }}
            items={this.state.items}
            onValueChange={value => {
              this.setState({
                favColor: value
              });
            }}
            onUpArrow={() => {
              this.inputRefs.name.focus();
            }}
            onDownArrow={() => {
              this.inputRefs.picker2.togglePicker();
            }}
            style={{ ...pickerSelectStyles }}
            value={this.state.favColor}
            ref={el => {
              this.inputRefs.picker = el;
            }}
          />
        </View>

        <Button
          title="SIGN UP"
          buttonStyle={{
            top: 40,
            left: 18,
            marginBottom: 20,
            width: 250,
            height: 60,
            fontSize: 30,
            backgroundColor: "#50C285",
            color: "#000",
            shadowOffset: { width: 2, height: 2 },
            shadowColor: "#DDDDDD",
            shadowOpacity: 0.5,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#CCE3D7"
          }}
          color="#fff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: "#50C285",
    paddingTop: 5
  },
  input: {
    paddingTop: 10,
    borderBottomColor: "red"
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black",
    marginTop: 10
  }
});
