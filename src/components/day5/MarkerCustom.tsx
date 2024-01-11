import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'

interface Props {
  item: any,
  index: number,
  onPress: () => void
}

const MarkerCustom = ({ item, index, onPress}: Props) => {
  return (
    <Marker 
      onPress={onPress}
      coordinate={{ latitude: item?.latitude, longitude: item?.longitude }}
    >
      <View style={styles.wrapper}>
        <Text style={styles.intersemifont}>$ {item?.price}</Text>
      </View>
    </Marker>
  )
}

export default MarkerCustom

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white', 
    padding: 3, 
    borderWidth: 1, 
    borderColor: 'gray', 
    borderRadius: 20, 
    paddingHorizontal: 10
  },
  intersemifont: {
    fontFamily: 'InterSemiBold'
  }
})