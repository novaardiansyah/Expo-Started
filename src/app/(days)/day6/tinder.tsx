import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { tinderProfile } from '@data/index'
import TinderCard from '@/components/day6/TinderCard'
import { useSharedValue, withSpring } from 'react-native-reanimated'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'

export const tinderCardWidth = Dimensions.get('screen').width * .8

const TinderAppScreen = () => {
  const activeIndex = useSharedValue(0)
  const translationX = useSharedValue(0)

  const gesture = Gesture.Pan()
    .onBegin((event) => {})
    .onChange((event) => {
      translationX.value = event.translationX
    })
    .onEnd((event) => {
      translationX.value = withSpring(0)
    })

  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.wrapper}>
        <Stack.Screen options={{ headerShown: false }} />
        { tinderProfile[0] && 
            tinderProfile.map((user, index) => (
              <TinderCard 
                key={user?.id} 
                user={user} 
                numOfCards={tinderProfile.length} 
                currentIndex={index} 
                activeIndex={activeIndex}
                translationX={translationX}
              />
            ))
          }
      </View>
    </GestureDetector>
  )
}

export default TinderAppScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})