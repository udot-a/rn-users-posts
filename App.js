import React from 'react';
import 'react-native-gesture-handler';
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { MainLayout } from "./src/components/MainLayout";

export default function App() {
  return (
    <Provider store={store}>
      <MainLayout/>
    </Provider>
  );
}

