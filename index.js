/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainComponent from './components/MainComponent';
import ThirdComponent from './components/ThirdComponent';
import DaitelComponent from './components/DaitelComponent';
import { name as appName } from './app.json';
import { MainScreen, DaitelScreen, ThirdScreen } from './sreenNames'

const App = StackNavigator({      
  MainScreen: {
    screen : MainComponent,
    navigationOptions: {
      headerTitle: 'Main',
    }
  },
  DaitelScreen: {
    screen : DaitelComponent,
    navigationOptions: {
      headerTitle: 'Daitel',
    }
  },
  ThirdScreen: {
    screen : ThirdComponent,
    navigationOptions: {
      headerTitle: 'Third',
    }
  }
 });
AppRegistry.registerComponent(appName, () => App);