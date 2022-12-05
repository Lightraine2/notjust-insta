import React from 'react'
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
import Carousel from '../Carousel'
import VideoPlayer from '../VideoPlayer'

import {useNavigation} from '@react-navigation/native'
import {FeedNavigationProp} from '../../navigation/types'

interface IFeedPost  {
  post: IPost;
  isVisible: boolean
}

// get icons like so
//import { createIconSet } from 'react-native-vector-icons';

const FeedPost = (props: IFeedPost) => {
  const {post, isVisible = false} = props;

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  const navigation = useNavigation<FeedNavigationProp>();

  const navigateToUser = () => {
    navigation.navigate('UserProfile', {userId: post.user.id})
  }

  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id})
  }

  const toggleDescriptionExpanded = () => {
      setIsDescriptionExpanded(v => !v);
  };

  const toggleLike = () => {
    setIsLiked(v => !v);
  }

  let content = null;
  if (post.image) {
    content = (
      <Image source={{
        uri: post.image
        }} 
        style={styles.image} 
        />
    );
  } else if (post.images) {
    content = 
      <Carousel images={post.images} onDoublePress={toggleLike}/>;
    
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
    <VideoPlayer uri={post.video} paused={!isVisible}/>
    </DoublePressable>
    )
  }

  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      toggleLike();
    }

    lastTap = now;
  } 

//  const {post} = props;
  return (
  <View style={styles.post}>
    {/* Header */}
    <View style={styles.header}>
    <DoublePressable onDoublePress={toggleLike}>
      <Image source={{
          uri: post.user.image,
      }}
      style={styles.userAvatar}
      />
      </DoublePressable> 
      <Text onPress={navigateToUser} style={styles.userName}>{post.user.username}

      </Text>
      <Entypo 
        name="dots-three-vertical" 
        size={16} 
        style={styles.threeDots} 
      />

    </View>

    {/* Content */}

    {content}

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
    <Text onPress={navigateToUser} style={styles.bold}>{post.user.username}</Text>{' '}
      {post.description}
  </Text>

  <Text onPress={toggleDescriptionExpanded}>{isDescriptionExpanded ? 'less' : 'more' }</Text>

  {/* Comments */}
  <Text onPress={navigateToComments} style={styles.lightText}>View all {post.nofComments} comments</Text>
  {post.comments.map(comment => (
    <Comment key={comment.id} comment={comment} />
  ))}



  {/* Posted date */}

  <Text style={styles.lightText}>{post.createdAt}</Text>

</View>
</View>
)}



export default FeedPost;