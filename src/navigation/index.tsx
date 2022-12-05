import React from 'react'
import {View, Text, Image } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen'
//import logo from '../assets/images/logo.png'
import BottomTabNavigator from './BottomTabNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// see this import for type declarations on navigation functions
import { RootNavigatorParamList } from './types'

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
    
      <Stack.Navigator 
      initialRouteName='Home' 
      screenOptions={{headerShown: true}}>

        <Stack.Screen name='Home' component={BottomTabNavigator} options={{
          headerShown: false
        }}/>

        {/* <Stack.Screen 
        name="Feed" 
        component={HomeScreen} 
        //custom header
//        options={{header: Header}}

        options={{headerTitle: HeaderTitle}}
        />
         */}


      <Stack.Screen
        name='Comments'
        component={CommentsScreen}
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

// const HeaderTitle = () => {

//   return (
//     <Image source={logo} resizeMode="contain" style={{width: 150, height: 40}} />
//   )

// }

export default Navigation;