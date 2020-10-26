import { StyleSheet } from 'react-native';
import { width, height } from "./screenSize";

const postListItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: 0.1 * width,
    marginVertical: 0.01 * height,
    padding: 0.05 * width,
    borderColor: "black",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

  },
  title: {
    fontSize: 0.05 * width,
    marginBottom: 0.005 * height
  },

  body: {
    color: "#382A2C",
    opacity: 0.54
  }

});

export { postListItemStyles };
