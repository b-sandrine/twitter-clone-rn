import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SentimentBar from '../components/SentimentBar';
import posts from '../data/posts.json';
import { useRouter } from 'expo-router';

const post = posts[0]; // Assume the first post is displayed

export default function PostScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.postContent}>{post.content}</Text>
      <SentimentBar sentiment={post.sentiment} />
      <Text style={styles.commentsCount}>Comments: {post.commentsCount}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/comments')}
      >
        <Text style={styles.buttonText}>Show Comments</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  postContent: { fontSize: 18, marginBottom: 16 },
  commentsCount: { fontSize: 16, marginVertical: 8 },
  button: { backgroundColor: '#007BFF', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});