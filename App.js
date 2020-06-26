import React from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text>Open up App.js to start working on your app!</Text>
        <View>
          <View style = {styles.ContainerTitle}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://img.freepik.com/free-vector/golden-retro-restaurant-logo-set_23-2148370377.jpg?size=626&ext=jpg',
              }}
            />
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:16,paddingHorizontal:16}}>
            <Text style={{fontSize:17, fontWeight:'bold', color:'#1C1C1C'}}>Info Tanaman</Text>
            <Text style={{fontSize:17, fontWeight:'bold', color:'#61A756'}}>See All</Text>
          </View>
        </View>

        <ScrollView horizontal style={{flexDirection:'row'}}>
        <View style={{marginRight:16}}>
            <View style={{width:150, height:150, borderRadius:10}}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://img.freepik.com/free-vector/golden-retro-restaurant-logo-set_23-2148370377.jpg?size=626&ext=jpg',
                }}
              />
            </View>
              <Text style={{fontSize:16, fontWeight:'bold', color:'#1C1C1C',marginTop:12}}>Dummy tanamanew</Text>
          </View>

          <View style={{marginRight:16}}>
            <View style={{width:150, height:150, borderRadius:10}}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://img.freepik.com/free-vector/golden-retro-restaurant-logo-set_23-2148370377.jpg?size=626&ext=jpg',
                }}
              />
            </View>
              <Text style={{fontSize:16, fontWeight:'bold', color:'#1C1C1C',marginTop:12}}>Dummy tanamanew</Text>
          </View>

          <View style={{marginRight:16}}>
            <View style={{width:150, height:150, borderRadius:10}}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://img.freepik.com/free-vector/golden-retro-restaurant-logo-set_23-2148370377.jpg?size=626&ext=jpg',
                }}
              />
            </View>
              <Text style={{fontSize:16, fontWeight:'bold', color:'#1C1C1C',marginTop:12}}>Dummy tanamanew</Text>
          </View>
        </ScrollView>
        <View style={{paddingBottom:8, borderBottomColor: '#E8E9ED', borderBottomWidth:1, marginTop:16,marginHorizontal:16, marginBottom:20}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scroll: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop:15
  },
  ContainerTitle: {
    height:15,
    width:60,
    marginLeft: 16
  },
  tinyLogo: {
    width:undefined,
    height:undefined,
    resizeMode:'contain',
    flex:1
  },
});
