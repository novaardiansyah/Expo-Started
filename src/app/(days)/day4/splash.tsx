import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
import { StatusBar } from 'expo-status-bar'

const SplashScreen = () => {
  const animation = useRef<LottieView>(null)

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#000' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView 
        // autoPlay
        ref={animation}
        style={{ width: '80%', maxWidth: 400 }}
        source={require('@assets/lottie/netflix.json')}
      />
      <StatusBar style="light" />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})