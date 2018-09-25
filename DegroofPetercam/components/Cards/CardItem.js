import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  FlatList,
  Avatar
} from "react-native-elements";

const offers = [
  {
    name: "Becode",
    area: "Brussels",
    skills: "Human Ressources",
    type: "coaching",
    duration: "8h",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Coucou",
    area: "Brussels",
    skills: "Human Ressources",
    type: "coaching",
    duration: "8h",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  },
  {
    name: "Coucou",
    area: "Brussels",
    skills: "Human Ressources",
    type: "coaching",
    duration: "8h",
    avatar: "fr"
  },
  {
    name: "Coucou",
    area: "Brussels",
    skills: "Human Ressources",
    type: "coaching",
    duration: "8h",
    avatar: "fr"
  }
];

export default class CardItem extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} containerStyle={{ padding: 0 }}>
        {offers.map((o, i) => {
          return (
            <View style={styles.marginCards}>
              <Avatar
                xlarge
                rounded
                source={{
                  uri: o.avatar
                }}
                style={styles.avatar}
              />
              <View style={styles.wrapper}>
                <ListItem
                  key={i}
                  roundAvatar
                  title={o.name}
                  subtitle={o.skills}
                  //   avatar={{ uri: o.avatar }}
                  hideChevron
                  style={styles.listItem}
                />
                <View style={styles.details}>
                  <Text>
                    Area:
                    {" " + o.area}
                  </Text>
                  <Text>
                    Type:
                    {" " + o.type}
                  </Text>
                  <Text>
                    Duration:
                    {" " + o.duration}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 100
  },

  marginCards: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "#DDDDDD",
    shadowOpacity: 1.0,
    backgroundColor: "white"
  },
  details: {
    padding: 20
  },
  listItem: {
    backgroundColor: "red",
    borderBottomWidth: 0,
    fontSize: 48
  },
  avatar: {}
});
