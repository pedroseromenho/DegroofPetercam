import React from 'react';
import { View, Image } from 'react-native';
export default class HeaderLogo extends React.Component {
    render() {
        return (
            <View>
                <Image source={{ uri: 'https://myprofile.degroofpetercam.be/themes/degroof_theme/images/title_degroof_petercam.png' }}
                    style={{ width: '100%', height: 2, position: 'relative', top: 300 }} />
            </View >
        )
    }
}
