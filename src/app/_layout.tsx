import { Stack } from 'expo-router'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'
import { useEffect, useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SplashAnimateScreen from '@/components/day4/splash'
import Animated, { FadeIn } from 'react-native-reanimated'

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false)
  const [splashAnimationFinish, setSplashAnimationFinish] = useState(false)

  const [fontsLoaded, fontError] = useFonts({
    InterRegular: Inter_400Regular,
    InterSemiBold: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setAppReady(true)
    }
  }, [fontsLoaded, fontError])
  
  if (!appReady || !splashAnimationFinish) {
    return <SplashAnimateScreen onAnimationFinish={(isCancelled) => {
      if (!isCancelled) {
        setSplashAnimationFinish(true)
      }
    }} />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View entering={FadeIn} style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Nova Ardiansyah' }} />
        </Stack>
      </Animated.View>
    </GestureHandlerRootView>
  )
}