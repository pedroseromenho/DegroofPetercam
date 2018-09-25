import React from 'react';
import { Header } from 'react-native-elements';


export default class HeaderContainer extends React.Component {
    render() {
        return (
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                outerContainerStyles={{ backgroundColor: '#50C285' }}
            />
        )
    }
}

