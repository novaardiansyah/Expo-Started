import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const DayDetailScreen = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: 'Day 3: Markdown Reader' }} />
      <Link href={'/day3/editor'} asChild>
        <Button title="Go to editor" />
      </Link>
    </SafeAreaView>
  )
}

export default DayDetailScreen

const styles = StyleSheet.create({})