import React from "react";
import { Header, Icon } from "react-native-elements";
import { StyleSheet, Text } from "react-native";
// import FontAwesome, { Icons } from 'react-native-fontawesome';
import SvgUri from "react-native-svg-uri";



export default class FooterContainer extends React.Component {
    render() {
        return (
            <Header outerContainerStyles={{ backgroundColor: "#50C285" }}>


                <Icon name="home" color="#fff" />
                <Icon name="list" color="#fff" />
                <Icon name="bookmark" color="#fff" />
                <Icon name="history" color="#fff" />
                <Icon name="star" color="#fff" />
                {/* <SvgUri
                    width="130"
                    height="50"
                    style={styles.logo}
                    source={require("./assets/user-solid.svg")}
                /> */}


            </Header>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: "#fff"
    }
});