import React, { useState } from "react";
import { styles } from "./styles";
import { themes } from "../../global/themes";

import { View, Text, TextInput, ScrollView, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as FileSystem from 'expo-file-system'; // Importa o FileSystem

export default function EditPlayers() {
    const route = useRoute();
    const navigation = useNavigation(); // Para a navegação após salvar
    const { playersData } = route.params; // Recebe os dados dos jogadores

    const [players, setPlayers] = useState(playersData || []); // Inicializa com os dados recebidos ou um array vazio

    // Função para atualizar os dados dos jogadores
    const handleUpdatePlayer = (index, field, value) => {
        const updatedPlayers = [...players];
        updatedPlayers[index][field] = value;
        setPlayers(updatedPlayers);
    };

    // Função para salvar as edições no arquivo players.json da base
    const handleSave = async () => {
        const baseFilePath = `${FileSystem.documentDirectory}data/base/players.json`; // Caminho do arquivo base

        try {
            // Cria o diretório base se não existir
            const dirInfo = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}data/base/`);
            if (!dirInfo.exists) {
                await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}data/base/`, { intermediates: true });
            }

            // Grava o arquivo players.json na base com os novos dados dos jogadores
            await FileSystem.writeAsStringAsync(baseFilePath, JSON.stringify(players));
            
            Alert.alert("Edição salva", "As mudanças foram salvas com sucesso.");
            console.log("Novos dados dos jogadores:", players);

            // Navega de volta para a tela anterior ou faz outra ação desejada
            navigation.goBack();
        } catch (error) {
            console.error("Erro ao salvar os dados dos jogadores:", error);
            Alert.alert("Erro", "Não foi possível salvar as alterações.");
        }
    };

    // Verifica se há jogadores disponíveis
    if (!players || players.length === 0) {
        return (
            <View>
                <Text>Nenhum jogador encontrado para editar.</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={themes.container}>
                {players.map((player, index) => (
                    player.nome === "Banco" ? null : (
                        <View key={index} style={styles.playerContainer}>
                            <View style={styles.box}>
                                <Text style={styles.textBox}>Nome:</Text>
                                <TextInput
                                    style={styles.inputBox}
                                    value={player?.nome || `Jogador ${index + 1}`}
                                    editable={player.nome !== "Banco"}
                                    onFocus={(e) => e.target.select()}  // Seleciona todo o texto ao focar
                                    selectTextOnFocus={true} // Seleciona o texto ao focar
                                    onChangeText={(value) => handleUpdatePlayer(index, 'nome', value)}
                                />
                            </View>
                            <View style={styles.box}>
                                {/* Saldo do jogador */}
                                <Text style={styles.textBox}>Saldo:</Text>
                                <TextInput
                                    style={styles.inputBox}
                                    value={player?.saldo?.toString() || '0'} // Garantir que o saldo seja tratado como string e tenha um valor padrão
                                    keyboardType="numeric" // Para abrir o teclado numérico
                                    selectTextOnFocus={true} // Seleciona o texto ao focar
                                    onChangeText={(value) => handleUpdatePlayer(index, 'saldo', value)}
                                />
                            </View>
                        </View>
                    )
                ))}

                {/* Botão de salvar */}
                <TouchableOpacity
                    style={themes.button}
                    onPress={handleSave}
                >
                    <Text style={themes.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
