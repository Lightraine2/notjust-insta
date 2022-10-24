import { useState } from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {AntDesign} from '@expo/vector-icons';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'; 
import styles from './styles';
import DoublePressable from '../DoublePressable';
import Comment from './Comment/Comment';
import { IPost } from '../../types/models';

interface IFeedPost  {
  post: IPost
}

// get icons like so
//import { createIconSet } from 'react-native-vector-icons';

const FeedPost = (props: IFeedPost) => {

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
      setIsDescriptionExpanded(v => !v);
  };

  const toggleLike = () => {
    setIsLiked(v => !v);
  }

  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      toggleLike();
    }

    lastTap = now;
  } 

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
    <DoublePressable onDoublePress={toggleLike}>
    <Image source={{
      uri: post.image
      }} 
      style={styles.image} 
      />
    </DoublePressable>
    {/* Footer */}
  <View style={styles.footer} >
  <View style={styles.iconContainer}>
    <Pressable onPress={toggleLike}>
  <AntDesign
    name={isLiked ? 'heart' : 'hearto'}
    size={24}
    style={styles.icon}
    color={isLiked ? colors.accent : colors.black}
  />
  </Pressable>
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
  <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
    <Text style={styles.bold}>{post.user.username}</Text>{' '}
      {post.description}
  </Text>

  <Text onPress={toggleDescriptionExpanded}>{isDescriptionExpanded ? 'less' : 'more' }</Text>

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