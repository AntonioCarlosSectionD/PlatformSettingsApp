import { Platform } from 'react-native';
const PlatformButton = Platform.select({
    ios: () => require('./PlatformButton.ios').default,
    android: () => require('./PlatformButton.android').default,
})();
export default PlatformButton;