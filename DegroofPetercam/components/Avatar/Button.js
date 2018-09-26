import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button, colors } from "react-native-elements";

export default class ButtonApp extends React.Component {
    button() {
        Alert.alert(
            'Confirmation',
            'Please confirm your application for this offer',
            [
                { text: 'CANCEL', onPress: () => console.warn('NO Pressed'), style: 'cancel' },
                { text: 'CONFIRM', onPress: () => console.warn('YES Pressed') },
            ]
        );
    }
    render() {
        return (
            <View style={styles.Button}>
                <TouchableOpacity
                    title="click me"
                    color="#50C285"
                    style={styles.styleButton}
                    onPress={() => this.button()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    styleButton: {
        backgroundColor: "white",
        padding: 10,
        height: 45,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#DDDDDD",
        shadowOpacity: 0.5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCE3D7"
    },
    Button: {
        alignItems: "flex-end",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});