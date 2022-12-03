import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import { MaterialIcons } from '@expo/vector-icons'; 
import colors from '../theme/colors';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

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
            component={ProfileScreen}
            options={{tabBarIcon: ({color, size}) =>
            <MaterialIcons name="add-circle"
            size={size}
            color={color}
            />
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;