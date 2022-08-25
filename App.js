import React, {useState}  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

export default function App() {
  const [dados, setDados] = useState("");
  const [dados2, setDados2] = useState("");
  const [cidade, setCidade] = useState("");

  async function buscaCep(){
    const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date,time,description,city,humidity,wind_speedy%20&key=e8c3e0cd&city_name=${cidade}`);
    setDados(response.data.forecast[0]);
    setDados2(response.data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Previsão do Tempo
      </Text>

      <Image style={styles.img}
        source={{uri: 'https://eusousolar.com.br/calculadora/img/sun.gif',}}  

        //https://dribbble.com/shots/6193517-Weather-Icon-Set-Thunderstorm
      />

      <Text style={styles.textBlock}>Informe sua Cidade:</Text>
      <TextInput style={styles.input}
        placeholder='Ex.: São Paulo, SP ou Minas Gerais, MG'
        onChangeText={value=>setCidade(value)}
      />
        
      <TouchableOpacity style={styles.btn} onPress={buscaCep}>
        <Text style={styles.textbtn}>Buscar</Text>
      </TouchableOpacity>	 
      <Tempo data={dados} data={dados2}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center'
  },
  title: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 30,
    justifyContent: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
	  marginTop: 60
  },	
  img: {
    width: 190,
    height: 190,
    marginTop: 30,
    marginBottom: 30
  },
  input: {
    backgroundColor: 'white'
  },
  textBlock: {
    fontSize: 20,
	  justifyContent: 'center'
  },
  btn: {
	  width: '80%',
  	marginTop: 10,
  	marginBottom: 15,
    borderWidth: 1,
    borderRadius: 12,
    borderBottomColor: 'black'
  },
  textbtn: {
	  fontSize: 20,
	  textAlign: 'center'
  }
});
