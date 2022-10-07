import { Text, View, FlatList, Dimensions, Animated, Easing } from 'react-native'
import React, { useRef, useEffect, useState, useCallback } from 'react'
import StyleSheet from 'react-native-media-query';
import { SvgXml } from "react-native-svg";
import { useDispatch, useSelector } from 'react-redux'
import { Days } from '../../../DUMMY_DATA'
import Card from './CardNon'
import CardVeg from './CardVeg'
import { Colors } from '../../../Constants/Color'
import { Diabetic, Healthy, NonVegMeal, NonVegRegular, Regular, VegMeal, VegRegular } from '../../../Constants/SVG';
import { mealsActions } from '../../../store/meals';
import DayButtons from '../../util/Buttons/ButtonsGroup/DayButtons';


var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const MenuMainCard = (props) => {

    let day = null
    let svgIcon = ``
    const dispatch = useDispatch();
    const scrollRef = useRef()
    const categorySelected = useSelector(state => state.meal.category)
    const dayMeal = useSelector(state => state.meal.day)
    const dayId = useSelector(state => state.meal.dayId)
    const typeOfMeal = useSelector(state => state.meal.typeOfMeal)
    console.log("type : " + typeOfMeal);
    const animated = new Animated.Value(0);

    if (categorySelected === 'Regular') {

        svgIcon = Regular;
    }
    else if (categorySelected === 'Healthy') {

        svgIcon = Healthy
    }
    else if (categorySelected === 'Diabetic') {

        svgIcon = Diabetic
    }
    let content = null

    content = <Card mealIcon={NonVegMeal} />
    if (typeOfMeal === 1) {
        content = <CardVeg mealIcon={VegMeal} />
    }

    const dayDataShow = ({ item }) => {
        return (

            <View style={{ flex: 1, width: screenWidth, padding: 16,backgroundColor:Colors.grey95 }}>
                <View style={styles.innerContainer}>
                    <View style={{ flexDirection: "row", }}>
                        <SvgXml xml={svgIcon} height={24} width={24} />
                        <Text style={[styles.category]}>{categorySelected}</Text>
                    </View>
                    <View>
                        <Text style={styles.day}>{item.day}</Text>
                    </View>
                </View>
                {content}
            </View>
        )
    }

    const onScroll = useCallback((event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x)
        dispatch(mealsActions.dayIdIs(index))
    }, []);

    if (dayId === (Math.round(screenWidth * 0))) {
        day = "Sunday"
    }
    else if (dayId === (Math.round(screenWidth * 1))) {
        day = "Monday"
    }
    else if (dayId === (Math.round(screenWidth * 2))) {
        day = "Tuesday"
    }
    else if (dayId === (Math.round(screenWidth * 3))) {
        day = "Wednesday"
    }
    else if (dayId === (Math.round(screenWidth * 4))) {
        day = "Thursday"
    }
    else if (dayId === (Math.round(screenWidth * 5))) {
        day = "Friday"
    }
    else if (dayId === (Math.round(screenWidth * 6))) {
        day = "Saturday"
    }

    useEffect(() => {
        Animated.sequence([
            Animated.timing(animated, {
                toValue: -1000,
                duration: 10,
                useNativeDriver: true,
            }),
            Animated.timing(animated, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    }, [categorySelected]);
    return (
        <View style={[styles.container, { overflow: "hidden" }]}>
            <View style={{ flex: 1, marginVertical: 8, marginHorizontal: 10, marginBottom: 16 ,}}>
                <DayButtons refData={scrollRef} day={day} />
            </View>
            <Animated.View style={{ transform: [{ translateY: animated }], flex: 10, }}>
                <FlatList
                    ref={scrollRef}
                    data={Days}
                    renderItem={dayDataShow}
                    keyExtractor={(item, index) => index.toString()}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    disableIntervalMomentum={true}
                    snapToInterval={screenWidth}
                    onScroll={onScroll}
                />
            </Animated.View>
        </View>
    )
}

export default MenuMainCard

const { styles } = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white" 
    },
    day: {
        fontFamily: 'Bold',
        fontSize: 16,
    },
    category: {
        fontFamily: 'ExtraBold',
        fontSize: 16,
        color: Colors.deepBlue100,
        marginHorizontal: 8,
    },
    innerContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        borderRadius: 24,
        backgroundColor: "white",
        padding: 16,
        marginBottom: 8,
        elevation: 2,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        // marginVertical:8

    }
})