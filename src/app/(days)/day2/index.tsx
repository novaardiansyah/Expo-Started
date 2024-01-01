import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function DayDetailScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 2' }} />
      <Text>Day 2</Text>
    </View>
  )
}

const styles = StyleSheet.create({})