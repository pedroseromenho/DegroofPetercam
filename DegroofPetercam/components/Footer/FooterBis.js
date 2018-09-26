import React from "react";
import { Header, Icon } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
// import FontAwesome, { Icons } from 'react-native-fontawesome';
import SvgUri from "react-native-svg-uri";
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';



export default class FooterBis extends React.Component {
    render() {
        return (
            <StickyHeaderFooterScrollView
                renderStickyHeader={() => (
                    <View style={{ height: 10 }}>
                        <Text>{`I'm a sticky header`}</Text>
                    </View>
                )}
                renderStickyFooter={() => (
                    <View style={{ height: 10 }}>
                        <Text>{`I'm a sticky footer`}</Text>
                    </View>
                )}
            >
                <View style={{ height: 1200, backgroundColor: '#eee' }}>
                    <Text>View made scrollable</Text>
                </View>
            </StickyHeaderFooterScrollView>
        )
    }

}