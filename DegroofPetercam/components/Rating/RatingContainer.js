import React from "react";
import { Header, Icon } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import { Rating } from 'react-native-elements';
// import SvgUri from 'react-native-svg-uri';





export default class RatingContainer extends React.Component {
    render() {
        return (
            <View style={styles.rating}>
                <Rating
                    type='custom'
                    showRating
                    ratingImage={STAR_IMAGE}
                    ratingColor='#50C285'
                    ratingBackgroundColor='white'
                    ratingCount={5}
                    imageSize={30}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                />
            </View>
        );
    }
}

const STAR_IMAGE = require('../../assets/star-1.png')
const styles = StyleSheet.create({
    rating: {
        width: "100%",
        alignItems: "flex-end",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        padding: 30,






    }
})