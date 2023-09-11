/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import startScreen from '../AwesomeProject/src/container/start/startScreen';
import LoginScreen from './src/container/login/LoginScreen';
import Home from './src/container/home/Home';
import AccountScreen from './src/container/account/AccountScreen';
import MealScreen from './src/container/meal/MealScreen';



AppRegistry.registerComponent(appName,() => MealScreen);