import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json'; // Certifique-se de que 'appName' está correto

AppRegistry.registerComponent(appName, () => App);
