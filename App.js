import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import AppRoute from './src/navigations/navigator';
import { store } from './src/redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoute />
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}


