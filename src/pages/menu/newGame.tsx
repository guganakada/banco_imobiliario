import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as FileSystem from 'expo-file-system';

import { useNavigation } from '@react-navigation/native';

import { styles } from "./styles";
import { themes } from "../../global/themes";

export default function NewGame() {
    const [selectedValue, setSelectedValue] = useState("2");
    const [playerValue, setPlayerValue] = useState("15000");

    const navigation = useNavigation(); // Hook de navegação

    const createNewGame = async () => {
        const directoryUri = FileSystem.documentDirectory + 'data/';

        const folderName = 'save/';

        const folderUri = directoryUri + folderName;

        // Criar diretório
        await FileSystem.makeDirectoryAsync(folderUri, { intermediates: true });

        // Criar players.json
        const numberOfPlayers = parseInt(selectedValue); // Pega o valor selecionado
        const playersData = { "0": { "nome": "Banco" } }; // Começa com o Banco

        // Adiciona jogadores de acordo com a quantidade selecionada
        for (let i = 1; i <= numberOfPlayers; i++) {
            playersData[i.toString()] = {
                "nome": `Jogador ${i}`,
                "saldo": playerValue,
                "status": "1"
            };
        }

        await FileSystem.writeAsStringAsync(folderUri + '/players.json', JSON.stringify(playersData));

        // Criar transactions.json vazio
        const transactionsData = JSON.stringify([]);
        await FileSystem.writeAsStringAsync(folderUri + '/transactions.json', transactionsData);

        console.log('Jogo criado com sucesso!');

        // Navegar para a tela EditPlayers
        navigation.navigate('EditPlayers', { folderPath: folderUri });
    };

    return (
        <View style={themes.container}>
            <Text style={themes.label}>Selecione a quantidade de jogadores:</Text>
            <Picker
                selectedValue={selectedValue}
                style={themes.picker}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
            </Picker>

            <Text style={themes.label}>Valor por jogador:</Text>
            <TextInput
                style={themes.input}
                value={playerValue}
                onChangeText={text => setPlayerValue(text)}
                keyboardType="numeric"
            />

            <TouchableOpacity style={themes.button} onPress={createNewGame}>
                <Text style={themes.buttonText}>Criar Jogo</Text>
            </TouchableOpacity>
        </View>
    );
}
