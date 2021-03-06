import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
export default class Map extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 50.845409,
            longitude: 4.357287,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          scrollEnabled={false}
        >
          <MapView.Marker
            coordinate={{
              latitude: 50.845409,
              longitude: 4.357287
            }}
            title={"My marker"}
            description={"My description"}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 325,
    height: 300,
    alignItems: "center",
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "#DDDDDD",
    shadowOpacity: 1.0
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
