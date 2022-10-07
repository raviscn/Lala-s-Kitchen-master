import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubscriptionItem from '../Subscription/SubscriptionItem'
import CategoryButtons from '../../util/Buttons/ButtonsGroup/CategoryButtons'
import MenuMainCard from './MenuMainCard'
import { Colors } from '../../../Constants/Color'


const MenuStructure = () => {
    return (
        <View style={{ flex: 1, }}>
            <ScrollView contentContainerStyle={{ flex: 1 ,backgroundColor:"white" }}>
                <View style={{ flex: 2,marginVertical:8 ,backgroundColor:"white" }}>
                    <View style={{ flex: 1, marginHorizontal: 16,marginVertical:4,}}>
                        <SubscriptionItem />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 8 }}>
                        <CategoryButtons />
                    </View>
                </View>
                <View style={{ flex: 7,backgroundColor:Colors.grey95 }}>
                    <MenuMainCard />
                </View>
            </ScrollView>
        </View>
    )
}

export default MenuStructure

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
    }
})