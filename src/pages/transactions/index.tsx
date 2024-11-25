import React from "react";
import { styles } from "./styles";
import { themes } from "../../global/themes";

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';

export default function Transactions (){
    return(
        <ScrollView style={themes.scrollView}>
            <View style={themes.container}>
                <View style={styles.movContainer}>
                    <Text style={styles.movtext}>
                        Jogador 1
                    </Text>          
                    <Text style={styles.movtext_red}>
                        Pagou Aluguel
                    </Text>             
                    <Text style={styles.movtext}>
                        Jogador 2
                    </Text>                    
                    <View style={styles.value}>  
                        <Text style={styles.icon}>
                            <FontAwesome5 name='dollar-sign' size={21} />
                        </Text>
                        <Text style={styles.valuetext}>
                            250
                        </Text>                    
                    </View>         
                </View>
                
                <View style={styles.movContainer}>
                    <Text style={styles.movtext}>
                        Jogador 5
                    </Text>          
                    <Text style={styles.movtext_green}>
                        Recebeu
                    </Text>             
                    <Text style={styles.movtext}>
                        Banco
                    </Text>                    
                    <View style={styles.value}>  
                        <Text style={styles.icon}>
                            <FontAwesome5 name='dollar-sign' size={21} />
                        </Text>
                        <Text style={styles.valuetext}>
                            1.000
                        </Text>                    
                    </View>         
                </View>

                <View style={styles.movContainer}>
                    <Text style={styles.movtext}>
                        Jogador 4
                    </Text>          
                    <Text style={styles.movtext_red}>
                        Pagou
                    </Text>             
                    <Text style={styles.movtext}>
                        Banco
                    </Text>                    
                    <View style={styles.value}>  
                        <Text style={styles.icon}>
                            <FontAwesome5 name='dollar-sign' size={21} />
                        </Text>
                        <Text style={styles.valuetext}>
                            1.500
                        </Text>                    
                    </View>         
                </View>
            </View>
        </ScrollView>

    )
}
