import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DropDownPickerItem from '../../util/DropDownPicker';
import { SvgXml } from 'react-native-svg'
import { NonVegMeal, VegMeal, Veg_NonVeg } from '../../../Constants/SVG';
import DropDownPickerWithIcon from '../../util/DropDownPickerWithIcon';
import { useState } from 'react';

const Addon = () => {

  const data = [
    { label: 'All', value: '1', icon: Veg_NonVeg },
    { label: 'Non-Veg', value: '2', icon: NonVegMeal },
    { label: 'Veg', value: '3', icon: VegMeal },
  ];

  const type = [
    { label: "All", value: "All" },
    { label: "Gravy/Curry", value: "Gravy/Curry" },
    { label: "Semi-Gravy", value: "Semi-Gravy" },
    { label: "Dry-Fry", value: "Dry-Fry" },
    { label: "Main Course", value: "Main Course" },
    { label: "Side Dish", value: "Side Dish" },
    { label: "Desserts", value: "Desserts" },
    { label: "Drinks", value: "Drinks" },
  ]
  const ingredient = [
    { label: "All", value: "All" },
    { label: "Veg", value: "Veg" },
    { label: "Egg", value: "Egg" },
    { label: "Fish", value: "Fish" },
    { label: "Chicken", value: "Chicken" },
    { label: "Beef", value: "Beef" },
    { label: "Mutton", value: "Mutton" },
    { label: "Others", value: "Others" },
  ]
  return (
    // <View style={{ flex: 1, }}>
    <View style={styles.container}>
      <View style={{ flex: 1.5, marginHorizontal: 2, justifyContent: "center" }}>
        <DropDownPickerWithIcon data={data} />

      </View>
      <View style={{ flex: 3, marginHorizontal: 2, justifyContent: "center" }}>
        <DropDownPickerItem data={type} placeholder={"Type"} />
      </View>
      <View style={{ flex: 3, marginHorizontal: 2, justifyContent: "center" }}>
        <DropDownPickerItem data={ingredient} placeholder={"Ingredient"} />
      </View>
    </View>
    // </View>
  )
}

export default Addon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 8
  }
})
