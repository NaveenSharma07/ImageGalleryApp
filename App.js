import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from './src/HomeScreen';
import LeftNavBar from './src/LeftNavBar';

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    contentComponent: LeftNavBar,
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
