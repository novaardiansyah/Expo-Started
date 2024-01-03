import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Markdown from 'react-native-markdown-display'

const markdown = `# Heading
  **Bold Text**

  *Normal Text*
`

const EditorScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ title: 'Markdown Editor' }} /> 
      <Markdown>{markdown}</Markdown>
    </SafeAreaView>
  )
}

export default EditorScreen

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    flex: 1
  }
})