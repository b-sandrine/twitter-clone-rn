import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FilterBar from '../components/FilterBar';
import SentimenalBreakdown from '../components/SentimentalBreakdown';
import CommentCard from '../components/CommentCard';
import comments from '../data/comments.json';

export default function CommentsScreen() {
  const [isAnalyticView, setIsAnalyticView] = useState(true);
  const [option, setOption] = useState('all'); // Options: 'all', 'verified', 'moreReplies', 'positive'
  const [filter, setFilter] = useState('all'); // Filters: 'positive', 'neutral', 'skeptical'

  // Combine both filters: option and sentiment filter
  const filteredComments = comments
    .filter((comment) => {
      // Apply the `option` filter
      if (option === 'all') return true; // Show all comments
      if (option === 'verified') return comment.user?.verified; // Show only verified comments
      if (option === 'positive') return comment.sentiment === 'positive'; // Show only positive comments
      if (option === 'moreReplies') return comment.replies > 0; // Show comments with replies
      return true;
    })
    .sort((a, b) => {
      // Apply sorting for `moreReplies` option
      if (option === 'moreReplies') {
        return b.replies - a.replies; // Sort by replies in descending order
      }
      return 0; // No sorting for other options
    })
    .filter((comment) => {
      // Apply the `filter` (sentiment filter)
      if (filter === 'all') return true; // Show all comments
      return comment.sentiment === filter; // Filter by sentiment
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

        <FilterBar options={option} setOptions={(value) => {
          setOption(value);
          setFilter('all'); // Reset the sentiment filter when the option changes
        }} />
      </View>

      {/* Sentimental Breakdown */}
      {isAnalyticView && (
        <View style={styles.sentimenentalBreakdownContainer}>
          <SentimenalBreakdown filter={filter} setFilter={setFilter} />
        </View>
      )}

      {/* Comments List */}
      {filteredComments.length === 0 ? (
        <Text style={styles.noCommentsText}>No comments match the selected filters.</Text>
      ) : (
        <FlatList
          data={filteredComments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CommentCard comment={item} isAnalyticView={isAnalyticView} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  flexContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  switchContainer: { flexDirection: 'row', marginBottom: 16, width: '40%' , marginRight: 10, backgroundColor: '#e9ebf0', borderRadius: 8, padding: 4 , marginTop: 12},
  toggleButton: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 8 },
  activeToggleButton: { backgroundColor: '#007BFF' },
  toggleText: { fontSize: 14, color: '#000' },
  activeToggleText: { color: '#fff', fontWeight: 'bold' },
  sentimenentalBreakdownContainer: { marginBottom: 16 },
  noCommentsText: { textAlign: 'center', fontSize: 16, color: 'gray', marginTop: 20 },
});