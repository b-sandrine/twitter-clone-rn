import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SentimentBar({ sentiment }: { sentiment: { positive: number; neutral: number; negative: number } }) {
  return (
    <View style={styles.container}>
      {/* Sentiment Bar */}
      <View style={styles.barContainer}>
        {/* Negative Section */}
        <View style={[styles.bar, styles.negativeBar, { flex: sentiment.negative }]}>
          {sentiment.negative > 0 && (
            <Text style={[styles.label, styles.negativeLabel]}>
              {sentiment.negative}% Skeptical
            </Text>
          )}
        </View>

        {/* Neutral Section */}
        <View style={[styles.bar, styles.neutralBar, { flex: sentiment.neutral }]}>
          {sentiment.neutral > 0 && (
            <Text style={[styles.label, styles.neutralLabel]}>
              {sentiment.neutral}% Neatral
            </Text>
          )}
        </View>

        {/* Positive Section */}
        <View style={[styles.bar, styles.positiveBar, { flex: sentiment.positive }]}>
          {sentiment.positive > 0 && (
            <Text style={[styles.label, styles.positiveLabel]}>
              {sentiment.positive}% Agree
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  barContainer: {
    flexDirection: 'row',
    height: 40, // Increased height for better visibility
    borderRadius: 20, // Rounded edges
    overflow: 'hidden',
    backgroundColor: '#ddd', // Background color for empty sections
  },
  bar: {
    height: '100%',
    justifyContent: 'center', // Center the label vertically
    alignItems: 'center', // Center the label horizontally
  },
  positiveBar: {
    backgroundColor: 'green',
  },
  neutralBar: {
    backgroundColor: 'yellow',
  },
  negativeBar: {
    backgroundColor: 'red',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff', 
  },
  positiveLabel: {
    color: 'white', 
  },
  neutralLabel: {
    color: 'black', 
  },
  negativeLabel: {
    color: 'white', 
  },
});