import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, FlatList } from 'react-native';
import CommentCard from '../components/CommentCard';
import FilterBar from '../components/FilterBar';
import comments from '../data/comments.json';

export default function CommentsScreen() {
  const [isAnalyticView, setIsAnalyticView] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'positive', 'neutral', 'negative'

  const filteredComments = comments.filter((comment) =>
    filter === 'all' ? true : comment.sentiment === filter
  );

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text>Analytic View</Text>
        <Switch value={isAnalyticView} onValueChange={setIsAnalyticView} />
        <Text>Standard View</Text>
      </View>
      {isAnalyticView && <FilterBar filter={filter} setFilter={setFilter} />}
      <FlatList
        data={filteredComments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CommentCard comment={item} isAnalyticView={isAnalyticView} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
});