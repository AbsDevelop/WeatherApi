import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Tempo(props) {
 return (
   <>
    <View style={styles.block}>
          <Text style={styles.title}>Hoje:</Text>
          <Text style={styles.text}>Máxima: {props.dataA.max}</Text>
          <Text style=  {styles.text}>Mínima: {props.dataA.min}</Text>
          <Text style={styles.text}>Tempo: {props.dataA.description}</Text>
          <Text style={styles.title}>Amanhã:</Text>
          <Text style={styles.text}>Máxima: {props.dataB.max}</Text>
          <Text style={styles.text}>Mínima: {props.dataB.min}</Text>
          <Text style={styles.text}>Tempo: {props.dataB.description}</Text>   
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