import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Botao from './Botao';
import Visor from './Visor';

const Calculadora = () => {
  const [display, setDisplay] = useState('');
  const [resultado, setResultado] = useState('');

  const handlePress = (input) => {
    if (input === '=') {
      try {
        setResultado(eval(display));
      } catch (e) {
        setResultado('Erro');
      }
    } else if (input === 'C') {
      setDisplay('');
      setResultado('');
    } else {
      setDisplay(display + input);
    }
  };

  return (
    <View style={styles.container}>
      <Visor display={display} resultado={resultado} />
      <View style={styles.linha}>
        {['1', '2', '3', '+'].map((input) => (
          <Botao key={input} label={input} onPress={handlePress} />
        ))}
      </View>
      <View style={styles.linha}>
        {['4', '5', '6', '-'].map((input) => (
          <Botao key={input} label={input} onPress={handlePress} />
        ))}
      </View>
      <View style={styles.linha}>
        {['7', '8', '9', '*'].map((input) => (
          <Botao key={input} label={input} onPress={handlePress} />
        ))}
      </View>
      <View style={styles.linha}>
        {['C', '0', '=', '/'].map((input) => (
          <Botao key={input} label={input} onPress={handlePress} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  linha: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default Calculadora;
