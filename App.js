import { React } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, RefreshControl, SafeAreaViewComponent, ScrollView } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function App() {
  const [refresh, setRefresh] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    wait(2000).then(() => setRefresh(false));
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Previsão do Tempo
      </Text>

      <Image style={styles.img}
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/2849/2849457.png',}}  
      />

      <Text style={styles.textBlock}>Informação sua Cidade:</Text>
      <TextInput style={styles.input}
        placeholder='Sua cidade...'
      />
        
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textbtn}>Buscar</Text>
      </TouchableOpacity>	 
      <Tempo/>         
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
