import React from 'react'
import { View, Text, FlatList } from 'react-native'
import comments from '../../assets/data/comments.json'
import Comment from '../../components/FeedPost/Comment'

const CommentsScreen = () => {
  return (
    <View>
      <FlatList 
      data={comments}
      renderItem={({item}) => 
        <Comment comment={item} />
      }
      />
    </View>
  )
}

export default CommentsScreen