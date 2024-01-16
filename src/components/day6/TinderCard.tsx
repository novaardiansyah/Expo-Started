import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { tinderProfile } from '@data/index'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, { SharedValue, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

export const screenWidth = Dimensions.get('screen').width
export const tinderCardWidth = screenWidth * .8

interface TinderCardProps {
  user: (typeof tinderProfile)[0],
  numOfCards: number,
  currentIndex: number,
  activeIndex: SharedValue<number>
}

const TinderCard = ({ user, numOfCards, currentIndex, activeIndex }: TinderCardProps) => {
  const translationX = useSharedValue(0)

  const animatedCard = useAnimatedStyle(() => ({
    opacity: interpolate(
      activeIndex.value, 
      [currentIndex - 1, currentIndex, currentIndex + 1], 
      [1 - 1 / 5, 1, 1]
    ),
    transform: [
      {
        scale: interpolate(
          activeIndex.value,
          [currentIndex - 1, currentIndex, currentIndex + 1],
          [0.95, 1, 1]
        ),
      }, 
      { 
        translateY: interpolate(
          activeIndex.value, 
          [currentIndex - 1, currentIndex, currentIndex + 1],
          [-30, 0, 0]
        ) 
      },
      {
        translateX: translationX.value
      },
      {
        rotateZ: activeIndex.value === currentIndex ? `${interpolate(
          translationX.value,
          [-screenWidth / 2, 0, screenWidth / 2],
          [-15, 0, 15]
        )}deg` : '0deg'
      }
    ]}
  ))

  const gesture = Gesture.Pan()
    .onChange((event) => {
      translationX.value = event.translationX
      
      activeIndex.value = interpolate(
        Math.abs(translationX.value),
        [0, screenWidth],
        [0, activeIndex.value + 0.8]
      )
    })
    .onEnd((event) => {
      if (Math.abs(event.velocityX) > 400) 
      {
        translationX.value = withSpring(
          Math.sign(event.velocityX) * screenWidth, 
          { velocity: event.velocityX }
        )
        activeIndex.value = withSpring(currentIndex + 1)
      } else {
        translationX.value = withSpring(0)
      }
    })

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[
        styles.card, 
        { 
          zIndex: numOfCards - currentIndex,
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
    </GestureDetector>
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