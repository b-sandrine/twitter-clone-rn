import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SentimentBar from '../components/SentimentBar';
import posts from '../data/posts.json';
import PostCard from '@/components/PostCard';

const post = posts[0]; // Assume the first post is displayed

export default function PostScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <PostCard post={post} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures the content takes up the full height
    padding: 16,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContent: {
    fontSize: 18,
    marginBottom: 16,
  },
});