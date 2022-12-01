import React from 'react'
import {View, Text, Image } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import logo from '../assets/images/logo.png'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Feed' 
      screenOptions={{headerShown: true}}>
        <Stack.Screen 
        name="Feed" 
        component={HomeScreen} 
        //custom header
//        options={{header: Header}}

        options={{headerTitle: HeaderTitle}}
        />
        <Stack.Screen 
        name="UserProfile" 
        component={ProfileScreen} 
        options={{title: 'Profile'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

//custom header component
// const Header = () => {
//   return (
//     <View>
//       <Text>Custom Header</Text>
//     </View>
//   )
// }

const HeaderTitle = () => {

  return (
    <Image source={logo} resizeMode="contain" style={{width: 150, height: 40}} />
  )

}

export default Navigation;