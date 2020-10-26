import React from "react";
import {AppText, AppTextBold} from "../ui";
import {
  View
} from "react-native";
import {postListItemStyles as styles} from "../styles";

const PostListItem = props => {
  const {title, body} = props.post;


  return (
    <View style={styles.container}>
        <AppTextBold style={styles.title}>
          {title}
        </AppTextBold>

        <AppText style={styles.body}>
          {body}
        </AppText>
    </View>
  );
}

export {PostListItem};
