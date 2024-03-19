import React from 'react';
import type { WidgetTaskHandlerProps } from 'react-native-android-widget';
import { AndroidWidget } from './views/AndroidWidget';

const nameToWidget = {
    Widgets: AndroidWidget,
};

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
    const { widgetInfo } = props;
    const Widget = nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget] as any;

    switch (props.widgetAction) {
        case 'WIDGET_RESIZED':
            // Do nothing
            break;
        case 'WIDGET_ADDED':
            props.renderWidget(<Widget {...widgetInfo} />);
            break;

        case 'WIDGET_UPDATE':
            props.renderWidget(<Widget {...widgetInfo} />);
            break;

        case 'WIDGET_CLICK':
            // Do nothing
            break;
        case 'WIDGET_DELETED':
            // Do nothing
            break;
        default:
            break;
    }
}
