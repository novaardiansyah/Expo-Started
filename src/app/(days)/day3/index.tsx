import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import MarkdownDisplay from '@/components/day3/MarkdownDisplay'
import { SafeAreaView } from 'react-native-safe-area-context'

const description = `
## Markdown

Integrated Markdown content in **React Native**

📗 Today's Agenda:

- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
`

const DayDetailScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.page}>
      <Stack.Screen options={{ title: 'Day 3: Markdown Reader' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={'/day3/editor'} asChild>
        <Button title="Go to editor" />
      </Link>
    </SafeAreaView>
  )
}

export default DayDetailScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff'
  }
})