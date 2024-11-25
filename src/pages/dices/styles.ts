import { StyleSheet, Dimensions } from "react-native";
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 100,
        height: 100,
    },
    top: {
        padding: 20,
        alignItems: 'center',
    },
    historyItem: {
        flexDirection: 'row', // Para alinhar as imagens e textos lado a lado
        alignItems: 'center',
        marginBottom: 10,
    },
    smallImage: {
        width: 40,
        height: 40, // Define o tamanho das imagens do histórico
        marginHorizontal: 5,
    },
    // Outros estilos...
    bottom: {
        height: '50%',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    diceContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        marginHorizontal: 10,
    },
    onlyDiceContainer:{
        margin: 14,
        alignItems: "center",
        justifyContent: "center",
    },
    resultContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    result:{
        // color: themas.Colors.secondary, 
        fontSize: 40,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 14,
        width: 210,
        height: 70,
        // backgroundColor: themas.Colors.primary,
        alignItems:'center',
        justifyContent:'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold',
    },
    text:{
        padding: 14,
        fontSize: 21,
    },
})
