import { Animated, LayoutAnimation, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import HorizontalContainerWithIcon from './HorizontalContainerWithIcon'
import { Healthy, mealIcon, NonVegMeal } from '../../../Constants/SVG'
import { ToggleAnimation } from '../../../screens/SubscriptionActive/ToggleAnimation';

const SubscriptionActiveCard = () => {
    const [showContent, setShowContent] = useState(false)
    const animationController = useRef(new Animated.Value(0)).current
    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: showContent ? 0 : 1,
            useNativeDriver: true
        };
        Animated.timing(animationController, config).start()
        LayoutAnimation.configureNext(ToggleAnimation)
        setShowContent(!showContent)
    }
    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <HorizontalContainerWithIcon icon={NonVegMeal} text={"Non-Veg"} styless={{ fontSize: 16 }} />
                <HorizontalContainerWithIcon icon={Healthy} text={"Healthy"} styless={{ fontSize: 16 }} />
                <HorizontalContainerWithIcon icon={NonVegMeal} text={"x3Nos"} styless={{ fontSize: 16 }} />
                <TouchableOpacity onPress={() => toggleListItem()}>
                    <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
                        <MaterialIcons name={'keyboard-arrow-down'} size={30} color={"gray"} />
                    </Animated.View>
                </TouchableOpacity>
            </View>
            {showContent && (
                <Animated.View style={[styles.mealContainer]}>
                    <HorizontalContainerWithIcon icon={mealIcon} text={"BreakFast"} />
                    <HorizontalContainerWithIcon icon={mealIcon} text={"Lunch"} />
                    <HorizontalContainerWithIcon icon={mealIcon} text={"Dinner"} />
                </Animated.View>
            )}
        </View >
    )
}

export default SubscriptionActiveCard

const styles = StyleSheet.create({
    container: {
        // padding:8

    },
    innerContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    mealContainer: {
        flexDirection: "row",
        // justifyContent: "space-between"
    }
})