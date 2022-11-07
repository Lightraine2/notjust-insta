import React from 'react'
import { useState } from 'react';
import {View, StyleSheet, Pressable} from 'react-native'
//import Video from 'react-native-video'
import {Video} from 'expo-av';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'; 
import colors from '../../theme/colors';

interface IVideoPlayer {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true)
  return (
    <View>
    <Video 
    source={{uri}} 
    style={styles.video}
    isLooping
    isMuted={muted}
    shouldPlay
    resizeMode="contain"
    
    />
    <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
    <Ionicons name={muted ? 'volume-mute' : 'volume-medium'} 
    size={14} 
    color="white" 
    />
    </Pressable>
    </View>
  );
};

//TODO fix the styles. Button not appearing on the right and black background over whole view

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 25,
    postition: 'absolute',
    bottom: 10,
    right: 10,
    left: 0,
    top: 0

  }
})

export default VideoPlayer;
