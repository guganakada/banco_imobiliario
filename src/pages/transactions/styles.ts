import { StyleSheet, Dimensions } from "react-native";
// import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
    movContainer: {
        margin: 14,
        width: 280,
        backgroundColor: '#cacfd2',
        borderRadius: 14,
        padding: 7,
    },
    movtext: {
        padding: 7,
        fontSize: 21,
        color: '#fff',
        fontWeight: 'bold'
    },
    movtext_red: {
        padding: 7,
        fontSize: 21,
        color: '#c0392b',
        fontWeight: 'bold'
    },
    movtext_green: {
        padding: 7,
        fontSize: 21,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    value: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: 7,
    },
    valuetext: {
        width: '80%',
        padding: 7,
        fontSize: 21,
        textAlign: 'right',
        color: '#13643f',
        fontWeight: 'bold',
    },
    icon: {
        width: '20%',
        padding: 7,
        color: '#00BD68',
    },

})
