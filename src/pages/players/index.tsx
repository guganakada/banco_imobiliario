import React, { useState, useCallback } from "react";
import { styles } from "./styles";
import { themes } from "../../global/themes";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity, ScrollView, Text, View, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// import Entypo from '@expo/vector-icons/Entypo';
import * as FileSystem from 'expo-file-system';

export default function Players() {
    const navigation = useNavigation();
    const [playersData, setPlayersData] = useState([]);
    const [noGameFound, setNoGameFound] = useState(false); // Controle para verificar se o jogo foi encontrado

    // Função para carregar dados dos jogadores a partir do arquivo JSON
    const loadPlayers = async () => {
        const playersFileUri = `${FileSystem.documentDirectory}data/save/players.json`; // Caminho fixo para o arquivo players.json

        try {
            const fileExists = await FileSystem.getInfoAsync(playersFileUri);
            if (!fileExists.exists) {
                setPlayersData([]); // Limpa os dados de jogadores
                setNoGameFound(true); // Define que nenhum jogo foi encontrado
                Alert.alert("Erro", "Nenhum jogo em andamento. Por favor, inicie um novo jogo.");
                return;
            }

            const playersFile = await FileSystem.readAsStringAsync(playersFileUri);
            const parsedPlayersData = JSON.parse(playersFile);
            setPlayersData(Array.isArray(parsedPlayersData) ? parsedPlayersData : Object.values(parsedPlayersData));

            // Se o arquivo estiver vazio ou não houver jogadores, trata isso
            if (playersData.length === 0) {
                setNoGameFound(true);
                Alert.alert("Erro", "Nenhum jogador encontrado no arquivo!");
                return;
            }

            console.log("Jogadores carregados:", parsedPlayersData);
            setNoGameFound(false); // Se jogadores foram carregados, atualiza o estado
        } catch (error) {
            console.error("Erro ao carregar os dados dos jogadores:", error);
            Alert.alert("Erro", "Não foi possível carregar os dados dos jogadores.");
        }
    };

    // useFocusEffect para carregar os dados dos jogadores toda vez que a tela ganhar foco
    useFocusEffect(
        useCallback(() => {
            loadPlayers(); // Carrega os dados quando a tela ganha foco
        }, [])
    );

    // Se nenhum jogo for encontrado, a página será renderizada em branco
    if (noGameFound) {
        return <View style={themes.container}>
                    <Text style={styles.valuetext}>Nenhum jogador encontrado.</Text>
                </View>; // Página em branco
    }

    return (
        <ScrollView>
            <View style={themes.container}>
                {playersData.length === 0 ? (
                    <Text style={styles.valuetext}>Nenhum jogador encontrado.</Text>
                ) : (
                    playersData.map((player, index) => (
                        player.nome === "Banco" ? null : (
                            <View key={index} style={styles.playerContainer}>
                                <View style={styles.player}>
                                    <Text style={styles.playerText}>{String(player?.nome || "Jogador")}</Text>
                                    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Movement')}>
                                        <FontAwesome6 style={styles.iconBox} name="money-bill-transfer" />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.value}>
                                    <Text style={styles.icon}>
                                        <FontAwesome5 name='dollar-sign' size={21} />
                                    </Text>
                                    <Text style={styles.valuetext}>{String(player?.saldo || "0")}</Text> 
                                </View>
                            </View>
                    )))
                )}

                <TouchableOpacity
                    style={themes.button}
                    onPress={() => navigation.navigate('EditPlayers', { playersData })}
                >
                    <Text style={themes.buttonText}>Editar Jogadores</Text>
                </TouchableOpacity>
                            
            </View>
        </ScrollView>
    );
}
