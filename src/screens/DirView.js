import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DirView extends Component {
  constructor(props){
    super(props)
    this.state = {
      allKeys: [],          //全てのkeyを管理する変数
      allData: [
        [ 1, 'stock', 'D', 'Home', '1'],
        [ 2, 'IT', 'D', 'Home', '2'],
        [ 3, 'corp', 'D', 'Home', '3'],
        [ 4, 'other', 'F', 'Home', '4'],
        [ 5, 'value', 'F', 'stock', '1'],
        [ 6, 'growth', 'F', 'stock', '2'],
        // { key: 1, nameOrContent: 'stock', D_or_F: 'D', belong: 'Home', displayOrder: '1'},
      ],          //全データを管理する配列
      key: '',              //各データのkey
      nameOrContent: '',    //「ディレクトリの名前」か「ファイルの内容」を格納
      D_or_F: '',           //ディレクトリ(D)かファイル(F)か
      belong: '',           //どのディレクトリに内にあるか。所属する親ディレクトリのkeyを入れる
      displayOrder: '',     //ディレクトリ開いた時の表示順序
      test: '',
    }
  }

  render(){
    const { homeStatus,setHomeStatus, navigation } = this.props
    return(
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.allData}
          renderItem={({ item }) => {
            let D_or_F
            item[2] === 'D' ? D_or_F = 'folder' : D_or_F = 'file';

            return(
              <TouchableOpacity
                style={styles.listItem} 
                onPress={() => navigation.push('DirView',)}
              >
                <Icon name={D_or_F} style={styles.icon} size={28} />
                <Text style={styles.text}>{item[1]}</Text>
              </TouchableOpacity>
            );
          }}
        />
          <Button onPress={() => navigation.navigate('FileView')} /><br />
          <Text style={styles.text}>{homeStatus}</Text>
          <Button onPress={() => setHomeStatus('テスト')} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    marginTop: 0,
    padding: 10,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
  }
});