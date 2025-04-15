import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SentimentBar from '../components/SentimentBar';
import posts from '../data/posts.json';
import { useRouter } from 'expo-router';

import PostCard from '@/components/PostCard';

const post = posts[0]; // Assume the first post is displayed

export default function PostScreen() {

  return (
    <View style={styles.container}>
      <PostCard post={post} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff', height: 'auto' },
  postContent: { fontSize: 18, marginBottom: 16 },
  
});