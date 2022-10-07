import { Dimensions, ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Colors } from '../../../Constants/Color';
import { Meal } from '../../../DUMMY_DATA';
var screenHeight = Dimensions.get('window').height;

const TodaysMenucard = ({ meal, itemName, curry, image }) => {
    return (

        <View style={styles.imageContainer}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}>
                <View style={{ height: "50%" }} />
                <LinearGradient
                    colors={[

                        'transparent', '#393838', 'transparent'
                    ]}
                    // start={{ y: 0.5 }}
                    // end={{ y: 1 }}
                    style={{ flex: 1, justifyContent: "center", }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.mealText}>{meal}</Text>
                        <Text style={styles.text}>{itemName}</Text>
                        <Text style={styles.text}>{curry}</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>

    )
}

export default TodaysMenucard

const styles = StyleSheet.create({
    imageContainer: {
        height: 320,
        marginVertical: 8
    },
    image: {
        height: '100%',
        width: '100%',
        flex: 1,
        borderRadius: 30,
        overflow: "hidden"
    },
    textContainer: {
        marginHorizontal: 24
    },
    text: {
        color: 'white',
        fontFamily: "ExtraBold",
        fontSize: 24
    },
    mealText: {
        color: 'white',
        fontFamily: "Bold",
        fontSize: 16,
    }
})