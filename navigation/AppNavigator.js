import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import NewExpenseScreen from '../screens/NewExpenseScreen';

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));

export default createAppContainer(createStackNavigator(
  {
    Home: HomeScreen,
    NewExpense: NewExpenseScreen,
  },
  {
    initialRouteName: 'Home'
  }
));