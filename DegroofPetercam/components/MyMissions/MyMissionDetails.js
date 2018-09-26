import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AvatarContainer from "../../components/Avatar/AvatarContainer";
import ButtonApp from "../../components/Avatar/Button";
import Map from "../../components/Map/Map";
import MyDatePicker from "../../components/DatePicker/DatePicker";
import { FormLabel, Input, FormInput } from "react-native-elements";
export default class MyMissionsDetails extends React.Component {
  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <View marginTop={10}>
          <AvatarContainer />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10
          }}
          marginTop={10}
        >
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "#DDDDDD",
              shadowOffset: { width: 3, height: 3 },
              shadowColor: "#DDDDDD",
              shadowOpacity: 1.0,
              backgroundColor: "white"
            }}
          >
            <MyDatePicker />
          </View>
          <ButtonApp title={"SUBMIT DATE"} />
        </View>
        <View
          marginTop={10}
          style={{
            paddingTop: 0,
            paddingBottom: 10,
            alignItems: "center"
          }}
        >
          <Text style={styles.label}>Address</Text>
          <Text style={{ color: "#555555", paddingTop: 5 }}>
            Cantersteen 10, 1000 Bruxelles
          </Text>
          <Text style={styles.label}>Telephone</Text>
          <Text style={{ color: "#555555", paddingTop: 5 }}>
            +32 487 44 80 49
          </Text>
        </View>
        <View style={{ alignItems: "center" }} marginTop={10}>
          <Map />
        </View>
        <View style={{ marginTop: 300, paddingBottom: 50, paddingTop: 20 }}>
          <Text style={styles.label}>Nota Bene</Text>

          <Text style={{ color: "#555555", paddingTop: 5 }}>
            Most of the default styles and templates for controls are available
            on MSDN. However for whatever reason, DatePickerTextBox is not. If
            you have a copy of Expression Blend.
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  label: {
    color: "#50C285",
    paddingTop: 10,
    fontWeight: "bold"
  }
});
