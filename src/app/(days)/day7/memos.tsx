import { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Audio } from 'expo-av'
import { Recording } from 'expo-av/build/Audio'

const MemosScreen = () => {
  const [recording, setRecording] = useState<Recording>()
  const [memos, setMemos] = useState<string[]>([])

  async function startRecording()
  {
    try {
      console.log('Requesting permissions..')
      
      await Audio.requestPermissionsAsync()
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      })

      console.log('Starting recording..')

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      )

      setRecording(recording)
    } catch (error) {
      console.log('Failed to start recording : ', error)
    }
  }

  async function stopRecording() 
  {
    if (!recording) return

    console.log('Stopping recording..')
    
    setRecording(undefined)
    
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    )

    const uri = recording.getURI();

    console.log('Recording stopped and stored at', uri);
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}

export default MemosScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
