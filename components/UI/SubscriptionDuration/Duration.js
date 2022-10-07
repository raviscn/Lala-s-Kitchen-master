import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Colors } from '../../../Constants/Color'
import { useEffect } from 'react'
import { subscriptionActions } from '../../../store/subscription'

const Duration = ({status}) => {

    const dispatch = useDispatch()
    const [slider, setSlider] = useState(null)
    const [lslider, setlSlider] = useState(null)
    const sliderLeftHandler = () => {
        if (!status) {
            setSlider(true)
            setlSlider(false)
        }
        return
    }
    const sliderRightHandler = () => {
        if (!status) {
            setlSlider(true)
            setSlider(false)
        }
        return
    }
    useEffect(() => {
        dispatch(subscriptionActions.weeklySelected(slider))
        dispatch(subscriptionActions.monthlySelected(lslider))
    }, [slider, lslider])
    return (
        <View style={[styles.container, { backgroundColor: status ? Colors.grey64 : "white" }, { borderColor: status ?Colors.grey64 : Colors.yellow100 }]}>
            <Pressable style={[styles.slider,
            { backgroundColor: status ? Colors.grey64 : (slider ? Colors.yellow100 : "white") },
            {
                borderTopEndRadius: slider ? 0 : 16,
                borderBottomEndRadius: slider ? 0 : 16
            }
            ]}
                onPress={sliderLeftHandler}
            >
                <Text style={[styles.text, { color: status ? "white" : Colors.deepBlue100 }]}>Weekly</Text>
            </Pressable>
            <View style={{ backgroundColor: status ? "white" : Colors.yellow100, width: 2 }}></View>
            <Pressable style={[styles.slider,
            { backgroundColor: status ? Colors.grey10 : (lslider ? Colors.yellow100 : "white") },
            {
                borderTopLeftRadius: lslider ? 0 : 16,
                borderBottomLeftRadius: lslider ? 0 : 16
            }
            ]} onPress={sliderRightHandler}>
                <Text style={[styles.text, { color: status ? "white" : Colors.deepBlue100 }]}>Monthly</Text>
            </Pressable>
        </View >

    )
}

export default Duration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderColor: Colors.yellow100,
        borderRadius: 16,
        flexDirection: "row"
    },
    slider: {
        flex: 0.5,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: "Bold",
        color: Colors.deepBlue100,
        fontSize: 16
    }

})