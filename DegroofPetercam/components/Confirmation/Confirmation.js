import React, { Component } from 'react';
import {
    Text,
    Alert,
    TouchableOpacity,
    StyleSheet,
    View,
} from 'react-native';


export default class Popup extends Component {
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
            <View style={styles.container}>
                <TouchableOpacity style={styles.styleButton} onPress={() => this.button()}>
                    <Text>Button</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",

    },

    styleButton: {
        backgroundColor: "yellow",
        height: 40,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "blue",
        alignItems: "center",
    }
})
    ;