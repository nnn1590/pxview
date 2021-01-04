import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,32,32,0.5)',
    top: 0,
    left: 0,
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    //marginLeft: 3,
    color: '#fff',
    backgroundColor: 'transparent',
  },
});

const OverlayXRestrict = (props) => (
  <View style={styles.container}>
    {/*<Icon name="exclamation-triangle" color="#fff" />*/}
    <Text style={styles.text}>{props.text}</Text>
  </View>
);

export default OverlayXRestrict;
