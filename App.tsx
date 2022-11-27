import React from 'react'
import {View, StyleSheet} from 'react-native'; 
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from './src/screens/PostUploadScreen';

// get icons like so
//import { createIconSet } from 'react-native-vector-icons';


const App = () => {
  return (

  <View style={styles.app}>
   
  {/* <HomeScreen /> */}
  {/* <CommentsScreen /> */}
  {/* <ProfileScreen /> */}
  {/* <EditProfileScreen /> */}
  <PostUploadScreen />

  </View>

  );
}


const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})

export default App;