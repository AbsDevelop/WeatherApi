import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Tempo(props) {
  const br = `\n`;
  return (
    <>
      <View style={styles.block}>
        <Text style={styles.title}>Cidade: </Text><Text style={styles.text}>{props.dataAS.city}{br}</Text>

         <Text style={styles.title}>Hoje:</Text>
          <Text style={styles.text}>Temperatura: {props.dataAS.temp}°C</Text>
          <Text style={styles.text}>Máxima: {props.dataA.max}°C</Text>
          <Text style=  {styles.text}>Mínima: {props.dataA.min}°C</Text>
          <Text style={styles.text}>Tempo: {props.dataA.description}</Text>
          <Text style={styles.text}>Data: {props.dataA.date}</Text>
          <Text style={styles.text}>Hora: {props.dataAS.time}h{br}</Text>

        <Text style={styles.title}>Amanhã:</Text>
          <Text style={styles.text}>Temperatura: {props.dataBS.temp}°C</Text>
          <Text style={styles.text}>Máxima: {props.dataB.max}°C</Text>
          <Text style={styles.text}>Mínima: {props.dataB.min}°C</Text>
          <Text style={styles.text}>Tempo: {props.dataB.description}</Text> 
          <Text style={styles.text}>Data: {props.dataB.date}</Text>
          <Text style={styles.text}>Hora: {props.dataBS.time}h{br}</Text>  
          
        <Text style={styles.title}>Extras:</Text>  
          <Text style={styles.text}>Umidade: {props.dataAS.humidity}%</Text>
          <Text style={styles.text}>Velocidade do Vento: {props.dataAS.wind_speedy}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      backgroundColor: '#fff',
      marginLeft: '10%',
      marginBottom: 10
    },
    title:{
      fontSize: 24,
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
    block: {
      marginTop: 5,
      padding: 10,
      paddingHorizontal: 40,
      borderWidth: 1,
      backgroundColor: 'white'
    }
});