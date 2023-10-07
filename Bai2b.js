import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { CheckBox } from '@rneui/themed';
import React, { useState } from 'react';

//Bài 2b
const Bai2b = ()=>{
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const s = '';
  const [dataInput, setDataInput] = useState(s);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    header:{
      width: 333,
      height: 80,
      backgroundColor: '#fff',
      flexDirection:'row',
      justifyContent: 'space-around'
    },
    txtHeader:{
      fontSize:16,
      fontWeight:'bold',
      paddingLeft: 21,
      paddingTop: 4
    },
    txtDanhGia:{
      textAlign:'center',
      justifyContent:'center',
      fontSize:18,
      fontWeight:'bold',
      color: '#000',
      marginTop: 40
    },
    pan: {
      flexDirection: 'row',
      height: 55,
      width: 301,
      alignContent:'center'
    },
    borderLoadImage:{
      height: 70,
      width: 320,
      borderRadius: 5,
      borderWidth:1,
      borderColor: '#1511EB',
      marginTop: 20
    },
    txtArea:{
      width:320,
      height:200,
      fontSize: 18,
      fontWeight:'bold',
      color:'#C4C4C4',
      backgroundColor:'#fff',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#C4C4C4',
      marginTop: 20,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0D5DB6',
      borderWidth: 1,
      borderColor: '#1511EB',
      height: 40,
      width: 320,
      borderRadius: 5,
      marginTop: 20,
    },
    txtButton:{
      fontSize:20,
      fontWeight:700,
      color:'#fff'
    }    
  });
  const gui = ()=>{
    if(!check1){
      alert('Bạn hãy đánh giá trước khi gửi');
      return;
    }
    alert('Success!');
    return;
  }
  return(
    <View style = {styles.container}>
      <View style = {styles.header}>
        <svg xmlns="http://www.w3.org/2000/svg" width="170" height="80" viewBox="0 0 70 70" fill="none" style={{paddingLeft:'10'}}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M50.9569 11.0544C49.0956 11.0747 47.3499 11.4376 46.0513 12.4143L17.037 34.5887C16.7464 34.8072 16.6011 35.0721 16.597 35.3529L16.597 43.6284C16.5937 43.996 16.8313 44.3906 17.3016 44.7443L28.2774 52.9994C29.1089 53.6247 30.1111 53.7045 30.7795 53.2018L59.7996 31.0273C61.1275 30.0286 61.7732 28.6848 61.7726 27.2496L61.7728 18.9221C61.7504 17.0457 60.6276 15.0192 58.4834 13.4066C56.2818 11.7506 53.508 11.0265 50.9574 11.0545L50.9569 11.0544Z" fill="black"/>
          <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M26.8557 43.6611V51.9326L28.2769 53.0014C29.1084 53.6267 30.1106 53.7064 30.7789 53.2038L32.3541 52.02V43.7486L30.7789 44.9324C30.1106 45.435 29.1084 45.3553 28.2769 44.73L26.8557 43.6611Z" fill="url(#paint0_linear_66_2)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3009 36.4734L28.2759 44.7279C29.1074 45.3532 30.1115 45.437 30.7781 44.9306L59.8064 22.8782C62.8769 20.5456 62.2986 16.3934 58.4903 13.5292C54.6819 10.665 49.1359 10.2228 46.0581 12.538L17.0356 34.5882C16.3635 35.0937 16.4697 35.8476 17.3012 36.4728" fill="black"/>
          <g filter="url(#filter0_f_66_2)">
            <path d="M61.7794 19.104C61.7171 20.5406 61.1378 21.6115 60.3795 22.4004L31.0238 44.7596C29.7383 45.7196 29.0324 45.1661 28.1575 44.6416L17.7131 36.742C16.2766 35.8193 16.4642 35.1741 17.0437 34.5958" stroke="white" stroke-width="0.21796"/>
          </g>
          <path d="M50.8501 10.3367C48.7393 10.3464 46.6211 11.1096 44.8744 12.67C40.9258 15.6621 20.4575 31.2763 16.5327 34.3196C15.983 34.9502 16.18 35.9935 16.1555 36.8297V38.6966C13.4385 40.7551 10.7012 42.7524 8.00554 44.8615C7.68512 45.5208 7.93259 46.3436 7.85836 47.0717C7.88722 48.6447 7.76968 50.2385 7.92727 51.7982C8.38246 52.4442 9.06696 52.6806 9.60654 53.1851C12.3488 55.229 15.0683 57.3314 17.8233 59.3384C18.4193 59.3894 18.8216 58.7044 19.338 58.4346L26.955 52.7039C27.9333 53.4734 29.0214 54.4105 30.2225 54.1267C31.2863 53.8437 32.1126 52.8469 33.0691 52.2414C36.8028 49.4051 57.0684 33.9714 60.7678 31.0621C61.8075 30.0741 62.3457 28.4164 62.3411 26.6912C62.3084 23.8517 62.3139 21.059 62.2786 18.1701C61.9063 15.8505 60.4498 14.1674 58.9474 13.0076C56.5201 11.1202 53.6624 10.3011 50.8504 10.3376L50.8501 10.3367Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29956 51.5089L17.924 58.7477L27.5484 51.5089L17.924 44.27L8.29956 51.5089Z" fill="#808080"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.43726 51.4051L18.1992 44.0629V38.272L8.43726 45.6141V51.4051Z" fill="#4D4D4D"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2366 57.1963L27.4587 49.4409V48.4067L17.2366 56.1622V57.1963Z" fill="#B3B3B3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.98706 50.9916V49.9575L17.2368 56.1621V57.1962L8.98706 50.9916Z" fill="#ECECEC"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2366 56.1621L8.98682 49.9576L19.2985 42.2021L27.5483 48.4067L17.2366 56.1621Z" fill="#CCCCCC"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2083 49.8382L12.2394 50.6137L21.3615 43.7531L20.3304 42.9775L11.2083 49.8382ZM12.9269 51.1308L13.9581 51.9063L23.0802 45.0457L22.049 44.2702L12.9269 51.1308ZM14.6455 52.4234L15.6767 53.199L24.7988 46.3383L23.7676 45.5628L14.6455 52.4234ZM16.3642 53.7161L17.3953 54.4916L26.5175 47.631L25.4863 46.8554L16.3642 53.7161Z" fill="#808080"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9242 38.0654L8.29932 45.3031L17.9242 52.5426L27.549 45.3031L17.9242 38.0654ZM17.2367 42.7185L18.6117 43.7527L15.8617 45.8212L14.4867 44.787L17.2367 42.7185ZM19.9866 44.787L21.3617 45.8212L18.6117 47.8897L17.2367 46.8554L19.9866 44.787Z" fill="#808080"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9241 58.7471V52.5426L27.5485 45.3037V51.5083L17.9241 58.7471Z" fill="#4D4D4D"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6243 44.8903L14.4868 44.7869L17.2367 42.7188V42.9256L14.6243 44.8903L14.6243 44.8903Z" fill="#333333"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2366 42.7188V42.9256L18.474 43.8563L18.6115 43.7529L17.2366 42.7188L17.2366 42.7188Z" fill="#E6E6E6"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29932 45.3032V51.5084L17.9242 58.7461V52.5427L8.29932 45.3032ZM8.43654 45.6133L17.7872 52.6467V58.4362L8.43654 51.4045V45.6132V45.6133Z" fill="#E6E6E6"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3743 46.9587L17.2368 46.8553L19.9867 44.7871V44.9939L17.3743 46.9587L17.3743 46.9587Z" fill="#333333"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9866 44.7871V44.994L21.224 45.9246L21.3615 45.8212L19.9866 44.7871L19.9866 44.7871Z" fill="#E6E6E6"/>
          <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M17.3743 46.9584L19.9866 44.9937L21.224 45.9243L18.6117 47.8891L17.3743 46.9584Z" fill="black"/>
          <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M14.6243 44.8905L17.2366 42.9258L18.474 43.8565L15.8617 45.8212L14.6243 44.8905Z" fill="black"/>
          <g opacity="0.24" filter="url(#filter1_f_66_2)">
            <path d="M17.9724 52.5072L27.4395 45.3862" stroke="white" stroke-width="0.21796"/>
          </g>
          <path opacity="0.76549" d="M30.188 29.9375C29.7946 30.2334 29.7855 30.7306 30.1182 31.1634L28.2346 32.5801C28.1862 32.6164 28.155 32.6645 28.1442 32.7194L27.393 36.5685L26.7878 37.0237C26.1993 36.7473 25.507 36.7445 25.1004 37.0504C24.6046 37.4233 24.7209 38.1159 25.3598 38.5965C25.9988 39.0771 26.9197 39.1644 27.4155 38.7916C27.808 38.4964 27.816 37.9998 27.4856 37.5676L28.2471 36.9949L28.2512 36.996L28.2517 36.9906L29.9423 35.7191L29.944 35.7223L34.5117 35.2171C34.5852 35.2096 34.6495 35.1863 34.6984 35.1501L36.42 33.8553L36.8937 34.2115L37.1306 34.3897L37.3143 34.2515L38.7615 33.1631L38.9452 33.0248L38.7084 32.8467L36.9647 31.5353L36.7278 31.3571L36.5441 31.4954L35.0969 32.5837L34.9132 32.7219L35.15 32.9001L35.7095 33.3209L34.0625 34.5596L31.0401 34.8934L37.527 30.0146L38.4388 30.7004L38.7659 30.9465L38.8237 30.6581L39.254 28.4508L39.3128 28.1616L38.928 28.204L35.9905 28.5273L35.6072 28.5707L35.9343 28.8168L36.8166 29.4803L28.4967 35.7377L29.0197 33.0576L30.8183 31.7049C31.4059 31.9795 32.0958 31.9821 32.5015 31.6769C32.9973 31.3041 32.8826 30.6125 32.2436 30.132C31.6046 29.6514 30.6837 29.564 30.1879 29.9369" fill="white"/>
          <defs>
            <filter id="filter0_f_66_2" x="16.2625" y="18.8595" width="45.8653" height="26.7733" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.119829" result="effect1_foregroundBlur_66_2"/>
            </filter>
            <filter id="filter1_f_66_2" x="17.814" y="45.2063" width="9.78411" height="7.48089" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.0464909" result="effect1_foregroundBlur_66_2"/>
            </filter>
            <linearGradient id="paint0_linear_66_2" x1="26.8557" y1="-508.67" x2="32.3568" y2="-508.67" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0"/>
              <stop offset="0.5" stop-color="white"/>
              <stop offset="1" stop-color="#999999"/>
            </linearGradient>
          </defs>
        </svg>
        <Text style = {styles.txtHeader}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth
        </Text>
      </View>
        <TextInput style = {styles.txtDanhGia} value={dataInput} editable={false} placeholder={'Mời bạn đánh giá'}></TextInput>
        <View style = {styles.pan}>
          <CheckBox
          checkedIcon={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="">
<path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#F2DD1B"/></svg>}
          uncheckedIcon={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="">
<path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill=""/></svg>}
          checked={check1} onPress={() => {setCheck1(!check1);setDataInput('Quá tệ')}} 
          containerStyle={{marginTop:10,marginLeft:5}}/>
          <CheckBox
          checkedIcon={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="">
<path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#F2DD1B"/></svg>}
          uncheckedIcon={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="">
<path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill=""/></svg>}
          checked={check2} onPress={() => {setCheck2(!check2);setCheck1(!check1);setDataInput('Tệ')}} 
          containerStyle={{marginTop:10, marginLeft:-10}}/>
          <CheckBox
          checkedIcon={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="">
<path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#F2DD1B"/></svg>}
          uncheckedIcon={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="">
<path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill=""/></svg>}
          checked={check3} onPress={() => {setCheck3(!check3);setCheck2(!check2);setCheck1(!check1);setDataInput('Bình thường')}} 
          containerStyle={{marginTop:10,marginLeft:-10}}/>
          <CheckBox
          checkedIcon={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="">
<path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#F2DD1B"/></svg>}
          uncheckedIcon={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="">
<path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill=""/></svg>}
          checked={check4} onPress={() => {setCheck4(!check4);setCheck3(!check3);setCheck2(!check2);setCheck1(!check1);setDataInput('Hài lòng')}} 
          containerStyle={{marginTop:10,marginLeft:-10}}/>
          <CheckBox
          checkedIcon={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="">
<path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill="#F2DD1B"/></svg>}
          uncheckedIcon={<svg xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="">
<path d="M19.5 0L23.878 13.4742H38.0456L26.5838 21.8017L30.9618 35.2758L19.5 26.9483L8.03819 35.2758L12.4162 21.8017L0.954397 13.4742H15.122L19.5 0Z" fill=""/></svg>}
          checked={check5} onPress={() => {setCheck5(!check5);setCheck4(!check4);setCheck3(!check3);setCheck2(!check2);setCheck1(!check1);setDataInput('Vô cùng hài lòng')}} 
          containerStyle={{marginTop:10,marginLeft:-10}}/>
        </View>
        <View style = {styles.borderLoadImage}>
        </View>
        <TextInput style = {styles.txtArea} multiline={true} placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm">
        </TextInput>
        <TouchableOpacity style = {styles.button} onPress={gui}>
        <Text style = {styles.txtButton}>Gửi
        </Text>
        </TouchableOpacity>
    </View>
  );
}
export default Bai2b;