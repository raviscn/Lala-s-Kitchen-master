import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Category } from '../../../../DUMMY_DATA'
import SecondaryButton from '../SecondaryButton'
import { useDispatch, useSelector } from 'react-redux'
import { Colors } from '../../../../Constants/Color'
import { mealsActions } from '../../../../store/meals'
import { subscriptionActions } from '../../../../store/subscription'
import { Diabetic, Healthy, Regular } from '../../../../Constants/SVG'

var screenHeight = Dimensions.get('window').height;

const CategoryButtons = ({ id }) => {
    const dispatch = useDispatch()
    const categorySelected = useSelector(state => state.meal.category)
    const [mealTypeActive, setMealTypeActive] = useState(0)
    const [CategoryIcon, setCategoryIcon] = useState('Regular')
    const [icon, setIcon] = useState(null)

    const categorySelecteHandler = (category) => {
        setCategoryIcon(category)
        if (id) {
            dispatch(subscriptionActions.categorySelected({ category: category, key: id }))
        }
        else {
            dispatch(mealsActions.categorySelected(category))
        }
        if (category === 'Regular') {
            setMealTypeActive(0)
        }
        else if (category === 'Healthy') {
            setMealTypeActive(1)
        }
        else if (category === 'Diabetic') {

            setMealTypeActive(2)
        }
    }
    useEffect(() => {
        if (id) {
            dispatch(subscriptionActions.categoryIconSelected({ categoryIcon: icon, key: id }))
        }

        if (Category === 'Regular') {
            setMealTypeActive(0)
            setIcon(Regular)
        }
        else if (CategoryIcon === 'Healthy') {
            setMealTypeActive(1)
            setIcon(Healthy)
        }
        else if (CategoryIcon === 'Diabetic') {
            setMealTypeActive(2)
            setIcon(Diabetic)
        }
        if (categorySelected === 'Regular') {
            setMealTypeActive(0)
            setIcon(Regular)
        }
        else if (categorySelected === 'Healthy') {
            setMealTypeActive(1)
            setIcon(Healthy)
        }
        else if (categorySelected === 'Diabetic') {
            setMealTypeActive(2)
            setIcon(Diabetic)
        }

    }, [CategoryIcon, icon, categorySelected])
    return (
        <View style={styles.categoryContainer}>
            {Category.map((categories) => (
                <SecondaryButton key={categories.id}
                    onPress={() => { categorySelecteHandler(categories.category) }}
                    styless={[mealTypeActive === categories.id ? styles.btnActive : styles.btn, { borderColor: Colors.yellow100 }]}
                ><Text style={mealTypeActive === categories.id ? styles.textStyle : ''}>
                        {categories.category}</Text>
                </SecondaryButton>
            ))}
        </View>
    )
}

export default CategoryButtons

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: "row",
        flex: 1,
        marginVertical: 4,
    },
    btnActive: {
        backgroundColor: Colors.yellow100,
    },
    btn: {
        backgroundColor: "white"
    },
    textStyle: {
        fontFamily: 'Bold',
        color: Colors.blue200,
        fontSize: 16,
    }
})