import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Stack, router } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';

import { onboardingStep } from '@data/index'
import { StatusBar } from 'expo-status-bar';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';

const OnBoardingScreen = () => {
  const onContinue = () => {
    if (screenIndex < onboardingStep.length - 1) {
      setScreenIndex(screenIndex + 1)
    } else {
      endOnboarding()
    }
  }

  const onBack = () => {
    if (screenIndex > 0) {
      setScreenIndex(screenIndex - 1)
    } else {
      endOnboarding()
    }
  }

  const swipes = Gesture.Simultaneous(Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue), Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack))

  const [ screenIndex, setScreenIndex ] = useState(0)

  const data = onboardingStep[screenIndex]

  const endOnboarding = () => {
    setScreenIndex(0)
    router.back()
  }

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{  headerShown: false }} />
      <StatusBar style='light' />

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent}>
          <View style={styles.stepIndicatorContainer}>
            { onboardingStep.map((step, index) => {
              return (
                <View style={[styles.stepIndicator, { backgroundColor: index === screenIndex ? '#FDFDFD' : 'gray' }]} key={`onboarding-${index}`} />
              )
            }) }
          </View>

          <FontAwesome5 style={styles.image} name={data?.icon} size={100} color="#CEF202" />

          <View style={styles.footer}>
            <Text style={styles.title}>{data?.title}</Text>
            <Text style={styles.description}>{data?.description}</Text>

            <View style={styles.buttonsRow}>
              <Text style={styles.buttonText} onPress={endOnboarding}>Skip</Text>

              <Pressable style={styles.button} onPress={onContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#15141A',
  },
  pageContent: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 34
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 20
  },
  stepIndicator: {
    flex: 1,
    height: 2,
    backgroundColor: 'gray',
    borderRadius: 10
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  button: {
    backgroundColor: '#302E38',
    borderRadius: 50,
    alignItems: 'center',
    flex: 1
  },
  buttonText: {
    color: '#FDFDFD',
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25
  },
  title: {
    color: '#FDFDFD',
    fontSize: 40,
    fontFamily: 'InterBold',
    letterSpacing: 1.3,
    marginVertical: 20
  },
  image: {
    alignSelf: 'center',
    margin: 20,
  },
  description: {
    color: 'gray',
    fontSize: 20,
    fontFamily: 'InterRegular',
    lineHeight: 28
  },
  footer: {
    marginTop: 'auto'
  }
})

export default OnBoardingScreen