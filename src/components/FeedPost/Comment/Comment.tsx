import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons';

import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';
import styles from '../styles';
import { IComment } from '../../../types/models';

interface ICommentProps {
  comment: IComment;
}

const Comment = ({comment}) => {
  return (
    <View style={styles.comment}>
    <Text style={styles.commentText}>
      <Text style={styles.bold}>{comment.user.username}</Text>{' '}
    {comment.comment}
    </Text>
    <AntDesign
    name={'hearto'}
    size={16}
    style={styles.icon}
    color={colors.black}
  />
  </View>
  )
}

export default Comment;