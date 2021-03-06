import { View, Text, Image } from "react-native";
import React from "react";
import { TweetType } from "../../../types";

export type MainContainerProps = {
  tweet: TweetType;
};
const MainContainer = ({ tweet }: MainContainerProps) => {
  return (
    <View>
      <View>
        <Text>{tweet.user.name}</Text>
        <Text>{tweet.user.username}</Text>
        <Text>{tweet.createdAt}</Text>
      </View>
      <View>
        <Text>{tweet.content}</Text>
        {!!tweet.image && <Image source={{ uri: tweet.image }} />}
      </View>
    </View>
  );
};

export default MainContainer;
