import { useSearchParams } from 'expo-router/build/hooks'
import React from 'react'
import { View, Text } from 'react-native'
import { TweetCard, Tweet } from '../../components/TweetCard'

import tweets from '../../data/posts.json'

function TweetDetailsScreen() {
    const id = useSearchParams().toString()

    const tweet = tweets.find((t: Tweet) => t.id === id)
    if (!tweet) {
        return <Text>Tweet not found</Text>
    }

  return (
    <View>
      <TweetCard tweet={tweet} />
    </View>
  )
}

export default TweetDetailsScreen
