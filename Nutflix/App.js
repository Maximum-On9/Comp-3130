/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ff0000',
  },
   logo: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ff0000',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 60,
    padding: 60,
  },
  logo_img: {
    width: 200, 
    height: 200,
    marginBottom:90,
    
  },
});


export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Nutflix</Text>
       <Image 
        source = {require('./assets/netflix_logo.png')}
        style = {styles.logo_img}
        />
      <StatusBar style="auto" />
    </View>
  );
}
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ff0000',
  },
  logo_img: {
    width: 200, 
    height: 100,
    marginBottom:0,
    
  },
  button: {
    backgroundColor: 'red',
  },
});

export default function App() {
  const createAlert = () =>
    Alert.alert('Gday', 'Do you love Nutflix', [
      {
        text: 'YES',
        onPress: () => Alert.alert("Alert !",":)"),
      },
      {
        text: 'NO', 
        onPress: () => Alert.alert("Alert !",":(")
      },
    ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style = {{marginBottom:90}}
      activeOpacity ={ .5 } 
      onPress={() => console.log("Clicked !") }>
       <Image 
           source = {{uri: 'https://logodix.com/logo/786654.jpg'}}
           style = {styles.logo_img}
           onPress={() => console.log("Clicked !")}/>
      </TouchableOpacity>
      <Button
        title = "Enter Site !"
        color="#ff5c5c"
        onPress={createAlert}
      />
      <StatusBar style="auto" />
    </View>
  );
}