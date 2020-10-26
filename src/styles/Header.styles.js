import { StyleSheet } from 'react-native';
import { width, height } from "./screenSize";

const headerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },

  headerTitle: {
    paddingBottom: 0.005 * height,
    fontSize: 0.025 * height
  },

  searchView: {
    flex: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: 0.3,
    width: 0.8 * width,
    // height: 0.01 * height,

  },

  searchSection: {
    alignSelf: "center",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    overflow: "hidden"
  },

  searchIcon: {
    padding: 10
  },

  input: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 0,
    backgroundColor: 'lightgrey',
    color: 'grey',
    fontSize: 0.025 * height
  }
});

export { headerStyles };
