import {View, ScrollView, Text, StyleSheet, Image} from 'react-native'; 
import FeedPost from './src/components/FeedPost/FeedPost';


// get icons like so
//import { createIconSet } from 'react-native-vector-icons';

const App = () => {
  return (

  <ScrollView style={styles.app}>
    <FeedPost />
    <FeedPost />
    <FeedPost />
  </ScrollView>

  );
}


const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})

export default App;