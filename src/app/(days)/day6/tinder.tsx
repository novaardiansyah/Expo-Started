import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { tinderProfile } from '@data/index'
import TinderCard from '@/components/day6/TinderCard'

export const tinderCardWidth = Dimensions.get('screen').width * .8

const TinderAppScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Tinder App' }} />
      <SafeAreaView>
        { tinderProfile[0] && 
          tinderProfile.map((user, index) => (
            <TinderCard key={user?.id} user={user} numOfCards={tinderProfile.length} currentIndex={index} />
          ))
        }
      </SafeAreaView>
    </>
  )
}

export default TinderAppScreen

const styles = StyleSheet.create({
  card: {
    width: tinderCardWidth,
    aspectRatio: 1 / 1.67,
    borderRadius: 15,
    justifyContent: 'flex-end',
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