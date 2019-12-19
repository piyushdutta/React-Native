/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {DeviceEventEmitter, NativeEventEmitter, NativeModules} from 'react-native';

const CleverTapReact = NativeModules.CleverTapReact;
const EventEmitter = NativeModules.CleverTapReactEventEmitter ? new NativeEventEmitter(NativeModules.CleverTapReactEventEmitter) : DeviceEventEmitter;


AppRegistry.registerComponent(appName, () => App);

// console.log('its is coming inside the block');
// CleverTap.profileSet({'Name': 'testUserA1', 'Identity': '123456', 'Email': 'test@test.com', 'custom1': 123,'DOB':'1576740168','DOB_1':new Date()},);
