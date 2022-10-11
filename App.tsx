import {View, StyleSheet} from 'react-native'; 
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

// get icons like so
//import { createIconSet } from 'react-native-vector-icons';


const App = () => {
  return (

  <View style={styles.app}>
   
  <HomeScreen />

  </View>

  );
}


const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})

export default App;