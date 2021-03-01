import React, { Component } from 'react';
import { Text, View, Button, Image, AsyncStorage } from 'react-native';
import { styles } from "./styles";
import { WebView } from 'react-native-webview';


import { Constants, AuthSession } from 'expo';

export default class Viewer extends Component {

  constructor(props) {
    super(props);
  }

  // Handle Viewer Launch
  componentDidUpdate() {


  }

  render() {
    // console.log("styles.viewerHTML", styles.viewerHTML)
    return (
      <View style={styles.container}>
        <WebView
          originWhitelist={['*']}
          useWebKit={true}
          source={{ uri: "http://api.grainchek.com/webview" }}
          style={styles.webview}
          javaScriptEnabled={true}
          scrollEnabled={false}
          scalesPageToFit={true}
          ref={webview => { this.viewer = webview; }}
        />
      </View>
    );
  }
}
