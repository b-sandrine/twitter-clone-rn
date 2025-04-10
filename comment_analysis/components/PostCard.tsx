import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Avatar from './Avatar'

interface User {
    name: string;
    handle: string;
    avatar: string;
}

interface Sentiment {
    positive: number;
    negative: number;
    neutral: number;
}

export interface Post {
    id: string;
    user: User;
    title: string;
    content: string;
    media: string;
    commentCount?: number;
    sentiment?: Sentiment;
}

type PostCardProps = {
    post: Post;
};

export default function PostCard({ post }: PostCardProps) {
    return (
        <View style={styles.userContainer}>
            <Avatar uri={post.user.avatar} />
            <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text>{post.user.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    }
})
