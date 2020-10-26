import React from "react";
import { View, FlatList } from "react-native";
import { AppTextBold } from "../ui";
import { usersStyles as styles } from "../styles";
import { useSelector } from "react-redux";
import { UserListItem } from "./UserListItem";


const Users = ({ navigation }) => {
  const { users, loading, filter } = useSelector(state => state);

  const filterUsers = users
    .filter(u => u.name.toLowerCase().includes(filter.toLowerCase()) || u.email.toLowerCase().includes(filter.toLowerCase()));

  if (loading) {
    return <AppTextBold style={styles.text}>{"Users is loading..."}</AppTextBold>
  }

  if (users.length === 0) {
    return <AppTextBold style={styles.text}>{"List of users is empty."}</AppTextBold>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filterUsers}
        renderItem={({item}) => (<UserListItem  user={item} navigation={{navigation}}/>)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export { Users };
