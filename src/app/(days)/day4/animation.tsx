import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null)

  return (
    <>
      <Stack.Screen options={{ title: 'Animated Splash Screen' }} />
      <SafeAreaView>
        <LottieView 
          ref={animation}
          style={{ width: 200, height: 200, backgroundColor: '#EEE' }}
          source={require('@assets/lottie/netflix.json')}
        />

        <View style={{ alignItems: 'center', gap: 10, flexDirection: 'row', paddingHorizontal: 20  }}>
          <View style={{ flex: 1 }}>
            <Button title="Play" onPress={() => animation?.current?.play()} />
          </View>

          <View style={{ flex: 1 }}>
            <Button title="Pause" onPress={() => animation?.current?.pause()} />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default AnimationScreen

const styles = StyleSheet.create({})