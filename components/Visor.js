import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Visor = ({ display, resultado }) => {
  return (
    <View style={styles.containerVisor}>
      <Text style={styles.textoVisor}>{display}</Text>
      <Text style={styles.textoResultado}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerVisor: {
    alignItems: 'flex-end',
    width: '90%',
    marginBottom: 20,
  },
  textoVisor: {
    fontSize: 40,
  },
  textoResultado: {
    fontSize: 30,
    color: 'grey',
  },
});

export default Visor;
