import React, { useState } from "react";
import { styles } from "./styles";
import { themes } from "../../global/themes";

import { View, Text, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function NewGame() {
    // const [selectedValue, setSelectedValue] = useState("2");
    // const [playerValue, setPlayerValue] = useState("15000");

    return ( 
        <View style={themes.container}>
            
            <Text style={themes.labelMov}>Selecione o jogador:</Text>
            <Picker
                // selectedValue={selectedValue}
                style={themes.picker}
                // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {/* Opções do dropdown */}
                <Picker.Item label="Jogador 1" value="1" />
                <Picker.Item label="Jogador 2" value="2" />
                <Picker.Item label="Jogador 3" value="3" />
                <Picker.Item label="Jogador 4" value="4" />
                <Picker.Item label="Jogador 5" value="5" />
                <Picker.Item label="Jogador 6" value="6" />
            </Picker>
            
            <Text style={themes.labelMov}>Qual movimentação:</Text>
            <Picker 
                style={themes.picker}
            >
                <Picker.Item label="Pagar" value="P" />
                <Picker.Item label="Receber" value="R" />
            </Picker>

            <Text style={themes.labelMov}>Tipo de movimentação:</Text>
            <Picker
                style={themes.picker}
            >
                <Picker.Item label="Início" value="Inicio" />
                <Picker.Item label="Aluguel" value="Aluguel" />
                <Picker.Item label="Comprar" value="Comprar" />
                <Picker.Item label="Vender" value="Vender" />
                <Picker.Item label="Sorte ou Revés (Notícias)" value="SR" />
                <Picker.Item label="Ações" value="Ações" />
                <Picker.Item label="Prisão" value="Prisão" />
            </Picker>

            <Text style={themes.labelMov}>Selecione o outro jogador:</Text>
            <Picker
                style={themes.picker}
            >
                <Picker.Item label="Banco" value="0" />
                <Picker.Item label="Jogador 1" value="1" />
                <Picker.Item label="Jogador 2" value="2" />
                <Picker.Item label="Jogador 3" value="3" />
                <Picker.Item label="Jogador 4" value="4" />
                <Picker.Item label="Jogador 5" value="5" />
                <Picker.Item label="Jogador 6" value="6" />
            </Picker>

            <Text style={themes.labelMov}>Valor:</Text>
            <TextInput
                style={themes.input}
                // value={playerValue}
                // onChangeText={text => setPlayerValue(text)}
                keyboardType="numeric"  // Para permitir apenas números
            />
            
            <Text style={themes.button}>Movimentar</Text>

        </View>   
    );
}
