import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Colors } from '../../../Constants/Color'
import { subscriptionActions } from '../../../store/subscription'
import { SvgXml } from 'react-native-svg'
import { NonVegMeal, VegMeal } from '../../../Constants/SVG'
import { mealsActions } from '../../../store/meals'

const SubscriptionItem = ({ id }) => {
  const dispatch = useDispatch()
  const [slider, setSlider] = useState(true)
  const [lslider, setlSlider] = useState(false)
  const idd = useSelector(state => state.meal.typeOfMeal)
  const [veg, setVeg] = useState(idd)
  const sliderLeftHandler = () => {
    setSlider(true)
    setlSlider(false)
    setVeg(0)
    return
  }
  const sliderRightHandler = () => {
    
    setlSlider(true)
    setVeg(1)
    setSlider(false)
    return
  }
  useEffect(() => {
    if (id) {
      dispatch(subscriptionActions.typeOfMealSelected({ slider: slider, key: id }))
    }
    else {
      if (idd === 1) {
        setSlider(false)
        setlSlider(true)
      }
      if (idd === 0) {
        setSlider(true)
        setlSlider(false)
      }
      dispatch(mealsActions.typeOfMealSelected(veg))
    }
  }, [slider, id, lslider, veg, idd])
  return (
    <View style={[styles.container,]}>
      <Pressable style={[styles.slider,
      { backgroundColor: (slider ? Colors.yellow100 : "white") },
      {
        borderTopEndRadius: slider ? 0 : 16,
        borderBottomEndRadius: slider ? 0 : 16
      }
      ]}
        onPress={sliderLeftHandler}
      >
        <SvgXml xml={NonVegMeal} /><Text>{"  "}</Text>
        <Text style={[styles.text, { color: Colors.deepBlue100 }]}>Non-Veg</Text>
      </Pressable>
      <View style={{ backgroundColor: Colors.yellow100, width: 1 }}></View>
      <Pressable style={[styles.slider,
      { backgroundColor: (lslider ? Colors.yellow100 : "white") },
      {
        borderTopLeftRadius: lslider ? 0 : 16,
        borderBottomLeftRadius: lslider ? 0 : 16
      }
      ]} onPress={sliderRightHandler}>
        <SvgXml xml={VegMeal} /><Text>{"  "}</Text>
        <Text style={[styles.text, { color: Colors.deepBlue100 }]}>Veg</Text>
      </Pressable>
    </View >

  )
}

export default SubscriptionItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 60,
    minHeight: 48,
    borderWidth: 1,
    borderColor: Colors.yellow100,
    borderRadius: 16,
    flexDirection: "row",
    elevation: 2,
    shadowOpacity: 0.5,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
  },
  slider: {
    flex: 0.5,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  text: {
    fontFamily: "Bold",
    color: Colors.deepBlue100,
    fontSize: 16
  }

})