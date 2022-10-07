import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import { SvgXml } from "react-native-svg";
import React from 'react'
import { categoryArrow } from '../../../Constants/SVG';
import { Colors } from '../../../Constants/Color';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;


const MealCategory = ({ category, onPress, icon, color }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.innerContainer}>
                <View style={styles.categoryContainer}>
                    <SvgXml xml={icon} style={styles.icon} />
                    <Text style={{ color: color, fontFamily: 'ExtraBold', fontSize: 16 }}>{category}</Text>
                </View>
                <SvgXml xml={categoryArrow} />
            </View>
        </Pressable>
    )
}

export default MealCategory

const styles = StyleSheet.create({
    container: {
        // marginTop: screenHeight / 40,
        marginVertical: screenHeight / 100,
    },
    innerContainer: {
        padding: screenHeight / 45,
        shadowColor: Colors.grey100,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 1,
        borderRadius: 20,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    categoryContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        marginHorizontal: 10
    }
})