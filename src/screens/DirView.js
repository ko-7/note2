import React, { useState,useLayoutEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DirView ({route, navigation}) {
  const [allKeys, setAllKeys] = useState([])           //全てのkeyを管理する変数
  const [allData, setAllData] = useState([
    [ 1, 'stock', 'D', 'Home', '1'],
    [ 2, 'IT', 'D', 'Home', '2'],
    [ 3, 'corp', 'D', 'Home', '3'],
    [ 4, 'other', 'F', 'Home', '4'],
    [ 5, 'value', 'F', 'stock', '1'],
    [ 6, 'growth', 'F', 'stock', '2'],
    // { key: 1, nameOrContent: 'stock', D_or_F: 'D', belong: 'Home', displayOrder: '1'},
  ])                                                   //全データを管理する配列   
  const [key, setKey] = useState('')         //各データのkey
  const [nameOrContent, setNameOrContent] = useState('')  //「ディレクトリの名前」か「ファイルの内容」を格納
  const [D_or_F, setD_or_F] = useState('')                //ディレクトリ(D)かファイル(F)か
  const [belong, setBelong] = useState('')                //どのディレクトリに内にあるか。所属する親ディレクトリのkeyを入れる
  const [displayOrder, setDisplayOrder] = useState()      //ディレクトリ開いた時の表示順序

  function Display(props){
    const nameOrContent = props.nameOrContent
    const D_or_F = props.D_or_F
    const belong = props.belong
    if(belong === route.params.homeStatus) {
      if(D_or_F === 'D'){
        console.log(D_or_F)
        return(
          <TouchableOpacity
            style={styles.listItem} 
            onPress={() => navigation.push('DirView',{homeStatus:nameOrContent})}
          >
            <Icon name='folder' style={styles.icon} size={28} />
            <Text style={styles.text}>{nameOrContent}</Text>
          </TouchableOpacity>
        );
      }else{
        return(
          <TouchableOpacity
            style={styles.listItem} 
            onPress={() => navigation.push('FileView',{homeStatus:''})}
          >
            <Icon name='file' style={styles.icon} size={28} />
            <Text style={styles.text}>{nameOrContent}</Text>
          </TouchableOpacity>
        )
      }
    }else{
      return null
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={allData}
        renderItem={({ item }) => {
          return(
            <Display nameOrContent={item[1]} D_or_F={item[2]} belong={item[3]} />
          )
        }}
      />
      <Button title='ファイルへ' onPress={() => navigation.navigate('FileView')} />
      <Text style={styles.text}>{route.params.homeStatus}</Text>
    </SafeAreaView>
  );
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