import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {QuizContainer} from "react-native-quiz-maker";

export default function TabQuizScreen() {
  return (
    <View style={styles.container}>
      <QuizContainer
          questions={[
            {
              questionType: 'MultipleChoice',
              question: 'How much does an apple cost?',
              answer: '$15.99',
              allChoices: ['$15.99', '$1.00', '$9.99'],
              instructionText: 'please answer',
            },
            {
              questionType: 'Matching',
              questionAnswerPairs: [
                { answer: 'hello', question: 'goodbye' },
                { answer: 'see ya', question: 'be ya' },
                { answer: 'mia', question: 'pia' },
              ],
              instructionText: 'try this out',
            },
            {
              questionType: 'Writing',
              question: 'How many apples are in a dozen?',
              answer: '12',
              instructionText: 'please answer',
            },
          ]}
          onSubmit={(isCorrect: boolean) => console.log(isCorrect)}
          onComplete={(progress: number) => console.log('score: ', progress)}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
