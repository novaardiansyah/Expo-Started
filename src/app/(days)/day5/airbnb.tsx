import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView from 'react-native-maps'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'

import { apartmentLocation } from '@data/index'
import MarkerCustom from '@/components/day5/MarkerCustom'
import MarkerDetail from '@/components/day5/MarkerDetail'

const AirBnbScreen = () => {
  const [activeApartment, setActiveApartment] = useState<any>(null)
  const firtsSnap = 80
  const snapPoints = useMemo(() => [firtsSnap, '50%', '90%'], [])

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView style={styles.map} 
        initialRegion={{
          latitude: -6.3017246440516494,
          longitude: 106.65220311537618,
          /**
           * TODO: "latitudeDelta" and "longitudeDelta" are used for zooming in and out.
           * * Use one of them and set the other to 0 for the remaining.
           */
          latitudeDelta: 0.01, 
          longitudeDelta: 0
        }}
      >
        { apartmentLocation.map((item, index) => (
            <MarkerCustom item={item} index={index} key={item?.id} onPress={() => setActiveApartment(item)} />
          )
        )}
      </MapView>
      
      { activeApartment && ( 
        <MarkerDetail apartment={activeApartment} 
          customStyle={{ 
            position: 'absolute',
            left: 10,
            right: 10,
            bottom: firtsSnap + 10
           }}
        /> 
      )}

      <BottomSheet
        index={0}
        snapPoints={snapPoints}
        // enablePanDownToClose
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Over {apartmentLocation?.length} places</Text>
          <Text style={styles.description}>
            Explore the places you love and discover new places to visit.
          </Text>
          
          <BottomSheetFlatList 
            data={apartmentLocation}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => (<MarkerDetail apartment={item} />)}
          />
        </View>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default AirBnbScreen

const styles = StyleSheet.create({
  map: {
    width: '100%', 
    height: '100%'
  },
  title: {
    textAlign: 'center',
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 4
  },
  description: {
    color: 'gray',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 18,
    paddingHorizontal: 50
  }
})