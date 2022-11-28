import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera } from 'expo-camera';

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
    <SafeAreaView>
      <Text>PostUploadScreen</Text>
    </SafeAreaView>
  )
}

export default PostUploadScreen