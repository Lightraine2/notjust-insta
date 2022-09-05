import {View, Text, StyleSheet, Image} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import {AntDesign} from '@expo/vector-icons';

// get icons like so
//import { createIconSet } from 'react-native-vector-icons';

const App = () => (
  <View style={styles.post}>
    {/* Header */}

    {/* Content */}
    <Image source={{
      uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
      }} 
      style={styles.image} 
      />

    {/* Footer */}
  </View>
)

const styles = StyleSheet.create({
  post: {

  },
  image: {
    width: '100%',
    aspectRatio: 1
  }
})

export default App;