import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import { TweetCard, Tweet } from '../../components/TweetCard'

import tweets from '../../data/posts.json'

function TweetDetailsScreen() {
    const { id } = useLocalSearchParams()

    const tweet = tweets.find((t: Tweet) => t.id === id)

    console.log("Here is the tweet", tweet)
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
