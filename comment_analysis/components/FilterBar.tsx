import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface FilterBarProps {
  options: string;
  setOptions: (options: string) => void;
}

export default function FilterBar({ options, setOptions }: FilterBarProps) {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        value={options}
        onValueChange={(value) => {
          setOptions(value); // Update the parent state
        }}
        items={[
          { label: 'All Comments', value: 'all' },
          { label: 'Most Credible (Experts & Verified)', value: 'verified' },
          { label: 'Most Engaged (More replies)', value: 'moreReplies' },
          { label: 'Positive Comments', value: 'positive' },
        ]}
        style={{
          inputIOS: styles.dropdown,
          inputAndroid: styles.dropdown,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 16,
    width: '40%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});