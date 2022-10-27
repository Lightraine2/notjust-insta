import React, { Component } from 'react'
import { FlatList, Text, View, Image, useWindowDimensions } from 'react-native'

interface ICarousel {
    images: string[],
}

const Carousel = ({images}: ICarousel) => {

    const {width} = useWindowDimensions();
  
    return (
      <View>
        <FlatList 
        data={images} 
        renderItem={({item}) => (
        <Image source={{uri: item}} style={{width: width, aspectRatio: 1}} />
        )}
        horizontal={true}
        pagingEnabled
        />
      </View>
    )

}

export default Carousel
