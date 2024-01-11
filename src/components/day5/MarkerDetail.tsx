import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { apartmentLocation } from '@/data'

interface Props {
  apartment: (typeof apartmentLocation)[0],
  customStyle?: ViewStyle
}

const MarkerDetail = ({ apartment, customStyle }: Props) => {
  return (
    <View style={[styles.wrapper, customStyle]}>
      <Image source={{ uri: apartment?.image }} style={styles.image} />
      <View style={styles.right_content}>
        <Text style={styles.title}>
          {apartment?.title}
        </Text>

        <Text style={styles.description}>
          Stay at this apartment for an affordable price
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>
            $ {apartment?.price} / night
          </Text>
          <Text style={styles.price}>
            &#9733; {apartment?.rating} ({apartment?.numberOfStars})
          </Text>
        </View>
      </View>
    </View>
  )
}

export default MarkerDetail

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden'
  },
  right_content: {
    padding: 10,
    flex: 1
  },
  title: {
    fontFamily: 'InterBold',
    marginBottom: 10,
    fontSize: 16
  },
  price: {
    fontFamily: 'InterSemiBold'
  },
  description: {
    color: 'gray'
  }, 
  image: {
    width: 150,
    aspectRatio: 1
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto'
  }
})