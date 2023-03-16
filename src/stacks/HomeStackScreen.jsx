import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import  ListeCours  from '../screens/cours/listeCours';
import  DetailCours  from '../screens/cours/DetailCours';



const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
    
  return (
    <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="listeCours" component={ListeCours} />
        <HomeStack.Screen name="DetailCours" component={DetailCours} />


  </HomeStack.Navigator>
  )
}

export default HomeStackScreen



