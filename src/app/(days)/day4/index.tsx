import { Button, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const DayDetailsScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Animated Splash Screen' }} />
      <SafeAreaView>
        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', gap: 10, paddingHorizontal: 20 }}>
          <View style={{ flex: 1 }}>
            <Link href={'/day4/animation'} asChild>
              <Button title="Go to animation" />
            </Link>
          </View>

          <View style={{ flex: 1 }}>
            <Link href={'/day4/splash'} asChild>
              <Button title="Go to splash" />
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default DayDetailsScreen