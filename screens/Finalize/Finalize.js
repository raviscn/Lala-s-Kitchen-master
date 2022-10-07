import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderBarWithoutScroll from '../../components/util/HeaderBarWithoutScroll'
import AddonsMain from '../Addons/AddonsMain'
import PrimaryButton from '../../components/util/Buttons/PrimaryButton'
import { Colors } from '../../Constants/Color'
import FinalizeCard from '../../components/util/Cards/FinalizeCard'
import { useSelector } from 'react-redux'


const Finalize = ({ navigation }) => {

    const [price, setPrice] = useState(0)
    var sum = 0
    const NoofDays = useSelector(state => state.subscription.NoOfDays)
    const item = useSelector(state => state.subscription.item)
    useEffect(() => {
        for (let i = 0; i < item.length; i++) {
            sum += item[i].cost * item[i].NoOfMeal * NoofDays
            setPrice(sum)
        }
    }, [item, sum, price])

    const GST = (price * 9) / 100
    const TotalPrice = price + GST

    const editMealHandler = () => {
        navigation.navigate('subscriptionSetup')
    }
    const paymenthandler = () => {
        navigation.navigate('payment')
    }
    return (
        <View style={{ flex: 1 }}>
            <HeaderBarWithoutScroll text={"Finalise"} />
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View style={styles.innerContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 16 }}>
                            <View>
                                <Text style={styles.text}>Selected Meals</Text>
                            </View>
                            <TouchableOpacity style={styles.changeContainer} onPress={editMealHandler}>
                                <Text style={styles.priceText}>Edit Meals</Text>
                            </TouchableOpacity>
                        </View>
                        <FinalizeCard />
                        <View style={styles.priceContainer}>
                            <View style={{ alignItems: "flex-start" }}>
                                <View style={{ flexDirection: "row", marginVertical: 8, width: 224, justifyContent: "space-between" }}>
                                    <Text style={styles.priceText}>Total Price</Text>
                                    <Text style={styles.priceText}>₹{price}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginVertical: 8, width: 224, justifyContent: "space-between" }}>
                                    <Text style={styles.priceText}>GST:9%</Text>
                                    <View style={{ alignSelf: "flex-end" }}>
                                        <Text style={styles.priceText}>₹{GST}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginVertical: 8, borderTopWidth: 1, borderColor: Colors.grey10, width: 224, justifyContent: "space-between" }}>
                                    <Text style={[styles.priceText, { marginTop: 8, fontFamily: "Bold", fontSize: 20 }]}>Total Price</Text>
                                    <Text style={[styles.priceText, { marginTop: 8, fontSize: 20, fontFamily: "ExtraBold" }]}>₹{TotalPrice}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.addressContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
                            <View>
                                <Text style={styles.text}>Delivery Address</Text>
                            </View>
                            <TouchableOpacity style={styles.changeContainer}>
                                <Text style={styles.priceText}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.addressTextContainer}>
                            <Text style={[styles.addressText, { fontFamily: "ExtraBold" }]}>Name</Text>
                            <Text style={styles.addressText}>House/Street</Text>
                            <Text style={styles.addressText}>Locality</Text>
                            <Text style={styles.addressText}>Area</Text>
                            <Text style={styles.addressText}>City</Text>
                            <Text style={styles.addressText}>District, State, Pincode</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: Colors.grey95, height: 1 }}></View>
                    <PrimaryButton onPress={paymenthandler} styless={{ height: 64, marginBottom: 16, marginVertical: 8 }}>Continue</PrimaryButton>
                </ScrollView>
            </View>
        </View>
    )
}

export default Finalize

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 16,
    },
    innerContainer: {
        borderWidth: 1,
        borderColor: Colors.grey95,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 1,
        borderRadius: 16,
        backgroundColor: "white",

    },
    text: {
        fontFamily: "ExtraBold",
        fontSize: 20,
        color: Colors.deepBlue100
    },
    priceContainer: {
        padding: 16,
        // flex: 1,
        alignItems: "flex-end",
    },
    priceText: {
        fontFamily: "Regular",
        color: Colors.deepBlue100,
        fontSize: 16,
        textAlign: 'right',
    },
    addressContainer: {
        // flex: 1,
        borderWidth: 1,
        borderColor: Colors.grey95,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 1,
        borderRadius: 16,
        backgroundColor: "white",
        marginVertical: 24,
        padding: 16,
    },
    changeContainer: {
        backgroundColor: Colors.yellow100,
        padding: 4,
        paddingHorizontal: 16,
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 1,
        borderRadius: 8,
    },
    addressTextContainer: {
        borderWidth: 1,
        borderColor: Colors.deepBlue100,
        borderRadius: 16,
        borderStyle: 'dashed',
        marginVertical: 16,
        padding: 16,
    },
    addressText: {
        fontFamily: "Regular",
        color: Colors.deepBlue100,
        fontSize: 16,
        marginVertical: 4
    }
})