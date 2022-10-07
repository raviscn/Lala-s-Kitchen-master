import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../../../Constants/Color'

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const PrimaryButton = ({ children, onPress, styless }) => {
    return (
        <View style={{flex: 1, padding: 4,}}>
            <Pressable onPress={onPress} style={({ pressed }) => [styles.buttonContainer, styless, pressed && styles.pressed]}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        height:48,
        minHeight: 48,
        maxHeight: 64,
        // padding: 16,
        backgroundColor: Colors.yellow100,
        borderRadius: 16,
        elevation: 2,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        justifyContent: "center",
        // marginVertical:8
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