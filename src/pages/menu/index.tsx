import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { themes } from "../../global/themes";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { styles } from "./styles";

export default function Menu() {
    const navigation = useNavigation();
    const [playersData, setPlayersData] = useState(null); // Dados dos jogadores
    const [selectedGame, setSelectedGame] = useState(null); // Jogo selecionado

    // Verifica se há um jogo salvo em andamento
    const checkSavedGame = async () => {
        const folderUri = `${FileSystem.documentDirectory}data/save/`;
        const playersFileUri = `${folderUri}/players.json`;
        const transactionsFileUri = `${folderUri}/transactions.json`;

        try {
            const playersFileInfo = await FileSystem.getInfoAsync(playersFileUri);
            const transactionsFileInfo = await FileSystem.getInfoAsync(transactionsFileUri);

            // Verifica se os arquivos existem
            if (playersFileInfo.exists && transactionsFileInfo.exists) {
                const playersFile = await FileSystem.readAsStringAsync(playersFileUri);
                const parsedPlayersData = JSON.parse(playersFile);
                setPlayersData(parsedPlayersData);
                setSelectedGame('save'); // Marca que há um jogo salvo
                console.log("Jogadores carregados:", parsedPlayersData);
            } else {
                // Se os arquivos não existirem, limpa o estado
                setPlayersData(null);
                setSelectedGame(null);
                console.log("Nenhum jogo salvo encontrado.");
            }
        } catch (error) {
            console.error("Erro ao verificar jogo salvo:", error);
            Alert.alert("Erro", "Não foi possível verificar o jogo salvo.");
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            checkSavedGame(); // Verifica jogo salvo quando a tela ganha foco
        }, [])
    );

    // Função para excluir o jogo
    const deleteGame = async () => {
        const folderUri = `${FileSystem.documentDirectory}data/save/`;
        const playersFileUri = `${folderUri}/players.json`;
        const transactionsFileUri = `${folderUri}/transactions.json`;

        try {
            Alert.alert(
                "Confirmar Exclusão",
                "Tem certeza que deseja excluir este jogo?",
                [
                    { text: "Cancelar", style: "cancel" },
                    { text: "Excluir", onPress: async () => {
                        await FileSystem.deleteAsync(playersFileUri, { idempotent: true });
                        await FileSystem.deleteAsync(transactionsFileUri, { idempotent: true });

                        const folderInfo = await FileSystem.readDirectoryAsync(folderUri);
                        if (folderInfo.length === 0) {
                            await FileSystem.deleteAsync(folderUri, { idempotent: true });
                        }

                        setPlayersData(null); // Limpa os dados dos jogadores
                        setSelectedGame(null); // Limpa o jogo selecionado
                        Alert.alert("Jogo excluído com sucesso!");
                    }},
                ]
            );
        } catch (error) {
            console.error("Erro ao excluir o jogo:", error);
            Alert.alert("Erro", "Não foi possível excluir o jogo.");
        }
    };

    return (
        <View style={themes.container}>
            {playersData ? (
                <Text style={styles.textGreen}>Continuar Jogo</Text>
            ) : (
                <Text style={styles.textRed}>Nenhum Jogo</Text>
            )}

            <TouchableOpacity style={themes.button} onPress={() => navigation.navigate('NewGame')}>
                <Text style={themes.buttonText}>Novo Jogo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={themes.button}
                onPress={deleteGame}
                disabled={!selectedGame}
            >
                <Text style={themes.buttonText}>Excluir Jogo</Text>
            </TouchableOpacity>
        </View>
    );
}
