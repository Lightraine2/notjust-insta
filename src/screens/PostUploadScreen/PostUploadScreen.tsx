import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera } from 'expo-camera';
import colors from '../../theme/colors';
import { MaterialIcons } from '@expo/vector-icons'; 

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null> (null);

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

  if (hasPermissions === null) {
    return <Text>Loading...</Text>
  }

  if (hasPermissions === false) {
    return <Text>No access to camera</Text>
  }


  return (
    <SafeAreaView style={styles.page}>
      <Camera style={styles.camera}/>
      <View style={styles.buttonContainer}>
        <MaterialIcons name="close" size={30} color={colors.white} />
        <Text style={{color: colors.white}}>boogers live here</Text>
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
        position: 'absolute',
        marginLeft: 100

    }
})

export default PostUploadScreen