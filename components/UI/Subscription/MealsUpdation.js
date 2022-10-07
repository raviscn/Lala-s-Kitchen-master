import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../../Constants/Color'
import { Minus, MinusGray, Plus } from '../../../Constants/SVG';
import { SvgXml } from 'react-native-svg';
import { subscriptionActions } from '../../../store/subscription';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const MealsUpdation = ({ id, item }) => {
    const dispatch = useDispatch()
    const meal = item.NoOfMeal
    const incrementHandler = () => {
        dispatch(subscriptionActions.NoOfMealIncrement({ key: id, NoOfMeal: item.NoOfMeal }))

    }
    const decrementHandler = () => {
        dispatch(subscriptionActions.NoOfMealDecrement({ key: id, NoOfMeal: item.NoOfMeal }))
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 5 }}>
                <View style={{ margin: 10 }}>
                    <Text style={styles.text}>Number of Meals</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center",maxWidth:110 }}>
                    <TouchableOpacity style={[styles.mealCounter, { borderColor: meal > 1 ? Colors.yellow100 : Colors.grey64, }]}
                        onPress={decrementHandler}
                    >
                        <SvgXml xml={meal > 1 ? Minus : MinusGray} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.number}>{meal}</Text>
                    </View>
                    <TouchableOpacity style={[styles.mealCounter, { borderColor: Colors.yellow100, }]}
                        onPress={incrementHandler}
                    >
                        <SvgXml xml={Plus} />
                    </TouchableOpacity>

                </View>
            </View>
        </View >
    )
}

export default MealsUpdation

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 2,
        borderTopColor: Colors.grey95,
        justifyContent: "center",
    },
    mealCounter: {
        borderWidth: 2,
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: screenHeight / 100
    },
    text: {
        fontFamily: "Bold",
        fontSize: 16
    },
    number: {
        fontFamily: "Bold",
        marginHorizontal: 15,
        fontSize: 18,
    },
})