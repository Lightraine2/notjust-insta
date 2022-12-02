import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import { MaterialIcons } from '@expo/vector-icons'; 
import colors from '../theme/colors';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: colors.primary}}>
            <Tab.Screen 
            name='Feed' 
            component={HomeScreen} 
            options={{tabBarIcon: ({color, size}) => 
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
            options={{tabBarIcon: ({color, size}) =>
            <MaterialIcons name="add-circle"
            size={size}
            color={color}
            />
            }} />
            <Tab.Screen name='Notifications' component={PostUploadScreen} />
            <Tab.Screen name='MyProfile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;