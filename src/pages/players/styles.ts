import { StyleSheet, Dimensions } from "react-native";
// import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
    playerContainer: {
        margin: 14,
        width: 280,
        backgroundColor: '#00BD68', // themas.Colors.primary,
        borderRadius: 14,
        padding: 7,
    },
    playerText: {
        width: '80%',
        padding: 7,
        fontSize: 21,
        color: '#fff',
        fontWeight: 'bold',
    },
    player: {
        width: 240,
        flexDirection: 'row',
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
    iconBox: {
        fontSize: 21,
        padding: 7,
        color: '#13643f',
    },
    textBox: {
        width: '30%',
        padding: 7,
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold',
    },
    inputBox: {
        fontSize: 17,
        width: '75%',
        backgroundColor: "#fff",
        borderRadius: 7,
        padding: 3,
        paddingLeft: 7,
    },
    box: {
        margin: 4,
        width: 240,
        flexDirection: 'row',
    }
})
