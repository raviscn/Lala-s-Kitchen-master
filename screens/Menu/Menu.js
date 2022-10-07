import { StyleSheet, ScrollView, View, Animated } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import MenuStructure from '../../components/UI/Menu/MenuStructure'
import HeaderBarWithoutScroll from '../../components/util/HeaderBarWithoutScroll'
import { Colors } from '../../Constants/Color'

const Menu = () => {
    const [ref, setRef] = React.useState()
    const loading = useSelector(state => state.meal.loading)
    const data = (e) => {
        console.log(e);
        setRef(e)
    }
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
    return (
        <View style={{ flex: 1,backgroundColor:Colors.grey95 }}>
            <HeaderBarWithoutScroll text={"Weekly  Menu"} />
            <ScrollView >
                <MenuStructure />
            </ScrollView>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})