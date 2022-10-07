import { StyleSheet, Switch, Text, Dimensions, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../../Constants/Color';
import NumberOfMealsUpdation from './MealsUpdation';
import ToggleButton from '../../util/ToggleButton';
import { subscriptionActions } from '../../../store/subscription';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;


const SubscriptionMeal = ({ id, item }) => {
    const dispatch = useDispatch()
   

    const toggleSwitch = (meal, mealType, key) => {
        console.log("key " + mealType);
        dispatch(subscriptionActions.mealInputAdd({ key: key, meal: meal, mealType: mealType }))
    }
    useEffect(() => {
        dispatch(subscriptionActions.totalCost({ breakfast: item.breakfast, lunch: item.lunch, dinner: item.dinner, key: id }))
    }, [item])
    return (
        <View>
            <View style={styles.container}>
                <View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.text}>Breakfast</Text>
                        <ToggleButton state={item.breakfast} meal={() => toggleSwitch("breakfast", item.breakfast, id)} />

                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.text}>lunch</Text>

                        <ToggleButton state={item.lunch} meal={() => toggleSwitch('lunch', item.lunch, id)} />
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.text}>Dinner</Text>
                        <ToggleButton state={item.dinner} meal={() => toggleSwitch("dinner", item.dinner, id)} />

                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={styles.text}>Per Day Cost</Text>
                    <Text style={{ fontFamily: "ExtraBold", fontSize: 20 }}>Rs.{item.cost}/-</Text>
                </View>
            </View>
            <NumberOfMealsUpdation id={id} item={item} />
        </View>
    )
}

export default SubscriptionMeal

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 8,
    },
    text: {
        fontFamily: "Bold",
        fontSize: 15,
        marginRight: 16
    },
    switch: {
        transform: [{ scaleX: 1 }, { scaleY: 1 }],
        marginTop: screenHeight / 100,
        marginLeft: screenWidth / 20
    }
})