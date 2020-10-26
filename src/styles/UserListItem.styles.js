import { StyleSheet } from 'react-native';
import { width, height } from "./screenSize";

const userListItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 0.02 * height
  },

  nameBlock: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  firstLetters: {
    marginHorizontal: 0.03 * width,
    backgroundColor: "#6FCF97",
    padding: 0.01 * height,
    borderRadius: 0.02 * height,
    borderColor: "#6FCF97",
    overflow: "hidden",
    fontSize: 0.015 * height
  },

  name: {
    fontSize: 0.02 * height
  },

  email: {
    color: "#382A2C",
    opacity: 0.54,
    fontSize: 0.015 * height
  },

  postView: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-around",
    marginRight: 0.03 * width
  },

  postText: {
    fontSize: 0.02 * height,
    marginRight: 0.03 * width
  },

  icon: {
    color: "blue",
    fontSize: 0.03 * height
  }
});

export { userListItemStyles };
