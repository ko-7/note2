import React, { Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
    render() {
    const {getI} = this.props
    const { navigation, todoList } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <Text>{getI}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height:'100%'
  },
  icon: {
    marginRight: 10,
  },
});