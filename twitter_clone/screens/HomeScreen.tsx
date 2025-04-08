import { SafeAreaView, Text, StyleSheet } from 'react-native';
import TweetList from '../components/TweetLists';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Twitter Clone</Text>
      <TweetList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', padding: 16 }
});
