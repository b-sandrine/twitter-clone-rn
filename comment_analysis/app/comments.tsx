import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import CommentCard from '../components/CommentCard';
import FilterBar from '../components/FilterBar';
import SentimenalBreakdown from '../components/SentimentalBreakdown'; // Fixed import path
import comments from '../data/comments.json';

export default function CommentsScreen() {
  const [isAnalyticView, setIsAnalyticView] = useState(true);
  const [option, setOption] = useState('all'); // Options: 'all', 'verified', 'moreReplies', 'positive'
  const [filter, setFilter] = useState('all'); // Filters: 'positive', 'neutral', 'skeptical'

  // Filter comments based on the selected option
  const filteredCommentsAccordingToOptions = comments.filter((comment) => {
    if (option === 'all') return true;
    if (option === 'verified') return comment.user.verified;
    if (option === 'moreReplies') return comment.replies > 0;
    if (option === 'positive') return comment.sentiment === 'positive';
    return false;
  });

  // Further filter comments based on the selected filter
  const filteredCommentsAccordingToFilters = filteredCommentsAccordingToOptions.filter((comment) => {
    if (filter === 'all') return true;
    return comment.sentiment === filter;
  });

  return (
    <View style={styles.container}>
      {/* Toggle between Analytic and Standard views */}
      <View style={styles.flexContainer}>
        <View style={styles.switchContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, isAnalyticView && styles.activeToggleButton]}
            onPress={() => setIsAnalyticView(true)}
          >
            <Text style={[styles.toggleText, isAnalyticView && styles.activeToggleText]}>
              Analytic
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, !isAnalyticView && styles.activeToggleButton]}
            onPress={() => setIsAnalyticView(false)}
          >
            <Text style={[styles.toggleText, !isAnalyticView && styles.activeToggleText]}>
              Standard
            </Text>
          </TouchableOpacity>
        </View>

        {/* Show FilterBar only in Analytic view */}
        {isAnalyticView && <FilterBar options={option} setOptions={setOption} />}
      </View>

      {/* Sentimental Breakdown */}
      <View style={styles.sentimenentalBreakdownContainer}>
        <SentimenalBreakdown filter={filter} setFilter={setFilter} />
      </View>

      {/* Comments List */}
      <FlatList
        data={filteredCommentsAccordingToFilters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CommentCard comment={item} isAnalyticView={isAnalyticView} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginRight: 6,
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sentimenentalBreakdownContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: 'transparent',
  },
  activeToggleButton: {
    backgroundColor: '#007BFF',
  },
  toggleText: {
    fontSize: 14,
    color: '#000',
  },
  activeToggleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});