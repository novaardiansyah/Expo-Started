import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Markdown from 'react-native-markdown-display'

const markdown = `# Judul Dokumen

Ini adalah teks paragraf pertama. Silakan gantilah dengan konten sesuai kebutuhan Anda.

## Bagian 1

Teks dalam bagian ini bisa diubah-ubah sesuai dengan topik yang Anda bahas.

### Subbagian 1.1

Ini adalah subbagian dari Bagian 1. Silakan tambahkan konten khusus di sini.

## Bagian 2

Tuliskan konten atau informasi tambahan dalam bagian ini.

### Daftar

- Item pertama dalam daftar.
- Item kedua dalam daftar.
- Item ketiga dalam daftar.

### Gambar

![Image](https://source.unsplash.com/random/?Cryptocurrency&2)

### Link

[Click Me](https://novaardiansyah.my.id)

### Tabel

| Kolom 1 | Kolom 2 |
| ------- | ------- |
| Baris 1  | Data 1  |
| Baris 2  | Data 2  |
| Baris 3  | Data 3  |

## Catatan

Tambahkan catatan atau informasi penting di sini.

> Ini adalah kutipan penting.

### Kode

Inline \`code\`

\`\`\`js
  const geColors = (index) => {
    let colors = ['#FF0000', '#00FF00', '#0000FF']
    return colors[index] || colors[0]
  }
\`\`\`

## Sumber

Jangan lupa untuk mencantumkan sumber informasi jika diperlukan.

---

Terima kasih!`

const EditorScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Markdown Editor' }} /> 
      <SafeAreaView style={styles.page}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.content}>
          <Markdown style={markdownStyle}>{markdown}</Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default EditorScreen

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