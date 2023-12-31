import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import { Link } from 'expo-router'

import DayListItem from '../components/core/DayListItem'

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'

import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()
const days = [...Array(24)].map((val, index) => index + 1)

export default function HomeScreen() {
  const [fontsLoaded, fontError] = useFonts({
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
    <View style={styles.container}>
      <FlatList  
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
      />

      <Link href={'/user'}>Go to user</Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap: 10,
    padding: 10
  },
  column: {
    gap: 10,
  }
});
