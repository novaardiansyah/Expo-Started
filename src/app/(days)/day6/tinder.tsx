import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { tinderProfile } from '@data/index'
import TinderCard from '@/components/day6/TinderCard'
import { useSharedValue } from 'react-native-reanimated'

export const screenWidth = Dimensions.get('screen').width
export const tinderCardWidth = screenWidth * .8

const TinderAppScreen = () => {
  const activeIndex = useSharedValue(0)

  return (
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
            />
          ))
        }
    </View>
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