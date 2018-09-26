import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AvatarText extends React.Component {
    render() {
        return (
            <View style={styles.AvatarText}>
                <Text>Bonjour!</Text>
                <Text>Sylvia Steisel</Text>
                <Text>you did 8 hours</Text>
                <Text>you have 16 hours left</Text>
                <Text>sylviasteisel@degroofpetercam.com</Text>
                <Text>Bruxelles</Text>
                <Text>Human ressource management</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    AvatarText: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center"



    }
})