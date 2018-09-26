import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
export default class Map extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                    region={{
                        latitude: 50.845409,
                        longitude: 4.357287,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: 50.845409,
                            longitude: 4.357287,
                        }}
                        title={'My marker'}
                        description={'My description'} />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: 300,
        height: 300,
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }


})