import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Btn from './Btn';
import {
  darkBackground,
  darkButtonBackground,
  darkButtonContainer,
  darkButtonText,
  darkDisplayBackground,
  darkShadow,
  darkText,
  lightBackground,
  lightButtonBackground,
  lightButtonContainer,
  lightButtonText,
  lightDisplayBackground,
  lightShadow,
  lightText,
  toggleButtonBackground,
  toggleButtonText,
} from './ConstantColor';

const Home = () => {
  const [data, setData] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode by default

  const buttons = [
    'AC',
    'DL',
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '00',
    '.',
    '=',
  ];

  const handlePress = value => {
    if (value === 'AC') {
      setData('');
    } else if (value === 'DL') {
      setData(data.substring(0, data.length - 1));
    } else if (value === '%') {
      const percentageValue = (parseFloat(data) / 100).toString();
      setData(percentageValue);
    } else if (value === '=') {
      const ans = Number(eval(data).toFixed(3)).toString();
      setData(ans);
    } else {
      setData(data + value);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}>
      {/* Toggle Theme Button */}
      <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Text>
      </TouchableOpacity>

      <View
        style={[
          styles.display,
          isDarkMode ? styles.darkDisplay : styles.lightDisplay,
        ]}>
        <ScrollView vertical={true}>
          <Text
            style={[
              styles.displayText,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}>
            {data || '0'}
          </Text>
        </ScrollView>
      </View>

      {/* Buttons Section */}
      <View
        style={[
          styles.buttonContainer,
          isDarkMode ? styles.darkButtonContainer : styles.lightButtonContainer,
        ]}>
        {buttons.map((btnvalue, index) => (
          <Btn
            key={index}
            btnladel={btnvalue}
            btnBackgroundColor={
              isDarkMode ? darkButtonBackground : lightButtonBackground
            }
            shadowColor={isDarkMode ? darkShadow : lightShadow}
            colorText={isDarkMode ? darkButtonText : lightButtonText}
            press={() => handlePress(btnvalue)}
          />
        ))}
      </View>
      <View
        style={[
          styles.infoContainer,
          isDarkMode ? styles.darkinfoContainer : styles.lightinfoContainer,
        ]}>
        <Text
          style={[
            styles.infoText,
            isDarkMode ? styles.darkinfoText : styles.lightinfoText,
          ]}>
          Subham Patel | 7266896432
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 5,
    alignItems: 'center',
  },
  darkContainer: {
    backgroundColor: darkBackground,
  },
  lightContainer: {
    backgroundColor: lightBackground,
  },
  display: {
    height: '30%',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    marginTop: 5,
  },
  darkDisplay: {
    backgroundColor: darkDisplayBackground,
  },
  lightDisplay: {
    backgroundColor: lightDisplayBackground,
  },
  displayText: {
    fontSize: 48,
  },
  darkText: {
    color: darkText,
  },
  lightText: {
    color: lightText,
  },

  buttonContainer: {
    marginTop: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 4,
  },
  darkButtonContainer: {
    backgroundColor: darkButtonContainer,
  },
  lightButtonContainer: {
    backgroundColor: lightButtonContainer,
  },

  infoContainer: {
    width: '100%',
    padding: 5,
    position: 'absolute',
    bottom: 3,
    borderRadius: 20,
    backgroundColor: darkDisplayBackground,
  },

  lightinfoContainer: {
    backgroundColor: lightDisplayBackground,
  },

  darkinfoContainer: {
    backgroundColor: darkDisplayBackground,
  },

  infoText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },

  lightinfoText: {
    color: lightText,
  },
  darkinfoText: {
    color: darkText,
  },

  toggleButton: {
    padding: 5,
    backgroundColor: toggleButtonBackground,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  toggleButtonText: {
    color: toggleButtonText,
    fontSize: 16,
  },
});

export default Home;
