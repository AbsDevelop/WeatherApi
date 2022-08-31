import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo(props) {
 return (
   <>
      Hoje:
      <Text style={styles.text}>Máxima: {props.dataA.max}</Text>
      <Text style={styles.text}>Mínima: {props.dataA.min}</Text>
      <Text style={styles.text}>Tempo: {props.dataA.description}</Text>
      Amanhã:
      <Text style={styles.text}>Máxima: {props.dataB.max}</Text>
      <Text style={styles.text}>Mínima: {props.dataB.min}</Text>
      <Text style={styles.text}>Tempo: {props.dataB.description}</Text>   
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

/*    
      Link: "weather?array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date,time,description,city,humidity,wind_speedy%20&key=ca53326e&city_name="
      Blocos:
      <Text style={styles.text}>Temperatura: {props.dados2.temp}</Text>

      <Text style={styles.text}>Data: {props.dados2.date}</Text>
      <Text style={styles.text}>Hora: {props.dados2.time}</Text>
      
      <Text style={styles.text}>Cidade: {props.dados2.city}</Text>
      <Text style={styles.text}>Umidade: {props.dados2.humidity}</Text>
      <Text style={styles.text}>Velocidade do Vento: {props.dados2.wind_speedy}</Text>
        
*/