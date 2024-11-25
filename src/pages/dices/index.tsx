import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { styles } from "./styles";
import { themes } from "../../global/themes";

export default function App() {
  const [dice, setdice] = useState(0);
  const [diceTwo, setdiceTwo] = useState(0);
  const [image, setImage] = useState(require("../../assets/dice/questionMark.jpeg"));
  const [imageTwo, setImageTwo] = useState(require("../../assets/dice/questionMark.jpeg"));

  // Estado para armazenar o histórico dos últimos 4 resultados
  const [diceHistory, setDiceHistory] = useState<
    { dice1: number; dice2: number; image1: any; image2: any }[]
  >([]);

  const rolldice = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    let randomNumTwo = Math.floor(Math.random() * 6) + 1;

    // Atualiza os valores dos dados
    setdice(randomNum);
    setdiceTwo(randomNumTwo);

    // Define as imagens de acordo com os números sorteados
    const diceImages = {
      1: require("../../assets/dice/d1.png"),
      2: require("../../assets/dice/d2.png"),
      3: require("../../assets/dice/d3.png"),
      4: require("../../assets/dice/d4.png"),
      5: require("../../assets/dice/d5.png"),
      6: require("../../assets/dice/d6.png"),
    };

    setImage(diceImages[randomNum]);
    setImageTwo(diceImages[randomNumTwo]);

    // Atualiza o histórico com os novos valores e imagens
    setDiceHistory((prevHistory) => {
      const newHistory = [
        {
          dice1: randomNum,
          dice2: randomNumTwo,
          image1: diceImages[randomNum],
          image2: diceImages[randomNumTwo],
        },
        ...prevHistory,
      ];
      return newHistory.slice(0, 4); // Mantém apenas os últimos 4 resultados
    });
  };

  return (
    <View style={themes.container}>
      {/* Exibe o histórico dos resultados com as imagens na View top */}
      <View style={styles.top}>
        <Text style={styles.text}>Últimos resultados:</Text>
        {diceHistory.map((result, index) => (
          <View key={index} style={styles.historyItem}>
            <Image source={result.image1} style={styles.smallImage} />
            {/* <Text>{result.dice1}</Text> */}
            <Image source={result.image2} style={styles.smallImage} />
            {/* <Text>{result.dice2}</Text> */}
          </View>
        ))}
      </View>

      <View style={styles.bottom}>
        <View style={styles.diceContainer}>
          <View style={styles.onlyDiceContainer}>
            <Image source={image} style={styles.image} />
            <Text style={styles.text}>{dice}</Text>
          </View>
          <View style={styles.onlyDiceContainer}>
            <Image source={imageTwo} style={styles.image} />
            <Text style={styles.text}>{diceTwo}</Text>
          </View>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.result}>{dice + diceTwo}</Text>

          <TouchableOpacity style={themes.button} onPress={() => rolldice()}>
            <Text style={themes.buttonText}>Rolar dados</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}
