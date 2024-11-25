import { StyleSheet, Dimensions } from "react-native";
// import { themas } from './themes';

export const themes = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    scrollView: {
      marginVertical: 10,
      width: "100%",
    },
    button: {
      margin: 30,
      borderRadius: 14,
      width: 210,
      height: 50,
      backgroundColor: '#00BD68',
      color: '#fff',
      fontSize: 21,
      alignItems:'center',
      justifyContent:'center',
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    buttonText: {
      fontSize: 21,
      color: '#fff',
    },
    input: {
      margin: 7,
      borderRadius: 7,
      width: 270,
      height: 50,
      backgroundColor: '#f2f3f4', // '#e5e7e9',
      alignItems:'center',
      justifyContent:'center',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 21,
      // color: '#00BD68',
      fontWeight: 'bold',
    },
    label: {
      marginTop: 21,
      fontSize: 21,
      color: '#424949',
    },    
    labelMov: {
      marginTop: 7,
      fontSize: 17,
      color: '#424949',
    },
    picker: {
      margin: 7,
      borderRadius: 50,
      width: 270,
      height: 50,
      backgroundColor: '#f2f3f4',
      // color:'#cacfd2',
      alignItems:'center',
      justifyContent:'center',
      textAlign: 'center',
      textAlignVertical: 'center',
    }
})