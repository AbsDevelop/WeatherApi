import React from 'react';
import { Text } from 'react-native';

export default function Tempo() {
 return (
   <>
        <Text style={styles.text}>Temperatura: {props.data.temp}</Text>
        <Text style={styles.text}>Máxima: {props.data.max}</Text>
        <Text style={styles.text}>Mínima: {props.data.min}</Text>
        <Text style={styles.text}>Data: {props.data.date}</Text>
        <Text style={styles.text}>Hora: {props.data.time}</Text>
        <Text style={styles.text}>Tempo: {props.data.description}</Text>
        <Text style={styles.text}>Cidade: {props.data.city}</Text>
        <Text style={styles.text}>Umidade: {props.data.humidity}</Text>
        <Text style={styles.text}>Velocidade do Vento: {props.data.wind_speedy}</Text>
   </>
  );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      backgroundColor: '#fff',
      marginLeft: '10%',
      marginBottom: 10
    }
});