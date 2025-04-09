import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CommentCard({ comment, isAnalyticView }: { comment: any; isAnalyticView: boolean }) {
  return (
    <View style={styles.card}>
      <Text style={styles.user}>
        {comment.user} {comment.verified && '✔️'}
      </Text>
      <Text>{comment.text}</Text>
      {isAnalyticView && <Text>Sentiment: {comment.sentiment}</Text>}
      {!isAnalyticView && <Text>Likes: {comment.likes}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  user: { fontWeight: 'bold' },
});