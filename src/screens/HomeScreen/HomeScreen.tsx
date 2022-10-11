import {FlatList} from 'react-native'; 
import FeedPost from '../../components/FeedPost/FeedPost';
import posts from '../../assets/data/posts.json'

// get icons like so
//import { createIconSet } from 'react-native-vector-icons';


const HomeScreen = () => {
  return (

    <FlatList
    data={posts}
    renderItem={({item}) => <FeedPost post={item}/>}
    showsVerticalScrollIndicator={false}
    />



  );
}

export default HomeScreen;