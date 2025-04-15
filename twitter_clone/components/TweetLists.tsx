import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import tweets from '../data/posts.json';
import { TweetCard } from './TweetCard';

export default function TweetList({ onTweetPress }: { onTweetPress: (id: string) => void }) {
  return (
    <FlatList
      data={tweets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            onTweetPress(item.id); // Navigate to the FullTweetCard page
          }}
        >
          <TweetCard tweet={item} />
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
});