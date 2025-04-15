import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type FilterBarProps = {
  filter: string; // Current filter value
  setFilter: (filter: string) => void; // Function to update the filter
};

export default function SentimenalBreakdown({ filter, setFilter }: FilterBarProps) {
  
const filters = ['positive', 'neutral', 'skeptical']; // Define the available filters

  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>Sentiment Breakdown</Text>
      {filters.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.radioButton,
            item === 'positive' && styles.positive,
            item === 'neutral' && styles.neutral,
            item === 'skeptical' && styles.skeptical,
          ]}
          onPress={() => setFilter(item)}
        >
          <Text style={[styles.radioText, filter === item && styles.activeText]}>
            {item.charAt(0).toUpperCase() + item.slice(1)}  {/* Capitalize the first letter */}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: 'grey',
    borderRadius: 8,
    width: '100%',
    padding: 16,
  },
  radioButton: {
    paddingVertical: 3,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    color: '000'
  },
  positive: {
    backgroundColor: 'green',
  },
  neutral: {
    backgroundColor: 'yellow',
    color: 'black',
  },
  skeptical: {
    backgroundColor: 'red',
  },
  radioText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  activeText: {
    textDecorationLine: 'underline',
  },
});