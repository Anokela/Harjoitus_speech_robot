import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const aphorism = [
    'Never', 'Trust', 'a', 'computer', 'you', 'can',
    'not', 'throw', 'out', 'a', 'window',
  ];
  const NBR_OF_REPEATS = 5;

  function  shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }


  const speak = () => {
    for (let i = 0; i < NBR_OF_REPEATS; i++) {
      let shuffledAphorism = shuffle(aphorism);
      let thingToSay = '';
      shuffledAphorism.map(word=> {
        thingToSay += word + " ";
      })
      Speech.speak(thingToSay);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
