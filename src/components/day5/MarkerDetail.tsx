import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    apartment: any
}

const MarkerDetail = ({apartment}: Props) => {
  return (
    <View style={styles.wrapper}>
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
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 30,
    left: 10,
    right: 10,
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