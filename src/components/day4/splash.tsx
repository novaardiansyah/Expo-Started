import React, { useRef } from 'react'
import LottieView from 'lottie-react-native'
import Animated, { ZoomOut } from 'react-native-reanimated'
import { View } from 'react-native'

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView)

const SplashAnimateScreen = ({ onAnimationFinish = (isCancelled) => {} }: {onAnimationFinish?: (isCancelled: boolean) => void}) => {
  const animation = useRef<LottieView>(null)

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#000' }}>
      <AnimatedLottieView 
        exiting={ZoomOut}
        autoPlay
        onAnimationFinish={onAnimationFinish}
        loop={false}
        ref={animation}
        style={{ width: '80%', maxWidth: 400 }}
        source={require('@assets/lottie/netflix.json')}
      />
    </View>
  )
}

export default SplashAnimateScreen