/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './src/stacks/HomeStackScreen';
import CoursStackScreen from './src/stacks/CoursStackScreen';
import SettingsStackScreen from './src/stacks/SettingsStackScreen';


import Ionicons from 'react-native-vector-icons/Ionicons';

//import {  createStore, applyMiddleware } from "redux";
//import { Provider } from "react-native";
//import thunk from "redux-thunk";
// import themeReducer from './strores/themeReducer';

 const Tab = createBottomTabNavigator();

// const store = createStore(
//   themeReducer,
//   applyMiddleware(thunk)
// )

export default function App() {
  return (
   // <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={{headerShown: false}}
  //  screenOptions={({ route }) => ({
  //   headerShown: false,
  //   tabBarIcon: ({ focused, color, size }) => {
  //     let iconName;

  //     if (route.name === 'HomeStack') {
  //       iconName = focused
  //         ? 'home'
  //         : 'home-outline';
  //     } else if (route.name === 'CoursStack') {
  //       iconName = focused ? 'paper' : 'paper-outline';
  //     }else if (route.name === 'SettingsStack') {
  //       iconName = focused ? 'cog' : 'cog-outline';
  //     }

  //     // You can return any component that you like here!
  //     return <Ionicons name={iconName} size={size} color={color} />;
  //       //icons
     

        

  //   },
  //   tabBarActiveTintColor: 'tomato',
  //   tabBarInactiveTintColor: 'gray',
  // })}
      >
        <Tab.Screen  name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="CoursStack" component={CoursStackScreen} />
        <Tab.Screen name="SettingsStack" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
   // </Provider>
  );
}
