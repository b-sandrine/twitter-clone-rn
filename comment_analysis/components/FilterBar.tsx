import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface FilterBarProps {
  options: string;
  setOptions: (options: string) => void;
}

export default function FilterBar({ options, setOptions }: FilterBarProps) {
  const [selectedValue, setSelectedValue] = useState('positive');

  return (
    <View style={styles.container}>
      <RNPickerSelect
        value={selectedValue}
        onValueChange={(value) => {
          setSelectedValue(value);
          setOptions(value);
        }}
        items={[
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
    alignItems: 'flex-end', // Align the dropdown to the right
    padding: 16,
    width: '40%', // Restrict the container width to 40% of the screen
    borderWidth: 1, // Add border to the container
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff', // Optional: Add a background color to the container
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: 'transparent', // Ensure the dropdown has no background
  },
});