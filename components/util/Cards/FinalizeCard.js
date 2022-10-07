import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Colors } from '../../../Constants/Color'
import { SvgXml } from 'react-native-svg'
import { mealIcon, NonVegMeal, Regular, VegMeal } from '../../../Constants/SVG'
import HorizontalContainer from './HorizontalContainer'
import HorizontalContainerWithIcon from './HorizontalContainerWithIcon'
import { useEffect } from 'react'
import { subscriptionActions } from '../../../store/subscription'

const FinalizeCard = () => {
    const dispatch = useDispatch()
    const [year, setYear] = useState("    ")
    const [month, setMonth] = useState("     ")
    const [day, setDay] = useState("")
    const input = useSelector(state => state.subscription.item)
    const startDate = useSelector(state => state.subscription.subscriptionStartDate)
    const dayOfTheMonth = useSelector(state => state.subscription.dayOfTheMonth)
    const NoofDays = useSelector(state => state.subscription.NoOfDays)
    // console.log(dayOfTheMonth);
    useEffect(() => {
        if (startDate) {
            var arr1 = startDate.split('/');
            setYear(arr1[0])
            setMonth(arr1[1])
            setDay(arr1[2])
        }
    }, [day, month, year, startDate])

    const StartDate = day + '/' + month + '/' + year;
    return (
        <View style={styles.container}>
            {
                input.map((item, i) => (
                    <View style={styles.innerContainer} key={i}>
                        <View>
                            <Text style={styles.tokenText}>Token {i + 1}</Text>
                        </View>
                        <View style={[styles.itemContainer, { alignItems: "center", justifyContent: "flex-start" }]}>
                            <HorizontalContainerWithIcon icon={item.Non_Veg ? NonVegMeal : VegMeal} text={item.Non_Veg ? "Non-Veg" : "Veg"} />
                            <HorizontalContainerWithIcon icon={item.categoryIcon} text={item.category} />

                        </View>
                        <View style={[styles.itemContainer, { alignItems: "center", justifyContent: "flex-start" }]}>
                            <HorizontalContainerWithIcon icon={item.breakfast ? mealIcon : null} text={item.breakfast ? "Breakfast" : ""} styless={{marginHorizontal:8}} />
                            <HorizontalContainerWithIcon icon={item.lunch ? mealIcon : null} text={item.lunch ? "Lunch" : ""} styless={{marginHorizontal:8}} />
                            <HorizontalContainerWithIcon icon={item.dinner ? mealIcon : null} text={item.dinner ? "Dinner" : ""} styless={{marginHorizontal:8}} />
                        </View>
                        <View style={styles.itemContainer}>
                            <HorizontalContainer upperText={"Start Date"} LowerText={StartDate} />
                            <HorizontalContainer upperText={"End Date"} LowerText={dayOfTheMonth} align={"center"} />
                            <HorizontalContainer upperText={"No: of Days"} LowerText={NoofDays} align={"flex-end"} />
                        </View>
                        <View style={styles.itemContainer}>
                            <HorizontalContainer upperText={"Per Day Cost"} LowerText={item.cost} />
                            <HorizontalContainer upperText={"No: Of Meals"} LowerText={`${item.NoOfMeal} Nos`} align={"center"} />
                            <HorizontalContainer upperText={"Price"} LowerText={`₹${item.cost * item.NoOfMeal * NoofDays}`} align={"flex-end"} styless={styles.price} style={styles.PriceText} />
                        </View>
                    </View>
                ))
            }

        </View>
    )
}

export default FinalizeCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginVertical: 8,
    },
    innerContainer: {
        // height: 300,
        borderWidth: 1,
        borderColor: Colors.deepBlue100,
        borderRadius: 16,
        borderStyle: 'dashed',
        padding: 16,
        marginVertical: 8
    },
    itemContainer: {
        flexDirection: "row",
        marginVertical: 8,
        justifyContent: "space-between"
    },
    text: {
        fontFamily: "Regular",
        color: Colors.deepBlue100,
        fontSize: 16,
        marginHorizontal: 8
    },
    PriceText: {
        fontFamily: "Bold",
        color: Colors.deepBlue100,
        fontSize: 16,
    },
    price: {
        fontFamily: "ExtraBold",
        color: Colors.deepBlue100,
        fontSize: 20,
    },

    tokenText: {
        fontFamily: "ExtraBold",
        color: Colors.deepBlue100,
        fontSize: 16,
    }
})