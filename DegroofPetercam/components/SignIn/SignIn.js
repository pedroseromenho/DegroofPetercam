import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";

export default class SignIn extends React.Component {
  render() {
    return (
      <View
        style={{
          margin: 20,
          marginTop: 50,
          padding: 5,
          paddingBottom: 50,
          shadowOffset: { width: 2, height: 2 },
          shadowColor: "#DDDDDD",
          shadowOpacity: 1,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#DDDDDD",
          backgroundColor: "#fff"
        }}
      >
        <FormLabel
          labelStyle={{
            color: "#DDDDDD",
            paddingTop: 5,
            fontSize: 18
          }}
        >
          {"Connexion"}
        </FormLabel>
        <FormLabel labelStyle={styles.label}>E-Mail Adress</FormLabel>
        <FormInput
          placeholder="johndoe@degroofpetercam.com"
          inputStyle={styles.input}
          containerStyle={{ borderBottomColor: "#E6E6E6" }}
        />

        <FormLabel labelStyle={styles.label}>Password</FormLabel>
        <FormInput
          secureTextEntry={true}
          value="abcnasms"
          containerStyle={{ borderBottomColor: "#E6E6E6" }}
        />

        <Button
          title="SIGN IN"
          buttonStyle={{
            top: 40,
            left: 18,
            marginBottom: 30,
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
