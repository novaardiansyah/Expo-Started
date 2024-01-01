import { Stack } from "expo-router";
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

import * as SplashScreen from 'expo-splash-screen'
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
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
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])
  
  if (!fontsLoaded && !fontError) return <ActivityIndicator />

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Nova Ardiansyah' }} />
    </Stack>
  )
}