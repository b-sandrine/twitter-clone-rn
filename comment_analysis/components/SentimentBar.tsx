import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SentimentBar({ sentiment }: { sentiment: { positive: number; neutral: number; negative: number } }) {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { backgroundColor: 'green', flex: sentiment.positive }]} />
      <View style={[styles.bar, { backgroundColor: 'gray', flex: sentiment.neutral }]} />
      <View style={[styles.bar, { backgroundColor: 'red', flex: sentiment.negative }]} />
      <View style={styles.labels}>
        <Text style={styles.label}>Positive: {sentiment.positive}%</Text>
        <Text style={styles.label}>Neutral: {sentiment.neutral}%</Text>
        <Text style={styles.label}>Negative: {sentiment.negative}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  bar: { height: 10 },
  labels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  label: { fontSize: 12 },
});