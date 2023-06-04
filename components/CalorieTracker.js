import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CalorieTracker = () => {
  const [Calories, setCalories] = useState(0);
  const [inputCalories, setInputCalories] = useState('');

  const handleInputChange = (text) => {
    setInputCalories(text);
  };

  const handleAddCalories = () => {
    const parsedCalories = parseInt(inputCalories, 10);
    if (!isNaN(parsedCalories)) {
      setCalories(Calories + parsedCalories);
      setInputCalories('');
    } 
  };

  const handleResetCalories = () => {
    setCalories(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calories: {Calories}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Calories"
        value={inputCalories}
        onChangeText={handleInputChange}
      />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleAddCalories}>
        <Text style={styles.buttonText}>Add Calories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleResetCalories}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 130
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default CalorieTracker;