import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import posts from '../data/posts.json';
import PostCard from '@/components/PostCard';

export default function PostScreen() {
  return (
    <FlatList
      data={posts} // Pass the array of posts
      keyExtractor={(item) => item.id} // Use a unique key for each post
      renderItem={({ item }) => (
        <View style={styles.postContainer}>
          <PostCard post={item} />
        </View>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  postContainer: {
    marginBottom: 16, // Add spacing between posts
  },
});