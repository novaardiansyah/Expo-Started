import { Button, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const DayDetailsScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Tinder App' }} />
      <SafeAreaView>
        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', gap: 10, paddingHorizontal: 20 }}>
          <View style={{ flex: 1 }}>
            <Link href={'/day6/tinder'} asChild>
              <Button title="Go to tinder" />
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default DayDetailsScreen