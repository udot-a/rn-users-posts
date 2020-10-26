import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = props => (
  <Text style={{...styles.default, ...props.style}}>{props.children}</Text>
  )

const styles = StyleSheet.create({
  default: {
    fontFamily: "RobotoRegular"
  }
});

export { AppText };
