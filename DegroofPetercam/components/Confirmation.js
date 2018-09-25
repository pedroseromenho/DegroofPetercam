import React from 'react';
import { View, Text, StyleSheet, Overlay } from 'react-native';


export default class Popup extends React.Component {
    render() {
        return (
            <View style={styles.popup}>
                <Overlay isVisible={this.state.isVisible}>
                    <Text>Hello from Overlay!</Text>
                </Overlay>;


            </View>

        )
    }
}

const styles = StyleSheet.create({
    popup: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center"



    }
})