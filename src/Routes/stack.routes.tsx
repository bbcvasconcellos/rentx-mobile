import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails'; 
import { Schedule } from '../screens/Schedule'; 
import { ScheduleDetails } from '../screens/ScheduleDetails'; 
import { SchedulingCompleted } from '../screens/SchedulingCompleted'; 

const { Screen, Navigator } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen 
        name='Home'
        component={Home}
      />
      <Screen 
        name='CarDetails'
        component={CarDetails}
      />
      <Screen 
        name='Schedule'
        component={Schedule}
      />
      <Screen 
        name='ScheduleDetails'
        component={ScheduleDetails}
      />
      <Screen 
        name='SchedulingCompleted'
        component={SchedulingCompleted}
      />
    </Navigator>
  )
}