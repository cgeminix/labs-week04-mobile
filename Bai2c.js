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
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [lenghts, setLenghts] = useState(6);
  const [values, setValues] = useState("");

  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+";

  const getRandom = () =>{
    const chars = [];
    if(upperCase){
      chars.push(upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)])
    }
    
    if(lowerCase){
      chars.push(lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)])
    }
    
    if(numbers){
      chars.push(numberChars[Math.floor(Math.random() * numberChars.length)])
    }
    
    if(symbols){
      chars.push(specialChars[Math.floor(Math.random() * specialChars.length)])
    }

    if(chars===0)
      return;

    return chars[Math.floor(Math.random() * chars.length)];
  }

  const generatorPassword = () =>{
    let pass = "";
    for (let i = 0; i < lenghts; i++){
      pass += getRandom();
    }
    setValues(pass);
  }

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
      textAlign: 'center',
      justifyContent: 'center',
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
        <Text style={styles.txtPassword}>{values}</Text>
        <View style={styles.pan}>
          <Text style={styles.text}>Password lenght</Text>
          <TextInput style={styles.txtLenghtPass} onChangeText={setLenghts}></TextInput>
        </View>

        <View style={styles.pan}>
          <Text style={styles.text}>Include lower case letters</Text>
          <CheckBox size={40} checked={lowerCase} onPress={() => setLowerCase(!lowerCase)} 
            containerStyle={{backgroundColor:'#23235B', marginTop:-10}}/>
        </View>

        <View style={styles.pan}>
          <Text style={styles.text}>Include upcase letters</Text>
          <CheckBox size={40} checked={upperCase} onPress={() => setUpperCase(!upperCase)} 
            containerStyle={{backgroundColor:'#23235B', marginTop:-10, marginLeft:38}}/>
        </View>

        <View style={styles.pan}>
          <Text style={styles.text}>Include number</Text>
          <CheckBox size={40} checked={numbers} onPress={() => setNumbers(!numbers)} 
            containerStyle={{backgroundColor:'#23235B', marginTop:-10, marginLeft:84}}/>
        </View>

        <View style={styles.pan}>
          <Text style={styles.text}>Include special symbol</Text>
          <CheckBox size={40} checked={symbols} onPress={() => setSymbols(!symbols)} 
            containerStyle={{backgroundColor:'#23235B', marginTop:-10, marginLeft:34}}/>
        </View>
        <TouchableOpacity style = {styles.button} onPress={generatorPassword}>
          <Text style = {styles.txtButton}>GENERATOR PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bai2c;