import React, { useRef, useState } from 'react'
import { Animated, LayoutAnimation, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import SubscriptionActiveCard from '../../components/util/Cards/SubscriptionActiveCard'
import HorizontalContainer from '../../components/util/Cards/HorizontalContainer'
import { Colors } from '../../Constants/Color'
import PrimaryButton from '../../components/util/Buttons/PrimaryButton'
import HeaderBarWithoutScroll from '../../components/util/HeaderBarWithoutScroll'
import HorizontalContainerWithIcon from '../../components/util/Cards/HorizontalContainerWithIcon'
import { Active, Cancel, Pause, Renew } from '../../Constants/SVG'
import { ToggleAnimation } from './ToggleAnimation'

const SubscriptionActive = ({ navigation }) => {
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
    const newSubscriptionHandler = () => {
        navigation.navigate('explore')
    }
    return (

        <View style={styles.container}>
            <HeaderBarWithoutScroll text={"Subscription"} />
            <ScrollView style={styles.innerMainContainer} >
                <View style={styles.mainContainer}>
                    <View style={styles.subscriptionIDContainer}>
                        <View>
                            <Text style={styles.text}>Subscription ID: 20220824/32</Text>
                        </View>
                        <View>
                            <HorizontalContainerWithIcon text={"Active"} icon={Active} />
                        </View>
                    </View>
                    <View style={styles.borderContainer} />
                    <View>
                        <SubscriptionActiveCard />
                    </View>
                    <View style={styles.borderContainer} />


                    <View style={styles.innerContainer}>
                        <HorizontalContainer upperText={"Start Date"} LowerText={"11/11/2020"} align={'flex-start'} />
                        <HorizontalContainer upperText={"End Date"} LowerText={"11/11/2020"} align={"center"} />
                        <HorizontalContainer upperText={"No: of Days"} LowerText={8} align={"flex-end"} />
                    </View>
                    <View style={styles.innerContainer}>
                        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => toggleListItem()}>
                                <Text style={styles.paymentInfoText}>Payment Info</Text>
                                <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
                                    <MaterialIcons name={'keyboard-arrow-down'} size={20} color={"gray"} />
                                </Animated.View>
                            </TouchableOpacity>

                        </View>
                        <HorizontalContainer upperText={"Total Per Day Cost"} LowerText={"₹90"} align={"center"} />
                        <HorizontalContainer upperText={"Total price paid"} LowerText={500} align={"flex-end"} styless={styles.price} style={styles.PriceText} />

                    </View>
                    {showContent && (
                        <Animated.View style={styles.paymentInfoContainer}>
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                    <Text style={styles.paymentInfoText}>Transaction ID: </Text>
                                    <Text style={styles.paymentInfoText}>20220824/32</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                    <Text style={styles.paymentInfoText}>Payment Date: </Text>
                                    <Text style={styles.paymentInfoText}>11/11/2022</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                    <Text style={styles.paymentInfoText}>Payment Method :</Text>
                                    <Text style={styles.paymentInfoText}>Google Pay</Text>
                                </View>
                            </View>
                        </Animated.View>
                    )}
                    <View style={styles.borderContainer} />
                    <View style={styles.editContainer}>
                        <TouchableOpacity style={styles.statusContainer}>
                            <HorizontalContainerWithIcon icon={Cancel} text={"Cancel"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.statusContainer}>
                            <HorizontalContainerWithIcon icon={Pause} text={"Pause"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.statusContainer}>
                            <HorizontalContainerWithIcon icon={Renew} text={"Renew"} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View >
                    <PrimaryButton styless={{ height: 80 }} onPress={newSubscriptionHandler}>Add new Subscription</PrimaryButton>
                </View>
            </ScrollView>

        </View>

    )
}

export default SubscriptionActive

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerMainContainer: {
        padding: 16,
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    mainContainer: {
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 2,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        padding: 16

    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 4,
    },
    subscriptionIDContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    borderContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#E6E6E6",
        marginVertical: 16,
    },
    PriceText: {
        fontFamily: "Bold",
        color: Colors.deepBlue100,
        fontSize: 12,
        // marginHorizontal: 8
    },
    price: {
        fontFamily: "ExtraBold",
        color: Colors.deepBlue100,
        fontSize: 50,
    },
    text: {
        fontFamily: "Bold",
        color: Colors.deepBlue100,
        fontSize: 16,
    },
    editContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    statusContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        // padding: 4,
        paddingHorizontal: 12,
    },
    paymentInfoContainer: {
        // padding: 8,
        // backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center"
    },
    paymentInfoText: {
        fontFamily: "Regular",
        color: Colors.deepBlue100,
        fontSize: 12,
        marginVertical: 4,
        // marginHorizontal:8
    }

})