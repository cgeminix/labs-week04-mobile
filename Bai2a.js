import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

//Bài 2_a
var Bai2a = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FBCB00',
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 50,
      marginLeft: -170,
      marginBottom: 50,
    },
    border: {
      flexDirection: 'row',
      border: 'solid',
      color: '#F2F2F2',
      height: 54,
      width: 300,
      marginBottom: 20,
      paddingLeft: 5,
      paddingTop: 8,
      backgroundColor: 'rgba(196, 196, 196, 0.30)',
    },
    textBorder: {
      fontWeight: 500,
      fontSize: 18,
      paddingLeft: 25,
      paddingTop: 4,
      marginBottom: 7,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      height: 45,
      width: 300,
      borderRadius: 2,
      marginTop: 50,
      marginBottom: 50,
    },
  });
  const ktra =  () => {
    if (!name) {
      alert('Please fill Name');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    alert(`User ${name} has successfully login!`)
    return
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.border}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none">
          <g clip-path="url(#clip0_22_29)">
            <path
              d="M16 15.6498C19.5578 15.6498 22.4423 12.1464 22.4423 7.82479C22.4423 3.50305 21.4953 -0.000305176 16 -0.000305176C10.5047 -0.000305176 9.55746 3.50305 9.55746 7.82479C9.55746 12.1464 12.4419 15.6498 16 15.6498Z"
              fill="black"
            />
            <path
              d="M3.83196 27.5977C3.82928 27.5235 3.83062 27.3342 3.83196 27.5977V27.5977Z"
              fill="black"
            />
            <path
              d="M28.1673 27.8034C28.1688 27.303 28.1716 27.7313 28.1673 27.8034V27.8034Z"
              fill="black"
            />
            <path
              d="M28.1545 27.2823C28.0352 19.7539 27.052 17.6091 19.528 16.2505C19.528 16.2505 18.4689 17.6001 16.0003 17.6001C13.5318 17.6001 12.4725 16.2505 12.4725 16.2505C5.03066 17.5936 3.98764 19.707 3.8505 27.0373C3.83925 27.6358 3.83404 27.6673 3.83203 27.5978C3.83249 27.728 3.83304 27.9688 3.83304 28.3887C3.83304 28.3887 5.62431 31.9998 16.0003 31.9998C26.3766 31.9998 28.1677 28.3887 28.1677 28.3887C28.1677 28.1189 28.1678 27.9313 28.1681 27.8037C28.1661 27.8467 28.1621 27.7634 28.1545 27.2818V27.2823Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_22_29">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <TextInput
          style={styles.textBorder}
          placeholder="Name"
          onChangeText={(name) => setName(name)}></TextInput>
      </View>

      <View style={styles.border}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none">
          <g clip-path="url(#clip0_22_9)">
            <path
              opacity="0.98"
              d="M16.0137 0.0105591C15.8714 0.01159 15.7291 0.0127253 15.5867 0.0169523C9.04974 0.0462316 3.18475 4.12565 3.16815 8.72539C3.09418 9.80965 3.18969 10.8947 3.17271 11.9794H0.0232291C0.106645 16.7451 -0.146534 21.522 0.156367 26.2809C0.80805 29.3453 4.72912 32.1165 9.30158 31.9673C14.308 31.9605 19.33 32.076 24.3276 31.8964C29.0191 31.3291 32.3136 27.9485 31.9579 24.6765C32.0118 20.4453 31.9528 16.214 31.9763 11.9833C30.9311 11.9645 29.8857 11.9976 28.8406 11.9736C28.9199 9.3972 29.0926 6.58092 26.9997 4.34765C24.7364 1.69746 20.4229 -0.00868407 16.0135 0.0112135L16.0137 0.0105591ZM16.0733 3.68986C19.7874 3.72556 23.4569 5.88405 23.35 8.59981C23.4237 9.72583 23.4729 10.8525 23.5061 11.9794C18.5095 11.9773 13.5131 11.9849 8.51676 11.9729C8.53229 10.2102 7.8582 8.28279 9.23295 6.69573C10.4812 5.01413 12.9762 3.72728 15.7154 3.69305C15.8352 3.68975 15.9537 3.68862 16.0735 3.68986H16.0733Z"
              fill="white"
            />
            <path
              opacity="0.98"
              d="M15.6901 0.628877C9.20688 0.743396 4.03826 4.44663 4.03826 9.02483V12.5945H0.902588V24.7341H0.907143C0.902589 24.8218 0.902588 24.9097 0.902588 24.9983C0.902588 28.5239 4.58286 31.3613 9.15708 31.3613H22.8336C27.4078 31.3613 31.0928 28.5239 31.0928 24.9983C31.0928 24.9097 31.0881 24.8218 31.0836 24.7341H31.0928V12.5945H27.9617V9.02483C27.9617 4.37405 22.6296 0.628877 16.0023 0.628877C15.8987 0.628877 15.793 0.627021 15.6901 0.628877ZM15.635 3.07741C15.7136 3.07607 15.7946 3.07741 15.8737 3.07741C19.6625 3.0153 23.3866 4.98232 24.1604 7.59426C24.2921 9.26092 24.3663 10.9262 24.4083 12.5944H7.61489C7.61093 11.7968 7.60565 11.001 7.58277 10.2038C6.62375 6.7929 10.6789 3.15907 15.6353 3.07731L15.635 3.07741ZM15.9839 17.0346C16.1627 17.0346 16.3434 17.0444 16.5256 17.0636C18.4693 17.2682 19.8106 18.538 19.5189 19.9019C19.3847 20.53 18.923 21.0704 18.2794 21.4484L19.5235 26.9221H12.4718L13.7114 21.4484C12.7944 20.908 12.2858 20.0528 12.4764 19.1608C12.7406 17.9247 14.2558 17.0378 15.9839 17.0345V17.0346Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_22_9">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <TextInput
          style={{
            height: 35,
            width: 220,
            fontWeight: 500,
            fontSize: 18,
            paddingLeft: 25,
          }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}></TextInput>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none">
          <g clip-path="url(#clip0_22_3)">
            <path
              d="M16 11.6364C13.5927 11.6364 11.6364 13.5928 11.6364 16C11.6364 18.4073 13.5927 20.3637 16 20.3637C18.4073 20.3637 20.3637 18.4073 20.3637 16C20.3637 13.5928 18.4072 11.6364 16 11.6364Z"
              fill="black"
            />
            <path
              d="M16 5.09094C8.72728 5.09094 2.51639 9.61454 0 16C2.51639 22.3855 8.72728 26.9091 16 26.9091C23.28 26.9091 29.4837 22.3855 32.0001 16C29.4837 9.61454 23.28 5.09094 16 5.09094ZM16 23.2727C11.9855 23.2727 8.72728 20.0145 8.72728 16C8.72728 11.9854 11.9855 8.72729 16 8.72729C20.0146 8.72729 23.2728 11.9855 23.2728 16C23.2728 20.0146 20.0146 23.2727 16 23.2727Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_22_3">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </View>
      <View style={styles.button}>
        <Button color="#000" title="LOGIN" onPress={ktra}></Button>
      </View>

      <TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Bai2a;