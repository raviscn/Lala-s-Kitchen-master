import { StyleSheet, Text, View, Animated, Easing, Dimensions, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import MealCategory from '../../components/UI/Explore/mealCategory'
import { Diabetic, Healthy, NonVegRegular, VegRegular } from '../../Constants/SVG'
import { useSelector } from 'react-redux'
import { Colors } from '../../Constants/Color'
import PrimaryButton from '../../components/util/Buttons/PrimaryButton'
import MealType from '../../components/UI/Subscription/Mealtype'
import HeaderBar from '../../components/util/HeaderBar'
import MealCard from '../../components/util/Cards/MealCard'

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

let color = ""
let image = ""
const nonRegular = require('../../assets/RiceAndFish.jpg')
const vegRegular = require('../../assets/RiceAndCurd.jpg')
const healthy = require('../../assets/RiceAndVegCurry.jpg')
const diabetic = require('../../assets/CurriedRice.jpg')

export default function Explore({ navigation }) {

  const typeOfMeal = useSelector(state => state.meal.typeOfMeal)
  let animatedValue = new Animated.Value(0);
  let animatedValueHeader = new Animated.Value(0);
  let currentValue = 0;

  animatedValue.addListener(({ value }) => {
    currentValue = value;
  });

  const flipAnimation = () => {
    if (currentValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        tension: 10,
        friction: 8,
        duration: 400,
        easing: Easing.linear,

        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        tension: 10,
        friction: 8,
        duration: 400,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  };

  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "360deg"],
  });
  const categorySelectedHandler = (category, icon) => {
    if (category === 'Regular') {
      if (typeOfMeal === 0) {
        color = Colors.orange100;
        image = nonRegular

      }
      else {
        color = Colors.blue100;
        image = vegRegular
      }
    }
    else if (category === 'Healthy') {
      color = Colors.green100;
      image = healthy

    }
    else if (category === 'Diabetic Friendly') {
      color = Colors.pink100;
      image = diabetic

    }
    navigation.navigate("category", {
      category: category,
      icon: icon,
      color: color,
      image: image
    })
  }
  const subscriptionHandler = () => {
    navigation.navigate("subscriptionSetup")
  }

  useEffect(() => {
    flipAnimation();
  }, [typeOfMeal])

  return (

    <View style={{ flex: 1 }}>
      <HeaderBar text={"Let's Explore"} AnimatedValue={animatedValueHeader} />
      <ScrollView style={styles.container} scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: animatedValueHeader } } }],
          { useNativeDriver: false }
        )}>
        <View style={{ flex: 1 }}>
          <View style={{ marginHorizontal: 24 }}>
            <Text style={styles.explore}>Homely Meals at your door step!</Text>
            <Text style={styles.exploreText}>Welcome to Lala's Kitchen.</Text>
            <Text style={styles.exploreText}> We provide tasty and homely meals on subscription packages. </Text>
            <Text style={styles.exploreText}>Below, you can explore different packages available for you to subscribe.</Text>
            <Text style={styles.exploreText}> There are Regular. Healthy and Diabetic friendly menus available in both vegetarian and non-vegetarian. </Text>
          </View>
          <View style={{ flex: 1 }}>
            <MealCard />
          </View>
        </View>
        <View style={{ backgroundColor: Colors.grey95, height: 1 }}></View>
        <PrimaryButton onPress={subscriptionHandler} styless={{ height: 64, marginHorizontal: 16,marginVertical:8 }}>Plan My subscription</PrimaryButton>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  explore: {
    fontFamily: 'ExtraBold',
    fontSize: 24,
    color: Colors.deepBlue100,
    marginTop: 16
  },
  exploreText: {
    fontFamily: "Regular",
    marginTop: screenHeight / 70,
    fontSize: 16,
    color: Colors.deepBlue100,
  }
})