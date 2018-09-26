import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class ShowImage extends Component {
  render() {
    return (
    <View>
        <Image
         source ={{uri:'gs://mon-projet-test-29983.appspot.com/dyn003_original_240_180_pjpeg_2552371_9338b19567321d6718894eeeb246261b.jpg'}}
        />
    </View>    
     );
  } }