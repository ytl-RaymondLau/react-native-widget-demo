import type { ConfigContext, ExpoConfig } from "expo/config";

const widgets = [
  {
    name: "Widgets",
    label: "Test Widget",
    description: "widget",
    minHeight: "100dp",
    minWidth: "300dp",
    previewImage: "./assets/adaptive-icon.png"
  },
];

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: "test-widget",
    slug: "test-widget",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.raymondlau.testwidget",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [["react-native-android-widget", { widgets }]],
  };
};
