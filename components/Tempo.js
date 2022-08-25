import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo(props) {
 return (
   <>
      

      <Text style={styles.text}>Máxima: {props.data.max}</Text>
      <Text style={styles.text}>Mínima: {props.data.min}</Text>

      <Text style={styles.text}>Tempo: {props.data.description}</Text>
        
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

/*    <Text style={styles.text}>Temperatura: {props.dados2.temp}</Text>

      <Text style={styles.text}>Data: {props.dados2.date}</Text>
      <Text style={styles.text}>Hora: {props.dados2.time}</Text>
      
      <Text style={styles.text}>Cidade: {props.dados2.city}</Text>
      <Text style={styles.text}>Umidade: {props.dados2.humidity}</Text>
      <Text style={styles.text}>Velocidade do Vento: {props.dados2.wind_speedy}</Text>
        
*/