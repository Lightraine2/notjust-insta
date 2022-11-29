import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera, FlashMode } from 'expo-camera';
import colors from '../../theme/colors';
import { MaterialIcons } from '@expo/vector-icons'; 

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null> (null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(
        cameraPermission.status === 'granted' && 
        microphonePermission.status === 'granted'
        )
    }
    getPermission();
  }, []);

  const flipCamera = () => {
    setCameraType(currentCameraType => 
      currentCameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front 
      : Camera.Constants.Type.back );
  }

  const toggleFlash = () => {
    console.log('toggleFlash')
  }

  if (hasPermissions === null) {
    return <Text>Loading...</Text>
  }

  if (hasPermissions === false) {
    return <Text>No access to camera</Text>
  }


  return (
    <SafeAreaView style={styles.page}>
      <Camera style={styles.camera} type={cameraType} ratio="4:3" flashMode={flash}/>
      
      <View style={[styles.buttonContainer, {top: 40}]}>
        <MaterialIcons name="close" size={30} color={colors.white} />
        <Pressable onPress={toggleFlash}>
        <MaterialIcons name="flash-off" size={30} color={colors.white} />
        </Pressable>
        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>
      
      <View style={[styles.buttonContainer, {bottom: 25}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />
        <View style={styles.circle}/>
        <Pressable onPress={flipCamera}>
        <MaterialIcons name="flip-camera-ios" size={30} color={colors.white} />
        </Pressable>
      </View>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.black
    },
    camera: {
        width: '100%',
        aspectRatio: 3/4,
    

    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      position: 'absolute'

    },
    circle: {
      width: 75,
      aspectRatio: 1,
      borderRadius: 75,
      backgroundColor: colors.white
    }
})

export default PostUploadScreen