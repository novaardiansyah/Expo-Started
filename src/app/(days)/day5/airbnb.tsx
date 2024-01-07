import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { Marker} from 'react-native-maps'

const AirBnbScreen = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView style={styles.map} 
        initialRegion={{
          latitude: -6.245134894654157,
          longitude: 106.64965551572887,
          // * "latitudeDelta" and "longitudeDelta" are used for zooming in and out. Use one of them and set the other to 0 for the remaining.
          latitudeDelta: 0.005, 
          longitudeDelta: 0
        }}
      >
        <Marker 
          coordinate={{ latitude: -6.243689502711375, longitude: 106.6492280128147 }} 
          title="SPBU PERTAMINA"
          description="SPBU Pertamina 31.153.03 Alam Sutera" 
        />
      </MapView>
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