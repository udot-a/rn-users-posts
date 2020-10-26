import React, { useEffect } from 'react';
import { useFonts } from "expo-font";
import { Header } from "./Header";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Users } from "./Users";
import { Posts } from "./Posts";
import { height } from "../styles/screenSize";
import { useDispatch } from "react-redux";
import { changeFilter, getData } from "../redux/actions";

const Stack = createStackNavigator();

const MainLayout= () => {
  const [loaded, error] = useFonts({
    RobotoRegular: require("../../assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("../../assets/fonts/Roboto-Bold.ttf")
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);


  if (!loaded) {
    return null;
  }

  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={(props) => ({
            headerTitle: () => <Header {...props} />,
            headerBackTitleVisible: false,
            headerStyle: {
              height: 0.15 * height
            }})
          }
        >
          <Stack.Screen
            name="Home"
            component={Users}
          />

          <Stack.Screen
            name="Details"
            component={Posts}
            listeners={() => ({
              beforeRemove: e => {
                dispatch(changeFilter(""));
              }
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export {
  MainLayout
};

