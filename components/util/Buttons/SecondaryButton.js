import { StyleSheet, Text, Animated, Pressable, Dimensions, Easing } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../Constants/Color'
import { useEffect } from 'react';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const SecondaryButton = ({ children, onPress, styless, textStyle }) => {

    let newValue = new Animated.Value(0);

    const animate = easing => {
        newValue.setValue(0);
        Animated.timing(newValue, {
            toValue: 1,
            duration: 500,
            easing,
            useNativeDriver: false,
        }).start();
    };

    const scale = newValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0.9, 1],
        extrapolate: 'clamp',
    });

    return (
        <Animated.View style={{ transform: [{ scale }], flex: 1, padding: 4, }}>
            <Pressable onPress={onPress} style={({ pressed }) => [styles.buttonContainer, styless, pressed && styles.pressed]}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </Animated.View>
    )
}


export default SecondaryButton

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        maxHeight: 64,
        height:48,
        minHeight: 48,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.deepBlue40,
        elevation: 2,
        shadowOpacity: 0.5,
        backgroundColor: "white",
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    pressed: {
        opacity: 0.5
    },
    text: {
        textAlign: "center",
        fontFamily: 'Bold',
        color: Colors.deepBlue100,
        fontSize: 16,

    },

})