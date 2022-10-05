import {Alert, StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const clicou = () => {
    Alert.alert("Olá pessoa!", "Você realizou o login");
  }
    return (
      <View style={styles.container}>
  
        <Image source={require('./assets/butterfly.png')} style={styles.logo}/>
  
        <TextInput placeholder='Digite seu@email.com' style={styles.input}/>
  
        <TextInput placeholder='************' secureTextEntry={true} style={styles.input}/>
  
        <TouchableOpacity style={styles.button} onPress={clicou}>
  
          <Text style={styles.buttonText}>Login</Text>
  
        </TouchableOpacity>
  
      </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B255D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100
  },
  input: {
    marginTop: 15,
    backgroundColor: '#ffff',
    width: 300,
    fontSize: 14,
    padding: 5,
    textAlign: 'center',
    borderRadius: 10,
  },
  button: {
    width: 100,
    borderRadius: 10,
    backgroundColor: '#56DDFA', 
    height: 40,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold'
  }
});
