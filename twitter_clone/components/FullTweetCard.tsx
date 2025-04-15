import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Avatar from './Avatar';

interface User {
    name: string;
    handle: string;
    avatar: string;
}

interface Comment {
    name: string;
    handle: string;
    avatar: string;
    text: string;
    timestamp: string;
}

export interface Tweet {
    id: string;
    user: User;
    content: string;
    media?: string[];
    timestamp?: string;
    likes?: number;
    comments?: Comment[];
}

type TweetCardProps = {
    tweet: Tweet;
};


export function FullTweetCard({ tweet }: TweetCardProps) {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.card}>
                <Avatar uri={tweet.user.avatar} />
                <View style={styles.content}>
                    <Text style={styles.name}>
                        {tweet.user.name} <Text style={styles.handle}>{tweet.user.handle}</Text>{' '}
                        <Text style={styles.handle}> · {tweet.timestamp}</Text>
                    </Text>
                    <Text>{tweet.content}</Text>

                    {/* Media Section */}
                    {Array.isArray(tweet.media) && tweet.media.length > 0 && (
                        <View style={styles.mediaContainer}>
                            {tweet.media.map((item, index) => (
                                <Image
                                    key={index}
                                    source={{ uri: item }}
                                    style={[
                                        (tweet.media ?? []).length === 1 ? styles.singleMedia : styles.twoMedia,
                                    ]}
                                    onError={(error) => console.log('Image Load Error:', error.nativeEvent.error)}
                                />
                            ))}
                        </View>
                    )}

                    {/* Buttons */}
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button}>
                            <Text>❤️ {tweet.likes || 0}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>💬 {tweet.comments?.length || 0}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>🔁</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Comment Section */}
                    {Array.isArray(tweet.comments) && tweet.comments.length > 0 && (
                        <View style={styles.comments}>
                            {tweet.comments.map((comment, index) => (
                                <View key={`${tweet.id}-comment-${index}`} style={styles.comment}>
                                    <Avatar uri={comment.avatar} />
                                    <View style={styles.commentContent}>
                                        <Text style={styles.commentText}>
                                            <Text style={styles.commentName}>{comment.name}</Text>{' '}
                                            <Text style={styles.commentHandle}>{comment.handle}</Text>{' '}
                                            <Text style={styles.commentTimestamp}>· {comment.timestamp}</Text>
                                        </Text>
                                        <Text>{comment.text}</Text>

                                        {/* Comment Actions */}
                                        <View style={styles.commentActions}>
                                            <TouchableOpacity style={styles.commentAction}>
                                                <Text>❤️</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.commentAction}>
                                                <Text>📊</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.commentAction}>
                                                <Text>🔁</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.commentAction}>
                                                <Text>💾</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1, // Ensures the content takes up the full height
        padding: 16,
        backgroundColor: '#fff',
        height: 932
    },
    card: {
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flex: 1,
    },
    content: { marginLeft: 10, flex: 1 },
    name: { fontWeight: 'bold' },
    handle: { color: 'gray' },
    mediaContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    singleMedia: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 8,
    },
    twoMedia: {
        width: '50%',
        height: 150,
        marginTop: 8,
    },
    contentText: { marginTop: 4 },
    buttons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 },
    button: { padding: 8 },
    comments: { marginTop: 12 },
    comment: {
        flexDirection: 'row',
        marginTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    commentContent: { marginLeft: 8, flex: 1 },
    commentText: { fontSize: 14 },
    commentName: { fontWeight: 'bold' },
    commentHandle: { color: 'gray' },
    commentTimestamp: { color: 'gray' },
    commentActions: {
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'space-between',
        width: '50%',
    },
    commentAction: {
        padding: 4,
    },
});

