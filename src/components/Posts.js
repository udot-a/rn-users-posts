import React from "react";
import { FlatList, View } from "react-native";
import { postsStyles as styles } from "../styles";
import { PostListItem } from "./PostListItem";
import { useSelector } from "react-redux";


const Posts = ({ route }) => {
  const { filter } = useSelector(state => state);
  const { posts } = useSelector(state => state);
  const { user: { id }} = route.params;

  const filterPosts = posts.filter(p => p.userId === id)
    .filter(p =>  p.title.toLowerCase().includes(filter.toLowerCase()) || p.body.toLowerCase().includes(filter.toLowerCase()));

  return (
    <View style={styles.container}>
      <FlatList
        data={filterPosts}
        renderItem={({item}) => (<PostListItem  post={item}/>)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export { Posts };
