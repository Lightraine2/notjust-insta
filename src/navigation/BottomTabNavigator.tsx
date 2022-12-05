import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; 
import colors from '../theme/colors';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import { BottomTabNavigatorParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false, 
            tabBarActiveTintColor: colors.black
            }}>
            <Tab.Screen 
            name='HomeStack' 
            component={HomeStackNavigator} 
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => 
            <MaterialIcons name="home-filled"
            size={size}
            color={color}
             /> 
            }}
            />
            <Tab.Screen 
            name='Search' 
            component={HomeScreen}
            options={{tabBarIcon: ({color, size}) => 
            <MaterialIcons name="search"
            size={size}
            color={color}
            />
            }} 
            />
            <Tab.Screen 
            name='Upload' 
            component={PostUploadScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) =>
            <MaterialIcons name="add-circle"
            size={size}
            color={color}
            />
            }} />
            <Tab.Screen 
            name='Notifications' 
            component={PostUploadScreen} 
            options={{tabBarIcon: ({color, size}) =>
            <MaterialIcons name="add-circle"
            size={size}
            color={color}
            />
            }}/>
            <Tab.Screen 
            name='MyProfile' 
            component={ProfileStackNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) =>
            <FontAwesome name="user-circle-o"
            size={size}
            color={color}
            />
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;