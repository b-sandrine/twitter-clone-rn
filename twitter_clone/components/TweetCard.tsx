import { View, Text, Image, StyleSheet } from 'react-native';
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

                {Array.isArray(tweet.media) && tweet.media.length > 0 && (
                    <Image
                        source={{ uri: tweet.media[0] }}
                        style={styles.media}
                    />
                )}

                {/* You can add like/comment buttons here later */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { flexDirection: 'row', padding: 12 },
    content: { marginLeft: 10, flex: 1 },
    name: { fontWeight: 'bold' },
    handle: { color: 'gray' },
    media: { marginTop: 8, width: '100%', height: 200, borderRadius: 10 },
});
