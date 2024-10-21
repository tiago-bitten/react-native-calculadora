import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botao = ({ onPress, label }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={() => onPress(label)}>
      <Text style={styles.textoBotao}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#333',
    padding: 20,
    margin: 5,
    borderRadius: 5,
    minWidth: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Botao;
