import React, { useEffect } from "react";
import { TextInput, View } from "react-native";
import { headerStyles as styles } from "../styles";
import { Ionicons } from "@expo/vector-icons";
import { height } from "../styles/screenSize";
import { AppTextBold } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/actions";

const Header = ({ route }) => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state);
  const headerTitle = route && route.params ? `${route.params.user.name}'s post` : "Author";


  const handleChangeInput = text => dispatch(changeFilter(text));

  useEffect(() => {
    dispatch(changeFilter(""));
  }, [dispatch, route.name]);

  return (
    <View style={styles.container}>
      <AppTextBold style={styles.headerTitle}>
        {headerTitle}
      </AppTextBold>

      <View style={styles.searchView}>
        <View style={styles.searchSection}>
          <Ionicons
            style={styles.searchIcon}
            name="md-search"
            size={0.03 * height}
            color="grey"
          />

          <TextInput
            inlineImageLeft='search_icon'
            placeholder={"Search..."}
            style={styles.input}
            onChangeText={handleChangeInput}
            value={filter}
          />
        </View>
      </View>
    </View>
  );
}

export { Header };

