import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";

import startScreen from "./start/StartScreen";
import LoginScreen from "./login/LoginScreen";
import Home from "./home/Home";
import MealScreen from "./meal/MealScreen";
import ClassScreen from "./class/ClassScreen";
import NotificationScreen from "./notification/NotificationScreen";
import AccountScreen from "./account/AccountScreen";
import TimeTableScreen from "./timetable/TimeTable";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
export default RootComponent = function () {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Start" component={StartScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Account" component={AccountScreen}/>
                <Stack.Screen name="Notification" component={NotificationScreen}/>
                <Stack.Screen name="Class" component={ClassScreen}/>
                <Stack.Screen name="Meal" component={MealScreen}/>
                <Stack.Screen name="TimeTable" component={TimeTableScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        // <StartScreen/>
        // <LoginScreen/>
        // <Home/>
        
    )
}
