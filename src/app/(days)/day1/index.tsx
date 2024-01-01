import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function DayDetailScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 1' }} />
      <Text>Day 1</Text>
    </View>
  )
}

const styles = StyleSheet.create({})