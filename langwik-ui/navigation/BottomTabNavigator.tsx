/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabMyCollectionScreen from '../screens/TabMyCollectionScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
    BottomTabParamList, TabFriendsParamList,
    TabMyCollectionParamList,
    TabProfileParamList,
    TabQuizParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="My cards"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
        <BottomTab.Screen
            name="My cards"
            component={TabMyCollectionNavigator}
            options={{
              tabBarIcon: ({ color }) => <TabBarIcon name="ios-list" color={color} />,
            }}
        />
        <BottomTab.Screen
            name="Quiz"
            component={TabQuizNavigator}
            options={{
              tabBarIcon: ({ color }) => <TabBarIcon name="ios-repeat" color={color} />,
            }}
        />
        <BottomTab.Screen
            name="Friends"
            component={TabFriendsNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="flask-outline" color={color} />,
            }}
        />
        <BottomTab.Screen
            name="Profile"
            component={TabProfileNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
            }}
        />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabMyCollectionStack = createStackNavigator<TabMyCollectionParamList>();

function TabMyCollectionNavigator() {
  return (
    <TabMyCollectionStack.Navigator>
      <TabMyCollectionStack.Screen
        name="My collection"
        component={TabMyCollectionScreen}
        options={{ headerTitle: 'My collection' }}
      />
    </TabMyCollectionStack.Navigator>
  );
}

const TabQuizStack = createStackNavigator<TabQuizParamList>();

function TabQuizNavigator() {
  return (
    <TabQuizStack.Navigator>
      <TabQuizStack.Screen
        name="Quiz"
        component={TabTwoScreen}
        options={{ headerTitle: 'Quiz' }}
      />
    </TabQuizStack.Navigator>
  );
}


const TabFriendsStack = createStackNavigator<TabFriendsParamList>();

function TabFriendsNavigator() {
  return (
    <TabFriendsStack.Navigator>
      <TabFriendsStack.Screen
        name="Friends"
        component={TabTwoScreen}
        options={{ headerTitle: 'Friends' }}
      />
    </TabFriendsStack.Navigator>
  );
}


const TabProfileStack = createStackNavigator<TabProfileParamList>();

function TabProfileNavigator() {
  return (
    <TabProfileStack.Navigator>
      <TabProfileStack.Screen
        name="Profile"
        component={TabTwoScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </TabProfileStack.Navigator>
  );
}
