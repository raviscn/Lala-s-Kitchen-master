import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../../../Constants/Color'


var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const InActiveButton = ({ children, onPress, styless }) => {
    return (
        <View style={{ flex: 1, padding: 8, }}>
            <Pressable onPress={onPress} style={({ pressed }) => [styles.buttonContainer, styless, pressed && styles.pressed]}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default InActiveButton

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.grey64,
        flex: 1,
        maxHeight:64,
        minHeight: 48,
        maxHeight: 64,
        borderRadius: 16,
        elevation: 2,
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        justifyContent: "center",
    },
    pressed: {
        opacity: 0.5,
    },
    text: {
        textAlign: "center",
        fontFamily: 'ExtraBold',
        fontSize: 16,
        color: Colors.deepBlue100,
    }
})