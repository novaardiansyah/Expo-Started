import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native'
import MarkdownDisplay from '@/components/day3/MarkdownDisplay'

const template = `
Hello **World**

Hello **World**

Hello **World**
`

const EditorScreen = () => {
  const [content, setContent] = useState(template)
  const [tab, setTab] = useState('edit')

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: 'Markdown Editor' }} /> 

      <View style={styles.tabsContainer}>
        <Pressable onPress={() => setTab('edit')} style={styles.tab}>
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable onPress={() => setTab('preview')} style={styles.tab}>
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {
        tab === 'edit' ? (
          <TextInput value={content} multiline style={styles.input} onChangeText={setContent} numberOfLines={50} />
        ) : (
          <MarkdownDisplay>{content}</MarkdownDisplay>
        )
      }
    </View>
  )
}

export default EditorScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'whitesmoke'
  },
  input: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
    fontSize: 16,
    borderRadius: 10
  },
  tabsContainer: {
    flexDirection: 'row',
    margin: 10,
    gap: 10
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center'
  },
  tabText: {
    fontFamily: 'InterSemiBold'
  }
})