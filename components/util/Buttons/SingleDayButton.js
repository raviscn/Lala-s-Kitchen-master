import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../Constants/Color'

const SingleDayButton = ({ children, styless, onPress }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.buttonContainer, styless, pressed && styles.pressed]}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
}

export default SingleDayButton

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        padding: 8,
        aspectRatio: 1 / 1,
        marginHorizontal: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.yellow100,
        elevation: 2,
        shadowOpacity: 0.5,
        backgroundColor: "white",
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 1,
    },
    pressed: {
    },
    text: {
        fontSize: 16,
        fontFamily: "Bold"
    },
})