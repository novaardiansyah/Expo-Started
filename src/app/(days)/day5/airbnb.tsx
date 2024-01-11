import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView from 'react-native-maps'

import { apartmentLocation } from '@data/index'
import MarkerCustom from '@/components/day5/MarkerCustom'
import MarkerDetail from '@/components/day5/MarkerDetail'

const AirBnbScreen = () => {
  const [activeApartment, setActiveApartment] = useState<any>(null)

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView style={styles.map} 
        initialRegion={{
          latitude: -6.3017246440516494,
          longitude: 106.65220311537618,
          // * "latitudeDelta" and "longitudeDelta" are used for zooming in and out. Use one of them and set the other to 0 for the remaining.
          latitudeDelta: 0.01, 
          longitudeDelta: 0
        }}
      >
        { apartmentLocation.map((item, index) => (
            <MarkerCustom item={item} index={index} key={item?.id} onPress={() => setActiveApartment(item)} />
          )
        )}
      </MapView>
      
      { activeApartment && (<MarkerDetail apartment={activeApartment} />) }
    </SafeAreaView>
  )
}

export default AirBnbScreen

const styles = StyleSheet.create({
  map: {
    width: '100%', 
    height: '100%'
  }
})