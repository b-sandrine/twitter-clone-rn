import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Avatar from './Avatar';
import SentimentBar from './SentimentBar';
import { useRouter } from 'expo-router';

export default function PostCard({ post }: { post: any }) {

    const router = useRouter();
    return (
        <View style={styles.card}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* User Info */}
                <View style={styles.userContainer}>
                    <Avatar uri={post.user.avatar} />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>{post.user.name}</Text>
                    </View>
                </View>

                {/* Post Media */}
                {post.media && (
                    <Image source={{ uri: post.media }} style={styles.postImage} />
                )}

                {/* Post Content */}
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{post.title}</Text>
                    
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
                    <Text style={styles.content}><Text style={styles.userName}>{post.user.name}</Text> {post.content}</Text>

                    <Text style={styles.timestamp}>{post.timestamp} hours ago</Text>
                </View>

                {/* Sentiment Bar */}
                <Text style={styles.sentimentTitle}>Community Consensus Score Bar</Text>
                {post.sentiment && <SentimentBar sentiment={post.sentiment} />}

                {/*Comment section */}
                <TouchableOpacity
                    onPress={() => router.push('/comments')}
                >
                    <Text style={styles.commentsCount}>View all {post.commentsCount} comments</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    scrollContainer: {
        padding: 10,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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
        marginBottom: 10,
    },
    contentContainer: {
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    content: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },
    timestamp: {
        marginTop: 8,
        color: 'gray',
        fontStyle: 'italic',
    },
    sentimentTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 8,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    actionButton: {
        alignItems: 'center',
    },
    commentsCount: { fontSize: 16, marginVertical: 8 },
    buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});