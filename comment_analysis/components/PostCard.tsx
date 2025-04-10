import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';
import SentimentBar from './SentimentBar';

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
        <View style={styles.card}>
            {/* User Info */}
            <View style={styles.userContainer}>
                <Avatar uri={post.user.avatar} />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{post.user.name}</Text>
                    <Text style={styles.userHandle}>{post.user.handle}</Text>
                </View>
            </View>

            {/* Post Media */}
            {post.media && (
                <Image source={{ uri: post.media }} style={styles.postImage} />
            )}

            {/* Post Content */}
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.content}>{post.content}</Text>
            </View>

            {/* Sentiment Bar */}
            {post.sentiment && <SentimentBar sentiment={post.sentiment} />}

            {/* Actions */}
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionButton}>
                    <Text>❤️ Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Text>💬 Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Text>🔁 Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    userInfo: {
        marginLeft: 10,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    userHandle: {
        color: 'gray',
        fontSize: 14,
    },
    postImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    contentContainer: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    content: {
        fontSize: 14,
        color: '#333',
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    actionButton: {
        alignItems: 'center',
    },
});