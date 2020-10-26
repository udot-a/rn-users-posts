import React from "react";
import { AppText, AppTextBold } from "../ui";
import {
  View, TouchableOpacity
} from "react-native";
import { userListItemStyles as styles } from "../styles";
import { getFirstLetter } from "../helpers";
import { height } from "../styles/screenSize";
import { Ionicons } from "@expo/vector-icons";

const UserListItem = props => {
  const { name, email, posts } = props.user;
  const { navigation } = props.navigation;

  const handleIcon = () => navigation.navigate("Details", { user: props.user });

  return (
    <View style={styles.container}>
      <View style={styles.nameBlock}>
        <AppTextBold style={styles.firstLetters}>
          {getFirstLetter(name)}
        </AppTextBold>

        <View>
          <AppText style={styles.name}>
            {name}
          </AppText>

          <AppText style={styles.email}>
            {email}
          </AppText>
        </View>
      </View>

      <View style={styles.postView}>
        <AppText style={styles.postText}>
          {String(posts)} posts
        </AppText>

        <TouchableOpacity onPress={handleIcon}>
          <Ionicons
            style={styles.searchIcon}
            name="ios-arrow-forward"
            size={0.03 * height}
            color="blue"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { UserListItem };
