import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
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

interface Tweet {
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

export default function TweetCard({ tweet }: TweetCardProps) {
    return (
        <View style={styles.card}>
            <Avatar uri={tweet.user.avatar} />
            <View style={styles.content}>
                <Text style={styles.name}>{tweet.user.name} <Text style={styles.handle}>{tweet.user.handle}</Text> <Text style={styles.handle}> . {tweet.timestamp}</Text></Text>
                <Text>{tweet.content}</Text>
                
                {/* media section  */}
                
                {Array.isArray(tweet.media) && tweet.media.length > 0 && (
                    <FlatList
                        data={tweet.media}
                        renderItem={({ item, index }) => {
                            console.log(`Image url: ${item} and its index: ${index}`);
                            
                            return <Image source={{ uri: item }} 
                            style={styles.media}
                            onError={(error) => console.log('Image Load Error:', error.nativeEvent.error)} />
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 8 }}
                        contentContainerStyle={{ paddingBottom: 8 }}
                        />
                )}

                {/* Buttons  */}
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

                {/* comment section  */}
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
                                </View>
                            </View>
                        ))}
                    </View>
                )}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { flexDirection: 'row', padding: 12 },
    content: { marginLeft: 10, flex: 1 },
    name: { fontWeight: 'bold' },
    handle: { color: 'gray' },
    media: { marginTop: 8, width: '50%', height: 200, borderRadius: 10 },
    contentText: { marginTop: 4 },
    buttons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 },
    button: { padding: 8 },
    comments: { marginTop: 12 },
    comment: { flexDirection: 'row', marginTop: 8 },
    commentContent: { marginLeft: 8, flex: 1 },
    commentText: { fontSize: 14 },
    commentName: { fontWeight: 'bold' },
    commentHandle: { color: 'gray' },
    commentTimestamp: { color: 'gray' },
});
