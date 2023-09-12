/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import startScreen from './src/container/start/StartScreen';
import LoginScreen from './src/container/login/LoginScreen';
import Home from './src/container/home/Home';
import AccountScreen from './src/container/account/AccountScreen';
import MealScreen from './src/container/meal/MealScreen';
import NotificationScreen from './src/container/notification/NotificationScreen';
import ClassScreen from './src/container/class/ClassScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';



  AppRegistry.registerComponent(appName,() => App);