import React, { Component } from "react";
import SvgUri from "react-native-svg-uri";

class HeaderLogo extends Component {
  render() {
    return <SvgUri width="200" height="200" source={require("./img.svg")} />;
  }
}

export default HeaderLogo;
