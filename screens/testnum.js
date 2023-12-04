import React, { useState } from 'react';
import { TextInput,StyleSheet } from 'react-native';



const NumberInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (text) => {
    // remove any non-numeric characters from the input
    const sanitizedText = text.replace(/[^0-9]/g, '');
    setValue(sanitizedText);
    

  };

  return (
    <TextInput
      style={styles.numberInput}
      value={value}
      onChangeText={handleChange}
      maxLength={2}
      keyboardType="numeric"
      placeholder="Enter a number"
    />
  );
};

const styles = StyleSheet.create({
  numberInput: {
    //flex: 1,
    height: 50,
    fontSize:32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },  
})


export default NumberInput;
