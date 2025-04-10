import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Avatar from './Avatar';


export default function CommentCard({ comment, isAnalyticView }: { comment: any; isAnalyticView: boolean }) {
  return (
    <View style={styles.card}>
      <View style={styles.userContainer}>
        <Avatar uri={comment.user.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>
            {comment.user.name} {' '}
            {comment.user.verified && (
             <Image
             source={require('../assets/images/verified.png')} // Path to the verified badge image
             style={styles.verifiedBadge}
           />
          )}
          {comment.sentiment === "positive" && '🟩' || comment.sentiment === "neutral" && '🟨' || comment.sentiment === "negative" && '🟥'}
          </Text>
        </View>
      </View>
      
      <Text>{comment.text}</Text>
      {isAnalyticView && <Text>Sentiment: {comment.sentiment}</Text>}
      {!isAnalyticView && <Text>Likes: {comment.likes}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
},
userInfo: {
    marginLeft: 10,
},
verifiedBadge: {
  width: 20,
  height: 20,
  marginLeft: 4,
  marginRight: 2
},
userName: {
    fontWeight: 'bold',
    fontSize: 16,
},
});