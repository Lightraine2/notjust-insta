import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import odlogo from '../assets/images/odlogo.png'
import logo from '../assets/images/logo.png'
import { HomeStackNavigatorParamList } from './types';
import colors from '../theme/colors';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={HomeScreen} options={{
                headerTitle: HeaderTitle, 
                headerStyle: styles.headerContainer
                }}/>
            <Stack.Screen
                name='UserProfile'
                component={ProfileScreen}
                options={{title: 'Profile'}}
                />
        </Stack.Navigator>
    )
}

const HeaderTitle = () => {
    return (
        <View style={styles.headerContent}>
        <Image 
       source={odlogo}
//        source={logo}
        resizeMode='contain'
        style={{width: 150, height: 40}}
        />
        <Text style={styles.headerText}>Search box</Text>
        <Text style={styles.headerText}>Profile link icon</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        
        backgroundColor: colors.odPrimay,
        borderBottomWidth: 1,
        borderColor: colors.black
        
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'row'
    },
    headerText: {
        color: colors.white
    }
})


export default HomeStackNavigator;