import {View, Text, StyleSheet, Image} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import {AntDesign} from '@expo/vector-icons';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'; 


// get icons like so
//import { createIconSet } from 'react-native-vector-icons';

const App = () => (
  <View style={styles.post}>
    {/* Header */}
    <View style={styles.header}>
      <Image source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      }}
      style={styles.userAvatar}
      />
      <Text style={styles.userName}>vadimnotjustdev

      </Text>
      <Entypo name="dots-three-vertical" size={16} style={styles.threeDots} />

    </View>

    {/* Content */}
    <Image source={{
      uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
      }} 
      style={styles.image} 
      />

    {/* Footer */}
  <View style={styles.footer} >
  <View style={styles.iconContainer}>
  <AntDesign
    name={'hearto'}
    size={24}
    style={styles.icon}
    color={colors.black}
  />
  <Ionicons
    name="chatbubble-outline"
    size={24}
    style={styles.icon}
    color={colors.black}
  />
  <Feather
    name="send"
    size={24}
    style={styles.icon}
    color={colors.black}
  />
  <Feather
    name="bookmark"
    size={24}
    style={{marginLeft: 'auto'}}
    color={colors.black}
  />
</View>

<Text>Liked by your mum and 66 others</Text>

</View>
</View>
)

const styles = StyleSheet.create({
  post: {
    marginTop: 20
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black
  },
  threeDots: {
    marginLeft: 'auto'
  },
  footer: {
    padding: 10
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5
  },
  icon: {
    marginHorizontal: 5
  }
})

export default App;