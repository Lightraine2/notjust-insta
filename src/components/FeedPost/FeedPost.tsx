import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {AntDesign} from '@expo/vector-icons';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'; 
import styles from './styles';

import Comment from './Comment/Comment';
import { IPost } from '../../types/models';

interface IFeedPost  {
  post: IPost
}

// get icons like so
//import { createIconSet } from 'react-native-vector-icons';

const FeedPost = (props: IFeedPost) => {
  const {post} = props;
  return (
  <View style={styles.post}>
    {/* Header */}
    <View style={styles.header}>
      <Image source={{
          uri: post.user.image,
      }}
      style={styles.userAvatar}
      />
      <Text style={styles.userName}>{post.user.username}

      </Text>
      <Entypo 
        name="dots-three-vertical" 
        size={16} 
        style={styles.threeDots} 
      />

    </View>

    {/* Content */}
    <Image source={{
      uri: post.image
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
  <Text style={styles.bold}>Stacy</Text> and{' '} 
  <Text style={styles.bold}>{post.nofLikes}</Text>
  </Text>

  {/* Post Description */}
  <Text style={styles.text}>
    <Text style={styles.bold}>{post.user.username}</Text>{' '}
      {post.description}
  </Text>

  {/* Comments */}
  <Text style={styles.lightText}>View all {post.nofComments} comments</Text>
  {post.comments.map(comment => (
    <Comment key={comment.id} comment={comment} />
  ))}



  {/* Posted date */}

  <Text style={styles.lightText}>{post.createdAt}</Text>

</View>
</View>
)}



export default FeedPost;