import { FlatList } from 'react-native';
import tweets from '../data/posts.json';
import TweetCard from './TweetCard';

export default function TweetList() {
  return (
    <FlatList
      data={tweets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TweetCard tweet={item} />}
    />
  );
}
