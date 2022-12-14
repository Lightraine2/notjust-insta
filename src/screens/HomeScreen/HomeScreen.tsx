import React from 'react'
import {FlatList, ViewabilityConfig, ViewToken} from 'react-native'; 
import FeedPost from '../../components/FeedPost/FeedPost';

import dojos from '../../assets/data/dojodata.json'
import posts from '../../assets/data/posts.json'

import {useRef, useState} from 'react'

// get icons like so
//import { createIconSet } from 'react-native-vector-icons';


const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
    if (viewableItems.length > 0) {
      setActivePostId(viewableItems[0].item.id);

    }
  });
  
  
  return (


    <FlatList
    data={posts}
    renderItem={({item}) => <FeedPost post={item} isVisible={activePostId === item.id}/>}
    showsVerticalScrollIndicator={false}
    viewabilityConfig={viewabilityConfig}
    onViewableItemsChanged={onViewableItemsChanged.current}
    />



  );
}

export default HomeScreen;