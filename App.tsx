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

<Text style={styles.text}>
  Liked by{' '} 
  <Text style={styles.bold}>your mum</Text> and{' '} 
  <Text style={styles.bold}>66 others</Text>
  </Text>

  {/* Post Description */}
  <Text style={styles.text}>
    <Text style={styles.bold}>vadimnotjustdev</Text>{' '}
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eos earum quam quidem accusamus, provident dolores eaque temporibus! Quidem, nesciunt dicta doloremque assumenda quod consectetur dolore incidunt est perferendis iste!
  </Text>

  {/* Comments */}
  <Text style={styles.lightText}>View all 16 comments</Text>
  <View style={styles.comment}>
    <Text style={styles.commentText}>
      <Text style={styles.bold}>vadimnotjustdev</Text>{' '}
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum!
    </Text>
    <AntDesign
    name={'hearto'}
    size={16}
    style={styles.icon}
    color={colors.black}
  />
  </View>

  {/* Posted date */}

  <Text style={styles.lightText}>19th December 2021</Text>

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
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  lightText: {
    color: colors.lightgrey
  },
  bold: {
    fontWeight: fonts.weight.bold
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default App;