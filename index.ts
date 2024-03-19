import { registerRootComponent } from "expo";
import { registerWidgetTaskHandler } from 'react-native-android-widget';
import { widgetTaskHandler } from './src/widget-android/widgetTaskHandler';

import App from "./App";

registerRootComponent(App);
registerWidgetTaskHandler(widgetTaskHandler);