import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import TodaysMenucard from '../../components/util/Cards/TodaysMenucard'
import { Meal } from '../../DUMMY_DATA'
import HeaderBarWithoutScroll from '../../components/util/HeaderBarWithoutScroll'
const TodaysMenu = () => {
    const breakfast = Meal.breakfast.filter((item) => (
        (item.category === "Regular" && item.type === 'Non-Veg')
    ))
    const lunch = Meal.Lunch.filter((item) => (
        (item.category === "Regular" && item.type === 'Non-Veg')
    ))
    const dinner = Meal.Dinner.filter((item) => (
        (item.category === "Regular" && item.type === 'Non-Veg')
    ))
    return (
        <View style={{ flex: 1 }}>
            <HeaderBarWithoutScroll text={"Today's Menu"}/>
            <ScrollView style={{ flex: 1, }}>
                <View style={{ flex: 1, padding: 16 }}>
                    {breakfast.map((item) => (
                        <TodaysMenucard meal={"Breakfast"} itemName={item.itemName} curry={item.Curry} image={item.image}  key={item.id}/>
                    ))}
                    {lunch.map((item) => (
                        <TodaysMenucard meal={"Lunch"} itemName={item.itemName} curry={item.Curry} image={item.image}key={item.id} />
                    ))}
                    {dinner.map((item) => (
                        <TodaysMenucard meal={"Dinner"} itemName={item.itemName} curry={item.Curry} image={item.image} key={item.id}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default TodaysMenu

const styles = StyleSheet.create({})