import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";

import startScreen from "./start/StartScreen";
import LoginScreen from "./login/LoginScreen";
import Home from "./home/Home";
import MealScreen from "./meal/MealScreen";
import NotificationScreen from "./notification/NotificationScreen";
import AccountScreen from "./account/AccountScreen";
import TimeTableScreen from "./timetable/TimeTableScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClassScreen from "./class/ClassScreen";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Provider } from "react-redux";
import { store } from "../redux/store";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../theme/color";
import DetailInfoScreen from "./class/DetailInfoScreen";
import TableClass from "../component/TableClass";
import Calendar from "../component/Calendar";
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBarOptions={{
            labelStyle: { fontSize: 15 },
            style: {
                backgroundColor: 'red',
            },
            activeTintColor: colors.primary.colorbutton,
            inactiveTintColor: 'black',
        }}>

        <Tab.Screen name="Home" component={Home}

            options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Icon name="home" color={'White'} size={25} />
                ),
            }} />
        <Tab.Screen
            name="TimeTable" component={TimeTableScreen}
            options={{
                tabBarLabel: 'TimeTable',
                tabBarIcon: () => (
                    <Icon name="calendar-alt" color={'White'} size={25} />
                ),
            }} />
        <Tab.Screen name="Account" component={AccountScreen}
            options={{
                tabBarLabel: 'Account',
                tabBarIcon: () => (
                    <Icon name="user" color={'White'} size={25} />
                ),
            }}
        />
    </Tab.Navigator>
);

const RootComponent = () => (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Start" component={StartScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={TabNavigator} />
                <Stack.Screen name="Account" component={AccountScreen} />
                <Stack.Screen name="Notification" component={NotificationScreen} />
                <Stack.Screen name="Class" component={ClassScreen} />
                <Stack.Screen name="Meal" component={MealScreen} />
                <Stack.Screen name="TimeTable" component={TimeTableScreen} />
                <Stack.Screen name="DetailStudent" component={DetailInfoScreen}/>
                <Stack.Screen name="Calendar" component={Calendar}/>
            </Stack.Navigator>
        </NavigationContainer>

        
    </Provider>
);

export default RootComponent;
