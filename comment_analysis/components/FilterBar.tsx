import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type FilterBarProps = {
  filter: string; // Current filter value
  setFilter: (filter: string) => void; // Function to update the filter
};

export default function FilterBar({ filter, setFilter }: FilterBarProps) {
  const filters = ['all', 'positive', 'neutral', 'negative'];

  return (
    <View style={styles.container}>
      {filters.map((item) => (
        <TouchableOpacity
          key={item}
          style={[styles.button, filter === item && styles.activeButton]}
          onPress={() => setFilter(item)}
        >
          <Text style={[styles.buttonText, filter === item && styles.activeButtonText]}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  activeButton: {
    backgroundColor: '#007BFF',
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
  },
  activeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});