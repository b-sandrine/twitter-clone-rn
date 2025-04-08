import { SafeAreaView, Text, StyleSheet } from 'react-native';
import TweetList from '../components/TweetLists';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const handleTweetPress = (tweetId: string) => {
    router.push({
      pathname: "/tweet/[id]",
      params: { id: tweetId },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Twitter Clone</Text>
      <TweetList onTweetPress={handleTweetPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', padding: 16 },
});