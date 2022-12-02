import React from 'react'
import {Image, FlatList} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import user from '../../assets/data/user.json'
import ProfileHeader from './ProfileHeader'
import FeedGridView from '../../components/FeedGridView/FeedGridView'



const ProfileScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const userId = route.params?.userId;

    navigation.setOptions({title: user.username})

    return (
        <FeedGridView 
        data={user.posts}

        ListHeaderComponent={ProfileHeader}
        />
    )

}

export default ProfileScreen