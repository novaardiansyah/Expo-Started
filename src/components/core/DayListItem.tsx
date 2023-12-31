import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

type DayListItem = {
  day: number
}

export default function DayListItem({ day }: DayListItem) {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F9EDE3',
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9B4521', 
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#9B4521',
    fontSize: 70,
    fontFamily: 'AmaticBold'
  }
});
