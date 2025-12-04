import { Platform } from 'react-native';
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const PLATFORM_COLORS = {
    ios: {
        primary: '#007AFF',
        background: '#f2f2f7',
        text: '#000000',
    },
    android: {
        primary: '#2196F3',
        background: '#f5f5f5',
        text: '#212121',
    },
};
export const getCurrentPlatformColors = () => {
    return PLATFORM_COLORS[Platform.OS] || PLATFORM_COLORS.android;
};

export const DARK_COLORS = {
  background: '#000000',
  card: '#1c1c1e',
  text: '#ffffff',
  primary: '#0A84FF',
};
