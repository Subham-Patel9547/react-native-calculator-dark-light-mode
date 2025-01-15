import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Btn = ({btnladel, press, colorText, btnBackgroundColor, shadowColor}) => {
  return (
    <TouchableOpacity
      onPress={press}
      style={[
        styles.button,
        {backgroundColor: btnBackgroundColor, shadowColor: shadowColor},
      ]}>
      <Text style={[styles.buttonText, {color: colorText}]}>{btnladel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    padding: 20,
    margin: 9,
    borderRadius: 40,
    // shadowColor: 'aqua',
    elevation: 5,
  },

  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Btn;
