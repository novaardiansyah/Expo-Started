import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { tinderProfile } from '@data/index'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, { SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated'

export const tinderCardWidth = Dimensions.get('screen').width * .8

interface TinderCardProps {
  user: (typeof tinderProfile)[0],
  numOfCards: number,
  currentIndex: number,
  activeIndex: SharedValue<number>
}

const TinderCard = ({ user, numOfCards, currentIndex, activeIndex }: TinderCardProps) => {
  const animatedCard = useAnimatedStyle(() => ({
    opacity: interpolate(activeIndex.value, [currentIndex - 1, currentIndex, currentIndex + 1], [1 - 1 / 5, 1, 1])
  }))

  return (
    <Animated.View style={[
      styles.card, 
      { 
        zIndex: numOfCards - currentIndex,
        transform: [{ translateY: -currentIndex * 30 }, { scale: 1 - currentIndex * 0.05 }],
      },
      animatedCard
    ]}>
      <Image style={[StyleSheet.absoluteFillObject, styles.image]} source={{ uri: user?.image }} />
      
      <LinearGradient 
        colors={['transparent', 'rgba(0, 0, 0, .8)']}
        style={[StyleSheet.absoluteFillObject, styles.overlay]}
      />

      <View style={styles.footer}>
        <Text style={styles.author}>
          {user?.name}
        </Text>
      </View>
    </Animated.View>
  )
}

export default TinderCard

const styles = StyleSheet.create({
  card: {
    width: tinderCardWidth,
    aspectRatio: 1 / 1.67,
    borderRadius: 15,
    justifyContent: 'flex-end',
    position: 'absolute',
    // * Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: .22,
    shadowRadius: 2.22,
    elevation: 3
    // overflow: 'hidden'
  },
  image: {
    borderRadius: 15, 
  },
  author: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'InterSemiBold'
  },
  overlay: {
    top: '50%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  footer: {
    padding: 10
  }
})