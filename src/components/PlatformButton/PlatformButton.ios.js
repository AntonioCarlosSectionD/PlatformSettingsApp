import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const IOSButton = ({ title, onPress, variant = 'primary', disabled = false }) => {
    return (
        <TouchableOpacity
            style={[styles.button, styles[variant], disabled && styles.disabled]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}>
            <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    primary: {
        backgroundColor: '#007AFF',
    },
    secondary: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    disabled: {
        backgroundColor: '#f2f2f7',
    },
    text: {
        fontSize: 17,
        fontWeight: '600',
        textAlign: 'center',
    },
    primaryText: {
        color: '#ffffff',
    },
    secondaryText: {
        color: '#007AFF',
    },
});
export default IOSButton;