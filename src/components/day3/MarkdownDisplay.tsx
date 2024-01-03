import { ScrollView, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'
import Markdown from 'react-native-markdown-display'

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.content}>
        <Markdown style={markdownStyle}>{children}</Markdown>
      </ScrollView>
    </>
  )
}

export default MarkdownDisplay

const markdownStyle = StyleSheet.create({
  heading1: {
    fontFamily: 'Inter',
    color: '#212020',
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 40
  },
  heading2: {
    fontFamily: 'InterBold',
    color: '#404040',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30
  },
  body: {
    fontSize: 16,
    lineHeight: 24
  }
})

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
  },
  content: { 
    height: '100%', 
    paddingHorizontal: 20,
  }
})