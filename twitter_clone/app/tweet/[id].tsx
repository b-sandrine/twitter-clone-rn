import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import { FullTweetCard, Tweet } from '@/components/FullTweetCard'

import tweets from '../../data/posts.json'

function TweetDetailsScreen() {
    const { id } = useLocalSearchParams()

    const tweet = tweets.find((t: Tweet) => t.id === id)

    if (!tweet) {
        return <Text>Tweet not found</Text>
    }

  return (
    <View>
      <FullTweetCard tweet={tweet} />
    </View>
  )
}

export default TweetDetailsScreen
