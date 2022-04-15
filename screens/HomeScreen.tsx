import React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import ProfilePicture from "../components/ProfilePicture";
import { Text, View } from "../components/Themed";
import Tweet from "../components/Tweet";
import { RootTabScreenProps } from "../types";
import tweet from "../data/tweets";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Tweet tweet={tweet[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
