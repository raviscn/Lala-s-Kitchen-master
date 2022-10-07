import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../Constants/Color'

const HorizontalContainer = ({ upperText, LowerText, align, styless, style }) => {
    return (
        <View style={{ marginVertical: 8, alignItems: align }}>
            <Text style={[styles.text, style]}>{upperText}</Text>
            <Text style={[styles.text, styless,{fontSize:16}]}>{LowerText}</Text>
        </View>
    )
}

export default HorizontalContainer

const styles = StyleSheet.create({
    text: {
        fontFamily: "Regular",
        color: Colors.deepBlue100,
        fontSize: 12,
        // marginHorizontal: 8
    },
    PriceText: {
        fontFamily: "Bold",
        color: Colors.deepBlue100,
        fontSize: 12,
        marginHorizontal: 8
    },
})