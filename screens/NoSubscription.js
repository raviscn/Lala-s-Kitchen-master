import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBarWithoutScroll from '../components/util/HeaderBarWithoutScroll'
import { Colors } from '../Constants/Color'
import { SvgXml } from 'react-native-svg'
import { Exclamation, NoSub } from '../Constants/SVG'
import PrimaryButton from '../components/util/Buttons/PrimaryButton'
const screenHeight = Dimensions.get('window').height
const NoSubscription = ({ navigation }) => {
    const newSubcsriptionHandler = () => {
        navigation.navigate('numberVerification')
    }
    return (
        <View style={{ flex: 1 }}>
            <HeaderBarWithoutScroll text={""} />
            <View style={styles.outerContainer}>
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <SvgXml xml={NoSub} height={screenHeight/4} width={screenHeight/5} />
                        <View style={styles.textContainer}>
                            <SvgXml xml={Exclamation} />
                            <Text style={styles.text}>You don't have any active subscription</Text>
                        </View>
                    </View>
                    <View style={{flex:0.8,}}>
                    <PrimaryButton onPress={newSubcsriptionHandler}>Add New Subscription</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NoSubscription

const styles = StyleSheet.create({
    outerContainer: {
        padding: 16,
        flex:1,
    },
    container: {
        height: screenHeight / 2,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.grey84,
        borderStyle: 'dashed',
    },
    innerContainer: {
        flex:2.7,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
    },
    text: {
        color: Colors.grey44,
        fontFamily: "Regular",
        marginHorizontal: 8,
        fontSize: 16
    }

})