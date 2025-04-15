import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
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
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, styles.activeTab]}>For you</Text>
        <Text style={styles.headerText}>Following</Text>
      </View>
      <TweetList onTweetPress={handleTweetPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f8f9fa',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#657786',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  activeTab: {
    color: '#1DA1F2', // Twitter blue
    borderBottomWidth: 2,
    borderBottomColor: '#1DA1F2',
  },
});