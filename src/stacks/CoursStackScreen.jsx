import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CoursScreen from '../screens/CoursScreen';
import  ListeCours  from '../screens/cours/listeCours';
import  DetailCours  from '../screens/cours/DetailCours';
import { FilterModal } from '../components';

const CoursStack = createNativeStackNavigator();

function CoursStackScreen() {
  return (
    <CoursStack.Navigator
    screenOptions={{
        headerShown: false,
      }}
    >
      <CoursStack.Screen name="Cours" component={CoursScreen} />
      <CoursStack.Screen name="listeCours" component={ListeCours} />
      <CoursStack.Screen name="FilterModal" component={FilterModal} />
      <CoursStack.Screen name="DetailCours" component={DetailCours} />
    </CoursStack.Navigator>
  );
}

export default CoursStackScreen