import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { tinderProfile } from '@data/index'
import { LinearGradient } from 'expo-linear-gradient'

export const tinderCardWidth = Dimensions.get('screen').width * .8

interface TinderCardProps {
  user: (typeof tinderProfile)[0],
  numOfCards: number,
  currentIndex: number
}

const TinderCard = ({ user, numOfCards, currentIndex }: TinderCardProps) => {
  return (
    <View style={styles.card}>
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
    </View>
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