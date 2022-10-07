import { Animated, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Constants/Color'
import { SvgXml } from 'react-native-svg';
import { Backarrow } from '../../Constants/SVG';

const HeaderBar = ({ text, AnimatedValue }) => {

    const Header_Max_Height = 55;
    const Header_Min_Height = 40;

    const navigation = useNavigation();

    const animatedHeaderTextOpacity = AnimatedValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });
    const animatedHeaderHeight = AnimatedValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp'
    })
    const backHandler = () => {
        navigation.goBack(null)
    }
    return (
        <>
            <StatusBar backgroundColor={Colors.yellow100} barStyle="dark-content" />
            <SafeAreaView style={{  backgroundColor: Colors.yellow100 }}>
                <Animated.View style={[styles.header, {
                    height: animatedHeaderHeight,
                    backgroundColor: Colors.yellow100
                }]}>
                    <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center" }}>
                        <TouchableOpacity style={styles.backContainer} onPress={backHandler}>
                            <SvgXml xml={Backarrow} width={20} height={20} />
                        </TouchableOpacity>
                        <Animated.Text style={[styles.headerText, { opacity: animatedHeaderTextOpacity }]}>
                            {text}
                        </Animated.Text>
                    </View>
                </Animated.View>
            </SafeAreaView>
        </>
    )
}

export default HeaderBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.yellow100
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        fontFamily: 'ExtraBold',
        fontSize:16
    },
    backContainer: {
        backgroundColor: "rgba(248, 243, 223, 0.56)",
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        // width: 30,
        // height: 30,
        padding: 5,
        borderRadius: 20,


    },
})