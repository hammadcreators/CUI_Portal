import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import Course from '../Components/Course';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CourseDashboardScreen from './CourseDashboardScreen';
import GradeScreen from './GradeScreen';
import ClassProceedingScreen from './ClassProceedingScreen';
import AssignmentScreen from './AssignmentScreen';

const Stack = createNativeStackNavigator();

function DashboardNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashboardMain" component={CourseDashboardScreen} />
      <Stack.Screen name="Assignment" component={AssignmentScreen} />
      <Stack.Screen name="Grades" component={GradeScreen} />
      <Stack.Screen name="Schedule" component={ClassProceedingScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default DashboardNavigator;
