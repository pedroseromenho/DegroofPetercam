import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, colors } from 'react-native-elements';

export default class ButtonApp extends React.Component {
    render() {
        return (
            <View style={styles.Button}>
                <Button
                    title={"modify personal informations".toUpperCase()}
                    color="#50C285"
                    buttonStyle={{
                        backgroundColor: "white",
                        width: 300,
                        height: 45,
                        borderColor: "#50C285",
                        borderWidth: 2,


                    }}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    Button: {
        alignItems: "flex-end",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",





    }
})