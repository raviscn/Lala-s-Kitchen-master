import { Text, View, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import StyleSheet from 'react-native-media-query';
import SecondaryButton from '../SecondaryButton'
import { Category, Days } from '../../../../DUMMY_DATA'
import { useDispatch, useSelector } from 'react-redux'
import { mealsActions } from '../../../../store/meals'
import { Colors } from '../../../../Constants/Color'
import CategoryButtons from './CategoryButtons';
import SingleDayButton from '../SingleDayButton';
import { useLayoutEffect } from 'react';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;


const DayButtons = ({ refData, day }) => {

  const dispatch = useDispatch()

  const [dayActive, setDayActive] = useState(0)
  const daySelectedHandler = (day, id) => {
    dispatch(mealsActions.daySelected(day))
    refData.current.scrollToOffset({ offset: screenWidth * id }, { animted: true })
    if (day === 'Sunday') {
      setDayActive(0)
    }
    else if (day === 'Monday') {
      setDayActive(1)
    }
    else if (day === 'Tuesday') {
      setDayActive(2)
    }
    else if (day === 'Wednesday') {
      setDayActive(3)
    }
    else if (day === 'Thursday') {
      setDayActive(4)
    }
    else if (day === 'Friday') {
      setDayActive(5)
    }
    else {
      setDayActive(6)
    }
  }
  useLayoutEffect(() => {
    dispatch(mealsActions.daySwipeSelected(day))
    if (day === "Sunday") {
      setDayActive(0)
    }
    else if (day === "Monday") {
      setDayActive(1)
    }
    else if (day === "Tuesday") {
      setDayActive(2)
    }
    else if (day === "Wednesday") {
      setDayActive(3)
    }
    else if (day === "Thursday") {
      setDayActive(4)
    }
    else if (day === "Friday") {
      setDayActive(5)
    }
    else if (day === 'Saturday') {
      setDayActive(6)
    }
  }, [day])


  return (

    <View style={styles.categoryContainer}>
      {Days.map((days) => (
        <SingleDayButton key={days.id}
          onPress={() => { daySelectedHandler(days.day, days.id) }}
          styless={[dayActive === days.id ? styles.btnActive : styles.btn, { borderColor: Colors.yellow100 }]}
        >
          <Text style={dayActive === days.id ? styles.textStyle : ''}> {days.day.charAt(0)}</Text>
        </SingleDayButton>
      ))}
    </View>
  )
}

export default DayButtons

const { styles } = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    flex: 1,
    // marginVertical:8
  },
  btnActive: {
    backgroundColor: Colors.yellow100,
  },
  btn: {
    backgroundColor: "white"
  },
  textStyle: {
    fontFamily: 'Bold',
    color: Colors.deepBlue100,
    fontSize: 16,
  }
})