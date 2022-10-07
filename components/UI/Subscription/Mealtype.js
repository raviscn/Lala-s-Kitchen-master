import React, { useEffect, useState } from 'react';
import { SvgXml } from "react-native-svg";
import {
  Animated,
  Easing,
  Pressable,
  View,
  Dimensions,
  Text
} from 'react-native';
import StyleSheet from 'react-native-media-query';
import { useDispatch, useSelector } from 'react-redux';
import { mealsActions } from '../../../store/meals';
import { Colors } from '../../../Constants/Color';
import { arrow, arrowNon, NonVegMeal, VegMeal } from '../../../Constants/SVG';



var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const MealType = ({ refData }) => {
  const [status, setStatus] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {

  }, [])
  // const id = useSelector(state => state.meal.typeOfMeal)
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  console.log(status);
  const id=status
  const startAnimation = (toValue) => {
    setStatus(toValue)
    dispatch(mealsActions.typeOfMealSelected(toValue))
    Animated.timing(animatedValue, {
      toValue,
      duration: 40,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

  };

  const left = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '50%'],
    extrapolate: 'clamp',
  });

  const scale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.9, 1],
    extrapolate: 'clamp',
  });
  const onPressMethods = (a) => {
    refData.current.scrollToOffset({ offset: screenWidth * a }, { animted: true })
    startAnimation(a);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.sliderContainer]}>

        <Animated.View style={[styles.slider, { left }, {
          borderTopStartRadius: id === 0 ? 20 : 0,
          borderBottomStartRadius: id === 0 ? 20 : 0,
          borderTopRightRadius: id === 1 ? 20 : 0,
          borderBottomEndRadius: id === 1 ? 20 : 0

        }]} />
        <Pressable
          style={styles.clickableArea}
          onPress={onPressMethods.bind(null, 0)}>
          <Animated.Text
            style={[styles.sliderText, { transform: [{ scale }] }]}>
            <SvgXml xml={NonVegMeal} />  Non-Veg
            <Text>{' '}</Text>
          </Animated.Text>

        </Pressable>
        <Pressable
          style={styles.clickableArea}
          onPress={onPressMethods.bind(null, 1)}>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <SvgXml xml={VegMeal} />
            <Animated.Text
              style={[styles.sliderText, { transform: [{ scale }] }]}>
              <Text>{' '}</Text>Veg
            </Animated.Text>
            <Text>{'        '}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const { styles, ids } = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: screenHeight / 40,
    marginHorizontal:24
  },
  sliderContainer: {
    borderWidth: 1,
    borderColor: Colors.yellow100,
    height: screenHeight / 12,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.greyWhite,
    marginBottom: screenHeight / 100,
    elevation: 3,
    shadowColor: Colors.grey10,
    alignItems: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,

  },
  clickableArea: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: "row"
  },
  sliderText: {
    fontSize: 16,
    fontFamily: 'ExtraBold',
    color: Colors.deepBlue100,
  },
  slider: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    backgroundColor: Colors.yellow100,

  },
});

export default MealType;