import React, { useEffect, useState } from 'react';
import { Pressable, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import { Colors } from '../../../Constants/Color';
import { SvgXml } from 'react-native-svg'
import { Feather } from '@expo/vector-icons'
import { calendar } from '../../../Constants/SVG';
import { mealsActions } from '../../../store/meals';
import { useDispatch } from 'react-redux';
import { subscriptionActions } from '../../../store/subscription';
import { scale, verticalScale } from 'react-native-size-matters'
const screenHeight = Dimensions.get('window').height
export const DatePickerItem = ({ color, status, }) => {
    const dispatch = useDispatch()
    const [modal, setMoal] = useState(false)
    const [year, setYear] = useState("    ")
    const [month, setMonth] = useState("     ")
    const [day, setDay] = useState("")
    var today = new Date();

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    const today1 = yyyy + '/' + mm + '/' + dd;
    // const dayOfTheMonth = ` ${day} / ${month} / ${year}`
    const [date, setDate] = useState(null)

    const dateChangeHandler = (date) => {
        console.log("date " + date);
        var arr1 = date.split('/');
        setYear(arr1[0])
        setMonth(arr1[1])
        setDay(arr1[2])
        setDate(date)

    }
    const modelOpenHandler = () => {
        setMoal(!modal)
    }
    const selectHandler = () => {
        if (!date) {
            setYear(yyyy)
            setMonth(mm)
            setDay(dd)
            setMoal(false)
            setDate(today1)
            // setDate(dayOfTheMonth)


        }
        else {
            setMoal(false)
        }
    }
    const cancelHandler = () => {
        setYear("     ")
        setMonth("     ")
        setDay("     ")
        setMoal(false)
    }
    const monthChangehandler = (data) => {
        if (today) {
            return
        }
        // console.log("data :" + data);
    }
    useEffect(() => {
        if (!status) {
            setYear("     ")
            setMonth("     ")
            setDay("     ")
        }
    }, [status])
    useEffect(() => {
        dispatch(subscriptionActions.subscriptionStartDateSelected(date))
        // dispatch(subscriptionActions.StartDateSelected(dayOfTheMonth))
        // dispatch(mealsActions.subscriptionEndDateSelected(date))
    }, [date])
    return (
        <View style={{ flex: 1, }}>
            <View
                style={{
                    borderWidth: 1, borderColor: color, borderRadius: 8, height: 40, marginBottom: 8, flexDirection: 'row',
                    justifyContent: "space-between",
                    elevation: 5,
                    shadowOpacity: 0.5,
                    shadowOffset: { width: 1, height: 1 },
                    shadowRadius: 2,
                    backgroundColor: "white",

                }}>
                <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: "Regular", fontSize: 16, color: Colors.deepBlue100 }}>{day} / {month} / {year}</Text>
                </View>
                <Pressable onPress={modelOpenHandler} style={{
                    backgroundColor: color, flex: 1, justifyContent: "center", alignItems: "center", borderTopEndRadius: 6, borderBottomEndRadius: 6,
                }}>
                    <SvgXml height={25} width={30} xml={calendar} />
                </Pressable>
            </View>
            {modal && status &&
                <View style={{ borderRadius: 8, borderWidth: 1, borderColor: Colors.yellow100, backgroundColor: "white",paddingVertical:8 }}>
                    <DatePicker
                        options={{

                            textHeaderColor: Colors.deepBlue100,
                            textDefaultColor: Colors.deepBlue100,
                            selectedTextColor: '#fff',
                            mainColor: Colors.yellow100,
                            textSecondaryColor: Colors.deepBlue100,
                            borderColor: Colors.yellow100,
                            defaultFont: "Bold",
                            headerFont: "Bold",
                            textFontSize: 8,
                            textHeaderFontSize: 8
                        }}
                        onMonthYearChange={monthChangehandler}
                        minimumDate={today}
                        onDateChange={dateChangeHandler}
                        current={today}
                        selected={today}
                        mode="calendar"
                        minuteInterval={30}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginBottom: 16, marginTop: 0 }}>
                        <TouchableOpacity onPress={cancelHandler}><Text style={styles.text}>Cancel</Text></TouchableOpacity>
                        <TouchableOpacity onPress={selectHandler}><Text style={styles.text}>Select</Text></TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontFamily: "Regular",
        color:Colors.deepBlue100,
        marginHorizontal:16,
    }
})