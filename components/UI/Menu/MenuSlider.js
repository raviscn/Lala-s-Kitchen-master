
import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { mealsActions } from '../../../store/meals';
import { Colors } from '../../../Constants/Color';
import { arrow, arrowNon, NonVegMeal, VegMeal } from '../../../Constants/SVG';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const MenuSlider = () => {

  const [status, setStatus] = useState(0)
  const dispatch = useDispatch()
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const startAnimation = (toValue) => {
    setStatus(toValue)
    dispatch(mealsActions.typeOfMealSelected(toValue))
    Animated.timing(animatedValue, {
      toValue,
      duration: 400,
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
  return (
    <View style={styles.container}>
      <View style={[styles.sliderContainer]}>
        <Animated.View style={[styles.slider, { left }]} />
        <Pressable
          style={styles.clickableArea}
          onPress={startAnimation.bind(null, 0)}>
          <Animated.Text
            style={[styles.sliderText, { transform: [{ scale }] }]}>
            <SvgXml xml={NonVegMeal} />  Non-Veg
            <Text>{' '}</Text>
            {status === 1 && <SvgXml xml={arrowNon} />}
          </Animated.Text>

        </Pressable>
        <Pressable
          style={styles.clickableArea}
          onPress={startAnimation.bind(null, 1)}>
          {status !== 1 && <SvgXml xml={arrow} />}
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
    flex: 0.8,
    marginVertical:8,
    // marginTop: screenHeight / 50

  },
  sliderContainer: {
    flex: 1,
    // height: screenHeight / 10,
    borderRadius: 90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grey1,
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
    color: Colors.blue200,
  },
  slider: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    borderRadius: 100,
    elevation: 3,
    backgroundColor: Colors.yellow100,
    shadowColor: Colors.grey10,
    alignItems: 'center',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
  },
});

export default MenuSlider;