import { Dimensions, FlatList, Image, ImageBackground, Modal, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useRef } from 'react'
import { Colors } from '../../../Constants/Color'
import { SvgXml } from 'react-native-svg'

import PrimaryButton from '../Buttons/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton'
import Category from '../../../screens/subscription/Category'
import MealType from '../../UI/Subscription/Mealtype'
import { Diabetic, Healthy, NonVegMeal, Regular, VegMeal } from '../../../Constants/SVG'
import { useDispatch } from 'react-redux'
import { mealsActions } from '../../../store/meals'
const image = require("../../../assets/RiceAndFish.jpg")

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
const Mealsdata = [
    {
        id: 1,
        mealsType: NonVegMeal,
        categories:
            [
                {
                    image: require('../../../assets/RiceAndFish.jpg'),
                    category: "Regular",
                    color: Colors.deepBlue100,
                    categoryIcon: Regular,

                },
                {
                    image: require('../../../assets/RiceAndVegCurry.jpg'),
                    category: "Healthy",
                    color: Colors.green100,
                    categoryIcon: Healthy,

                },

                {
                    image: require('../../../assets/WheatDosa.jpg'),
                    category: "Diabetic",
                    color: Colors.pink100,
                    categoryIcon: Diabetic,

                }
            ]


    },
    {
        id: 2,
        mealsType: VegMeal,
        categories:
            [
                {
                    image: require('../../../assets/CurriedRice.jpg'),
                    category: "Regular",
                    color: Colors.deepBlue100,
                    categoryIcon: Regular,

                },
                {
                    image: require('../../../assets/RiceAndVegCurry.jpg'),
                    category: "Healthy",
                    color: Colors.green100,
                    categoryIcon: Healthy,

                },

                {
                    image: require('../../../assets/WheatDosa.jpg'),
                    category: "Diabetic",
                    color: Colors.pink100,
                    categoryIcon: Diabetic,

                }
            ]

    }
]

const MealCard = () => {
    const scrollRef = useRef()
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const readMorehandler = (item, mealType) => {
        dispatch(mealsActions.cardDataSelected(item))
        dispatch(mealsActions.mealTypeSelected(mealType))
        setModalVisible(true)
    }
    const viewMenuhandler = (category) => {
        console.log(category);
        dispatch(mealsActions.categorySelected(category))
        navigation.navigate("menu")
    }
    const mealsDataShow = (meals) => {
        return (
            <View style={{ width: screenWidth }}>
                {meals.item.categories.map((item) => (

                    <View style={styles.outerContainer} key={item.category}>
                        <View style={styles.container}>
                            <View style={styles.imageContainer}>
                                <ImageBackground source={item.image} style={styles.image} />
                            </View>
                            <View style={{ padding: 20 }}>
                                <View style={styles.innerContainer}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <SvgXml xml={item.categoryIcon} />
                                        <Text style={[styles.textStyle]}>{item.category}</Text>
                                    </View>
                                    <View>
                                        <SvgXml xml={meals.item.mealsType} />
                                    </View>
                                </View>
                                <View style={{ marginVertical: 10 }}>
                                    <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam,
                                    </Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between",alignItems:"center" }}>
                                    <SecondaryButton onPress={() => readMorehandler(item, meals.item.mealsType)} styless={{height:32}}>Read More</SecondaryButton>
                                    <PrimaryButton onPress={() => viewMenuhandler(item.category)} styless={{height:32}}>View Menu</PrimaryButton>
                                </View>
                                <Modal
                                    transparent={true}
                                    accessibilityElementsHidden
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <Category setModalVisible={setModalVisible} modalVisible={modalVisible} />
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <MealType refData={scrollRef} />
            <FlatList
                ref={scrollRef}
                showsHorizontalScrollIndicator={false}
                data={Mealsdata}
                renderItem={mealsDataShow}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
                pagingEnabled={true}
                horizontal={true}
                disableIntervalMomentum={true}
                snapToInterval={screenWidth}
            />
        </View>
    )
}

export default MealCard

const styles = StyleSheet.create({
    outerContainer: {
        // flex: 1,
        elevation: 5,
        shadowColor: Colors.grey10,
        shadowOpacity: 0.7,
        backgroundColor: "white",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        borderRadius: 22,
        marginVertical: 8,
        marginHorizontal: 24
    },
    imageContainer: {
        borderRadius: 20,
        height: 230,
    },
    image: {
        height: '100%',
        width: '100%',
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
        borderRadius: 20,
        overflow: "hidden"
    },
    innerContainer: {
        flexDirection: "row",
        // padding: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    textStyle: {
        fontFamily: "ExtraBold",
        marginHorizontal: 20,
        fontSize: 20,
        color: Colors.deepBlue100
    },
    description: {
        fontFamily: "Regular",
        color: Colors.deepBlue100,
        fontSize: 15,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})