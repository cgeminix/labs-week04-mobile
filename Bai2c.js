import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { CheckBox } from '@rneui/themed';
import React, { useState } from 'react';

//Bài 2c
const Bai2c = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [length, setLenght] = useState();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3B3B98',
      alignItems: 'center',
    },
    backgroundIn: {
      flex: 1,
      backgroundColor: '#23235B',
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      elevation: 24,
      alignItems: 'center',
      width: 300,
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 15,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 50,
      color: '#FFF',
    },
    txtPassword: {
      height: 40,
      width: 250,
      fontWeight: 500,
      fontSize: 18,
      paddingLeft: 25,
      backgroundColor: '#151537',
      color: '#fff',
      marginTop: 30,
      marginBottom: 30,
    },
    pan: {
      flexDirection: 'row',
      height: 55,
      width: 301,
    },
    text: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 700,
      marginLeft: 27,
      marginTop:7
    },
    txtLenghtPass: {
      textAlign:'center',
      height: 30,
      width: 80,
      fontWeight: 500,
      fontSize: 18,
      marginLeft: 45,
      backgroundColor: '#fff',
      color: '#000',
    },
    button:{
      justifyContent:'center',
      alignItems:'center',
      background: '#3B3B98',
      width: 230,
      height:49
    },
    txtButton:{
      color: '#fff',
      fontSize:16,
      fontWeight:'bold'
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.backgroundIn}>
        <Text style={styles.title}>PASSWORD {'\n'}GENERATOR</Text>
        <TextInput style={styles.txtPassword} editable={false} maxLenght={4}></TextInput>
        <View style={styles.pan}>
          <Text style={styles.text}>Password lenght</Text>
          <TextInput style={styles.txtLenghtPass}></TextInput>
        </View>

        <View style={styles.pan}>
          <Text style={styles.text}>Include lower case letters</Text>
          <CheckBox size={40} checked={check1} onPress={() => setCheck1(!check1)} 
            containerStyle={{backgroundColor:'#23235B', marginTop:-10}}/>
        </View>

        <View style={styles.pan}>
          <Text style={styles.text}>Include upcase letters</Text>
          <CheckBox size={40} checked={check2} onPress={() => setCheck2(!check2)} 
            containerStyle={{backgroundColor:'#23235B', marginTop:-10, marginLeft:38}}/>
        </View>

        <View style={styles.pan}>
          <Text style={styles.text}>Include number</Text>
          <CheckBox size={40} checked={check3} onPress={() => setCheck3(!check3)} 
            containerStyle={{backgroundColor:'#23235B', marginTop:-10, marginLeft:84}}/>
        </View>

        <View style={styles.pan}>
          <Text style={styles.text}>Include special symbol</Text>
          <CheckBox size={40} checked={check4} onPress={() => setCheck4(!check4)} 
            containerStyle={{backgroundColor:'#23235B', marginTop:-10, marginLeft:34}}/>
        </View>
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.txtButton}>GENERATOR PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bai2c;