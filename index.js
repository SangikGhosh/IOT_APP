/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import Preloader from './src/components/Preloader';


AppRegistry.registerComponent(appName, () => App);
