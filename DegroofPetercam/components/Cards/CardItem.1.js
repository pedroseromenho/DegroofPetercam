import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon, FlatList } from "react-native-elements";

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
  }
];

export default class CardItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {offers.map((o, i) => {
          return (
            <Text
              key={i}
              roundAvatar
              title={o.name}
              area={o.area}
              skills={o.skills}
              type={o.type}
              duration={o.duration}
              avatar={{ uri: o.avatar }}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 3000
  }
});
