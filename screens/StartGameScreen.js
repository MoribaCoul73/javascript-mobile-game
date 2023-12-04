import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert,Text } from 'react-native';

import PrimaryButton from '../ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../ui/Title';
import Card from '../ui/Card';
import InstructionText from '../ui/instructionText';

function StartGameScreen({onPickNumber}) {
 const [enteredNumber, setEnteredNumber] = useState('');

 function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);

 }

  function confirmInputHandler() {
    const ChosenNumber = parseInt(enteredNumber);

    if (isNaN(ChosenNumber) || ChosenNumber <=0 || ChosenNumber >= 99) {
      // show alert...
      Alert.alert('Invalid number', 'Please enter a number between 1 and 99.', [{ text: 'Okay', style: 'destructive' ,onPress: resetInputHandler }]);
      return;
    }
    //setChosenNumber(ChosenNumber);

    onPickNumber(ChosenNumber);
  }; 


  function resetInputHandler() {
    setEnteredNumber('');
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
    <Card>

      <Text style={styles.instructionText}>Enter a Number</Text>
      <InstructionText>YO</InstructionText>
      <NumberInput onChangeText={numberInputHandler} />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
     </View>
    </Card>
    </View>
  );
}

const NumberInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.numberInput}
      value={value}
      onChangeText={onChangeText}
      maxLength={2}
      keyboardType="numeric"
      placeholder="Enter a number"
    />
  );
};

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    marginTop: 100,
    alignContent: "center",
  },
  
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  instructionText: {
    color: Colors.accent500,
    fontSize:24,
    fontFamily: 'open-sans'
},
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StartGameScreen;
